define(function(require, exports, module) {
"use strict";
 var ModelManager = require('./model_manager');

  var cqlModelCompleter = {
    getCompletions: function(editor, session, pos, prefix, callback) {
      var doc = session.getDocument();
      if (doc.cqlModel && doc.cqlModel.models) {
        doc.cqlModel.models.each(function(m) {
          callback(null, ModelManager.getModel(m));
        });
      }
    }
  }
  exports.ModelCompleter = cqlModelCompleter;
});