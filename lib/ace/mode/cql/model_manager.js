define(function(require, exports, module) {
  "use strict";
  var config = require("../../config");
   function ModelManager(){
    this.models = {};

  }
  ModelManager.prototype.constructor = ModelManager;
  ModelManager.prototype.loadModel = function(model){
    config.loadModule("./models/"+model, function(m) {
      if (m) {
        this.models = eval(m);
      }
    });
  }
  ModelManager.prototype.getModel = function(model) {
    return [];
    if( !this.models[model]  ){
      this.loadModel(model);
    }
    return this.models[model] || [];
  }

  exports.ModelManager = new ModelManager();
});