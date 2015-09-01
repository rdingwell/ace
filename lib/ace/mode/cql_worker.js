
define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var Mirror = require("../worker/mirror").Mirror;
var cqlLexer = require("./cql/cqlLexer").cqlLexer;
var cqlParser = require("./cql/cqlParser").cqlParser;
var cqlListener = require("./cql/cqlListener").cqlListener;

var InputStream = require("./cql/antlr4/InputStream").InputStream;
var CommonTokenStream = require("./cql/antlr4/CommonTokenStream").CommonTokenStream;
var ErrorListener = require("./cql/antlr4/error/ErrorListener").ErrorListener;
//var coffee = require("../mode/coffee/coffee-script");

function AceErrorListener() {
    ErrorListener.call(this);
    this.errors = [];
    return this;
}

AceErrorListener.prototype = Object.create(ErrorListener.prototype);
AceErrorListener.prototype.constructor = AceErrorListener;
AceErrorListener.prototype.reset = function(){this.errors = []}
AceErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {

    this.errors.push({
        row: line-1,
        column: column,
        endRow: line-1,
        endColumn: column,
        text: msg,
        type: "error"
    });
     
};

window.addEventListener = function() {};


var Worker = exports.Worker = function(sender) {
    Mirror.call(this, sender);
    this.errorListener = new AceErrorListener()
    this.models = [];
    this.includes = [];
    this.setTimeout(250);
};

oop.inherits(Worker, Mirror);

(function() {

    this.onUpdate = function() {
        var modelRegex = new RegExp(/using [^\S\n\r]*([_a-zA-Z][_a-zA-Z0-9]*)/g)
        var includeRegex = new RegExp(/include [^\S\n\r]*([_a-zA-Z][_a-zA-Z0-9]*)/g)
        var value = this.doc.getValue();
        var models = [];
        var includes = []
        var match = null
        while((match = modelRegex.exec(value))){
            models.push(match[1])
        }
       match = null ;
       while((match = includeRegex.exec(value))){
            if(match[1] ){
             includes.push(match[1])
             }
        }
        var errors = [];
        if(value.trim() == "" ){return}
        var chars = new InputStream(value);
        var lexer = new cqlLexer(chars);
        var tokens  = new CommonTokenStream(lexer);
        var parser = new cqlParser(tokens);
        var listener = new cqlListener();
       // parser.addParseListener(listener);
        parser.addErrorListener(this.errorListener);
        parser.buildParseTrees = true;
        this.errorListener.reset();
        var tree = parser.logic();
       // this.sender.emit("updateCqlModel", listener.toModel());
        this.sender.emit("annotate", this.errorListener.errors);
        console.log("models "+models)
        if(models.length >0) this.sender.emit("loadModels", models)
        if(includes.length >0) this.sender.emit("loadIncludes", includes)
    };

}).call(Worker.prototype);

});
