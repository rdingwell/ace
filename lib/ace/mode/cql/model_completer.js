define(function(require, exports, module) {
"use strict";
 var ModelManager = require('./model_manager').ModelManager;

  var cqlModelCompleter = {
    getCompletions: function(editor, session, pos, prefix, callback) {
      var cqlModel = session.cqlModel;
      var completions = [];
      if (!cqlModel || !cqlModel.data) {return }
      if (cqlModel.data.valuesets){
         callback(null, cqlModel.data.valuesets.map(function(m) {
          return {name: m, value: m, score: 0, meta: "Valueset"}
         }));
      }
      if ( cqlModel.data.models) {
        for( var i in cqlModel.data.models){
          callback(null, ModelManager.getModel(cqlModel.data.models[i]));
         }
      }
    }
  }
  exports.ModelCompleter = cqlModelCompleter;
});