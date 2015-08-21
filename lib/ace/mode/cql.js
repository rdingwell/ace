define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
// defines the parent mode
var TextMode = require("./text").Mode;
var Tokenizer = require("../tokenizer").Tokenizer;
var MatchingBraceOutdent = require("./matching_brace_outdent").MatchingBraceOutdent;
var WorkerClient = require("../worker/worker_client").WorkerClient;
var CstyleBehaviour = require("./behaviour/cstyle").CstyleBehaviour;
// defines the language specific highlighters and folding rules
var CqlHighlightRules = require("./cql_highlight_rules").CqlHighlightRules;
var cqlLexer = require("./cql/cqlLexer");
var ModelManager = require("./cql/model_manager").ModelManagerInstance
var LibraryManager = require("./cql/library_manager").LibraryManagerInstance
var cqlModelCompleter =require("./cql/model_completer").ModelCompleter;
var langTools = require("ace/ext/language_tools");
langTools.addCompleter(cqlModelCompleter);
//console.log(cqlLexer)
//var CqlFoldMode = require("./folding/cql").FoldMode;

var Mode = function() {
    // set everything up
    this.HighlightRules = CqlHighlightRules;
    this.$outdent = new MatchingBraceOutdent();
    this.$behaviour = new CstyleBehaviour();
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
        worker.session = session;
         worker.attachToDocument(session.getDocument());
        
        worker.on("annotate", function(e) {
            session.setAnnotations(e.data);
        });

        
        worker.on("terminate", function() {
            session.clearAnnotations();
        });

        worker.on("updateCqlModel", function(cqlModel) {
            session.cqlModel = cqlModel;
        });
        //make sure these things are loaded so when we go to use code complete they are already there
        worker.on("loadModels",function(obj){
            var models = obj.data || []
            for(var i = 0 ; i< models.length; i++){
                console.log("loading model "+models[i])
                ModelManager.loadModel(models[i])
            }
        });
         //make sure these things are loaded so when we go to use code complete they are already there
        worker.on("loadIncludes",function(obj){
            var models = obj.data || []
            for(var i = 0 ; i< models.length; i++){
                console.log("loading lib"+models[i])
                LibraryManager.loadLibrary(models[i])
            }
        })
        return worker;
    };

    this.$id = "ace/mode/cql";
}).call(Mode.prototype);
 
exports.Mode = Mode;
});