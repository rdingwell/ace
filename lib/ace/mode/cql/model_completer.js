define(function(require, exports, module) {
"use strict";
  var ModelManager = require('./model_manager').ModelManagerInstance;
  var snippetManager = require("../../snippets").snippetManager;
  var cqlLexer = require("./cqlLexer").cqlLexer;
  var cqlParser = require("./cqlParser").cqlParser;
  var cqlListener = require("./cqlListener").cqlListener;
  var InputStream = require("./antlr4/InputStream").InputStream;
  var CommonTokenStream = require("./antlr4/CommonTokenStream").CommonTokenStream;
  var TokenIterator = require("../../token_iterator").TokenIterator
 

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


  var eatTextTokens= function(iter,forward, initialStep){
    var steps = 0;
    if(initialStep){
      (forward)?iter.stepForward() : iter.stepBackward();
      steps++;
    }
    var tok = iter.getCurrentToken()
    while(tok.type == "text"){
       (forward)?iter.stepForward() : iter.stepBackward();
       tok = iter.getCurrentToken()
       steps++;
    }
    return steps;
  }

  var getPrevious = function(iter){
    eatTextTokens(iter,false, true)
    return iter.getCurrentToken();
  }

  var getNext = function(iter){
    eatTextTokens(iter,true, true)
    return iter.getCurrentToken();
  }

  var seekTo = function(iter, pos){
    var currentPos = iter.getCurrentTokenPosition()
    while(currentPos.row != pos.row && currentPos.column != pos.column){
      if(currentPos.row < pos.row ){ iter.stepForward(); currentPos = iter.getCurrentTokenPosition();}
      if(currentPos.row > pos.row ){ iter.stepBackward(); currentPos = iter.getCurrentTokenPosition();}
      if(currentPos.row == pos.row && currentPos.column < pos.column ){ iter.stepForward(); currentPos = iter.getCurrentTokenPosition();}
      if(currentPos.row == pos.row && currentPos.column > pos.column ){ iter.stepBackward(); currentPos = iter.getCurrentTokenPosition();}
    }

  }

  var getTokens = function(iter,forward, number){
    var tokens = [];
    var steps = 0;
    for(var i =0;i<number;i++){
      steps += eatTextTokens(iter,forward, true)
      tokens.push(iter.getCurrentToken());
    }
    return tokens;
  }

  var peek = function(iter, forward, number){
      var steps = 0;
      for(var i =0;i<number;i++){
        steps += eatTextTokens(iter,forward, true)
     }
     var token = iter.getCurrentToken();
     for(var i = 0; i<steps; i++){
      (forward) ? iter.setpBackward() : iter.stepForward()
     }
     return token;
  }
  var valuesetCompletions = {
     getCompletions: function(editor, session, pos, prefix, callback, tval ) {
        var vsRegex = new RegExp(/valueset\s+(\"[_a-zA-Z][_a-zA-Z0-9\s]*\")/g)
        var value = session.getDocument().getValue();
        var vsets = [];
        var match = null
        var typeNames = [];
        while((match = vsRegex.exec(value))){
            vsets.push(match[1])
        }
        var stripR = (tval[tval.length-1] == "\"")
        callback(null, vsets.map(function(t){
            var v = t.substring(1)
            if(stripR){v=v.substring(0,v.length-1)}
            return {name: t, value: v, score: 100, meta: "valueset" }
        }));
     }
  }
  var pathCompletions = {
    getCompletions: function(editor, session, pos, prefix, callback, model) {
        var modelRegex = new RegExp(/using\s+([_a-zA-Z][_a-zA-Z0-9]*)/g)
        var value = session.doc.getValue();
        var models = [];
        var match = null
        var typeNames = [];
        while((match = modelRegex.exec(value))){
            models.push(match[1])
        }

      if(model){
         var parts = model.split(".")
         var m = null
         var type = null 
         if(parts.length == 1 && models.length == 1){
            m= ModelManager.getModel(models[0])
            if(m){ type = m.resolve(parts[0])}
          }else {
            m= ModelManager.getModel(parts[0])
            if(m){ type = m.resolve(parts[1])}
          } 
          if(type){ 
            callback(null, type.propertyNames().map(function(t){
             return {name: t, value: t, score: 100, meta: type.type }
          }));
        }
      }
    }
  }
  var modelCompletions = {
     getCompletions: function(editor, session, pos, prefix, callback, model) {
        var modelRegex = new RegExp(/using\s+([_a-zA-Z][_a-zA-Z0-9]*)/g)
        var value = session.getDocument().getValue();
        var models = [];
        var match = null
        var typeNames = [];
        while((match = modelRegex.exec(value))){
            models.push(match[1])
        }
        if(model){
           var m = ModelManager.getModel(model)
            if(m){ 
              var types =(models.length>1)? m.fullyQualifiedTypeNames() : m.typeNames()
              callback(null, types.map(function(t){
               return {name: t, value: t, score: 100, meta: m.model.name }
            }));
          }
        }
        else{
          if(models.length == 1){
            var m = ModelManager.getModel(models[0])
            if(m){ 
              callback(null, m.typeNames().map(function(t){
               return {name: t, value: t, score: 100, meta: m.model.name }
              }));
            }
           }
          for(var i = 0; i<  models.length ; i ++){
            var m = ModelManager.getModel(models[i])
           if(m){ 
              callback(null, m.fullyQualifiedTypeNames().map(function(t){
               return {name: t, value: t, score: 100, meta: m.model.name }
              }));
          }
        }
     }
  }
}

  var retrieveCompleter = {
    getCompletions: function(editor, session, pos, prefix, callback) {
        var tokenizer = new TokenIterator(session, pos.row, pos.column)
        var initialToken = tokenizer.getCurrentToken();
        eatTextTokens(tokenizer,false,false)
        var token = tokenizer.getCurrentToken()
        var model = null;

       // if we have empty brackets look to see what the previous 
       if(token.type == "emptyBrackets"){
          var previous = getPrevious(tokenizer)
          // if the type is  == ) or identifier then return false
          if(previous.value == ")" || previous.type == "identifier" || (previous.type == "keyword" && previous.value =="Interval")){
            return false;
          }else{
            modelCompletions.getCompletions(editor, session, pos, prefix, callback)
            return true;
          }

       }
       else if(token.type == "quotedIdentifier" ){
          var previous = getPrevious(tokenizer);
          if(previous.type == "colon" || previous.value == "in"){
            valuesetCompletions.getCompletions(editor, session, pos, prefix, callback, token.value)
            return true;
          }
          // try valueset info  not sure how good this will be
       }
       else if(token.type == "path"){
         var model = peek(tokenizer,false,2)
         if(initialToken == token && model.type == "model"){
            pathCompletions.getCompletions(editor, session, pos, prefix, callback,model.value)
            return true;
         }
         if(initialToken.type == "text"){
          var next = getNext(tokenizer);
          if(next.type== "quotedIdentifier"){
              // put in way up at the top
              return true;
          }else if(netx.type == "bracket.rbracket"){
            valuesetCompletions.getCompletions(editor, session, pos, prefix, callback, token.value)
            return true;
          }

         } 

        }
       else if(token.type == "colon"){
          var model = peek(tokenizer,false, 1)
          var next = getNext(tokenizer);
          if(next.type == "bracket.rbracket"){
            valuesetCompletions.getCompletions(editor, session, pos, prefix, callback, token.value)
            pathCompletions.getCompletions(editor, session, pos, prefix, callback,model.value)
            return true;
            //show path info
            //show vs info
          }else if(next.type == "quotedIdentifier" || (next.type == "keyword" && next.value =="in")){
            //show path completions
            pathCompletions.getCompletions(editor, session, pos, prefix, callback, model.value)
            return true;
          }
       } 
       else if(token.type == "model"){
          // show model completions
          modelCompletions.getCompletions(editor, session, pos, prefix, callback, token.value)
          return true;
       }
       else if(token.type == "retrieve.start"){
          // dont do anything , if this was an empty [] it would be taken care of already by a different path
          return true;
       }
       else if(token.type == "keyword" && token.value == "in" && peek(tokenizer, true, 1).type != "quotedIdentifier"){
          valuesetCompletions.getCompletions(editor, session, pos, prefix, callback,peek(tokenizer, true, 1).value)
          return true;
       }
       return false;
      }
    }

  var cqlModelCompleter = {
    getCompletions: function(editor, session, pos, prefix, callback) {

      var aceToken = session.getTokenAt(pos.row,pos.column)
      if(!aceToken) {return}
     
      //dealing with retreive completions first because they are the biggest pain to figure out
      //if we have determined that it was a retreive completion then there is nothing else to 
      //do here and we can move on.
      if(retrieveCompleter.getCompletions(editor, session, pos, prefix, callback)){
        return
      }
      


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
      var r = listener.getRuleAt(position);
      

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