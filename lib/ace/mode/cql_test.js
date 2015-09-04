if (typeof process !== "undefined") {
    require("amd-loader");
}

define(function(require, exports, module) {
    "use strict";

    var Tokenizer = require("../tokenizer").Tokenizer;
    var assert = require("../test/assertions");
    var cqlLexer = require("./cql/cqlLexer").cqlLexer;
    var cqlParser = require("./cql/cqlParser").cqlParser;
    var cqlListener = require("./cql/cqlListener").cqlListener;
    var ModelManager = require("./cql/model_manager").ModelManagerInstance;
    var Model = require("./cql/model");

    var cqlListener = require("./cql/cqlListener").cqlListener;

    var InputStream = require("./cql/antlr4/InputStream").InputStream;
    var CommonTokenStream = require("./cql/antlr4/CommonTokenStream").CommonTokenStream;
    var ErrorListener = require("./cql/antlr4/error/ErrorListener").ErrorListener;

    var setupParser = function(value) {
        var chars = new InputStream(value);
        var lexer = new cqlLexer(chars);
        var tokens = new CommonTokenStream(lexer);
        var parser = new cqlParser(tokens);

    }

    module.exports = {
        setUp: function() {
            ModelManager.loadModel("QUICK")
        },

        "test: loadingModel": function() {
            console.log(ModelManager.getModel("QUICK"))
            assert.notEqual(ModelManager.getModel("QUICK"), null)
        },

        "test: resolvingModelTypes": function() {

        },

        "test: resolveingModelProperties": function() {

        },

        "test: systemTypes": function() {

        },
        "test: load libraries": function() {

        },
        "test: parsing cql": function() {

        },
        "test: systemTypes": function() {

        },

    };

});

if (typeof module !== "undefined" && module === require.main) {
    require("asyncjs").test.testcase(module.exports).exec()
}