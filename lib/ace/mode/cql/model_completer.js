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
  

  var WrappedTokenizer = function(session, row,column){
    this.session = session;
    this.start_row = row;
    this.start_column = column 
    this.token_iterator = new TokenIterator(session, row, column)
  }

  WrappedTokenizer.prototype.reset = function(){
    this.token_iterator = new TokenIterator(this.session, this.start_row, this.start_column)
  }

  WrappedTokenizer.prototype.seek = function(row,colum){
     this.token_iterator = new TokenIterator(session, pos.row, pos.column)
  }  

  WrappedTokenizer.prototype.stepBackward = function(){
    this.token_iterator.stepBackward()
  }  

  WrappedTokenizer.prototype.stepForward = function(){
    this.token_iterator.stepForward()
  }  


  WrappedTokenizer.prototype.getCurrentToken = function() {
    return this.token_iterator.getCurrentToken();
  };

  WrappedTokenizer.prototype.getCurrentTokenPosition = function() {
    return this.token_iterator.getCurrentTokenPosition();
  };

  WrappedTokenizer.prototype.nextToken = function() {
    this.eatTextTokens(true,true)
    return this.token_iterator.getCurrentToken();
  };

  WrappedTokenizer.prototype.nextTokens = function(number) {
     return this.getTokens(true,number)
  };
  WrappedTokenizer.prototype.previousToken = function() {
    this.eatTextTokens(false,true)
    return this.token_iterator.getCurrentToken();
  };
  WrappedTokenizer.prototype.previousTokens = function(number) {
    return this.getTokens(false,number)
  };
  WrappedTokenizer.prototype.peekForward = function(number) {
     return this.peek(true, number)
  };

  WrappedTokenizer.prototype.peekBackward = function(number) {
    return this.peek(false, number)
  };

  WrappedTokenizer.prototype.eatTextTokens= function(forward, initialStep){
    var steps = 0;
    if(initialStep){
      (forward)?this.stepForward() : this.stepBackward();
      steps++;
    }
    var tok = this.getCurrentToken()
    while(tok.type == "text"){
       (forward)?this.stepForward() : this.stepBackward();
       tok = this.getCurrentToken()
       steps++;
    }
    return steps;
  }

  WrappedTokenizer.prototype.peek = function(forward, number){
      var steps = 0;
      for(var i =0;i<number;i++){
        steps += this.eatTextTokens(forward, true)
     }
     var token = this.getCurrentToken();
     for(var i = 0; i<steps; i++){
      (forward) ? this.stepBackward() : this.stepForward()
     }
     return token;
  }

  WrappedTokenizer.prototype.getTokens = function(forward, number){
    var tokens = [];
    var steps = 0;
    for(var i =0;i<number;i++){
      steps += this.eatTextTokens(forward, true)
      tokens.push(this.getCurrentToken());
    }
    return tokens;
  }



  var parseCompleter = {
    getCompletions: function(editor, session, pos, prefix, callback) {
      try{
       var aceToken = session.getTokenAt(pos.row,pos.column)
      if(!aceToken) {return}
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
      console.log("parseTime " + (new Date() - d))
      var rule = listener.getRuleAt(position);

      var completions = [];
      if(rule ){
        var antlrCtx = rule.ruleContext ;
        var context = rule.context; 
        var type = (antlrCtx.__type ) ? antlrCtx.__type : antlrCtx.parentCtx.__type
        if(!type && antlrCtx.parentCtx.expressionTerm){
          type = antlrCtx.parentCtx.expressionTerm().__type
        }
        if(accessor || !spaceAtEnd){
          if(type){
             callback(null, type.propertyNames().map(function(t){
                return {name: t, value: t, score: 10000, meta: type.type}
            }));
           }else{
            // what is it and can we figure it out.
           }
        }else if(spaceAtEnd){
          // lets do nothing right now
        }

        // rule.context.resolve(rule.ruleContext.__identifier).propertyNames();
        // if(rule.ruleContext.exception){
        //   //can we handle this exception somehow
        // }
        // if(rule.ruleContext instanceof cqlParser.IdentifierContext){
        //   // what the parent? is then figure out what needs to happend
        //   //get identifier completetions
        // }
        if(completions.length > 0){

        }
      }
    }catch(e){
      console.log(e)
    }
    }
  }


  // var eatTextTokens= function(iter,forward, initialStep){
  //   var steps = 0;
  //   if(initialStep){
  //     (forward)?iter.stepForward() : iter.stepBackward();
  //     steps++;
  //   }
  //   var tok = iter.getCurrentToken()
  //   while(tok.type == "text"){
  //      (forward)?iter.stepForward() : iter.stepBackward();
  //      tok = iter.getCurrentToken()
  //      steps++;
  //   }
  //   return steps;
  // }

  // var getPrevious = function(iter){
  //   eatTextTokens(iter,false, true)
  //   return iter.getCurrentToken();
  // }

  // var getNext = function(iter){
  //   eatTextTokens(iter,true, true)
  //   return iter.getCurrentToken();
  // }

  // var seekTo = function(iter, pos){
  //   var currentPos = iter.getCurrentTokenPosition()
  //   while(currentPos.row != pos.row && currentPos.column != pos.column){
  //     if(currentPos.row < pos.row ){ iter.stepForward(); currentPos = iter.getCurrentTokenPosition();}
  //     if(currentPos.row > pos.row ){ iter.stepBackward(); currentPos = iter.getCurrentTokenPosition();}
  //     if(currentPos.row == pos.row && currentPos.column < pos.column ){ iter.stepForward(); currentPos = iter.getCurrentTokenPosition();}
  //     if(currentPos.row == pos.row && currentPos.column > pos.column ){ iter.stepBackward(); currentPos = iter.getCurrentTokenPosition();}
  //   }

  // }

  // var getTokens = function(iter,forward, number){
  //   var tokens = [];
  //   var steps = 0;
  //   for(var i =0;i<number;i++){
  //     steps += eatTextTokens(iter,forward, true)
  //     tokens.push(iter.getCurrentToken());
  //   }
  //   return tokens;
  // }

  // var peek = function(iter, forward, number){
  //     var steps = 0;
  //     for(var i =0;i<number;i++){
  //       steps += eatTextTokens(iter,forward, true)
  //    }
  //    var token = iter.getCurrentToken();
  //    for(var i = 0; i<steps; i++){
  //     (forward) ? iter.stepBackward() : iter.stepForward()
  //    }
  //    return token;
  // }

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
       
        callback(null, vsets.map(function(t){
            return {name: t, value: t, score: 500, meta: "valueset" }
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
             return {name: t, value: t, score: 10000, meta: type.type }
          }));
        }
      }
    }
  }
  var modelCompletions = {
     getCompletions: function(editor, session, pos, prefix, callback) {
        var modelRegex = new RegExp(/using\s+([_a-zA-Z][_a-zA-Z0-9]*)/g)
        var value = session.getDocument().getValue();
        var models = [];
        var match = null
        var typeNames = [];
        while((match = modelRegex.exec(value))){
            models.push(match[1])
        }
       callback(null, models.map(function(t){
          return {name: t, value: t, score: 1000, meta: "Model" }
        }));

        var tokenizer = new WrappedTokenizer(session, pos.row, pos.column)
        var initialToken = tokenizer.getCurrentToken();
        tokenizer.eatTextTokens(false,false)
        var token = tokenizer.getCurrentToken()
        var hasDot = false
        var model = null;
        if(token.type == "keyword.operator" && token.value=="."){
          var token = tokenizer.previousToken();
          hasDot = true;
        }
        if(token.type == "model" || token.type == "identifier"){
           var model = (hasDot) ? token.value+"." : token.value 
           var parts = model.split(".")
           var m = null;
           if(parts.length == 1){ 
             m = ModelManager.getModel(model)
             if(!m && models.length == 1){
              m = ModelManager.getModel(models[0])
             }
            }
           else{ 
            m = ModelManager.getModel(parts[0])
            }
           if(m){ 
              var types =(models.length>1 && !hasDot)? m.fullyQualifiedTypeNames() : m.typeNames()
              types.sort()
              callback(null, types.map(function(t){
               return {name: t, value: t, score: 1000, meta: m.model.name }
            }));
          }
        }
        else{
          if(models.length == 1){
            var m = ModelManager.getModel(models[0])
            if(m){ 
              callback(null, m.typeNames().sort().map(function(t){
               return {name: t, value: t, score: 100, meta: m.model.name }
              }));
            }
           }
          for(var i = 0; i<  models.length ; i ++){
            var m = ModelManager.getModel(models[i])
           if(m){ 
              callback(null, m.fullyQualifiedTypeNames().sort().map(function(t){
               return {name: t, value: t, score: 100, meta: m.model.name }
              }));
          }
        }
     }
  }
}

  var retrieveCompleter = {
    getCompletions: function(editor, session, pos, prefix, callback) {
        var tokenizer = new WrappedTokenizer(session, pos.row, pos.column)
        var initialToken = tokenizer.getCurrentToken();
        tokenizer.eatTextTokens(false,false)
        var token = tokenizer.getCurrentToken()
        var model = null;

        //when in a retrieve it may be that only a single letter of the model is filled out this toekn will then be an
        //identifier and not a model so we need to see if the previous token is a retreive.start and then if the token before 
        // that is not a ) and not an identifier
       if(token.type == "identifier" && tokenizer.peekBackward(1).type=="retrieve.start" 
                                     && tokenizer.peekBackward(2).value!=")" && tokenizer.peekBackward(2).type!="identifier"){
         // modelCompletions.getCompletions(editor, session, pos, prefix, callback, tokenizer.previousToken().value)
          return true;
       }
       // If you  have something =liek this [Quick.] the . comes across as a keyword.operator not as part of the model
       if(token.type == "keyword.operator" && token.value == "." && tokenizer.peekBackward(1).type=="model"){
         // modelCompletions.getCompletions(editor, session, pos, prefix, callback, tokenizer.previousToken().value)
          return true;
       }
       // if we have empty brackets look to see what the previous 
       if(token.type == "emptyBrackets"){
          var previous = tokenizer.previousToken()
          // if the type is  == ) or identifier then return false
          if(previous.value == ")" || previous.type == "identifier" || (previous.type == "keyword" && previous.value =="Interval")){
            return false;
          }else{
           // modelCompletions.getCompletions(editor, session, pos, prefix, callback)
            return true;
          }

       }
       else if(token.type == "quotedIdentifier" && initialToken.type != "text"){
          var previous = tokenizer.previousToken()
          if(previous.type == "colon" || previous.value == "in"){
            //valuesetCompletions.getCompletions(editor, session, pos, prefix, callback, token.value)
            return true;
          }
          // try valueset info  not sure how good this will be
       }
       else if(token.type == "path"){
         var model = tokenizer.peekBackward(2) // peek(tokenizer,false,2)
         if(initialToken == token && model.type == "model"){
            pathCompletions.getCompletions(editor, session, pos, prefix, callback,model.value)
            return true;
         }
         if(initialToken.type == "text"){
          var next = tokenizer.nextToken()
          if(next.type== "quotedIdentifier"){
              // put in way up at the top
              return true;
          }else if(netx.type == "bracket.rbracket"){
            //valuesetCompletions.getCompletions(editor, session, pos, prefix, callback, token.value)
            return true;
          }

         } 

        }
       else if(token.type == "colon"){
          var model = tokenizer.peekBackward(1) // peek(tokenizer,false, 1)
          var next = tokenizer.nextToken() // getNext(tokenizer);
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
       else if(token.type == "keyword" && token.value == "in" && tokenizer.peekForward(1).type != "quotedIdentifier"){
          valuesetCompletions.getCompletions(editor, session, pos, prefix, callback,tokenizer.peekForward(1).value)
          return true;
       }
       return false;
      }
    }

  var cqlModelCompleter = {
    getCompletions: function(editor, session, pos, prefix, callback) {
      modelCompletions.getCompletions(editor, session, pos, prefix, callback)
      valuesetCompletions.getCompletions(editor, session, pos, prefix, callback)

      var aceToken = session.getTokenAt(pos.row,pos.column)
      if(!aceToken) {return}
      
      //dealing with retreive completions first because they are the biggest pain to figure out
      //if we have determined that it was a retreive completion then there is nothing else to 
      //do here and we can move on.
      if(retrieveCompleter.getCompletions(editor, session, pos, prefix, callback)){
        // this means the we have determined we are in a retrieve and that it has been handeled
        //by the completer -- so we dont have to parse the documnet to firegure out where we are 
        // and try and grab context information
        return
      }

      parseCompleter.getCompletions(editor, session, pos, prefix, callback)
    }
  }
  exports.ModelCompleter = cqlModelCompleter;
});