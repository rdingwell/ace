define(function(require, exports, module) {
  "use strict";

  var Resolver = function(context,path){
    this.path = path;
    this.parts = (this.path instanceof String)? this.path.split(".") : this.path
    this.context= context;
    this.observers = [];
  }

  Resolver.prototype.resolve = function() {
    var prop = null;
    if(parts){
      var p = this.context.resolve(parts[0])
      if(p){prop = p.resolve(parts.slice(1))}
    }
   return prop;
   };


  var Context = function(start,stop,parent){
    this.start = start;
    this.stop;
    this.parent = parent;
    this.varibles = {};
    this.children = [];
    this.type = null;
    this.observers = {}

  }

  Context.prototype.createChildContext = function(start,end) {
      var ctx = new Context(start,end,this);
      this.children.push(ctx);
      return ctx;
  };
  
  Context.prototype.getVaribleHierarchy = function(priority) {
    priority = priority || 10 
    if(priority < 1){
      priority = 1
    }
    var hier = this.parent ? this.parent.getVaribleHierarchy(priority - 1) : []
    for(var x in this.varibles){
      hier.push({id: x, type: this.varibles[x]})
    }
    return hier;
  };
  Context.prototype.set = function(id,type) {
    this.varibles[id] = type;
  };

  Context.prototype.resolve = function(id) {
    var prop = this.varibles[id];
    if(!prop && this.parent){prop= this.parent.resolve(id)}
    return  prop;  
  }


  var SimpleType = function(type){
    this.type = type;
    this.resolve = function(){return null}
    this.resolvePossibles = function(){return []}
  }


  var CompositeType = function(type, properties) {
    this.type = type;
    this.properties = properties;
  }


  CompositeType.prototype.resolve = function(path) {
    var parts = path;
    var prop;
    if(path instanceof String){
      parts = path.split(".")
    }
    if(parts){
      var prop = this.properties[parts[i]];
      if(prop){
        prop =  prop.resolve(parts.slice(1))
      }
    }
    return prop ? prop : null // might want an undefined type here
  };

  CompositeType.prototype.resolvePossibles = function(path) {
    var parts = path;
    var props;
    if(path instanceof String){
      parts = path.split(".")
    }
    if(parts){
      if(parts.length > 1){
      var prop = this.properties[parts[i]];
      if(prop){
        props =  prop.resolvePossibles(parts.slice(1))
      }
     }else{
      props =[];
      for(var i in this.properties){
        if(i instanceof String && i.indexOf(path[0]) == 0){
          props.push({id: i, type: this.properties[i]})
        }
      }
     }
    }
    return props ? props : null // might want an undefined type here
  };


 
  var ListType = function(type){
    this.type = "List"
    this._type = type;
  }

  ListType.prototype.resolve = function(path) {
    this._type.resolve(path)
  };
  
  ListType.prototype.resolvePossibles = function(path) {
    this._type.resolve(path)
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
      this._type.resolve
     }
  };
  
  ResolverType.prototype.resolvePossibles = function(path) {
    if(this._resolve()){
      this._type.resolve
    }
  };
   exports.ResolverType = ResolverType;
   exports.ListType = ListType;
   exports.Resolver = Resolver;
   exports.SimpleType = SimpleType;
   exports.CompositeType = CompositeType;
   exports.Context = Context;
});