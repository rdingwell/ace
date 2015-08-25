define(function(require, exports, module) {
  "use strict";
  var config = require("../../config");
  


  var resolvePath = function(path) {
    var parts = path || [];
    if(path instanceof String){
      parts = path.split(".")
    }
    var prop = null;
    if(parts && parts.length > 0){
      prop = this.resolve(parts[0])
      prop = (prop && parts.length > 1)? prop.resolve(parts.slice(1)) : prop
    }
    return prop;
  };

  var resolvePossibles = function(path) {
    var parts = path;
    var props = [];
    if(path instanceof String){
      parts = path.split(".")
    }
    if(parts && parts.length > 1){
      var prop = this.resolve(parts[0]);
      props = (prop)?  prop.resolvePossibles(parts.slice(1)) : []
     }else if(parts && parts.length == 1){
      props =[];
      for(var i in this.properties){
        if(i instanceof String && i.indexOf(parts[0]) == 0){
          props.push({id: i, type: this.resolve(i)})
        }
      }
     }
    return props ? props : null // might want an undefined type here
  };

  var getTypeHierarchy = function(prefix) {
    var hier = [];
    var self = this;
    this.propertyNames().forEach(function(p){
      var selfPrefix = prefix+"."+p
      hier.push(selfPrefix);
      var prop = self.resolve(p)
      if(prop){hier.concat(prop.getTypeHierarchy(selfPrefix))}
    })
    return hier;
  }


  var SimpleType = function(type){
    this.type = type;
    this.resolve = function(){}
    this.resolvePossibles = function(){}
    this.propertyNames = function(){return []}
    this.properties = {}
  }
  SimpleType.prototype.resolvePossibles = resolvePossibles
  SimpleType.prototype.getTypeHierarchy = getTypeHierarchy;
  SimpleType.prototype.resolvePath = resolvePath 

  var ListType = function(type){
    this._type = type;
    this.properties = type.properties 
  }
  
  Object.defineProperty(ListType.prototype, "type", {
    get: function() {
        return this._type ? this._type.type : null;
    }
  });

  ListType.prototype.resolve = function(prop) {
    return this._type.resolve(prop)
  };
  
  ListType.prototype.resolvePossibles = function() {
    return this._type.resolvePossibles()
  };

  ListType.prototype.propertyNames = function() {
    return this._type.propertyNames()
  };

  var CompositeType = function(type, properties) {
    this.type = type;
    this.properties = properties;
  }


  CompositeType.prototype.resolve = function(prop) {
    return this.properties[prop]
  };

  CompositeType.prototype.propertyNames = function() {
    var names = [];
     for(var i in this.properties){
      names.push(i)
     }
     return names;
  };

  CompositeType.prototype.resolvePossibles = resolvePossibles
  CompositeType.prototype.getTypeHierarchy = getTypeHierarchy;
  CompositeType.prototype.resolvePath = resolvePath 


  var SystemTypes = function(){
    this.types = {}
    this.types["System.Boolean"] =  this.Boolean = new SimpleType("System.Boolean");
    this.types["System.Integer"] =this.Integer =new SimpleType("System.Integer")
    this.types["System.Decimal"] =this.Decimal = new SimpleType("System.Decimal")
    this.types["System.String"] = this.String = new SimpleType("System.String")
    this.types["System.DateTime"] =this.DateTime = new SimpleType("System.DateTime")
    this.types["System.Time"] =this.Time = new SimpleType("System.Time")
    this.types["System.Any"] =this.Any = new SimpleType("System.Any")
    this.types["System.Interval"] =this.Interval = new SimpleType("System.Interval")
    this.types["System.Null"] =this.NULL = new SimpleType("System.Null")
    this.types["System.QuantityLiteral"] =this.QuantityLiteral = new CompositeType("System.QuanityLiteral",
                                                  {"unit" : this.String, 
                                                  "value" : this.Decimal});
    this.types["System.Code"] =this.Code = new CompositeType("System.Code", 
                                {"code" : this.String,
                                "display" : this.String,
                                "system" : this.String,
                                "version" : this.String})

    this.types["System.Concept"] =this.Concept = new CompositeType("System.Concept", 
                                  {"display":this.String,
                                   "codes": new ListType(this.Code)})


  }
  
  SystemTypes.prototype.resolve = function(type) {
      if(!type.indexOf("System") == 0){
        type = "System."+type
      }
      return this.types[type]
  };

  var system_types = new SystemTypes()



  var Resolver = function(context,path){
    this.path = path;
    this.parts = (this.path instanceof String)? this.path.split(".") : this.path
    this.context= context;
    this.observers = [];
  }

  Resolver.prototype.resolve = function() {
    var prop = null;
    if(this.parts){
      var p = this.context.resolve(this.parts[0])
      if (p && this.parts.length == 1){prop = p}
      if(p && this.parts.length > 1){prop = p.resolve(this.parts.slice(1))}
    }
   return prop;
   };



   var ResolverType = function(resolver){
    this.resolver = resolver;
  }

  ResolverType.prototype._resolve = function(){
    this._type = this._type || this.resolver.resolve()
    return this._type
  }

  Object.defineProperty(ResolverType.prototype, "type", {
    get: function() {
        this._resolve()
        return this._type ? this._type.type : null;
    }
  });

  Object.defineProperty(ResolverType.prototype, "properties", {
    get: function() {
        this._resolve()
        return this._type ? this._type.properties : null;
    }
  });

  ResolverType.prototype.resolve = function(path) {
     if(this._resolve()){
      return this._type.resolve(path)
     }
  };
  
  ResolverType.prototype.propertyNames = function() {
    if(this._resolve()){
      return this._type.propertyNames()
    }
  };

  ResolverType.prototype.resolvePossibles = resolvePossibles
  ResolverType.prototype.getTypeHierarchy = getTypeHierarchy;
  ResolverType.prototype.resolvePath = resolvePath 

  var Model = function(model){
    this.update(model)
  }

  Model.prototype.update = function(model){
    this.name = model.name;
    this.version = model.version;
    this.patientClassName = model.patientClassName
    this.model = model;
    this.types = {};
    var self = this;
    for(var x in (model.types || {})){
      var v = model.types[x]
      this.types[v.type] = new ModelType(v,this)
    }
  }

  Model.prototype.resolve = function(type) {
    // first is it a list type list<TYPE>
    var listType = (/list\<(.*)\>/).exec(type)
    if(listType){
      var t = this.resolve(listType[1])
      return (t) ? new ListType(t) : null;
    } // is it a ssystem type that needs to be resolved
    else if(type.indexOf("System.") == 0){
      return system_types.resolve(type)
    }// is it qualified with the model name ?
    else{
      var t = this.types[type] 
      // if we didnt find it maybe the type passed in is not fully qualified but it is mapped that way in the model
      if(!t && type.indexOf(this.name) != 0){
        t =  (t) ? t : this.types[this.name+"."+type] 
        //maybe its an unqulified system type .  Dont know if that is even possible
        t = (t)? t : system_types.resolve("System."+type)
       } 
       return t;
    }

  };


  Model.prototype.retrevables = function(){
    var ret = []
    for(var t in this.types){
       var type = this.types[t]
      if(type.retrievable){
        ret.push(type)
      }
    }
    return ret;
  }

  Model.prototype.typeNames = function(){
    var self = this;
    return this.retrevables().map(function(t){
      return t.type.substring(self.name.length+1)
    })
  }
  
 Model.prototype.fullyQualifiedTypeNames = function(){
    return this.retrevables().map(function(t){
      return t.type;
    })
  }
  var ModelType = function(json, model){
    this.model = model;
    this.type = json.type;
    this.retrievable = json.retrievable
    this.label = json.label
    this.properties = json.properties;
    this.baseType = json.baseType
  }

  ModelType.prototype.getBaseType = function() {
    if(this.baseType && !this._baseType){
      this._baseType = this.model.resolve(this.baseType)
    }
    return this._baseType
  };
  ModelType.prototype.resolve = function(prop) {
    var prop = this.properties[prop];
    if(!prop && this.getBaseType() ){prop = this.getBaseType().resolve(prop)}
    return prop ? this.model.resolve(prop.type) : null
  };
  
  ModelType.prototype.propertyNames = function() {
     var names = [];
     for(var i in this.properties){
      names.push(i)
     }
     return this.getBaseType() ? names.concat(this.getBaseType().propertyNames()) : names
  };

  ModelType.prototype.resolvePossibles = resolvePossibles
  ModelType.prototype.getTypeHierarchy = getTypeHierarchy;
  ModelType.prototype.resolvePath = resolvePath 

 exports.System = system_types 
 exports.ModelType = ModelType
 exports.Model = Model 
 exports.SimpleType = SimpleType 
 exports.CompositeType = CompositeType 
 exports.ListType = ListType 
 exports.ResolverType = ResolverType

});