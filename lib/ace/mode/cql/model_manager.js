define(function(require, exports, module) {
  "use strict";
  var config = require("../../config");
  var net = require("../../lib/net");
   function ModelManager(){
    this.models = {};

  }
  ModelManager.prototype.constructor = ModelManager;
  ModelManager.prototype.loadModel = function(model){
    var self = this;
    net.get("./models/"+model+".json", function(m) {
      if (m) {
        self.models[model] = JSON.parse(m);
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