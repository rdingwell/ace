define(function(require, exports, module) {
  "use strict";
  var config = require("../../config");
  var net = require("../../lib/net");
  var cqlLexer = require("./cqlLexer").cqlLexer;
  var cqlParser = require("./cqlParser").cqlParser;
  var cqlListener = require("./cqlListener").cqlListener;
  var InputStream = require("./antlr4/InputStream").InputStream;
  var CommonTokenStream = require("./antlr4/CommonTokenStream").CommonTokenStream;
  var TokenIterator = require("../../token_iterator").TokenIterator
  
  
  var libId = function(id,version){
    return version ?  id+"_"+version: id
  }

  var Library = function(cql){
    this.type = "Library"
    this.cql = cql;
    this.listener = new cqlListener()
    this.reparse(cql);
  }

  Library.prototype.update = function(cql){
    this.cql = cql;
    this.reparse(cql);
  }

  Library.prototype.reparse = function(cql){
    if(!cql) {return}
    var chars = new InputStream(cql);
    var lexer = new cqlLexer(chars);
    var tokens  = new CommonTokenStream(lexer);
    var parser = new cqlParser(tokens);
    this.listener = new cqlListener();
    parser.addParseListener(this.listener);
    parser.buildParseTrees = true;
    parser.logic();
  }

  Library.prototype.resolve = function(id){
    return this.listener.currentContext.resolve(id)
  }

  Library.prototype.propertyNames = function(){
    var props = [] 
    for(var x in this.listener.currentContext.variables){
      props.push(x)
    }
    return props;
  }

  Library.prototype.valuesets = function(cql){
    
  }

  Library.prototype.paramters = function(cql){
    
  }

  Library.prototype.statements = function(cql){
    
  }

  Library.prototype.functions = function(cql){
    
  }





  var LibraryRetriever = function(baseUrl){
    this.baseUrl = baseUrl;
    if(this.baseUrl[this.baseUrl.length-1] != '/'){
      this.baseUrl += "/"
    }
  }

  LibraryRetriever.prototype.load= function(id,version,callback) {
    var self = this;
    
    net.get(this.baseUrl+libId(id,version)+".cql", function(m) {
      if (m) {
        callback(m);
      }
    });
  };

  function LibraryManager(libraryResolver){
    this.resolver = libraryResolver;
    this.libraries = {};
  }
  
  LibraryManager.prototype.constructor = LibraryManager;
 
  LibraryManager.prototype.loadLibrary = function(id,version){
    var self = this;
    var mid = libId(id,version)
    if (this.libraries[mid]){return}
    console.log("AM loading "+id)
    // set an emtpy model there for the time being will update the values 
    // once we have the json back
    this.libraries[mid] = new Library()
    this.resolver.load(id,version,function(lib){
      if(self.libraries[mid]){
        self.libraries[mid].update(lib)
      } else {
        self.libraries[mid] = new Library(lib)
      }
    })
  }

  LibraryManager.prototype.getLibrary = function(id,version) {
    var mid = libId(id,version);
    // if( !this.models.hasOwnProperty(mid)){
    //    this.loadModel(id,version);
    // }
    return this.libraries[mid];
  }

  exports.LibraryManager = LibraryManager
  //singleton instance with default modle retriever. Retriver can be reset to something else as needed
  exports.LibraryManagerInstance = new LibraryManager(new LibraryRetriever("./libraries/"));
});