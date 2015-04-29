define(function(require, exports, module) {
// exports.atn = require('./atn/index');
// exports.dfa = require('./dfa/index');
// exports.tree = require('./tree/index');
// exports.error = require('./error/index');
// exports.Token = require('./Token').Token;
// exports.CommonToken = require('./Token').Token;
// exports.InputStream = require('./InputStream').InputStream;
// exports.FileStream = require('./FileStream').FileStream;
// exports.CommonTokenStream = require('./CommonTokenStream').CommonTokenStream;
// exports.Lexer = require('./Lexer').Lexer;
// exports.Parser = require('./Parser').Parser;
// var pc = require('./PredictionContext');
// exports.PredictionContextCache = pc.PredictionContextCache;
// exports.ParserRuleContext = require('./ParserRuleContext').ParserRuleContext;
// exports.Interval = require('./IntervalSet').Interval;
// exports.Utils = require('./Utils');

// This is the way these need to be loaded in ace otherwise some odd circular referencing happens
// during load and the whole thing fails. 
exports.tree = require('./tree/index');
exports.error = require('./error/index');
exports.ParserRuleContext = require('./ParserRuleContext').ParserRuleContext;
exports.atn = require('./atn/index');

exports.dfa = require('./dfa/index');

exports.Token = require('./Token').Token;
exports.CommonToken = require('./Token').Token;
exports.InputStream = require('./InputStream').InputStream;
//exports.FileStream = require('./FileStream').FileStream;
exports.CommonTokenStream = require('./CommonTokenStream').CommonTokenStream;
exports.Lexer = require('./Lexer').Lexer;
exports.Parser = require('./Parser').Parser;
var pc = require('./PredictionContext');
exports.PredictionContextCache = pc.PredictionContextCache;

exports.Interval = require('./IntervalSet').Interval;
exports.Utils = require('./Utils');

});