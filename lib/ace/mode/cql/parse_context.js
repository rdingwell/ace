define(function(require, exports, module) {
  "use strict";

  var Resolver = function(context,path){
    this.path = path;
    this.parts = (this.path instanceof Array)?   this.path : this.path.split(".")
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
  
   exports.Resolver = Resolver;
   exports.Context = Context;
});