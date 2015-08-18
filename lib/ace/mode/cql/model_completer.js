define(function(require, exports, module) {
"use strict";
  var ModelManager = require('./model_manager').ModelManagerInstance;
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
      var chars = new InputStream(session.getDocument().getValue());
      var lexer = new cqlLexer(chars);
      var tokens  = new CommonTokenStream(lexer);
      var parser = new cqlParser(tokens);
      var listener = new cqlListener();
      parser.addParseListener(listener);
      parser.buildParseTrees = true;
      var tree = parser.logic();
      var index = session.getDocument().positionToIndex(pos,0);
      var rule =listener.getRuleAt(index);
      if(rule){
        if(rule.ruleContext.exception){
          //can we handle this exception somehow
        }
        if(rule.ruleContext instanceof cqlParser.IdentifierContext){
          // what the parent? is then figure out what needs to happend
          //get identifier completetions
        }

      }
      // is it in a retrieve ? is it a model or class identifier, path id or valueset id
        //is it an identifier , qualified identifier, or modelIdenifier?

    }
  }
  var cqlModelCompleter = {
    getCompletions: function(editor, session, pos, prefix, callback) {
      var aceToken = session.getTokenAt(pos.row,pos.column)
      var _dVal = session.getDocument().getValue();
      var dVal = _dVal;
      var position = session.getDocument().positionToIndex(pos,0);
      var accessor = false
      // drop the dot -- this is basically making the assumption that someone is typeing away then 
      //hits . followed by launching the completion util.  an ending . will break the syntax in antlr 
      // so whatever inner expression we are in will probably be lost.  This effects what can be found 
      //for things like includedQueryExpressions

      if(aceToken.value=="."){
        accessor = true;
        dVal = _dVal.substring(0,position-1) + _dVal.substring(position)
        position--;
      }
      position--;
      var spaceAtEnd = false;
      // if there is white space bring the position back to the next empty character. if we are in the middle
      // of white space it will probably not be in the expression we think it should be as far as antlr thinks
      while(position >0 && dVal[position] == ' ' ){
        position--;
        spaceAtEnd = true;
      }

      var chars = new InputStream(dVal);
      var lexer = new cqlLexer(chars);
      var tokens  = new CommonTokenStream(lexer);
      var parser = new cqlParser(tokens);
      var listener = new cqlListener();
      parser.addParseListener(listener);
      parser.buildParseTrees = true;
      var d = new Date()
      var tree = parser.logic();
      console.log(new Date() - d)
      console.log(listener.getRuleAt(position));
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