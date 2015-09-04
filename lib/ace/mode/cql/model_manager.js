define(function(require, exports, module) {
  "use strict";
  var config = require("../../config");
  var net = require("../../lib/net");
  var Model = require("./model").Model
  var modelId = function(id,version){
    return version ?  id+"_"+version: id
  }
  var ModelRetriever = function(baseUrl){
    this.baseUrl = baseUrl;
    if(this.baseUrl[this.baseUrl.length-1] != '/'){
      this.baseUrl += "/"
    }
  }

  ModelRetriever.prototype.loadModel = function(id,version,callback) {
    var self = this;
    
    net.get(this.baseUrl+modelId(id,version)+".json", function(m) {
      if (m) {
        callback(JSON.parse(m));
      }
    });
  };

  function ModelManager(modelResolver){
    this.resolver = modelResolver;
    this.models = {};
    this.loading = {}

  }
  
  ModelManager.prototype.constructor = ModelManager;
 
  ModelManager.prototype.loadModel = function(id,version){
    var self = this;
    var mid = modelId(id,version)
    console.log("has MID " +mid + " "+this.loading[mid])
    if (this.models[mid]){return}
    console.log("AM loading "+id)
    console.log(JSON.stringify(this.loading))
    this.loading[mid] = true
    // set an emtpy model there for the time being will update the values 
    // once we have the json back
    this.models[mid] = new Model({})
    this.resolver.loadModel(id,version,function(model){
      if(self.models[mid]){
        self.models[mid].update(model)
      } else {
        self.models[mid] = new Model(model)
      }
      self.loading[mid] = false
    })
  }

  ModelManager.prototype.getModel = function(id,version) {
    var mid = modelId(id,version);
    // if( !this.models.hasOwnProperty(mid)){
    //    this.loadModel(id,version);
    // }
    return this.models[mid];
  }

  exports.ModelManager = ModelManager
  //singleton instance with default modle retriever. Retriver can be reset to something else as needed
  exports.ModelManagerInstance = new ModelManager(new ModelRetriever("/models/"));
});