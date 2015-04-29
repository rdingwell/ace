define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
// defines the parent mode
var TextMode = require("./text").Mode;
var Tokenizer = require("../tokenizer").Tokenizer;
var MatchingBraceOutdent = require("./matching_brace_outdent").MatchingBraceOutdent;
var WorkerClient = require("../worker/worker_client").WorkerClient;
// defines the language specific highlighters and folding rules
var CqlHighlightRules = require("./cql_highlight_rules").CqlHighlightRules;
var cqlLexer = require("./cql/cqlLexer");
console.log(cqlLexer)
//var CqlFoldMode = require("./folding/cql").FoldMode;

var Mode = function() {
    // set everything up
    this.HighlightRules = CqlHighlightRules;
    this.$outdent = new MatchingBraceOutdent();
    //this.foldingRules = new CqlFoldMode();
};
oop.inherits(Mode, TextMode);

(function() {
    // configure comment start/end characters
    this.lineCommentStart = "//";
    this.blockComment = {start: "/*", end: "*/"};
    
    // special logic for indent/outdent. 
    // By default ace keeps indentation of previous line
    this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        return indent;
    };

    this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
    };

    this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
    };
    
    // create worker for live syntax checking
    this.createWorker = function(session) {
        var worker = new WorkerClient(["ace"], "ace/mode/cql_worker", "Worker");
         worker.attachToDocument(session.getDocument());
        
        worker.on("annotate", function(e) {
            session.setAnnotations(e.data);
        });
        
        worker.on("terminate", function() {
            session.clearAnnotations();
        });
        
        return worker;
        return worker;
    };

    this.$id = "ace/mode/cql";
}).call(Mode.prototype);

exports.Mode = Mode;
});