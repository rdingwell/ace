
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
    this.setTimeout(250);
};

oop.inherits(Worker, Mirror);

(function() {

    this.onUpdate = function() {
        var value = this.doc.getValue();
        var errors = [];
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
    };

}).call(Worker.prototype);

});
