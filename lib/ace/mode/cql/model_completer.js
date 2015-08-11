define(function(require, exports, module) {
"use strict";
  var ModelManager = require('./model_manager').ModelManager;
  var snippetManager = require("../../snippets").snippetManager;
  var cqlLexer = require("./cqlLexer").cqlLexer;
  var cqlParser = require("./cqlParser").cqlParser;
  var cqlListener = require("./cqlListener").cqlListener;
  var InputStream = require("./antlr4/InputStream").InputStream;
  var CommonTokenStream = require("./antlr4/CommonTokenStream").CommonTokenStream;

  var isRetrieve = function(session, pos){
  var row = pos.row;
  var column = pos.column
  var prev = null;
  var token = null;
  while( (token = session.getTokenAt(row,column)) ){
    if(prev && prev.column == 0) {return false}
    prev = token;  
    switch(token.type) {
      case "paren.lparen":
        return true;
        break;
      case "text" :
        if (token.value && token.value.trim && token.value.trim() == "" ){
          column = token.start;
        }else {
          return false;
        }
        break;  
      case "identifier":
        column = token.start 
        break;
      default:
        return false   
    }
  }
 }

  var completion = {
    getCompletions: function(editor, session, pos, prefix, callback) {
      var index = session.getDocument().positionToIndex(pos,0)
      var context = session.cqlModel.getContext(index);
      // is it in a retrieve ? is it a model or class identifier, path id or valueset id
      //is it an identifier , qualified identifier, or modelIdenifier?

    }
  }
  var cqlModelCompleter = {
    getCompletions: function(editor, session, pos, prefix, callback) {
       var chars = new InputStream(session.getDocument().getValue());
        var lexer = new cqlLexer(chars);
        var tokens  = new CommonTokenStream(lexer);
        var parser = new cqlParser(tokens);
        var listener = new cqlListener();
        parser.addParseListener(listener);
        parser.buildParseTrees = true;
        var tree = parser.logic();
        console.log(listener.getRuleAt(session.getDocument().positionToIndex(pos,0)));
      var cqlModel = session.cqlModel;
      var completions = [];
      if (!cqlModel || !cqlModel.data) {return }
      if (cqlModel.data.valuesets){
         callback(null, cqlModel.data.valuesets.map(function(m) {
          return {name: m, value: m, score: 0, meta: "Valueset"}
         }));
      }
      if ( cqlModel.data.models && isRetrieve(session,pos)) {
        for( var i in cqlModel.data.models){
          var mod = ModelManager.getModel(cqlModel.data.models[i]);
          if(mod && mod.types){
            callback(null, mod.types.map(function(m){
               return {name: cqlModel.data.models[i]+"."+m, value: cqlModel.data.models[i]+"."+m, score: 10, meta: cqlModel.data.models[i]}
            }));
          }
         }
      }
    }
  }
  exports.ModelCompleter = cqlModelCompleter;
});