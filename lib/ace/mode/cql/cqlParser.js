define(function(require, exports, module) {
// Generated from cql.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('./antlr4/index');
var cqlListener = require('./cqlListener').cqlListener;
var grammarFileName = "cql.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\u008d\u039e\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t",
    "\b\4\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20",
    "\t\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4",
    "\27\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35",
    "\4\36\t\36\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'",
    "\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61",
    "\t\61\4\62\t\62\4\63\t\63\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\4",
    "8\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t=\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C",
    "\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\t",
    "N\4O\tO\4P\tP\4Q\tQ\3\2\5\2\u00a4\n\2\3\2\7\2\u00a7\n\2\f\2\16\2\u00aa",
    "\13\2\3\2\7\2\u00ad\n\2\f\2\16\2\u00b0\13\2\3\2\7\2\u00b3\n\2\f\2\16",
    "\2\u00b6\13\2\3\2\7\2\u00b9\n\2\f\2\16\2\u00bc\13\2\3\2\7\2\u00bf\n",
    "\2\f\2\16\2\u00c2\13\2\3\2\6\2\u00c5\n\2\r\2\16\2\u00c6\3\3\3\3\3\3",
    "\3\3\5\3\u00cd\n\3\3\4\3\4\3\4\3\4\5\4\u00d3\n\4\3\5\3\5\3\5\3\5\5\5",
    "\u00d9\n\5\3\5\3\5\3\5\3\6\3\6\3\7\3\7\3\b\5\b\u00e3\n\b\3\b\3\b\3\b",
    "\5\b\u00e8\n\b\3\b\3\b\5\b\u00ec\n\b\3\t\5\t\u00ef\n\t\3\t\3\t\3\t\3",
    "\t\3\t\3\t\5\t\u00f7\n\t\3\n\5\n\u00fa\n\n\3\n\3\n\3\n\3\n\3\n\3\n\5",
    "\n\u0102\n\n\3\n\5\n\u0105\n\n\3\13\3\13\3\13\3\13\3\13\7\13\u010c\n",
    "\13\f\13\16\13\u010f\13\13\3\13\3\13\3\f\3\f\3\f\5\f\u0116\n\f\3\f\3",
    "\f\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3\21\3\21\5\21\u0126",
    "\n\21\3\22\3\22\3\22\5\22\u012b\n\22\3\22\3\22\3\23\3\23\3\24\3\24\3",
    "\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\7\26",
    "\u0140\n\26\f\26\16\26\u0143\13\26\3\26\3\26\3\27\3\27\3\27\3\30\3\30",
    "\3\30\5\30\u014d\n\30\3\31\3\31\5\31\u0151\n\31\3\31\3\31\3\31\3\31",
    "\3\32\3\32\3\32\3\33\3\33\5\33\u015c\n\33\3\33\3\33\3\33\3\33\3\33\3",
    "\33\7\33\u0164\n\33\f\33\16\33\u0167\13\33\5\33\u0169\n\33\3\33\3\33",
    "\3\33\3\33\3\34\3\34\3\34\3\35\3\35\3\36\3\36\3\36\3\36\3\36\3\36\5",
    "\36\u017a\n\36\3\37\3\37\3\37\3 \3 \3!\3!\5!\u0183\n!\3\"\3\"\3\"\3",
    "\"\3\"\3#\3#\3#\3#\3#\3$\3$\3$\3$\3$\3$\5$\u0195\n$\3$\5$\u0198\n$\3",
    "$\3$\3%\3%\3&\3&\3\'\3\'\3(\3(\5(\u01a4\n(\3(\7(\u01a7\n(\f(\16(\u01aa",
    "\13(\3(\5(\u01ad\n(\3(\5(\u01b0\n(\3(\5(\u01b3\n(\3)\3)\5)\u01b7\n)",
    "\3*\3*\3+\3+\3+\3+\7+\u01bf\n+\f+\16+\u01c2\13+\3,\3,\3,\3,\7,\u01c8",
    "\n,\f,\16,\u01cb\13,\3-\3-\3-\3-\3.\3.\3.\3/\3/\5/\u01d6\n/\3/\3/\3",
    "\60\3\60\3\60\3\60\3\60\3\60\7\60\u01e0\n\60\f\60\16\60\u01e3\13\60",
    "\5\60\u01e5\n\60\3\61\3\61\3\62\3\62\5\62\u01eb\n\62\3\63\3\63\3\63",
    "\7\63\u01f0\n\63\f\63\16\63\u01f3\13\63\3\63\3\63\3\64\3\64\3\64\3\64",
    "\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3",
    "\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\5\64\u0212\n\64\3\64",
    "\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\5\64\u0221",
    "\n\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3",
    "\64\5\64\u0230\n\64\3\64\3\64\3\64\3\64\3\64\3\64\5\64\u0238\n\64\3",
    "\64\3\64\3\64\3\64\3\64\7\64\u023f\n\64\f\64\16\64\u0242\13\64\3\65",
    "\3\65\3\66\3\66\3\66\3\66\5\66\u024a\n\66\3\67\3\67\38\38\38\38\38\3",
    "8\38\38\38\38\38\38\38\38\38\38\38\38\38\38\38\38\38\38\38\38\38\38",
    "\38\38\38\38\58\u026e\n8\38\38\38\38\38\78\u0275\n8\f8\168\u0278\13",
    "8\58\u027a\n8\38\38\38\38\38\38\38\38\38\38\38\38\38\38\38\38\38\38",
    "\58\u028e\n8\38\68\u0291\n8\r8\168\u0292\38\38\38\38\38\38\58\u029b",
    "\n8\38\38\38\38\38\38\38\38\38\38\38\38\38\38\38\38\38\78\u02ae\n8\f",
    "8\168\u02b1\138\39\39\39\39\39\3:\3:\3:\3;\3;\3<\3<\3=\3=\5=\u02c1\n",
    "=\3>\5>\u02c4\n>\3>\3>\5>\u02c8\n>\3>\3>\5>\u02cc\n>\3>\5>\u02cf\n>",
    "\3>\5>\u02d2\n>\3>\3>\5>\u02d6\n>\3>\5>\u02d9\n>\3>\5>\u02dc\n>\3>\5",
    ">\u02df\n>\3>\3>\5>\u02e3\n>\3>\5>\u02e6\n>\3>\5>\u02e9\n>\3>\3>\5>",
    "\u02ed\n>\3>\5>\u02f0\n>\3>\5>\u02f3\n>\3>\5>\u02f6\n>\3>\3>\3>\3>\5",
    ">\u02fc\n>\3>\3>\5>\u0300\n>\3>\5>\u0303\n>\3>\3>\5>\u0307\n>\3>\5>",
    "\u030a\n>\3>\3>\5>\u030e\n>\3>\3>\5>\u0312\n>\5>\u0314\n>\3?\3?\3?\3",
    "?\3?\3?\3?\3?\3?\3?\3?\3?\5?\u0322\n?\3@\3@\3@\3@\3@\3@\3@\3A\5A\u032c",
    "\nA\3A\3A\3A\3A\3A\7A\u0333\nA\fA\16A\u0336\13A\5A\u0338\nA\3A\3A\3",
    "B\3B\3B\3B\3C\3C\3C\3C\3C\3C\7C\u0346\nC\fC\16C\u0349\13C\5C\u034b\n",
    "C\3C\3C\3D\3D\3D\3D\3E\3E\3E\3E\3E\5E\u0358\nE\5E\u035a\nE\3E\3E\3E",
    "\3E\7E\u0360\nE\fE\16E\u0363\13E\5E\u0365\nE\3E\3E\3F\3F\3F\3G\3G\3",
    "G\3G\3G\5G\u0371\nG\3H\3H\3H\3H\3H\7H\u0378\nH\fH\16H\u037b\13H\3H\3",
    "H\5H\u037f\nH\3I\3I\3I\3I\3I\3I\5I\u0387\nI\3J\3J\3K\3K\3L\3L\3M\3M",
    "\3N\3N\3O\3O\5O\u0395\nO\3P\3P\3P\5P\u039a\nP\3Q\3Q\3Q\2\4fnR\2\4\6",
    "\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNP",
    "RTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088\u008a\u008c\u008e",
    "\u0090\u0092\u0094\u0096\u0098\u009a\u009c\u009e\u00a0\2\34\3\2\b\t",
    "\3\2\'(\3\2+.\4\2\25\26;<\3\2=?\4\2\"\"@@\3\2AB\3\2CE\3\2\61\63\4\2",
    "//\64\64\3\2FL\3\2PV\3\2YZ\3\2[\\\3\2cd\4\2((no\3\2fi\3\2qr\3\2st\3",
    "\2uw\3\2z{\3\2|}\4\2\20\20!!\4\2\22\22##\3\2\62\63\6\2\4\4MO\u0081\u0084",
    "\u0088\u0088\u03e9\2\u00a3\3\2\2\2\4\u00c8\3\2\2\2\6\u00ce\3\2\2\2\b",
    "\u00d4\3\2\2\2\n\u00dd\3\2\2\2\f\u00df\3\2\2\2\16\u00e2\3\2\2\2\20\u00ee",
    "\3\2\2\2\22\u00f9\3\2\2\2\24\u0106\3\2\2\2\26\u0115\3\2\2\2\30\u0119",
    "\3\2\2\2\32\u011b\3\2\2\2\34\u011d\3\2\2\2\36\u011f\3\2\2\2 \u0125\3",
    "\2\2\2\"\u012a\3\2\2\2$\u012e\3\2\2\2&\u0130\3\2\2\2(\u0135\3\2\2\2",
    "*\u013a\3\2\2\2,\u0146\3\2\2\2.\u014c\3\2\2\2\60\u014e\3\2\2\2\62\u0156",
    "\3\2\2\2\64\u0159\3\2\2\2\66\u016e\3\2\2\28\u0171\3\2\2\2:\u0179\3\2",
    "\2\2<\u017b\3\2\2\2>\u017e\3\2\2\2@\u0182\3\2\2\2B\u0184\3\2\2\2D\u0189",
    "\3\2\2\2F\u018e\3\2\2\2H\u019b\3\2\2\2J\u019d\3\2\2\2L\u019f\3\2\2\2",
    "N\u01a1\3\2\2\2P\u01b6\3\2\2\2R\u01b8\3\2\2\2T\u01ba\3\2\2\2V\u01c3",
    "\3\2\2\2X\u01cc\3\2\2\2Z\u01d0\3\2\2\2\\\u01d3\3\2\2\2^\u01d9\3\2\2",
    "\2`\u01e6\3\2\2\2b\u01e8\3\2\2\2d\u01f1\3\2\2\2f\u0211\3\2\2\2h\u0243",
    "\3\2\2\2j\u0249\3\2\2\2l\u024b\3\2\2\2n\u029a\3\2\2\2p\u02b2\3\2\2\2",
    "r\u02b7\3\2\2\2t\u02ba\3\2\2\2v\u02bc\3\2\2\2x\u02be\3\2\2\2z\u0313",
    "\3\2\2\2|\u0321\3\2\2\2~\u0323\3\2\2\2\u0080\u032b\3\2\2\2\u0082\u033b",
    "\3\2\2\2\u0084\u033f\3\2\2\2\u0086\u034e\3\2\2\2\u0088\u0359\3\2\2\2",
    "\u008a\u0368\3\2\2\2\u008c\u036b\3\2\2\2\u008e\u0372\3\2\2\2\u0090\u0386",
    "\3\2\2\2\u0092\u0388\3\2\2\2\u0094\u038a\3\2\2\2\u0096\u038c\3\2\2\2",
    "\u0098\u038e\3\2\2\2\u009a\u0390\3\2\2\2\u009c\u0392\3\2\2\2\u009e\u0399",
    "\3\2\2\2\u00a0\u039b\3\2\2\2\u00a2\u00a4\5\4\3\2\u00a3\u00a2\3\2\2\2",
    "\u00a3\u00a4\3\2\2\2\u00a4\u00a8\3\2\2\2\u00a5\u00a7\5\6\4\2\u00a6\u00a5",
    "\3\2\2\2\u00a7\u00aa\3\2\2\2\u00a8\u00a6\3\2\2\2\u00a8\u00a9\3\2\2\2",
    "\u00a9\u00ae\3\2\2\2\u00aa\u00a8\3\2\2\2\u00ab\u00ad\5\b\5\2\u00ac\u00ab",
    "\3\2\2\2\u00ad\u00b0\3\2\2\2\u00ae\u00ac\3\2\2\2\u00ae\u00af\3\2\2\2",
    "\u00af\u00b4\3\2\2\2\u00b0\u00ae\3\2\2\2\u00b1\u00b3\5\20\t\2\u00b2",
    "\u00b1\3\2\2\2\u00b3\u00b6\3\2\2\2\u00b4\u00b2\3\2\2\2\u00b4\u00b5\3",
    "\2\2\2\u00b5\u00ba\3\2\2\2\u00b6\u00b4\3\2\2\2\u00b7\u00b9\5\22\n\2",
    "\u00b8\u00b7\3\2\2\2\u00b9\u00bc\3\2\2\2\u00ba\u00b8\3\2\2\2\u00ba\u00bb",
    "\3\2\2\2\u00bb\u00c0\3\2\2\2\u00bc\u00ba\3\2\2\2\u00bd\u00bf\5\16\b",
    "\2\u00be\u00bd\3\2\2\2\u00bf\u00c2\3\2\2\2\u00c0\u00be\3\2\2\2\u00c0",
    "\u00c1\3\2\2\2\u00c1\u00c4\3\2\2\2\u00c2\u00c0\3\2\2\2\u00c3\u00c5\5",
    ".\30\2\u00c4\u00c3\3\2\2\2\u00c5\u00c6\3\2\2\2\u00c6\u00c4\3\2\2\2\u00c6",
    "\u00c7\3\2\2\2\u00c7\3\3\2\2\2\u00c8\u00c9\7\3\2\2\u00c9\u00cc\5\u00a0",
    "Q\2\u00ca\u00cb\7\4\2\2\u00cb\u00cd\5\36\20\2\u00cc\u00ca\3\2\2\2\u00cc",
    "\u00cd\3\2\2\2\u00cd\5\3\2\2\2\u00ce\u00cf\7\5\2\2\u00cf\u00d2\5\u00a0",
    "Q\2\u00d0\u00d1\7\4\2\2\u00d1\u00d3\5\36\20\2\u00d2\u00d0\3\2\2\2\u00d2",
    "\u00d3\3\2\2\2\u00d3\7\3\2\2\2\u00d4\u00d5\7\6\2\2\u00d5\u00d8\5\u00a0",
    "Q\2\u00d6\u00d7\7\4\2\2\u00d7\u00d9\5\36\20\2\u00d8\u00d6\3\2\2\2\u00d8",
    "\u00d9\3\2\2\2\u00d9\u00da\3\2\2\2\u00da\u00db\7\7\2\2\u00db\u00dc\5",
    "\n\6\2\u00dc\t\3\2\2\2\u00dd\u00de\5\u00a0Q\2\u00de\13\3\2\2\2\u00df",
    "\u00e0\t\2\2\2\u00e0\r\3\2\2\2\u00e1\u00e3\5\f\7\2\u00e2\u00e1\3\2\2",
    "\2\u00e2\u00e3\3\2\2\2\u00e3\u00e4\3\2\2\2\u00e4\u00e5\7\n\2\2\u00e5",
    "\u00e7\5\u00a0Q\2\u00e6\u00e8\5 \21\2\u00e7\u00e6\3\2\2\2\u00e7\u00e8",
    "\3\2\2\2\u00e8\u00eb\3\2\2\2\u00e9\u00ea\7\13\2\2\u00ea\u00ec\5f\64",
    "\2\u00eb\u00e9\3\2\2\2\u00eb\u00ec\3\2\2\2\u00ec\17\3\2\2\2\u00ed\u00ef",
    "\5\f\7\2\u00ee\u00ed\3\2\2\2\u00ee\u00ef\3\2\2\2\u00ef\u00f0\3\2\2\2",
    "\u00f0\u00f1\7\f\2\2\u00f1\u00f2\5\u00a0Q\2\u00f2\u00f3\7\r\2\2\u00f3",
    "\u00f6\5\32\16\2\u00f4\u00f5\7\4\2\2\u00f5\u00f7\5\36\20\2\u00f6\u00f4",
    "\3\2\2\2\u00f6\u00f7\3\2\2\2\u00f7\21\3\2\2\2\u00f8\u00fa\5\f\7\2\u00f9",
    "\u00f8\3\2\2\2\u00f9\u00fa\3\2\2\2\u00fa\u00fb\3\2\2\2\u00fb\u00fc\7",
    "\16\2\2\u00fc\u00fd\5\u00a0Q\2\u00fd\u00fe\7\r\2\2\u00fe\u0101\5\34",
    "\17\2\u00ff\u0100\7\4\2\2\u0100\u0102\5\36\20\2\u0101\u00ff\3\2\2\2",
    "\u0101\u0102\3\2\2\2\u0102\u0104\3\2\2\2\u0103\u0105\5\24\13\2\u0104",
    "\u0103\3\2\2\2\u0104\u0105\3\2\2\2\u0105\23\3\2\2\2\u0106\u0107\7\17",
    "\2\2\u0107\u0108\7\20\2\2\u0108\u010d\5\26\f\2\u0109\u010a\7\21\2\2",
    "\u010a\u010c\5\26\f\2\u010b\u0109\3\2\2\2\u010c\u010f\3\2\2\2\u010d",
    "\u010b\3\2\2\2\u010d\u010e\3\2\2\2\u010e\u0110\3\2\2\2\u010f\u010d\3",
    "\2\2\2\u0110\u0111\7\22\2\2\u0111\25\3\2\2\2\u0112\u0113\5\30\r\2\u0113",
    "\u0114\7\23\2\2\u0114\u0116\3\2\2\2\u0115\u0112\3\2\2\2\u0115\u0116",
    "\3\2\2\2\u0116\u0117\3\2\2\2\u0117\u0118\5\u00a0Q\2\u0118\27\3\2\2\2",
    "\u0119\u011a\5\u00a0Q\2\u011a\31\3\2\2\2\u011b\u011c\7\u0089\2\2\u011c",
    "\33\3\2\2\2\u011d\u011e\7\u0089\2\2\u011e\35\3\2\2\2\u011f\u0120\7\u0089",
    "\2\2\u0120\37\3\2\2\2\u0121\u0126\5\"\22\2\u0122\u0126\5&\24\2\u0123",
    "\u0126\5(\25\2\u0124\u0126\5*\26\2\u0125\u0121\3\2\2\2\u0125\u0122\3",
    "\2\2\2\u0125\u0123\3\2\2\2\u0125\u0124\3\2\2\2\u0126!\3\2\2\2\u0127",
    "\u0128\5$\23\2\u0128\u0129\7\23\2\2\u0129\u012b\3\2\2\2\u012a\u0127",
    "\3\2\2\2\u012a\u012b\3\2\2\2\u012b\u012c\3\2\2\2\u012c\u012d\5\u00a0",
    "Q\2\u012d#\3\2\2\2\u012e\u012f\5\u00a0Q\2\u012f%\3\2\2\2\u0130\u0131",
    "\7\24\2\2\u0131\u0132\7\25\2\2\u0132\u0133\5 \21\2\u0133\u0134\7\26",
    "\2\2\u0134\'\3\2\2\2\u0135\u0136\7\27\2\2\u0136\u0137\7\25\2\2\u0137",
    "\u0138\5 \21\2\u0138\u0139\7\26\2\2\u0139)\3\2\2\2\u013a\u013b\7\30",
    "\2\2\u013b\u013c\7\31\2\2\u013c\u0141\5,\27\2\u013d\u013e\7\21\2\2\u013e",
    "\u0140\5,\27\2\u013f\u013d\3\2\2\2\u0140\u0143\3\2\2\2\u0141\u013f\3",
    "\2\2\2\u0141\u0142\3\2\2\2\u0142\u0144\3\2\2\2\u0143\u0141\3\2\2\2\u0144",
    "\u0145\7\32\2\2\u0145+\3\2\2\2\u0146\u0147\5\u00a0Q\2\u0147\u0148\5",
    " \21\2\u0148-\3\2\2\2\u0149\u014d\5\60\31\2\u014a\u014d\5\62\32\2\u014b",
    "\u014d\5\64\33\2\u014c\u0149\3\2\2\2\u014c\u014a\3\2\2\2\u014c\u014b",
    "\3\2\2\2\u014d/\3\2\2\2\u014e\u0150\7\33\2\2\u014f\u0151\5\f\7\2\u0150",
    "\u014f\3\2\2\2\u0150\u0151\3\2\2\2\u0151\u0152\3\2\2\2\u0152\u0153\5",
    "\u00a0Q\2\u0153\u0154\7\r\2\2\u0154\u0155\5f\64\2\u0155\61\3\2\2\2\u0156",
    "\u0157\7\34\2\2\u0157\u0158\5\u00a0Q\2\u0158\63\3\2\2\2\u0159\u015b",
    "\7\33\2\2\u015a\u015c\5\f\7\2\u015b\u015a\3\2\2\2\u015b\u015c\3\2\2",
    "\2\u015c\u015d\3\2\2\2\u015d\u015e\7\35\2\2\u015e\u015f\5\u00a0Q\2\u015f",
    "\u0168\7\20\2\2\u0160\u0165\5\66\34\2\u0161\u0162\7\21\2\2\u0162\u0164",
    "\5\66\34\2\u0163\u0161\3\2\2\2\u0164\u0167\3\2\2\2\u0165\u0163\3\2\2",
    "\2\u0165\u0166\3\2\2\2\u0166\u0169\3\2\2\2\u0167\u0165\3\2\2\2\u0168",
    "\u0160\3\2\2\2\u0168\u0169\3\2\2\2\u0169\u016a\3\2\2\2\u016a\u016b\7",
    "\22\2\2\u016b\u016c\7\r\2\2\u016c\u016d\58\35\2\u016d\65\3\2\2\2\u016e",
    "\u016f\5\u00a0Q\2\u016f\u0170\5 \21\2\u0170\67\3\2\2\2\u0171\u0172\5",
    "f\64\2\u01729\3\2\2\2\u0173\u017a\5F$\2\u0174\u017a\5d\63\2\u0175\u0176",
    "\7\20\2\2\u0176\u0177\5f\64\2\u0177\u0178\7\22\2\2\u0178\u017a\3\2\2",
    "\2\u0179\u0173\3\2\2\2\u0179\u0174\3\2\2\2\u0179\u0175\3\2\2\2\u017a",
    ";\3\2\2\2\u017b\u017c\5:\36\2\u017c\u017d\5> \2\u017d=\3\2\2\2\u017e",
    "\u017f\5\u00a0Q\2\u017f?\3\2\2\2\u0180\u0183\5B\"\2\u0181\u0183\5D#",
    "\2\u0182\u0180\3\2\2\2\u0182\u0181\3\2\2\2\u0183A\3\2\2\2\u0184\u0185",
    "\7\36\2\2\u0185\u0186\5<\37\2\u0186\u0187\7\37\2\2\u0187\u0188\5f\64",
    "\2\u0188C\3\2\2\2\u0189\u018a\7 \2\2\u018a\u018b\5<\37\2\u018b\u018c",
    "\7\37\2\2\u018c\u018d\5f\64\2\u018dE\3\2\2\2\u018e\u018f\7!\2\2\u018f",
    "\u0197\5\"\22\2\u0190\u0194\7\r\2\2\u0191\u0192\5H%\2\u0192\u0193\7",
    "\"\2\2\u0193\u0195\3\2\2\2\u0194\u0191\3\2\2\2\u0194\u0195\3\2\2\2\u0195",
    "\u0196\3\2\2\2\u0196\u0198\5J&\2\u0197\u0190\3\2\2\2\u0197\u0198\3\2",
    "\2\2\u0198\u0199\3\2\2\2\u0199\u019a\7#\2\2\u019aG\3\2\2\2\u019b\u019c",
    "\5\u00a0Q\2\u019cI\3\2\2\2\u019d\u019e\5d\63\2\u019eK\3\2\2\2\u019f",
    "\u01a0\5\u00a0Q\2\u01a0M\3\2\2\2\u01a1\u01a3\5P)\2\u01a2\u01a4\5V,\2",
    "\u01a3\u01a2\3\2\2\2\u01a3\u01a4\3\2\2\2\u01a4\u01a8\3\2\2\2\u01a5\u01a7",
    "\5@!\2\u01a6\u01a5\3\2\2\2\u01a7\u01aa\3\2\2\2\u01a8\u01a6\3\2\2\2\u01a8",
    "\u01a9\3\2\2\2\u01a9\u01ac\3\2\2\2\u01aa\u01a8\3\2\2\2\u01ab\u01ad\5",
    "Z.\2\u01ac\u01ab\3\2\2\2\u01ac\u01ad\3\2\2\2\u01ad\u01af\3\2\2\2\u01ae",
    "\u01b0\5\\/\2\u01af\u01ae\3\2\2\2\u01af\u01b0\3\2\2\2\u01b0\u01b2\3",
    "\2\2\2\u01b1\u01b3\5^\60\2\u01b2\u01b1\3\2\2\2\u01b2\u01b3\3\2\2\2\u01b3",
    "O\3\2\2\2\u01b4\u01b7\5R*\2\u01b5\u01b7\5T+\2\u01b6\u01b4\3\2\2\2\u01b6",
    "\u01b5\3\2\2\2\u01b7Q\3\2\2\2\u01b8\u01b9\5<\37\2\u01b9S\3\2\2\2\u01ba",
    "\u01bb\7$\2\2\u01bb\u01c0\5<\37\2\u01bc\u01bd\7\21\2\2\u01bd\u01bf\5",
    "<\37\2\u01be\u01bc\3\2\2\2\u01bf\u01c2\3\2\2\2\u01c0\u01be\3\2\2\2\u01c0",
    "\u01c1\3\2\2\2\u01c1U\3\2\2\2\u01c2\u01c0\3\2\2\2\u01c3\u01c4\7\33\2",
    "\2\u01c4\u01c9\5X-\2\u01c5\u01c6\7\21\2\2\u01c6\u01c8\5X-\2\u01c7\u01c5",
    "\3\2\2\2\u01c8\u01cb\3\2\2\2\u01c9\u01c7\3\2\2\2\u01c9\u01ca\3\2\2\2",
    "\u01caW\3\2\2\2\u01cb\u01c9\3\2\2\2\u01cc\u01cd\5\u00a0Q\2\u01cd\u01ce",
    "\7\r\2\2\u01ce\u01cf\5f\64\2\u01cfY\3\2\2\2\u01d0\u01d1\7%\2\2\u01d1",
    "\u01d2\5f\64\2\u01d2[\3\2\2\2\u01d3\u01d5\7&\2\2\u01d4\u01d6\t\3\2\2",
    "\u01d5\u01d4\3\2\2\2\u01d5\u01d6\3\2\2\2\u01d6\u01d7\3\2\2\2\u01d7\u01d8",
    "\5f\64\2\u01d8]\3\2\2\2\u01d9\u01e4\7)\2\2\u01da\u01e5\5`\61\2\u01db",
    "\u01dc\7*\2\2\u01dc\u01e1\5b\62\2\u01dd\u01de\7\21\2\2\u01de\u01e0\5",
    "b\62\2\u01df\u01dd\3\2\2\2\u01e0\u01e3\3\2\2\2\u01e1\u01df\3\2\2\2\u01e1",
    "\u01e2\3\2\2\2\u01e2\u01e5\3\2\2\2\u01e3\u01e1\3\2\2\2\u01e4\u01da\3",
    "\2\2\2\u01e4\u01db\3\2\2\2\u01e5_\3\2\2\2\u01e6\u01e7\t\4\2\2\u01e7",
    "a\3\2\2\2\u01e8\u01ea\5n8\2\u01e9\u01eb\5`\61\2\u01ea\u01e9\3\2\2\2",
    "\u01ea\u01eb\3\2\2\2\u01ebc\3\2\2\2\u01ec\u01ed\5L\'\2\u01ed\u01ee\7",
    "\23\2\2\u01ee\u01f0\3\2\2\2\u01ef\u01ec\3\2\2\2\u01f0\u01f3\3\2\2\2",
    "\u01f1\u01ef\3\2\2\2\u01f1\u01f2\3\2\2\2\u01f2\u01f4\3\2\2\2\u01f3\u01f1",
    "\3\2\2\2\u01f4\u01f5\5\u00a0Q\2\u01f5e\3\2\2\2\u01f6\u01f7\b\64\1\2",
    "\u01f7\u01f8\7\60\2\2\u01f8\u0212\5f\64\16\u01f9\u01fa\7\66\2\2\u01fa",
    "\u0212\5f\64\r\u01fb\u0212\5n8\2\u01fc\u0212\5F$\2\u01fd\u0212\5N(\2",
    "\u01fe\u01ff\7\65\2\2\u01ff\u0200\5f\64\2\u0200\u0201\7\64\2\2\u0201",
    "\u0202\5 \21\2\u0202\u0212\3\2\2\2\u0203\u0204\5l\67\2\u0204\u0205\7",
    "8\2\2\u0205\u0206\5n8\2\u0206\u0207\79\2\2\u0207\u0208\5n8\2\u0208\u0212",
    "\3\2\2\2\u0209\u020a\7:\2\2\u020a\u020b\7\"\2\2\u020b\u020c\5l\67\2",
    "\u020c\u020d\78\2\2\u020d\u020e\5n8\2\u020e\u020f\79\2\2\u020f\u0210",
    "\5n8\2\u0210\u0212\3\2\2\2\u0211\u01f6\3\2\2\2\u0211\u01f9\3\2\2\2\u0211",
    "\u01fb\3\2\2\2\u0211\u01fc\3\2\2\2\u0211\u01fd\3\2\2\2\u0211\u01fe\3",
    "\2\2\2\u0211\u0203\3\2\2\2\u0211\u0209\3\2\2\2\u0212\u0240\3\2\2\2\u0213",
    "\u0214\f\t\2\2\u0214\u0215\t\5\2\2\u0215\u023f\5f\64\n\u0216\u0217\f",
    "\b\2\2\u0217\u0218\5z>\2\u0218\u0219\5f\64\t\u0219\u023f\3\2\2\2\u021a",
    "\u021b\f\7\2\2\u021b\u021c\t\6\2\2\u021c\u023f\5f\64\b\u021d\u021e\f",
    "\6\2\2\u021e\u0220\t\7\2\2\u021f\u0221\5r:\2\u0220\u021f\3\2\2\2\u0220",
    "\u0221\3\2\2\2\u0221\u0222\3\2\2\2\u0222\u023f\5f\64\7\u0223\u0224\f",
    "\5\2\2\u0224\u0225\79\2\2\u0225\u023f\5f\64\6\u0226\u0227\f\4\2\2\u0227",
    "\u0228\t\b\2\2\u0228\u023f\5f\64\5\u0229\u022a\f\3\2\2\u022a\u022b\t",
    "\t\2\2\u022b\u023f\5f\64\4\u022c\u022d\f\21\2\2\u022d\u022f\7/\2\2\u022e",
    "\u0230\7\60\2\2\u022f\u022e\3\2\2\2\u022f\u0230\3\2\2\2\u0230\u0231",
    "\3\2\2\2\u0231\u023f\t\n\2\2\u0232\u0233\f\20\2\2\u0233\u0234\t\13\2",
    "\2\u0234\u023f\5 \21\2\u0235\u0237\f\f\2\2\u0236\u0238\7\67\2\2\u0237",
    "\u0236\3\2\2\2\u0237\u0238\3\2\2\2\u0238\u0239\3\2\2\2\u0239\u023a\7",
    "8\2\2\u023a\u023b\5n8\2\u023b\u023c\79\2\2\u023c\u023d\5n8\2\u023d\u023f",
    "\3\2\2\2\u023e\u0213\3\2\2\2\u023e\u0216\3\2\2\2\u023e\u021a\3\2\2\2",
    "\u023e\u021d\3\2\2\2\u023e\u0223\3\2\2\2\u023e\u0226\3\2\2\2\u023e\u0229",
    "\3\2\2\2\u023e\u022c\3\2\2\2\u023e\u0232\3\2\2\2\u023e\u0235\3\2\2\2",
    "\u023f\u0242\3\2\2\2\u0240\u023e\3\2\2\2\u0240\u0241\3\2\2\2\u0241g",
    "\3\2\2\2\u0242\u0240\3\2\2\2\u0243\u0244\t\f\2\2\u0244i\3\2\2\2\u0245",
    "\u024a\5h\65\2\u0246\u024a\7M\2\2\u0247\u024a\7N\2\2\u0248\u024a\7O",
    "\2\2\u0249\u0245\3\2\2\2\u0249\u0246\3\2\2\2\u0249\u0247\3\2\2\2\u0249",
    "\u0248\3\2\2\2\u024ak\3\2\2\2\u024b\u024c\t\r\2\2\u024cm\3\2\2\2\u024d",
    "\u024e\b8\1\2\u024e\u024f\t\16\2\2\u024f\u029b\5n8\21\u0250\u0251\t",
    "\17\2\2\u0251\u0252\7]\2\2\u0252\u029b\5n8\20\u0253\u0254\5j\66\2\u0254",
    "\u0255\7$\2\2\u0255\u0256\5n8\17\u0256\u029b\3\2\2\2\u0257\u0258\7^",
    "\2\2\u0258\u0259\7\"\2\2\u0259\u025a\5l\67\2\u025a\u025b\7]\2\2\u025b",
    "\u025c\5n8\16\u025c\u029b\3\2\2\2\u025d\u025e\7_\2\2\u025e\u025f\7]",
    "\2\2\u025f\u029b\5n8\r\u0260\u0261\7`\2\2\u0261\u0262\7]\2\2\u0262\u029b",
    "\5n8\f\u0263\u0264\7a\2\2\u0264\u0265\7]\2\2\u0265\u029b\5n8\13\u0266",
    "\u0267\7b\2\2\u0267\u0268\7$\2\2\u0268\u029b\5n8\n\u0269\u029b\5|?\2",
    "\u026a\u026b\5L\'\2\u026b\u026c\7\23\2\2\u026c\u026e\3\2\2\2\u026d\u026a",
    "\3\2\2\2\u026d\u026e\3\2\2\2\u026e\u026f\3\2\2\2\u026f\u0270\5\u00a0",
    "Q\2\u0270\u0279\7\20\2\2\u0271\u0276\5f\64\2\u0272\u0273\7\21\2\2\u0273",
    "\u0275\5f\64\2\u0274\u0272\3\2\2\2\u0275\u0278\3\2\2\2\u0276\u0274\3",
    "\2\2\2\u0276\u0277\3\2\2\2\u0277\u027a\3\2\2\2\u0278\u0276\3\2\2\2\u0279",
    "\u0271\3\2\2\2\u0279\u027a\3\2\2\2\u027a\u027b\3\2\2\2\u027b\u027c\7",
    "\22\2\2\u027c\u029b\3\2\2\2\u027d\u027e\7W\2\2\u027e\u027f\5f\64\2\u027f",
    "\u0280\7X\2\2\u0280\u0281\5 \21\2\u0281\u029b\3\2\2\2\u0282\u0283\t",
    "\20\2\2\u0283\u029b\5\"\22\2\u0284\u0285\7j\2\2\u0285\u0286\5f\64\2",
    "\u0286\u0287\7k\2\2\u0287\u0288\5f\64\2\u0288\u0289\7l\2\2\u0289\u028a",
    "\5f\64\2\u028a\u029b\3\2\2\2\u028b\u028d\7m\2\2\u028c\u028e\5f\64\2",
    "\u028d\u028c\3\2\2\2\u028d\u028e\3\2\2\2\u028e\u0290\3\2\2\2\u028f\u0291",
    "\5p9\2\u0290\u028f\3\2\2\2\u0291\u0292\3\2\2\2\u0292\u0290\3\2\2\2\u0292",
    "\u0293\3\2\2\2\u0293\u0294\3\2\2\2\u0294\u0295\7l\2\2\u0295\u0296\5",
    "f\64\2\u0296\u0297\7\\\2\2\u0297\u029b\3\2\2\2\u0298\u0299\t\21\2\2",
    "\u0299\u029b\5f\64\2\u029a\u024d\3\2\2\2\u029a\u0250\3\2\2\2\u029a\u0253",
    "\3\2\2\2\u029a\u0257\3\2\2\2\u029a\u025d\3\2\2\2\u029a\u0260\3\2\2\2",
    "\u029a\u0263\3\2\2\2\u029a\u0266\3\2\2\2\u029a\u0269\3\2\2\2\u029a\u026d",
    "\3\2\2\2\u029a\u027d\3\2\2\2\u029a\u0282\3\2\2\2\u029a\u0284\3\2\2\2",
    "\u029a\u028b\3\2\2\2\u029a\u0298\3\2\2\2\u029b\u02af\3\2\2\2\u029c\u029d",
    "\f\b\2\2\u029d\u029e\7e\2\2\u029e\u02ae\5n8\t\u029f\u02a0\f\7\2\2\u02a0",
    "\u02a1\t\22\2\2\u02a1\u02ae\5n8\b\u02a2\u02a3\f\6\2\2\u02a3\u02a4\t",
    "\16\2\2\u02a4\u02ae\5n8\7\u02a5\u02a6\f\25\2\2\u02a6\u02a7\7\23\2\2",
    "\u02a7\u02ae\5\u00a0Q\2\u02a8\u02a9\f\24\2\2\u02a9\u02aa\7!\2\2\u02aa",
    "\u02ab\5f\64\2\u02ab\u02ac\7#\2\2\u02ac\u02ae\3\2\2\2\u02ad\u029c\3",
    "\2\2\2\u02ad\u029f\3\2\2\2\u02ad\u02a2\3\2\2\2\u02ad\u02a5\3\2\2\2\u02ad",
    "\u02a8\3\2\2\2\u02ae\u02b1\3\2\2\2\u02af\u02ad\3\2\2\2\u02af\u02b0\3",
    "\2\2\2\u02b0o\3\2\2\2\u02b1\u02af\3\2\2\2\u02b2\u02b3\7p\2\2\u02b3\u02b4",
    "\5f\64\2\u02b4\u02b5\7k\2\2\u02b5\u02b6\5f\64\2\u02b6q\3\2\2\2\u02b7",
    "\u02b8\5h\65\2\u02b8\u02b9\7]\2\2\u02b9s\3\2\2\2\u02ba\u02bb\t\23\2",
    "\2\u02bbu\3\2\2\2\u02bc\u02bd\t\24\2\2\u02bdw\3\2\2\2\u02be\u02c0\5",
    "\u009cO\2\u02bf\u02c1\5v<\2\u02c0\u02bf\3\2\2\2\u02c0\u02c1\3\2\2\2",
    "\u02c1y\3\2\2\2\u02c2\u02c4\t\25\2\2\u02c3\u02c2\3\2\2\2\u02c3\u02c4",
    "\3\2\2\2\u02c4\u02c5\3\2\2\2\u02c5\u02c7\7x\2\2\u02c6\u02c8\5h\65\2",
    "\u02c7\u02c6\3\2\2\2\u02c7\u02c8\3\2\2\2\u02c8\u02cb\3\2\2\2\u02c9\u02cc",
    "\5t;\2\u02ca\u02cc\7\64\2\2\u02cb\u02c9\3\2\2\2\u02cb\u02ca\3\2\2\2",
    "\u02cc\u02ce\3\2\2\2\u02cd\u02cf\t\17\2\2\u02ce\u02cd\3\2\2\2\u02ce",
    "\u02cf\3\2\2\2\u02cf\u0314\3\2\2\2\u02d0\u02d2\7\67\2\2\u02d1\u02d0",
    "\3\2\2\2\u02d1\u02d2\3\2\2\2\u02d2\u02d3\3\2\2\2\u02d3\u02d5\7y\2\2",
    "\u02d4\u02d6\5r:\2\u02d5\u02d4\3\2\2\2\u02d5\u02d6\3\2\2\2\u02d6\u02d8",
    "\3\2\2\2\u02d7\u02d9\t\17\2\2\u02d8\u02d7\3\2\2\2\u02d8\u02d9\3\2\2",
    "\2\u02d9\u0314\3\2\2\2\u02da\u02dc\t\25\2\2\u02db\u02da\3\2\2\2\u02db",
    "\u02dc\3\2\2\2\u02dc\u02de\3\2\2\2\u02dd\u02df\7\67\2\2\u02de\u02dd",
    "\3\2\2\2\u02de\u02df\3\2\2\2\u02df\u02e0\3\2\2\2\u02e0\u02e2\t\26\2",
    "\2\u02e1\u02e3\5r:\2\u02e2\u02e1\3\2\2\2\u02e2\u02e3\3\2\2\2\u02e3\u0314",
    "\3\2\2\2\u02e4\u02e6\t\25\2\2\u02e5\u02e4\3\2\2\2\u02e5\u02e6\3\2\2",
    "\2\u02e6\u02e8\3\2\2\2\u02e7\u02e9\5x=\2\u02e8\u02e7\3\2\2\2\u02e8\u02e9",
    "\3\2\2\2\u02e9\u02ea\3\2\2\2\u02ea\u02ec\t\27\2\2\u02eb\u02ed\5r:\2",
    "\u02ec\u02eb\3\2\2\2\u02ec\u02ed\3\2\2\2\u02ed\u02ef\3\2\2\2\u02ee\u02f0",
    "\t\17\2\2\u02ef\u02ee\3\2\2\2\u02ef\u02f0\3\2\2\2\u02f0\u0314\3\2\2",
    "\2\u02f1\u02f3\t\25\2\2\u02f2\u02f1\3\2\2\2\u02f2\u02f3\3\2\2\2\u02f3",
    "\u02f5\3\2\2\2\u02f4\u02f6\7\67\2\2\u02f5\u02f4\3\2\2\2\u02f5\u02f6",
    "\3\2\2\2\u02f6\u02f7\3\2\2\2\u02f7\u02f8\7~\2\2\u02f8\u02f9\5\u009c",
    "O\2\u02f9\u02fb\7]\2\2\u02fa\u02fc\t\17\2\2\u02fb\u02fa\3\2\2\2\u02fb",
    "\u02fc\3\2\2\2\u02fc\u0314\3\2\2\2\u02fd\u02ff\7\177\2\2\u02fe\u0300",
    "\t\27\2\2\u02ff\u02fe\3\2\2\2\u02ff\u0300\3\2\2\2\u0300\u0302\3\2\2",
    "\2\u0301\u0303\5r:\2\u0302\u0301\3\2\2\2\u0302\u0303\3\2\2\2\u0303\u0314",
    "\3\2\2\2\u0304\u0306\7\u0080\2\2\u0305\u0307\t\27\2\2\u0306\u0305\3",
    "\2\2\2\u0306\u0307\3\2\2\2\u0307\u0309\3\2\2\2\u0308\u030a\5r:\2\u0309",
    "\u0308\3\2\2\2\u0309\u030a\3\2\2\2\u030a\u0314\3\2\2\2\u030b\u030d\7",
    "u\2\2\u030c\u030e\5r:\2\u030d\u030c\3\2\2\2\u030d\u030e\3\2\2\2\u030e",
    "\u0314\3\2\2\2\u030f\u0311\7v\2\2\u0310\u0312\5r:\2\u0311\u0310\3\2",
    "\2\2\u0311\u0312\3\2\2\2\u0312\u0314\3\2\2\2\u0313\u02c3\3\2\2\2\u0313",
    "\u02d1\3\2\2\2\u0313\u02db\3\2\2\2\u0313\u02e5\3\2\2\2\u0313\u02f2\3",
    "\2\2\2\u0313\u02fd\3\2\2\2\u0313\u0304\3\2\2\2\u0313\u030b\3\2\2\2\u0313",
    "\u030f\3\2\2\2\u0314{\3\2\2\2\u0315\u0322\5\u00a0Q\2\u0316\u0322\5\u0090",
    "I\2\u0317\u0322\5~@\2\u0318\u0322\5\u0080A\2\u0319\u0322\5\u0084C\2",
    "\u031a\u0322\5\u0088E\2\u031b\u0322\5\u008cG\2\u031c\u0322\5\u008eH",
    "\2\u031d\u031e\7\20\2\2\u031e\u031f\5f\64\2\u031f\u0320\7\22\2\2\u0320",
    "\u0322\3\2\2\2\u0321\u0315\3\2\2\2\u0321\u0316\3\2\2\2\u0321\u0317\3",
    "\2\2\2\u0321\u0318\3\2\2\2\u0321\u0319\3\2\2\2\u0321\u031a\3\2\2\2\u0321",
    "\u031b\3\2\2\2\u0321\u031c\3\2\2\2\u0321\u031d\3\2\2\2\u0322}\3\2\2",
    "\2\u0323\u0324\7\27\2\2\u0324\u0325\t\30\2\2\u0325\u0326\5f\64\2\u0326",
    "\u0327\7\21\2\2\u0327\u0328\5f\64\2\u0328\u0329\t\31\2\2\u0329\177\3",
    "\2\2\2\u032a\u032c\7\30\2\2\u032b\u032a\3\2\2\2\u032b\u032c\3\2\2\2",
    "\u032c\u032d\3\2\2\2\u032d\u0337\7\31\2\2\u032e\u0338\7\r\2\2\u032f",
    "\u0334\5\u0082B\2\u0330\u0331\7\21\2\2\u0331\u0333\5\u0082B\2\u0332",
    "\u0330\3\2\2\2\u0333\u0336\3\2\2\2\u0334\u0332\3\2\2\2\u0334\u0335\3",
    "\2\2\2\u0335\u0338\3\2\2\2\u0336\u0334\3\2\2\2\u0337\u032e\3\2\2\2\u0337",
    "\u032f\3\2\2\2\u0338\u0339\3\2\2\2\u0339\u033a\7\32\2\2\u033a\u0081",
    "\3\2\2\2\u033b\u033c\5\u00a0Q\2\u033c\u033d\7\r\2\2\u033d\u033e\5f\64",
    "\2\u033e\u0083\3\2\2\2\u033f\u0340\5\"\22\2\u0340\u034a\7\31\2\2\u0341",
    "\u034b\7\r\2\2\u0342\u0347\5\u0086D\2\u0343\u0344\7\21\2\2\u0344\u0346",
    "\5\u0086D\2\u0345\u0343\3\2\2\2\u0346\u0349\3\2\2\2\u0347\u0345\3\2",
    "\2\2\u0347\u0348\3\2\2\2\u0348\u034b\3\2\2\2\u0349\u0347\3\2\2\2\u034a",
    "\u0341\3\2\2\2\u034a\u0342\3\2\2\2\u034b\u034c\3\2\2\2\u034c\u034d\7",
    "\32\2\2\u034d\u0085\3\2\2\2\u034e\u034f\5\u00a0Q\2\u034f\u0350\7\r\2",
    "\2\u0350\u0351\5f\64\2\u0351\u0087\3\2\2\2\u0352\u0357\7\24\2\2\u0353",
    "\u0354\7\25\2\2\u0354\u0355\5 \21\2\u0355\u0356\7\26\2\2\u0356\u0358",
    "\3\2\2\2\u0357\u0353\3\2\2\2\u0357\u0358\3\2\2\2\u0358\u035a\3\2\2\2",
    "\u0359\u0352\3\2\2\2\u0359\u035a\3\2\2\2\u035a\u035b\3\2\2\2\u035b\u0364",
    "\7\31\2\2\u035c\u0361\5f\64\2\u035d\u035e\7\21\2\2\u035e\u0360\5f\64",
    "\2\u035f\u035d\3\2\2\2\u0360\u0363\3\2\2\2\u0361\u035f\3\2\2\2\u0361",
    "\u0362\3\2\2\2\u0362\u0365\3\2\2\2\u0363\u0361\3\2\2\2\u0364\u035c\3",
    "\2\2\2\u0364\u0365\3\2\2\2\u0365\u0366\3\2\2\2\u0366\u0367\7\32\2\2",
    "\u0367\u0089\3\2\2\2\u0368\u0369\7\u0081\2\2\u0369\u036a\5\u0096L\2",
    "\u036a\u008b\3\2\2\2\u036b\u036c\7\u0082\2\2\u036c\u036d\5\u0096L\2",
    "\u036d\u036e\7$\2\2\u036e\u0370\5\26\f\2\u036f\u0371\5\u008aF\2\u0370",
    "\u036f\3\2\2\2\u0370\u0371\3\2\2\2\u0371\u008d\3\2\2\2\u0372\u0373\7",
    "\u0083\2\2\u0373\u0374\7\31\2\2\u0374\u0379\5\u008cG\2\u0375\u0376\7",
    "\21\2\2\u0376\u0378\5\u008cG\2\u0377\u0375\3\2\2\2\u0378\u037b\3\2\2",
    "\2\u0379\u0377\3\2\2\2\u0379\u037a\3\2\2\2\u037a\u037c\3\2\2\2\u037b",
    "\u0379\3\2\2\2\u037c\u037e\7\32\2\2\u037d\u037f\5\u008aF\2\u037e\u037d",
    "\3\2\2\2\u037e\u037f\3\2\2\2\u037f\u008f\3\2\2\2\u0380\u0387\5\u0092",
    "J\2\u0381\u0387\5\u0094K\2\u0382\u0387\5\u0096L\2\u0383\u0387\5\u0098",
    "M\2\u0384\u0387\5\u009aN\2\u0385\u0387\5\u009cO\2\u0386\u0380\3\2\2",
    "\2\u0386\u0381\3\2\2\2\u0386\u0382\3\2\2\2\u0386\u0383\3\2\2\2\u0386",
    "\u0384\3\2\2\2\u0386\u0385\3\2\2\2\u0387\u0091\3\2\2\2\u0388\u0389\7",
    "\61\2\2\u0389\u0093\3\2\2\2\u038a\u038b\t\32\2\2\u038b\u0095\3\2\2\2",
    "\u038c\u038d\7\u0089\2\2\u038d\u0097\3\2\2\2\u038e\u038f\7\u0086\2\2",
    "\u038f\u0099\3\2\2\2\u0390\u0391\7\u0087\2\2\u0391\u009b\3\2\2\2\u0392",
    "\u0394\7\u0085\2\2\u0393\u0395\5\u009eP\2\u0394\u0393\3\2\2\2\u0394",
    "\u0395\3\2\2\2\u0395\u009d\3\2\2\2\u0396\u039a\5h\65\2\u0397\u039a\5",
    "l\67\2\u0398\u039a\7\u0089\2\2\u0399\u0396\3\2\2\2\u0399\u0397\3\2\2",
    "\2\u0399\u0398\3\2\2\2\u039a\u009f\3\2\2\2\u039b\u039c\t\33\2\2\u039c",
    "\u00a1\3\2\2\2g\u00a3\u00a8\u00ae\u00b4\u00ba\u00c0\u00c6\u00cc\u00d2",
    "\u00d8\u00e2\u00e7\u00eb\u00ee\u00f6\u00f9\u0101\u0104\u010d\u0115\u0125",
    "\u012a\u0141\u014c\u0150\u015b\u0165\u0168\u0179\u0182\u0194\u0197\u01a3",
    "\u01a8\u01ac\u01af\u01b2\u01b6\u01c0\u01c9\u01d5\u01e1\u01e4\u01ea\u01f1",
    "\u0211\u0220\u022f\u0237\u023e\u0240\u0249\u026d\u0276\u0279\u028d\u0292",
    "\u029a\u02ad\u02af\u02c0\u02c3\u02c7\u02cb\u02ce\u02d1\u02d5\u02d8\u02db",
    "\u02de\u02e2\u02e5\u02e8\u02ec\u02ef\u02f2\u02f5\u02fb\u02ff\u0302\u0306",
    "\u0309\u030d\u0311\u0313\u0321\u032b\u0334\u0337\u0347\u034a\u0357\u0359",
    "\u0361\u0364\u0370\u0379\u037e\u0386\u0394\u0399"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'library'", "'version'", "'using'", "'include'", 
                     "'called'", "'public'", "'private'", "'parameter'", 
                     "'default'", "'codesystem'", "':'", "'valueset'", "'codesystems'", 
                     "'('", "','", "')'", "'.'", "'List'", "'<'", "'>'", 
                     "'Interval'", "'Tuple'", "'{'", "'}'", "'define'", 
                     "'context'", "'function'", "'with'", "'such that'", 
                     "'without'", "'['", "'in'", "']'", "'from'", "'where'", 
                     "'return'", "'all'", "'distinct'", "'sort'", "'by'", 
                     "'asc'", "'ascending'", "'desc'", "'descending'", "'is'", 
                     "'not'", "'null'", "'true'", "'false'", "'as'", "'cast'", 
                     "'exists'", "'properly'", "'between'", "'and'", "'difference'", 
                     "'<='", "'>='", "'='", "'<>'", "'matches'", "'contains'", 
                     "'or'", "'xor'", "'union'", "'intersect'", "'except'", 
                     "'year'", "'month'", "'day'", "'hour'", "'minute'", 
                     "'second'", "'millisecond'", "'date'", "'time'", "'timezone'", 
                     "'years'", "'months'", "'days'", "'hours'", "'minutes'", 
                     "'seconds'", "'milliseconds'", "'convert'", "'to'", 
                     "'+'", "'-'", "'start'", "'end'", "'of'", "'duration'", 
                     "'width'", "'successor'", "'predecessor'", "'singleton'", 
                     "'minimum'", "'maximum'", "'^'", "'*'", "'/'", "'div'", 
                     "'mod'", "'if'", "'then'", "'else'", "'case'", "'collapse'", 
                     "'expand'", "'when'", "'or before'", "'or after'", 
                     "'or more'", "'or less'", "'starts'", "'ends'", "'occurs'", 
                     "'same'", "'includes'", "'during'", "'included in'", 
                     "'before'", "'after'", "'within'", "'meets'", "'overlaps'", 
                     "'display'", "'Code'", "'Concept'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', "IDENTIFIER", "QUANTITY", 
                      "DATETIME", "TIME", "QUOTEDIDENTIFIER", "STRING", 
                      "WS", "NEWLINE", "COMMENT", "LINE_COMMENT" ];

var ruleNames =  [ "logic", "libraryDefinition", "usingDefinition", "includeDefinition", 
                   "localIdentifier", "accessModifier", "parameterDefinition", 
                   "codesystemDefinition", "valuesetDefinition", "codesystems", 
                   "codesystemIdentifier", "libraryIdentifier", "codesystemId", 
                   "valuesetId", "versionSpecifier", "typeSpecifier", "namedTypeSpecifier", 
                   "modelIdentifier", "listTypeSpecifier", "intervalTypeSpecifier", 
                   "tupleTypeSpecifier", "tupleElementDefinition", "statement", 
                   "expressionDefinition", "contextDefinition", "functionDefinition", 
                   "operandDefinition", "functionBody", "querySource", "aliasedQuerySource", 
                   "alias", "queryInclusionClause", "withClause", "withoutClause", 
                   "retrieve", "valuesetPathIdentifier", "valueset", "qualifier", 
                   "query", "sourceClause", "singleSourceClause", "multipleSourceClause", 
                   "defineClause", "defineClauseItem", "whereClause", "returnClause", 
                   "sortClause", "sortDirection", "sortByItem", "qualifiedIdentifier", 
                   "expression", "dateTimePrecision", "dateTimeComponent", 
                   "pluralDateTimePrecision", "expressionTerm", "caseExpressionItem", 
                   "dateTimePrecisionSpecifier", "relativeQualifier", "offsetRelativeQualifier", 
                   "quantityOffset", "intervalOperatorPhrase", "term", "intervalSelector", 
                   "tupleSelector", "tupleElementSelector", "instanceSelector", 
                   "instanceElementSelector", "listSelector", "displayClause", 
                   "codeSelector", "conceptSelector", "literal", "nullLiteral", 
                   "booleanLiteral", "stringLiteral", "dateTimeLiteral", 
                   "timeLiteral", "quantityLiteral", "unit", "identifier" ];

function cqlParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

cqlParser.prototype = Object.create(antlr4.Parser.prototype);
cqlParser.prototype.constructor = cqlParser;

Object.defineProperty(cqlParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

cqlParser.EOF = antlr4.Token.EOF;
cqlParser.T__0 = 1;
cqlParser.T__1 = 2;
cqlParser.T__2 = 3;
cqlParser.T__3 = 4;
cqlParser.T__4 = 5;
cqlParser.T__5 = 6;
cqlParser.T__6 = 7;
cqlParser.T__7 = 8;
cqlParser.T__8 = 9;
cqlParser.T__9 = 10;
cqlParser.T__10 = 11;
cqlParser.T__11 = 12;
cqlParser.T__12 = 13;
cqlParser.T__13 = 14;
cqlParser.T__14 = 15;
cqlParser.T__15 = 16;
cqlParser.T__16 = 17;
cqlParser.T__17 = 18;
cqlParser.T__18 = 19;
cqlParser.T__19 = 20;
cqlParser.T__20 = 21;
cqlParser.T__21 = 22;
cqlParser.T__22 = 23;
cqlParser.T__23 = 24;
cqlParser.T__24 = 25;
cqlParser.T__25 = 26;
cqlParser.T__26 = 27;
cqlParser.T__27 = 28;
cqlParser.T__28 = 29;
cqlParser.T__29 = 30;
cqlParser.T__30 = 31;
cqlParser.T__31 = 32;
cqlParser.T__32 = 33;
cqlParser.T__33 = 34;
cqlParser.T__34 = 35;
cqlParser.T__35 = 36;
cqlParser.T__36 = 37;
cqlParser.T__37 = 38;
cqlParser.T__38 = 39;
cqlParser.T__39 = 40;
cqlParser.T__40 = 41;
cqlParser.T__41 = 42;
cqlParser.T__42 = 43;
cqlParser.T__43 = 44;
cqlParser.T__44 = 45;
cqlParser.T__45 = 46;
cqlParser.T__46 = 47;
cqlParser.T__47 = 48;
cqlParser.T__48 = 49;
cqlParser.T__49 = 50;
cqlParser.T__50 = 51;
cqlParser.T__51 = 52;
cqlParser.T__52 = 53;
cqlParser.T__53 = 54;
cqlParser.T__54 = 55;
cqlParser.T__55 = 56;
cqlParser.T__56 = 57;
cqlParser.T__57 = 58;
cqlParser.T__58 = 59;
cqlParser.T__59 = 60;
cqlParser.T__60 = 61;
cqlParser.T__61 = 62;
cqlParser.T__62 = 63;
cqlParser.T__63 = 64;
cqlParser.T__64 = 65;
cqlParser.T__65 = 66;
cqlParser.T__66 = 67;
cqlParser.T__67 = 68;
cqlParser.T__68 = 69;
cqlParser.T__69 = 70;
cqlParser.T__70 = 71;
cqlParser.T__71 = 72;
cqlParser.T__72 = 73;
cqlParser.T__73 = 74;
cqlParser.T__74 = 75;
cqlParser.T__75 = 76;
cqlParser.T__76 = 77;
cqlParser.T__77 = 78;
cqlParser.T__78 = 79;
cqlParser.T__79 = 80;
cqlParser.T__80 = 81;
cqlParser.T__81 = 82;
cqlParser.T__82 = 83;
cqlParser.T__83 = 84;
cqlParser.T__84 = 85;
cqlParser.T__85 = 86;
cqlParser.T__86 = 87;
cqlParser.T__87 = 88;
cqlParser.T__88 = 89;
cqlParser.T__89 = 90;
cqlParser.T__90 = 91;
cqlParser.T__91 = 92;
cqlParser.T__92 = 93;
cqlParser.T__93 = 94;
cqlParser.T__94 = 95;
cqlParser.T__95 = 96;
cqlParser.T__96 = 97;
cqlParser.T__97 = 98;
cqlParser.T__98 = 99;
cqlParser.T__99 = 100;
cqlParser.T__100 = 101;
cqlParser.T__101 = 102;
cqlParser.T__102 = 103;
cqlParser.T__103 = 104;
cqlParser.T__104 = 105;
cqlParser.T__105 = 106;
cqlParser.T__106 = 107;
cqlParser.T__107 = 108;
cqlParser.T__108 = 109;
cqlParser.T__109 = 110;
cqlParser.T__110 = 111;
cqlParser.T__111 = 112;
cqlParser.T__112 = 113;
cqlParser.T__113 = 114;
cqlParser.T__114 = 115;
cqlParser.T__115 = 116;
cqlParser.T__116 = 117;
cqlParser.T__117 = 118;
cqlParser.T__118 = 119;
cqlParser.T__119 = 120;
cqlParser.T__120 = 121;
cqlParser.T__121 = 122;
cqlParser.T__122 = 123;
cqlParser.T__123 = 124;
cqlParser.T__124 = 125;
cqlParser.T__125 = 126;
cqlParser.T__126 = 127;
cqlParser.T__127 = 128;
cqlParser.T__128 = 129;
cqlParser.IDENTIFIER = 130;
cqlParser.QUANTITY = 131;
cqlParser.DATETIME = 132;
cqlParser.TIME = 133;
cqlParser.QUOTEDIDENTIFIER = 134;
cqlParser.STRING = 135;
cqlParser.WS = 136;
cqlParser.NEWLINE = 137;
cqlParser.COMMENT = 138;
cqlParser.LINE_COMMENT = 139;

cqlParser.RULE_logic = 0;
cqlParser.RULE_libraryDefinition = 1;
cqlParser.RULE_usingDefinition = 2;
cqlParser.RULE_includeDefinition = 3;
cqlParser.RULE_localIdentifier = 4;
cqlParser.RULE_accessModifier = 5;
cqlParser.RULE_parameterDefinition = 6;
cqlParser.RULE_codesystemDefinition = 7;
cqlParser.RULE_valuesetDefinition = 8;
cqlParser.RULE_codesystems = 9;
cqlParser.RULE_codesystemIdentifier = 10;
cqlParser.RULE_libraryIdentifier = 11;
cqlParser.RULE_codesystemId = 12;
cqlParser.RULE_valuesetId = 13;
cqlParser.RULE_versionSpecifier = 14;
cqlParser.RULE_typeSpecifier = 15;
cqlParser.RULE_namedTypeSpecifier = 16;
cqlParser.RULE_modelIdentifier = 17;
cqlParser.RULE_listTypeSpecifier = 18;
cqlParser.RULE_intervalTypeSpecifier = 19;
cqlParser.RULE_tupleTypeSpecifier = 20;
cqlParser.RULE_tupleElementDefinition = 21;
cqlParser.RULE_statement = 22;
cqlParser.RULE_expressionDefinition = 23;
cqlParser.RULE_contextDefinition = 24;
cqlParser.RULE_functionDefinition = 25;
cqlParser.RULE_operandDefinition = 26;
cqlParser.RULE_functionBody = 27;
cqlParser.RULE_querySource = 28;
cqlParser.RULE_aliasedQuerySource = 29;
cqlParser.RULE_alias = 30;
cqlParser.RULE_queryInclusionClause = 31;
cqlParser.RULE_withClause = 32;
cqlParser.RULE_withoutClause = 33;
cqlParser.RULE_retrieve = 34;
cqlParser.RULE_valuesetPathIdentifier = 35;
cqlParser.RULE_valueset = 36;
cqlParser.RULE_qualifier = 37;
cqlParser.RULE_query = 38;
cqlParser.RULE_sourceClause = 39;
cqlParser.RULE_singleSourceClause = 40;
cqlParser.RULE_multipleSourceClause = 41;
cqlParser.RULE_defineClause = 42;
cqlParser.RULE_defineClauseItem = 43;
cqlParser.RULE_whereClause = 44;
cqlParser.RULE_returnClause = 45;
cqlParser.RULE_sortClause = 46;
cqlParser.RULE_sortDirection = 47;
cqlParser.RULE_sortByItem = 48;
cqlParser.RULE_qualifiedIdentifier = 49;
cqlParser.RULE_expression = 50;
cqlParser.RULE_dateTimePrecision = 51;
cqlParser.RULE_dateTimeComponent = 52;
cqlParser.RULE_pluralDateTimePrecision = 53;
cqlParser.RULE_expressionTerm = 54;
cqlParser.RULE_caseExpressionItem = 55;
cqlParser.RULE_dateTimePrecisionSpecifier = 56;
cqlParser.RULE_relativeQualifier = 57;
cqlParser.RULE_offsetRelativeQualifier = 58;
cqlParser.RULE_quantityOffset = 59;
cqlParser.RULE_intervalOperatorPhrase = 60;
cqlParser.RULE_term = 61;
cqlParser.RULE_intervalSelector = 62;
cqlParser.RULE_tupleSelector = 63;
cqlParser.RULE_tupleElementSelector = 64;
cqlParser.RULE_instanceSelector = 65;
cqlParser.RULE_instanceElementSelector = 66;
cqlParser.RULE_listSelector = 67;
cqlParser.RULE_displayClause = 68;
cqlParser.RULE_codeSelector = 69;
cqlParser.RULE_conceptSelector = 70;
cqlParser.RULE_literal = 71;
cqlParser.RULE_nullLiteral = 72;
cqlParser.RULE_booleanLiteral = 73;
cqlParser.RULE_stringLiteral = 74;
cqlParser.RULE_dateTimeLiteral = 75;
cqlParser.RULE_timeLiteral = 76;
cqlParser.RULE_quantityLiteral = 77;
cqlParser.RULE_unit = 78;
cqlParser.RULE_identifier = 79;

function LogicContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_logic;
    return this;
}

LogicContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogicContext.prototype.constructor = LogicContext;

LogicContext.prototype.libraryDefinition = function() {
    return this.getTypedRuleContext(LibraryDefinitionContext,0);
};

LogicContext.prototype.usingDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UsingDefinitionContext);
    } else {
        return this.getTypedRuleContext(UsingDefinitionContext,i);
    }
};

LogicContext.prototype.includeDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IncludeDefinitionContext);
    } else {
        return this.getTypedRuleContext(IncludeDefinitionContext,i);
    }
};

LogicContext.prototype.codesystemDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CodesystemDefinitionContext);
    } else {
        return this.getTypedRuleContext(CodesystemDefinitionContext,i);
    }
};

LogicContext.prototype.valuesetDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValuesetDefinitionContext);
    } else {
        return this.getTypedRuleContext(ValuesetDefinitionContext,i);
    }
};

LogicContext.prototype.parameterDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterDefinitionContext);
    } else {
        return this.getTypedRuleContext(ParameterDefinitionContext,i);
    }
};

LogicContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

LogicContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterLogic(this);
	}
};

LogicContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitLogic(this);
	}
};




cqlParser.LogicContext = LogicContext;

cqlParser.prototype.logic = function() {

    var localctx = new LogicContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, cqlParser.RULE_logic);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        _la = this._input.LA(1);
        if(_la===cqlParser.T__0) {
            this.state = 160;
            this.libraryDefinition();
        }

        this.state = 166;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===cqlParser.T__2) {
            this.state = 163;
            this.usingDefinition();
            this.state = 168;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 172;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===cqlParser.T__3) {
            this.state = 169;
            this.includeDefinition();
            this.state = 174;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 178;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 175;
                this.codesystemDefinition(); 
            }
            this.state = 180;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

        this.state = 184;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 181;
                this.valuesetDefinition(); 
            }
            this.state = 186;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

        this.state = 190;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7))) !== 0)) {
            this.state = 187;
            this.parameterDefinition();
            this.state = 192;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 194; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 193;
            this.statement();
            this.state = 196; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===cqlParser.T__24 || _la===cqlParser.T__25);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LibraryDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_libraryDefinition;
    return this;
}

LibraryDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LibraryDefinitionContext.prototype.constructor = LibraryDefinitionContext;

LibraryDefinitionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

LibraryDefinitionContext.prototype.versionSpecifier = function() {
    return this.getTypedRuleContext(VersionSpecifierContext,0);
};

LibraryDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterLibraryDefinition(this);
	}
};

LibraryDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitLibraryDefinition(this);
	}
};




cqlParser.LibraryDefinitionContext = LibraryDefinitionContext;

cqlParser.prototype.libraryDefinition = function() {

    var localctx = new LibraryDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, cqlParser.RULE_libraryDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this.match(cqlParser.T__0);
        this.state = 199;
        this.identifier();
        this.state = 202;
        _la = this._input.LA(1);
        if(_la===cqlParser.T__1) {
            this.state = 200;
            this.match(cqlParser.T__1);
            this.state = 201;
            this.versionSpecifier();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UsingDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_usingDefinition;
    return this;
}

UsingDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsingDefinitionContext.prototype.constructor = UsingDefinitionContext;

UsingDefinitionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

UsingDefinitionContext.prototype.versionSpecifier = function() {
    return this.getTypedRuleContext(VersionSpecifierContext,0);
};

UsingDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterUsingDefinition(this);
	}
};

UsingDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitUsingDefinition(this);
	}
};




cqlParser.UsingDefinitionContext = UsingDefinitionContext;

cqlParser.prototype.usingDefinition = function() {

    var localctx = new UsingDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, cqlParser.RULE_usingDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        this.match(cqlParser.T__2);
        this.state = 205;
        this.identifier();
        this.state = 208;
        _la = this._input.LA(1);
        if(_la===cqlParser.T__1) {
            this.state = 206;
            this.match(cqlParser.T__1);
            this.state = 207;
            this.versionSpecifier();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IncludeDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_includeDefinition;
    return this;
}

IncludeDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IncludeDefinitionContext.prototype.constructor = IncludeDefinitionContext;

IncludeDefinitionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

IncludeDefinitionContext.prototype.localIdentifier = function() {
    return this.getTypedRuleContext(LocalIdentifierContext,0);
};

IncludeDefinitionContext.prototype.versionSpecifier = function() {
    return this.getTypedRuleContext(VersionSpecifierContext,0);
};

IncludeDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterIncludeDefinition(this);
	}
};

IncludeDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitIncludeDefinition(this);
	}
};




cqlParser.IncludeDefinitionContext = IncludeDefinitionContext;

cqlParser.prototype.includeDefinition = function() {

    var localctx = new IncludeDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, cqlParser.RULE_includeDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.match(cqlParser.T__3);
        this.state = 211;
        this.identifier();
        this.state = 214;
        _la = this._input.LA(1);
        if(_la===cqlParser.T__1) {
            this.state = 212;
            this.match(cqlParser.T__1);
            this.state = 213;
            this.versionSpecifier();
        }

        this.state = 216;
        this.match(cqlParser.T__4);
        this.state = 217;
        this.localIdentifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LocalIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_localIdentifier;
    return this;
}

LocalIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LocalIdentifierContext.prototype.constructor = LocalIdentifierContext;

LocalIdentifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

LocalIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterLocalIdentifier(this);
	}
};

LocalIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitLocalIdentifier(this);
	}
};




cqlParser.LocalIdentifierContext = LocalIdentifierContext;

cqlParser.prototype.localIdentifier = function() {

    var localctx = new LocalIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, cqlParser.RULE_localIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 219;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AccessModifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_accessModifier;
    return this;
}

AccessModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AccessModifierContext.prototype.constructor = AccessModifierContext;


AccessModifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterAccessModifier(this);
	}
};

AccessModifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitAccessModifier(this);
	}
};




cqlParser.AccessModifierContext = AccessModifierContext;

cqlParser.prototype.accessModifier = function() {

    var localctx = new AccessModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, cqlParser.RULE_accessModifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 221;
        _la = this._input.LA(1);
        if(!(_la===cqlParser.T__5 || _la===cqlParser.T__6)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParameterDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_parameterDefinition;
    return this;
}

ParameterDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterDefinitionContext.prototype.constructor = ParameterDefinitionContext;

ParameterDefinitionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ParameterDefinitionContext.prototype.accessModifier = function() {
    return this.getTypedRuleContext(AccessModifierContext,0);
};

ParameterDefinitionContext.prototype.typeSpecifier = function() {
    return this.getTypedRuleContext(TypeSpecifierContext,0);
};

ParameterDefinitionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ParameterDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterParameterDefinition(this);
	}
};

ParameterDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitParameterDefinition(this);
	}
};




cqlParser.ParameterDefinitionContext = ParameterDefinitionContext;

cqlParser.prototype.parameterDefinition = function() {

    var localctx = new ParameterDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, cqlParser.RULE_parameterDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        _la = this._input.LA(1);
        if(_la===cqlParser.T__5 || _la===cqlParser.T__6) {
            this.state = 223;
            this.accessModifier();
        }

        this.state = 226;
        this.match(cqlParser.T__7);
        this.state = 227;
        this.identifier();
        this.state = 229;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << cqlParser.T__1) | (1 << cqlParser.T__17) | (1 << cqlParser.T__20) | (1 << cqlParser.T__21))) !== 0) || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (cqlParser.T__74 - 75)) | (1 << (cqlParser.T__75 - 75)) | (1 << (cqlParser.T__76 - 75)))) !== 0) || ((((_la - 127)) & ~0x1f) == 0 && ((1 << (_la - 127)) & ((1 << (cqlParser.T__126 - 127)) | (1 << (cqlParser.T__127 - 127)) | (1 << (cqlParser.T__128 - 127)) | (1 << (cqlParser.IDENTIFIER - 127)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 127)))) !== 0)) {
            this.state = 228;
            this.typeSpecifier();
        }

        this.state = 233;
        _la = this._input.LA(1);
        if(_la===cqlParser.T__8) {
            this.state = 231;
            this.match(cqlParser.T__8);
            this.state = 232;
            this.expression(0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CodesystemDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_codesystemDefinition;
    return this;
}

CodesystemDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodesystemDefinitionContext.prototype.constructor = CodesystemDefinitionContext;

CodesystemDefinitionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

CodesystemDefinitionContext.prototype.codesystemId = function() {
    return this.getTypedRuleContext(CodesystemIdContext,0);
};

CodesystemDefinitionContext.prototype.accessModifier = function() {
    return this.getTypedRuleContext(AccessModifierContext,0);
};

CodesystemDefinitionContext.prototype.versionSpecifier = function() {
    return this.getTypedRuleContext(VersionSpecifierContext,0);
};

CodesystemDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterCodesystemDefinition(this);
	}
};

CodesystemDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitCodesystemDefinition(this);
	}
};




cqlParser.CodesystemDefinitionContext = CodesystemDefinitionContext;

cqlParser.prototype.codesystemDefinition = function() {

    var localctx = new CodesystemDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, cqlParser.RULE_codesystemDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        _la = this._input.LA(1);
        if(_la===cqlParser.T__5 || _la===cqlParser.T__6) {
            this.state = 235;
            this.accessModifier();
        }

        this.state = 238;
        this.match(cqlParser.T__9);
        this.state = 239;
        this.identifier();
        this.state = 240;
        this.match(cqlParser.T__10);
        this.state = 241;
        this.codesystemId();
        this.state = 244;
        _la = this._input.LA(1);
        if(_la===cqlParser.T__1) {
            this.state = 242;
            this.match(cqlParser.T__1);
            this.state = 243;
            this.versionSpecifier();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValuesetDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_valuesetDefinition;
    return this;
}

ValuesetDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetDefinitionContext.prototype.constructor = ValuesetDefinitionContext;

ValuesetDefinitionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ValuesetDefinitionContext.prototype.valuesetId = function() {
    return this.getTypedRuleContext(ValuesetIdContext,0);
};

ValuesetDefinitionContext.prototype.accessModifier = function() {
    return this.getTypedRuleContext(AccessModifierContext,0);
};

ValuesetDefinitionContext.prototype.versionSpecifier = function() {
    return this.getTypedRuleContext(VersionSpecifierContext,0);
};

ValuesetDefinitionContext.prototype.codesystems = function() {
    return this.getTypedRuleContext(CodesystemsContext,0);
};

ValuesetDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterValuesetDefinition(this);
	}
};

ValuesetDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitValuesetDefinition(this);
	}
};




cqlParser.ValuesetDefinitionContext = ValuesetDefinitionContext;

cqlParser.prototype.valuesetDefinition = function() {

    var localctx = new ValuesetDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, cqlParser.RULE_valuesetDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 247;
        _la = this._input.LA(1);
        if(_la===cqlParser.T__5 || _la===cqlParser.T__6) {
            this.state = 246;
            this.accessModifier();
        }

        this.state = 249;
        this.match(cqlParser.T__11);
        this.state = 250;
        this.identifier();
        this.state = 251;
        this.match(cqlParser.T__10);
        this.state = 252;
        this.valuesetId();
        this.state = 255;
        _la = this._input.LA(1);
        if(_la===cqlParser.T__1) {
            this.state = 253;
            this.match(cqlParser.T__1);
            this.state = 254;
            this.versionSpecifier();
        }

        this.state = 258;
        _la = this._input.LA(1);
        if(_la===cqlParser.T__12) {
            this.state = 257;
            this.codesystems();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CodesystemsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_codesystems;
    return this;
}

CodesystemsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodesystemsContext.prototype.constructor = CodesystemsContext;

CodesystemsContext.prototype.codesystemIdentifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CodesystemIdentifierContext);
    } else {
        return this.getTypedRuleContext(CodesystemIdentifierContext,i);
    }
};

CodesystemsContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterCodesystems(this);
	}
};

CodesystemsContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitCodesystems(this);
	}
};




cqlParser.CodesystemsContext = CodesystemsContext;

cqlParser.prototype.codesystems = function() {

    var localctx = new CodesystemsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, cqlParser.RULE_codesystems);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 260;
        this.match(cqlParser.T__12);
        this.state = 261;
        this.match(cqlParser.T__13);
        this.state = 262;
        this.codesystemIdentifier();
        this.state = 267;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===cqlParser.T__14) {
            this.state = 263;
            this.match(cqlParser.T__14);
            this.state = 264;
            this.codesystemIdentifier();
            this.state = 269;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 270;
        this.match(cqlParser.T__15);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CodesystemIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_codesystemIdentifier;
    return this;
}

CodesystemIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodesystemIdentifierContext.prototype.constructor = CodesystemIdentifierContext;

CodesystemIdentifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

CodesystemIdentifierContext.prototype.libraryIdentifier = function() {
    return this.getTypedRuleContext(LibraryIdentifierContext,0);
};

CodesystemIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterCodesystemIdentifier(this);
	}
};

CodesystemIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitCodesystemIdentifier(this);
	}
};




cqlParser.CodesystemIdentifierContext = CodesystemIdentifierContext;

cqlParser.prototype.codesystemIdentifier = function() {

    var localctx = new CodesystemIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, cqlParser.RULE_codesystemIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 275;
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        if(la_===1) {
            this.state = 272;
            this.libraryIdentifier();
            this.state = 273;
            this.match(cqlParser.T__16);

        }
        this.state = 277;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LibraryIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_libraryIdentifier;
    return this;
}

LibraryIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LibraryIdentifierContext.prototype.constructor = LibraryIdentifierContext;

LibraryIdentifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

LibraryIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterLibraryIdentifier(this);
	}
};

LibraryIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitLibraryIdentifier(this);
	}
};




cqlParser.LibraryIdentifierContext = LibraryIdentifierContext;

cqlParser.prototype.libraryIdentifier = function() {

    var localctx = new LibraryIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, cqlParser.RULE_libraryIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 279;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CodesystemIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_codesystemId;
    return this;
}

CodesystemIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodesystemIdContext.prototype.constructor = CodesystemIdContext;

CodesystemIdContext.prototype.STRING = function() {
    return this.getToken(cqlParser.STRING, 0);
};

CodesystemIdContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterCodesystemId(this);
	}
};

CodesystemIdContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitCodesystemId(this);
	}
};




cqlParser.CodesystemIdContext = CodesystemIdContext;

cqlParser.prototype.codesystemId = function() {

    var localctx = new CodesystemIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, cqlParser.RULE_codesystemId);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 281;
        this.match(cqlParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValuesetIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_valuesetId;
    return this;
}

ValuesetIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetIdContext.prototype.constructor = ValuesetIdContext;

ValuesetIdContext.prototype.STRING = function() {
    return this.getToken(cqlParser.STRING, 0);
};

ValuesetIdContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterValuesetId(this);
	}
};

ValuesetIdContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitValuesetId(this);
	}
};




cqlParser.ValuesetIdContext = ValuesetIdContext;

cqlParser.prototype.valuesetId = function() {

    var localctx = new ValuesetIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, cqlParser.RULE_valuesetId);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        this.match(cqlParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VersionSpecifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_versionSpecifier;
    return this;
}

VersionSpecifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VersionSpecifierContext.prototype.constructor = VersionSpecifierContext;

VersionSpecifierContext.prototype.STRING = function() {
    return this.getToken(cqlParser.STRING, 0);
};

VersionSpecifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterVersionSpecifier(this);
	}
};

VersionSpecifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitVersionSpecifier(this);
	}
};




cqlParser.VersionSpecifierContext = VersionSpecifierContext;

cqlParser.prototype.versionSpecifier = function() {

    var localctx = new VersionSpecifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, cqlParser.RULE_versionSpecifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 285;
        this.match(cqlParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeSpecifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_typeSpecifier;
    return this;
}

TypeSpecifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeSpecifierContext.prototype.constructor = TypeSpecifierContext;

TypeSpecifierContext.prototype.namedTypeSpecifier = function() {
    return this.getTypedRuleContext(NamedTypeSpecifierContext,0);
};

TypeSpecifierContext.prototype.listTypeSpecifier = function() {
    return this.getTypedRuleContext(ListTypeSpecifierContext,0);
};

TypeSpecifierContext.prototype.intervalTypeSpecifier = function() {
    return this.getTypedRuleContext(IntervalTypeSpecifierContext,0);
};

TypeSpecifierContext.prototype.tupleTypeSpecifier = function() {
    return this.getTypedRuleContext(TupleTypeSpecifierContext,0);
};

TypeSpecifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterTypeSpecifier(this);
	}
};

TypeSpecifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitTypeSpecifier(this);
	}
};




cqlParser.TypeSpecifierContext = TypeSpecifierContext;

cqlParser.prototype.typeSpecifier = function() {

    var localctx = new TypeSpecifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, cqlParser.RULE_typeSpecifier);
    try {
        this.state = 291;
        switch(this._input.LA(1)) {
        case cqlParser.T__1:
        case cqlParser.T__74:
        case cqlParser.T__75:
        case cqlParser.T__76:
        case cqlParser.T__126:
        case cqlParser.T__127:
        case cqlParser.T__128:
        case cqlParser.IDENTIFIER:
        case cqlParser.QUOTEDIDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 287;
            this.namedTypeSpecifier();
            break;
        case cqlParser.T__17:
            this.enterOuterAlt(localctx, 2);
            this.state = 288;
            this.listTypeSpecifier();
            break;
        case cqlParser.T__20:
            this.enterOuterAlt(localctx, 3);
            this.state = 289;
            this.intervalTypeSpecifier();
            break;
        case cqlParser.T__21:
            this.enterOuterAlt(localctx, 4);
            this.state = 290;
            this.tupleTypeSpecifier();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamedTypeSpecifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_namedTypeSpecifier;
    return this;
}

NamedTypeSpecifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamedTypeSpecifierContext.prototype.constructor = NamedTypeSpecifierContext;

NamedTypeSpecifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

NamedTypeSpecifierContext.prototype.modelIdentifier = function() {
    return this.getTypedRuleContext(ModelIdentifierContext,0);
};

NamedTypeSpecifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterNamedTypeSpecifier(this);
	}
};

NamedTypeSpecifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitNamedTypeSpecifier(this);
	}
};




cqlParser.NamedTypeSpecifierContext = NamedTypeSpecifierContext;

cqlParser.prototype.namedTypeSpecifier = function() {

    var localctx = new NamedTypeSpecifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, cqlParser.RULE_namedTypeSpecifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 296;
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        if(la_===1) {
            this.state = 293;
            this.modelIdentifier();
            this.state = 294;
            this.match(cqlParser.T__16);

        }
        this.state = 298;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ModelIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_modelIdentifier;
    return this;
}

ModelIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModelIdentifierContext.prototype.constructor = ModelIdentifierContext;

ModelIdentifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ModelIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterModelIdentifier(this);
	}
};

ModelIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitModelIdentifier(this);
	}
};




cqlParser.ModelIdentifierContext = ModelIdentifierContext;

cqlParser.prototype.modelIdentifier = function() {

    var localctx = new ModelIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, cqlParser.RULE_modelIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 300;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ListTypeSpecifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_listTypeSpecifier;
    return this;
}

ListTypeSpecifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListTypeSpecifierContext.prototype.constructor = ListTypeSpecifierContext;

ListTypeSpecifierContext.prototype.typeSpecifier = function() {
    return this.getTypedRuleContext(TypeSpecifierContext,0);
};

ListTypeSpecifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterListTypeSpecifier(this);
	}
};

ListTypeSpecifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitListTypeSpecifier(this);
	}
};




cqlParser.ListTypeSpecifierContext = ListTypeSpecifierContext;

cqlParser.prototype.listTypeSpecifier = function() {

    var localctx = new ListTypeSpecifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, cqlParser.RULE_listTypeSpecifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 302;
        this.match(cqlParser.T__17);
        this.state = 303;
        this.match(cqlParser.T__18);
        this.state = 304;
        this.typeSpecifier();
        this.state = 305;
        this.match(cqlParser.T__19);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IntervalTypeSpecifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_intervalTypeSpecifier;
    return this;
}

IntervalTypeSpecifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntervalTypeSpecifierContext.prototype.constructor = IntervalTypeSpecifierContext;

IntervalTypeSpecifierContext.prototype.typeSpecifier = function() {
    return this.getTypedRuleContext(TypeSpecifierContext,0);
};

IntervalTypeSpecifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterIntervalTypeSpecifier(this);
	}
};

IntervalTypeSpecifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitIntervalTypeSpecifier(this);
	}
};




cqlParser.IntervalTypeSpecifierContext = IntervalTypeSpecifierContext;

cqlParser.prototype.intervalTypeSpecifier = function() {

    var localctx = new IntervalTypeSpecifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, cqlParser.RULE_intervalTypeSpecifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 307;
        this.match(cqlParser.T__20);
        this.state = 308;
        this.match(cqlParser.T__18);
        this.state = 309;
        this.typeSpecifier();
        this.state = 310;
        this.match(cqlParser.T__19);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TupleTypeSpecifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_tupleTypeSpecifier;
    return this;
}

TupleTypeSpecifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TupleTypeSpecifierContext.prototype.constructor = TupleTypeSpecifierContext;

TupleTypeSpecifierContext.prototype.tupleElementDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TupleElementDefinitionContext);
    } else {
        return this.getTypedRuleContext(TupleElementDefinitionContext,i);
    }
};

TupleTypeSpecifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterTupleTypeSpecifier(this);
	}
};

TupleTypeSpecifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitTupleTypeSpecifier(this);
	}
};




cqlParser.TupleTypeSpecifierContext = TupleTypeSpecifierContext;

cqlParser.prototype.tupleTypeSpecifier = function() {

    var localctx = new TupleTypeSpecifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, cqlParser.RULE_tupleTypeSpecifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 312;
        this.match(cqlParser.T__21);
        this.state = 313;
        this.match(cqlParser.T__22);
        this.state = 314;
        this.tupleElementDefinition();
        this.state = 319;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===cqlParser.T__14) {
            this.state = 315;
            this.match(cqlParser.T__14);
            this.state = 316;
            this.tupleElementDefinition();
            this.state = 321;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 322;
        this.match(cqlParser.T__23);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TupleElementDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_tupleElementDefinition;
    return this;
}

TupleElementDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TupleElementDefinitionContext.prototype.constructor = TupleElementDefinitionContext;

TupleElementDefinitionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

TupleElementDefinitionContext.prototype.typeSpecifier = function() {
    return this.getTypedRuleContext(TypeSpecifierContext,0);
};

TupleElementDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterTupleElementDefinition(this);
	}
};

TupleElementDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitTupleElementDefinition(this);
	}
};




cqlParser.TupleElementDefinitionContext = TupleElementDefinitionContext;

cqlParser.prototype.tupleElementDefinition = function() {

    var localctx = new TupleElementDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, cqlParser.RULE_tupleElementDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 324;
        this.identifier();
        this.state = 325;
        this.typeSpecifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.expressionDefinition = function() {
    return this.getTypedRuleContext(ExpressionDefinitionContext,0);
};

StatementContext.prototype.contextDefinition = function() {
    return this.getTypedRuleContext(ContextDefinitionContext,0);
};

StatementContext.prototype.functionDefinition = function() {
    return this.getTypedRuleContext(FunctionDefinitionContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitStatement(this);
	}
};




cqlParser.StatementContext = StatementContext;

cqlParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, cqlParser.RULE_statement);
    try {
        this.state = 330;
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 327;
            this.expressionDefinition();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 328;
            this.contextDefinition();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 329;
            this.functionDefinition();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_expressionDefinition;
    return this;
}

ExpressionDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionDefinitionContext.prototype.constructor = ExpressionDefinitionContext;

ExpressionDefinitionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ExpressionDefinitionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionDefinitionContext.prototype.accessModifier = function() {
    return this.getTypedRuleContext(AccessModifierContext,0);
};

ExpressionDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterExpressionDefinition(this);
	}
};

ExpressionDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitExpressionDefinition(this);
	}
};




cqlParser.ExpressionDefinitionContext = ExpressionDefinitionContext;

cqlParser.prototype.expressionDefinition = function() {

    var localctx = new ExpressionDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, cqlParser.RULE_expressionDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 332;
        this.match(cqlParser.T__24);
        this.state = 334;
        _la = this._input.LA(1);
        if(_la===cqlParser.T__5 || _la===cqlParser.T__6) {
            this.state = 333;
            this.accessModifier();
        }

        this.state = 336;
        this.identifier();
        this.state = 337;
        this.match(cqlParser.T__10);
        this.state = 338;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ContextDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_contextDefinition;
    return this;
}

ContextDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContextDefinitionContext.prototype.constructor = ContextDefinitionContext;

ContextDefinitionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ContextDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterContextDefinition(this);
	}
};

ContextDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitContextDefinition(this);
	}
};




cqlParser.ContextDefinitionContext = ContextDefinitionContext;

cqlParser.prototype.contextDefinition = function() {

    var localctx = new ContextDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, cqlParser.RULE_contextDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 340;
        this.match(cqlParser.T__25);
        this.state = 341;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_functionDefinition;
    return this;
}

FunctionDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDefinitionContext.prototype.constructor = FunctionDefinitionContext;

FunctionDefinitionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

FunctionDefinitionContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

FunctionDefinitionContext.prototype.accessModifier = function() {
    return this.getTypedRuleContext(AccessModifierContext,0);
};

FunctionDefinitionContext.prototype.operandDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperandDefinitionContext);
    } else {
        return this.getTypedRuleContext(OperandDefinitionContext,i);
    }
};

FunctionDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterFunctionDefinition(this);
	}
};

FunctionDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitFunctionDefinition(this);
	}
};




cqlParser.FunctionDefinitionContext = FunctionDefinitionContext;

cqlParser.prototype.functionDefinition = function() {

    var localctx = new FunctionDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, cqlParser.RULE_functionDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 343;
        this.match(cqlParser.T__24);
        this.state = 345;
        _la = this._input.LA(1);
        if(_la===cqlParser.T__5 || _la===cqlParser.T__6) {
            this.state = 344;
            this.accessModifier();
        }

        this.state = 347;
        this.match(cqlParser.T__26);
        this.state = 348;
        this.identifier();
        this.state = 349;
        this.match(cqlParser.T__13);
        this.state = 358;
        _la = this._input.LA(1);
        if(_la===cqlParser.T__1 || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (cqlParser.T__74 - 75)) | (1 << (cqlParser.T__75 - 75)) | (1 << (cqlParser.T__76 - 75)))) !== 0) || ((((_la - 127)) & ~0x1f) == 0 && ((1 << (_la - 127)) & ((1 << (cqlParser.T__126 - 127)) | (1 << (cqlParser.T__127 - 127)) | (1 << (cqlParser.T__128 - 127)) | (1 << (cqlParser.IDENTIFIER - 127)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 127)))) !== 0)) {
            this.state = 350;
            this.operandDefinition();
            this.state = 355;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===cqlParser.T__14) {
                this.state = 351;
                this.match(cqlParser.T__14);
                this.state = 352;
                this.operandDefinition();
                this.state = 357;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 360;
        this.match(cqlParser.T__15);
        this.state = 361;
        this.match(cqlParser.T__10);
        this.state = 362;
        this.functionBody();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperandDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_operandDefinition;
    return this;
}

OperandDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperandDefinitionContext.prototype.constructor = OperandDefinitionContext;

OperandDefinitionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

OperandDefinitionContext.prototype.typeSpecifier = function() {
    return this.getTypedRuleContext(TypeSpecifierContext,0);
};

OperandDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterOperandDefinition(this);
	}
};

OperandDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitOperandDefinition(this);
	}
};




cqlParser.OperandDefinitionContext = OperandDefinitionContext;

cqlParser.prototype.operandDefinition = function() {

    var localctx = new OperandDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, cqlParser.RULE_operandDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 364;
        this.identifier();
        this.state = 365;
        this.typeSpecifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_functionBody;
    return this;
}

FunctionBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionBodyContext.prototype.constructor = FunctionBodyContext;

FunctionBodyContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

FunctionBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterFunctionBody(this);
	}
};

FunctionBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitFunctionBody(this);
	}
};




cqlParser.FunctionBodyContext = FunctionBodyContext;

cqlParser.prototype.functionBody = function() {

    var localctx = new FunctionBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, cqlParser.RULE_functionBody);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 367;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QuerySourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_querySource;
    return this;
}

QuerySourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuerySourceContext.prototype.constructor = QuerySourceContext;

QuerySourceContext.prototype.retrieve = function() {
    return this.getTypedRuleContext(RetrieveContext,0);
};

QuerySourceContext.prototype.qualifiedIdentifier = function() {
    return this.getTypedRuleContext(QualifiedIdentifierContext,0);
};

QuerySourceContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

QuerySourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterQuerySource(this);
	}
};

QuerySourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitQuerySource(this);
	}
};




cqlParser.QuerySourceContext = QuerySourceContext;

cqlParser.prototype.querySource = function() {

    var localctx = new QuerySourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, cqlParser.RULE_querySource);
    try {
        this.state = 375;
        switch(this._input.LA(1)) {
        case cqlParser.T__30:
            this.enterOuterAlt(localctx, 1);
            this.state = 369;
            this.retrieve();
            break;
        case cqlParser.T__1:
        case cqlParser.T__74:
        case cqlParser.T__75:
        case cqlParser.T__76:
        case cqlParser.T__126:
        case cqlParser.T__127:
        case cqlParser.T__128:
        case cqlParser.IDENTIFIER:
        case cqlParser.QUOTEDIDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 370;
            this.qualifiedIdentifier();
            break;
        case cqlParser.T__13:
            this.enterOuterAlt(localctx, 3);
            this.state = 371;
            this.match(cqlParser.T__13);
            this.state = 372;
            this.expression(0);
            this.state = 373;
            this.match(cqlParser.T__15);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AliasedQuerySourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_aliasedQuerySource;
    return this;
}

AliasedQuerySourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AliasedQuerySourceContext.prototype.constructor = AliasedQuerySourceContext;

AliasedQuerySourceContext.prototype.querySource = function() {
    return this.getTypedRuleContext(QuerySourceContext,0);
};

AliasedQuerySourceContext.prototype.alias = function() {
    return this.getTypedRuleContext(AliasContext,0);
};

AliasedQuerySourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterAliasedQuerySource(this);
	}
};

AliasedQuerySourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitAliasedQuerySource(this);
	}
};




cqlParser.AliasedQuerySourceContext = AliasedQuerySourceContext;

cqlParser.prototype.aliasedQuerySource = function() {

    var localctx = new AliasedQuerySourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, cqlParser.RULE_aliasedQuerySource);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 377;
        this.querySource();
        this.state = 378;
        this.alias();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AliasContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_alias;
    return this;
}

AliasContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AliasContext.prototype.constructor = AliasContext;

AliasContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

AliasContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterAlias(this);
	}
};

AliasContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitAlias(this);
	}
};




cqlParser.AliasContext = AliasContext;

cqlParser.prototype.alias = function() {

    var localctx = new AliasContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, cqlParser.RULE_alias);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 380;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QueryInclusionClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_queryInclusionClause;
    return this;
}

QueryInclusionClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QueryInclusionClauseContext.prototype.constructor = QueryInclusionClauseContext;

QueryInclusionClauseContext.prototype.withClause = function() {
    return this.getTypedRuleContext(WithClauseContext,0);
};

QueryInclusionClauseContext.prototype.withoutClause = function() {
    return this.getTypedRuleContext(WithoutClauseContext,0);
};

QueryInclusionClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterQueryInclusionClause(this);
	}
};

QueryInclusionClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitQueryInclusionClause(this);
	}
};




cqlParser.QueryInclusionClauseContext = QueryInclusionClauseContext;

cqlParser.prototype.queryInclusionClause = function() {

    var localctx = new QueryInclusionClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, cqlParser.RULE_queryInclusionClause);
    try {
        this.state = 384;
        switch(this._input.LA(1)) {
        case cqlParser.T__27:
            this.enterOuterAlt(localctx, 1);
            this.state = 382;
            this.withClause();
            break;
        case cqlParser.T__29:
            this.enterOuterAlt(localctx, 2);
            this.state = 383;
            this.withoutClause();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WithClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_withClause;
    return this;
}

WithClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WithClauseContext.prototype.constructor = WithClauseContext;

WithClauseContext.prototype.aliasedQuerySource = function() {
    return this.getTypedRuleContext(AliasedQuerySourceContext,0);
};

WithClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

WithClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterWithClause(this);
	}
};

WithClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitWithClause(this);
	}
};




cqlParser.WithClauseContext = WithClauseContext;

cqlParser.prototype.withClause = function() {

    var localctx = new WithClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, cqlParser.RULE_withClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 386;
        this.match(cqlParser.T__27);
        this.state = 387;
        this.aliasedQuerySource();
        this.state = 388;
        this.match(cqlParser.T__28);
        this.state = 389;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WithoutClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_withoutClause;
    return this;
}

WithoutClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WithoutClauseContext.prototype.constructor = WithoutClauseContext;

WithoutClauseContext.prototype.aliasedQuerySource = function() {
    return this.getTypedRuleContext(AliasedQuerySourceContext,0);
};

WithoutClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

WithoutClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterWithoutClause(this);
	}
};

WithoutClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitWithoutClause(this);
	}
};




cqlParser.WithoutClauseContext = WithoutClauseContext;

cqlParser.prototype.withoutClause = function() {

    var localctx = new WithoutClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, cqlParser.RULE_withoutClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 391;
        this.match(cqlParser.T__29);
        this.state = 392;
        this.aliasedQuerySource();
        this.state = 393;
        this.match(cqlParser.T__28);
        this.state = 394;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RetrieveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_retrieve;
    return this;
}

RetrieveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RetrieveContext.prototype.constructor = RetrieveContext;

RetrieveContext.prototype.namedTypeSpecifier = function() {
    return this.getTypedRuleContext(NamedTypeSpecifierContext,0);
};

RetrieveContext.prototype.valueset = function() {
    return this.getTypedRuleContext(ValuesetContext,0);
};

RetrieveContext.prototype.valuesetPathIdentifier = function() {
    return this.getTypedRuleContext(ValuesetPathIdentifierContext,0);
};

RetrieveContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterRetrieve(this);
	}
};

RetrieveContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitRetrieve(this);
	}
};




cqlParser.RetrieveContext = RetrieveContext;

cqlParser.prototype.retrieve = function() {

    var localctx = new RetrieveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, cqlParser.RULE_retrieve);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 396;
        this.match(cqlParser.T__30);
        this.state = 397;
        this.namedTypeSpecifier();
        this.state = 405;
        _la = this._input.LA(1);
        if(_la===cqlParser.T__10) {
            this.state = 398;
            this.match(cqlParser.T__10);
            this.state = 402;
            var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
            if(la_===1) {
                this.state = 399;
                this.valuesetPathIdentifier();
                this.state = 400;
                this.match(cqlParser.T__31);

            }
            this.state = 404;
            this.valueset();
        }

        this.state = 407;
        this.match(cqlParser.T__32);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValuesetPathIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_valuesetPathIdentifier;
    return this;
}

ValuesetPathIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetPathIdentifierContext.prototype.constructor = ValuesetPathIdentifierContext;

ValuesetPathIdentifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ValuesetPathIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterValuesetPathIdentifier(this);
	}
};

ValuesetPathIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitValuesetPathIdentifier(this);
	}
};




cqlParser.ValuesetPathIdentifierContext = ValuesetPathIdentifierContext;

cqlParser.prototype.valuesetPathIdentifier = function() {

    var localctx = new ValuesetPathIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, cqlParser.RULE_valuesetPathIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 409;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValuesetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_valueset;
    return this;
}

ValuesetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetContext.prototype.constructor = ValuesetContext;

ValuesetContext.prototype.qualifiedIdentifier = function() {
    return this.getTypedRuleContext(QualifiedIdentifierContext,0);
};

ValuesetContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterValueset(this);
	}
};

ValuesetContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitValueset(this);
	}
};




cqlParser.ValuesetContext = ValuesetContext;

cqlParser.prototype.valueset = function() {

    var localctx = new ValuesetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, cqlParser.RULE_valueset);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 411;
        this.qualifiedIdentifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QualifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_qualifier;
    return this;
}

QualifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QualifierContext.prototype.constructor = QualifierContext;

QualifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

QualifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterQualifier(this);
	}
};

QualifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitQualifier(this);
	}
};




cqlParser.QualifierContext = QualifierContext;

cqlParser.prototype.qualifier = function() {

    var localctx = new QualifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, cqlParser.RULE_qualifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 413;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_query;
    return this;
}

QueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QueryContext.prototype.constructor = QueryContext;

QueryContext.prototype.sourceClause = function() {
    return this.getTypedRuleContext(SourceClauseContext,0);
};

QueryContext.prototype.defineClause = function() {
    return this.getTypedRuleContext(DefineClauseContext,0);
};

QueryContext.prototype.queryInclusionClause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(QueryInclusionClauseContext);
    } else {
        return this.getTypedRuleContext(QueryInclusionClauseContext,i);
    }
};

QueryContext.prototype.whereClause = function() {
    return this.getTypedRuleContext(WhereClauseContext,0);
};

QueryContext.prototype.returnClause = function() {
    return this.getTypedRuleContext(ReturnClauseContext,0);
};

QueryContext.prototype.sortClause = function() {
    return this.getTypedRuleContext(SortClauseContext,0);
};

QueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterQuery(this);
	}
};

QueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitQuery(this);
	}
};




cqlParser.QueryContext = QueryContext;

cqlParser.prototype.query = function() {

    var localctx = new QueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, cqlParser.RULE_query);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 415;
        this.sourceClause();
        this.state = 417;
        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
        if(la_===1) {
            this.state = 416;
            this.defineClause();

        }
        this.state = 422;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 419;
                this.queryInclusionClause(); 
            }
            this.state = 424;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
        }

        this.state = 426;
        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
        if(la_===1) {
            this.state = 425;
            this.whereClause();

        }
        this.state = 429;
        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
        if(la_===1) {
            this.state = 428;
            this.returnClause();

        }
        this.state = 432;
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        if(la_===1) {
            this.state = 431;
            this.sortClause();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SourceClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_sourceClause;
    return this;
}

SourceClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceClauseContext.prototype.constructor = SourceClauseContext;

SourceClauseContext.prototype.singleSourceClause = function() {
    return this.getTypedRuleContext(SingleSourceClauseContext,0);
};

SourceClauseContext.prototype.multipleSourceClause = function() {
    return this.getTypedRuleContext(MultipleSourceClauseContext,0);
};

SourceClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterSourceClause(this);
	}
};

SourceClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitSourceClause(this);
	}
};




cqlParser.SourceClauseContext = SourceClauseContext;

cqlParser.prototype.sourceClause = function() {

    var localctx = new SourceClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, cqlParser.RULE_sourceClause);
    try {
        this.state = 436;
        switch(this._input.LA(1)) {
        case cqlParser.T__1:
        case cqlParser.T__13:
        case cqlParser.T__30:
        case cqlParser.T__74:
        case cqlParser.T__75:
        case cqlParser.T__76:
        case cqlParser.T__126:
        case cqlParser.T__127:
        case cqlParser.T__128:
        case cqlParser.IDENTIFIER:
        case cqlParser.QUOTEDIDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 434;
            this.singleSourceClause();
            break;
        case cqlParser.T__33:
            this.enterOuterAlt(localctx, 2);
            this.state = 435;
            this.multipleSourceClause();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SingleSourceClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_singleSourceClause;
    return this;
}

SingleSourceClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleSourceClauseContext.prototype.constructor = SingleSourceClauseContext;

SingleSourceClauseContext.prototype.aliasedQuerySource = function() {
    return this.getTypedRuleContext(AliasedQuerySourceContext,0);
};

SingleSourceClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterSingleSourceClause(this);
	}
};

SingleSourceClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitSingleSourceClause(this);
	}
};




cqlParser.SingleSourceClauseContext = SingleSourceClauseContext;

cqlParser.prototype.singleSourceClause = function() {

    var localctx = new SingleSourceClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, cqlParser.RULE_singleSourceClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 438;
        this.aliasedQuerySource();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MultipleSourceClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_multipleSourceClause;
    return this;
}

MultipleSourceClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultipleSourceClauseContext.prototype.constructor = MultipleSourceClauseContext;

MultipleSourceClauseContext.prototype.aliasedQuerySource = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AliasedQuerySourceContext);
    } else {
        return this.getTypedRuleContext(AliasedQuerySourceContext,i);
    }
};

MultipleSourceClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterMultipleSourceClause(this);
	}
};

MultipleSourceClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitMultipleSourceClause(this);
	}
};




cqlParser.MultipleSourceClauseContext = MultipleSourceClauseContext;

cqlParser.prototype.multipleSourceClause = function() {

    var localctx = new MultipleSourceClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, cqlParser.RULE_multipleSourceClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 440;
        this.match(cqlParser.T__33);
        this.state = 441;
        this.aliasedQuerySource();
        this.state = 446;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 442;
                this.match(cqlParser.T__14);
                this.state = 443;
                this.aliasedQuerySource(); 
            }
            this.state = 448;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DefineClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_defineClause;
    return this;
}

DefineClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefineClauseContext.prototype.constructor = DefineClauseContext;

DefineClauseContext.prototype.defineClauseItem = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DefineClauseItemContext);
    } else {
        return this.getTypedRuleContext(DefineClauseItemContext,i);
    }
};

DefineClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterDefineClause(this);
	}
};

DefineClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitDefineClause(this);
	}
};




cqlParser.DefineClauseContext = DefineClauseContext;

cqlParser.prototype.defineClause = function() {

    var localctx = new DefineClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, cqlParser.RULE_defineClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 449;
        this.match(cqlParser.T__24);
        this.state = 450;
        this.defineClauseItem();
        this.state = 455;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,39,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 451;
                this.match(cqlParser.T__14);
                this.state = 452;
                this.defineClauseItem(); 
            }
            this.state = 457;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,39,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DefineClauseItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_defineClauseItem;
    return this;
}

DefineClauseItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefineClauseItemContext.prototype.constructor = DefineClauseItemContext;

DefineClauseItemContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

DefineClauseItemContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

DefineClauseItemContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterDefineClauseItem(this);
	}
};

DefineClauseItemContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitDefineClauseItem(this);
	}
};




cqlParser.DefineClauseItemContext = DefineClauseItemContext;

cqlParser.prototype.defineClauseItem = function() {

    var localctx = new DefineClauseItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, cqlParser.RULE_defineClauseItem);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 458;
        this.identifier();
        this.state = 459;
        this.match(cqlParser.T__10);
        this.state = 460;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhereClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_whereClause;
    return this;
}

WhereClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhereClauseContext.prototype.constructor = WhereClauseContext;

WhereClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

WhereClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterWhereClause(this);
	}
};

WhereClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitWhereClause(this);
	}
};




cqlParser.WhereClauseContext = WhereClauseContext;

cqlParser.prototype.whereClause = function() {

    var localctx = new WhereClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, cqlParser.RULE_whereClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 462;
        this.match(cqlParser.T__34);
        this.state = 463;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReturnClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_returnClause;
    return this;
}

ReturnClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnClauseContext.prototype.constructor = ReturnClauseContext;

ReturnClauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ReturnClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterReturnClause(this);
	}
};

ReturnClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitReturnClause(this);
	}
};




cqlParser.ReturnClauseContext = ReturnClauseContext;

cqlParser.prototype.returnClause = function() {

    var localctx = new ReturnClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, cqlParser.RULE_returnClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 465;
        this.match(cqlParser.T__35);
        this.state = 467;
        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
        if(la_===1) {
            this.state = 466;
            _la = this._input.LA(1);
            if(!(_la===cqlParser.T__36 || _la===cqlParser.T__37)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }

        }
        this.state = 469;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SortClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_sortClause;
    return this;
}

SortClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SortClauseContext.prototype.constructor = SortClauseContext;

SortClauseContext.prototype.sortDirection = function() {
    return this.getTypedRuleContext(SortDirectionContext,0);
};

SortClauseContext.prototype.sortByItem = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SortByItemContext);
    } else {
        return this.getTypedRuleContext(SortByItemContext,i);
    }
};

SortClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterSortClause(this);
	}
};

SortClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitSortClause(this);
	}
};




cqlParser.SortClauseContext = SortClauseContext;

cqlParser.prototype.sortClause = function() {

    var localctx = new SortClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, cqlParser.RULE_sortClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 471;
        this.match(cqlParser.T__38);
        this.state = 482;
        switch(this._input.LA(1)) {
        case cqlParser.T__40:
        case cqlParser.T__41:
        case cqlParser.T__42:
        case cqlParser.T__43:
            this.state = 472;
            this.sortDirection();
            break;
        case cqlParser.T__39:
            this.state = 473;
            this.match(cqlParser.T__39);
            this.state = 474;
            this.sortByItem();
            this.state = 479;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 475;
                    this.match(cqlParser.T__14);
                    this.state = 476;
                    this.sortByItem(); 
                }
                this.state = 481;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,41,this._ctx);
            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SortDirectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_sortDirection;
    return this;
}

SortDirectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SortDirectionContext.prototype.constructor = SortDirectionContext;


SortDirectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterSortDirection(this);
	}
};

SortDirectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitSortDirection(this);
	}
};




cqlParser.SortDirectionContext = SortDirectionContext;

cqlParser.prototype.sortDirection = function() {

    var localctx = new SortDirectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, cqlParser.RULE_sortDirection);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 484;
        _la = this._input.LA(1);
        if(!(((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & ((1 << (cqlParser.T__40 - 41)) | (1 << (cqlParser.T__41 - 41)) | (1 << (cqlParser.T__42 - 41)) | (1 << (cqlParser.T__43 - 41)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SortByItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_sortByItem;
    return this;
}

SortByItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SortByItemContext.prototype.constructor = SortByItemContext;

SortByItemContext.prototype.expressionTerm = function() {
    return this.getTypedRuleContext(ExpressionTermContext,0);
};

SortByItemContext.prototype.sortDirection = function() {
    return this.getTypedRuleContext(SortDirectionContext,0);
};

SortByItemContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterSortByItem(this);
	}
};

SortByItemContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitSortByItem(this);
	}
};




cqlParser.SortByItemContext = SortByItemContext;

cqlParser.prototype.sortByItem = function() {

    var localctx = new SortByItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, cqlParser.RULE_sortByItem);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 486;
        this.expressionTerm(0);
        this.state = 488;
        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
        if(la_===1) {
            this.state = 487;
            this.sortDirection();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QualifiedIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_qualifiedIdentifier;
    return this;
}

QualifiedIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QualifiedIdentifierContext.prototype.constructor = QualifiedIdentifierContext;

QualifiedIdentifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

QualifiedIdentifierContext.prototype.qualifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(QualifierContext);
    } else {
        return this.getTypedRuleContext(QualifierContext,i);
    }
};

QualifiedIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterQualifiedIdentifier(this);
	}
};

QualifiedIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitQualifiedIdentifier(this);
	}
};




cqlParser.QualifiedIdentifierContext = QualifiedIdentifierContext;

cqlParser.prototype.qualifiedIdentifier = function() {

    var localctx = new QualifiedIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, cqlParser.RULE_qualifiedIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 495;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,44,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 490;
                this.qualifier();
                this.state = 491;
                this.match(cqlParser.T__16); 
            }
            this.state = 497;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,44,this._ctx);
        }

        this.state = 498;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function DurationBetweenExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DurationBetweenExpressionContext.prototype = Object.create(ExpressionContext.prototype);
DurationBetweenExpressionContext.prototype.constructor = DurationBetweenExpressionContext;

cqlParser.DurationBetweenExpressionContext = DurationBetweenExpressionContext;

DurationBetweenExpressionContext.prototype.pluralDateTimePrecision = function() {
    return this.getTypedRuleContext(PluralDateTimePrecisionContext,0);
};

DurationBetweenExpressionContext.prototype.expressionTerm = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionTermContext);
    } else {
        return this.getTypedRuleContext(ExpressionTermContext,i);
    }
};
DurationBetweenExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterDurationBetweenExpression(this);
	}
};

DurationBetweenExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitDurationBetweenExpression(this);
	}
};


function InFixSetExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InFixSetExpressionContext.prototype = Object.create(ExpressionContext.prototype);
InFixSetExpressionContext.prototype.constructor = InFixSetExpressionContext;

cqlParser.InFixSetExpressionContext = InFixSetExpressionContext;

InFixSetExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
InFixSetExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterInFixSetExpression(this);
	}
};

InFixSetExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitInFixSetExpression(this);
	}
};


function RetrieveExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RetrieveExpressionContext.prototype = Object.create(ExpressionContext.prototype);
RetrieveExpressionContext.prototype.constructor = RetrieveExpressionContext;

cqlParser.RetrieveExpressionContext = RetrieveExpressionContext;

RetrieveExpressionContext.prototype.retrieve = function() {
    return this.getTypedRuleContext(RetrieveContext,0);
};
RetrieveExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterRetrieveExpression(this);
	}
};

RetrieveExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitRetrieveExpression(this);
	}
};


function TimingExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TimingExpressionContext.prototype = Object.create(ExpressionContext.prototype);
TimingExpressionContext.prototype.constructor = TimingExpressionContext;

cqlParser.TimingExpressionContext = TimingExpressionContext;

TimingExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

TimingExpressionContext.prototype.intervalOperatorPhrase = function() {
    return this.getTypedRuleContext(IntervalOperatorPhraseContext,0);
};
TimingExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterTimingExpression(this);
	}
};

TimingExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitTimingExpression(this);
	}
};


function NotExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NotExpressionContext.prototype.constructor = NotExpressionContext;

cqlParser.NotExpressionContext = NotExpressionContext;

NotExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
NotExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterNotExpression(this);
	}
};

NotExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitNotExpression(this);
	}
};


function QueryExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

QueryExpressionContext.prototype = Object.create(ExpressionContext.prototype);
QueryExpressionContext.prototype.constructor = QueryExpressionContext;

cqlParser.QueryExpressionContext = QueryExpressionContext;

QueryExpressionContext.prototype.query = function() {
    return this.getTypedRuleContext(QueryContext,0);
};
QueryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterQueryExpression(this);
	}
};

QueryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitQueryExpression(this);
	}
};


function BooleanExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BooleanExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BooleanExpressionContext.prototype.constructor = BooleanExpressionContext;

cqlParser.BooleanExpressionContext = BooleanExpressionContext;

BooleanExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
BooleanExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterBooleanExpression(this);
	}
};

BooleanExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitBooleanExpression(this);
	}
};


function OrExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrExpressionContext.prototype = Object.create(ExpressionContext.prototype);
OrExpressionContext.prototype.constructor = OrExpressionContext;

cqlParser.OrExpressionContext = OrExpressionContext;

OrExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
OrExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterOrExpression(this);
	}
};

OrExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitOrExpression(this);
	}
};


function CastExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CastExpressionContext.prototype = Object.create(ExpressionContext.prototype);
CastExpressionContext.prototype.constructor = CastExpressionContext;

cqlParser.CastExpressionContext = CastExpressionContext;

CastExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

CastExpressionContext.prototype.typeSpecifier = function() {
    return this.getTypedRuleContext(TypeSpecifierContext,0);
};
CastExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterCastExpression(this);
	}
};

CastExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitCastExpression(this);
	}
};


function AndExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AndExpressionContext.prototype.constructor = AndExpressionContext;

cqlParser.AndExpressionContext = AndExpressionContext;

AndExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AndExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterAndExpression(this);
	}
};

AndExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitAndExpression(this);
	}
};


function BetweenExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BetweenExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BetweenExpressionContext.prototype.constructor = BetweenExpressionContext;

cqlParser.BetweenExpressionContext = BetweenExpressionContext;

BetweenExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

BetweenExpressionContext.prototype.expressionTerm = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionTermContext);
    } else {
        return this.getTypedRuleContext(ExpressionTermContext,i);
    }
};
BetweenExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterBetweenExpression(this);
	}
};

BetweenExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitBetweenExpression(this);
	}
};


function MembershipExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MembershipExpressionContext.prototype = Object.create(ExpressionContext.prototype);
MembershipExpressionContext.prototype.constructor = MembershipExpressionContext;

cqlParser.MembershipExpressionContext = MembershipExpressionContext;

MembershipExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

MembershipExpressionContext.prototype.dateTimePrecisionSpecifier = function() {
    return this.getTypedRuleContext(DateTimePrecisionSpecifierContext,0);
};
MembershipExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterMembershipExpression(this);
	}
};

MembershipExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitMembershipExpression(this);
	}
};


function DifferenceBetweenExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DifferenceBetweenExpressionContext.prototype = Object.create(ExpressionContext.prototype);
DifferenceBetweenExpressionContext.prototype.constructor = DifferenceBetweenExpressionContext;

cqlParser.DifferenceBetweenExpressionContext = DifferenceBetweenExpressionContext;

DifferenceBetweenExpressionContext.prototype.pluralDateTimePrecision = function() {
    return this.getTypedRuleContext(PluralDateTimePrecisionContext,0);
};

DifferenceBetweenExpressionContext.prototype.expressionTerm = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionTermContext);
    } else {
        return this.getTypedRuleContext(ExpressionTermContext,i);
    }
};
DifferenceBetweenExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterDifferenceBetweenExpression(this);
	}
};

DifferenceBetweenExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitDifferenceBetweenExpression(this);
	}
};


function InequalityExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InequalityExpressionContext.prototype = Object.create(ExpressionContext.prototype);
InequalityExpressionContext.prototype.constructor = InequalityExpressionContext;

cqlParser.InequalityExpressionContext = InequalityExpressionContext;

InequalityExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
InequalityExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterInequalityExpression(this);
	}
};

InequalityExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitInequalityExpression(this);
	}
};


function EqualityExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqualityExpressionContext.prototype = Object.create(ExpressionContext.prototype);
EqualityExpressionContext.prototype.constructor = EqualityExpressionContext;

cqlParser.EqualityExpressionContext = EqualityExpressionContext;

EqualityExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
EqualityExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterEqualityExpression(this);
	}
};

EqualityExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitEqualityExpression(this);
	}
};


function ExistenceExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExistenceExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ExistenceExpressionContext.prototype.constructor = ExistenceExpressionContext;

cqlParser.ExistenceExpressionContext = ExistenceExpressionContext;

ExistenceExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ExistenceExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterExistenceExpression(this);
	}
};

ExistenceExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitExistenceExpression(this);
	}
};


function TermExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TermExpressionContext.prototype = Object.create(ExpressionContext.prototype);
TermExpressionContext.prototype.constructor = TermExpressionContext;

cqlParser.TermExpressionContext = TermExpressionContext;

TermExpressionContext.prototype.expressionTerm = function() {
    return this.getTypedRuleContext(ExpressionTermContext,0);
};
TermExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterTermExpression(this);
	}
};

TermExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitTermExpression(this);
	}
};


function TypeExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TypeExpressionContext.prototype = Object.create(ExpressionContext.prototype);
TypeExpressionContext.prototype.constructor = TypeExpressionContext;

cqlParser.TypeExpressionContext = TypeExpressionContext;

TypeExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

TypeExpressionContext.prototype.typeSpecifier = function() {
    return this.getTypedRuleContext(TypeSpecifierContext,0);
};
TypeExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterTypeExpression(this);
	}
};

TypeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitTypeExpression(this);
	}
};



cqlParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 100;
    this.enterRecursionRule(localctx, 100, cqlParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 527;
        var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
        switch(la_) {
        case 1:
            localctx = new NotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 501;
            this.match(cqlParser.T__45);
            this.state = 502;
            this.expression(12);
            break;

        case 2:
            localctx = new ExistenceExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 503;
            this.match(cqlParser.T__51);
            this.state = 504;
            this.expression(11);
            break;

        case 3:
            localctx = new TermExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 505;
            this.expressionTerm(0);
            break;

        case 4:
            localctx = new RetrieveExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 506;
            this.retrieve();
            break;

        case 5:
            localctx = new QueryExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 507;
            this.query();
            break;

        case 6:
            localctx = new CastExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 508;
            this.match(cqlParser.T__50);
            this.state = 509;
            this.expression(0);
            this.state = 510;
            this.match(cqlParser.T__49);
            this.state = 511;
            this.typeSpecifier();
            break;

        case 7:
            localctx = new DurationBetweenExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 513;
            this.pluralDateTimePrecision();
            this.state = 514;
            this.match(cqlParser.T__53);
            this.state = 515;
            this.expressionTerm(0);
            this.state = 516;
            this.match(cqlParser.T__54);
            this.state = 517;
            this.expressionTerm(0);
            break;

        case 8:
            localctx = new DifferenceBetweenExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 519;
            this.match(cqlParser.T__55);
            this.state = 520;
            this.match(cqlParser.T__31);
            this.state = 521;
            this.pluralDateTimePrecision();
            this.state = 522;
            this.match(cqlParser.T__53);
            this.state = 523;
            this.expressionTerm(0);
            this.state = 524;
            this.match(cqlParser.T__54);
            this.state = 525;
            this.expressionTerm(0);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 574;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,50,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 572;
                var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new InequalityExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, cqlParser.RULE_expression);
                    this.state = 529;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 530;
                    _la = this._input.LA(1);
                    if(!(_la===cqlParser.T__18 || _la===cqlParser.T__19 || _la===cqlParser.T__56 || _la===cqlParser.T__57)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 531;
                    this.expression(8);
                    break;

                case 2:
                    localctx = new TimingExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, cqlParser.RULE_expression);
                    this.state = 532;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 533;
                    this.intervalOperatorPhrase();
                    this.state = 534;
                    this.expression(7);
                    break;

                case 3:
                    localctx = new EqualityExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, cqlParser.RULE_expression);
                    this.state = 536;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 537;
                    _la = this._input.LA(1);
                    if(!(((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (cqlParser.T__58 - 59)) | (1 << (cqlParser.T__59 - 59)) | (1 << (cqlParser.T__60 - 59)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 538;
                    this.expression(6);
                    break;

                case 4:
                    localctx = new MembershipExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, cqlParser.RULE_expression);
                    this.state = 539;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 540;
                    _la = this._input.LA(1);
                    if(!(_la===cqlParser.T__31 || _la===cqlParser.T__61)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 542;
                    var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
                    if(la_===1) {
                        this.state = 541;
                        this.dateTimePrecisionSpecifier();

                    }
                    this.state = 544;
                    this.expression(5);
                    break;

                case 5:
                    localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, cqlParser.RULE_expression);
                    this.state = 545;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 546;
                    this.match(cqlParser.T__54);
                    this.state = 547;
                    this.expression(4);
                    break;

                case 6:
                    localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, cqlParser.RULE_expression);
                    this.state = 548;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 549;
                    _la = this._input.LA(1);
                    if(!(_la===cqlParser.T__62 || _la===cqlParser.T__63)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 550;
                    this.expression(3);
                    break;

                case 7:
                    localctx = new InFixSetExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, cqlParser.RULE_expression);
                    this.state = 551;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 552;
                    _la = this._input.LA(1);
                    if(!(((((_la - 65)) & ~0x1f) == 0 && ((1 << (_la - 65)) & ((1 << (cqlParser.T__64 - 65)) | (1 << (cqlParser.T__65 - 65)) | (1 << (cqlParser.T__66 - 65)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 553;
                    this.expression(2);
                    break;

                case 8:
                    localctx = new BooleanExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, cqlParser.RULE_expression);
                    this.state = 554;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 555;
                    this.match(cqlParser.T__44);
                    this.state = 557;
                    _la = this._input.LA(1);
                    if(_la===cqlParser.T__45) {
                        this.state = 556;
                        this.match(cqlParser.T__45);
                    }

                    this.state = 559;
                    _la = this._input.LA(1);
                    if(!(((((_la - 47)) & ~0x1f) == 0 && ((1 << (_la - 47)) & ((1 << (cqlParser.T__46 - 47)) | (1 << (cqlParser.T__47 - 47)) | (1 << (cqlParser.T__48 - 47)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    break;

                case 9:
                    localctx = new TypeExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, cqlParser.RULE_expression);
                    this.state = 560;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 561;
                    _la = this._input.LA(1);
                    if(!(_la===cqlParser.T__44 || _la===cqlParser.T__49)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 562;
                    this.typeSpecifier();
                    break;

                case 10:
                    localctx = new BetweenExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, cqlParser.RULE_expression);
                    this.state = 563;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 565;
                    _la = this._input.LA(1);
                    if(_la===cqlParser.T__52) {
                        this.state = 564;
                        this.match(cqlParser.T__52);
                    }

                    this.state = 567;
                    this.match(cqlParser.T__53);
                    this.state = 568;
                    this.expressionTerm(0);
                    this.state = 569;
                    this.match(cqlParser.T__54);
                    this.state = 570;
                    this.expressionTerm(0);
                    break;

                } 
            }
            this.state = 576;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,50,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function DateTimePrecisionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_dateTimePrecision;
    return this;
}

DateTimePrecisionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DateTimePrecisionContext.prototype.constructor = DateTimePrecisionContext;


DateTimePrecisionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterDateTimePrecision(this);
	}
};

DateTimePrecisionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitDateTimePrecision(this);
	}
};




cqlParser.DateTimePrecisionContext = DateTimePrecisionContext;

cqlParser.prototype.dateTimePrecision = function() {

    var localctx = new DateTimePrecisionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, cqlParser.RULE_dateTimePrecision);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 577;
        _la = this._input.LA(1);
        if(!(((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (cqlParser.T__67 - 68)) | (1 << (cqlParser.T__68 - 68)) | (1 << (cqlParser.T__69 - 68)) | (1 << (cqlParser.T__70 - 68)) | (1 << (cqlParser.T__71 - 68)) | (1 << (cqlParser.T__72 - 68)) | (1 << (cqlParser.T__73 - 68)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DateTimeComponentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_dateTimeComponent;
    return this;
}

DateTimeComponentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DateTimeComponentContext.prototype.constructor = DateTimeComponentContext;

DateTimeComponentContext.prototype.dateTimePrecision = function() {
    return this.getTypedRuleContext(DateTimePrecisionContext,0);
};

DateTimeComponentContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterDateTimeComponent(this);
	}
};

DateTimeComponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitDateTimeComponent(this);
	}
};




cqlParser.DateTimeComponentContext = DateTimeComponentContext;

cqlParser.prototype.dateTimeComponent = function() {

    var localctx = new DateTimeComponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, cqlParser.RULE_dateTimeComponent);
    try {
        this.state = 583;
        switch(this._input.LA(1)) {
        case cqlParser.T__67:
        case cqlParser.T__68:
        case cqlParser.T__69:
        case cqlParser.T__70:
        case cqlParser.T__71:
        case cqlParser.T__72:
        case cqlParser.T__73:
            this.enterOuterAlt(localctx, 1);
            this.state = 579;
            this.dateTimePrecision();
            break;
        case cqlParser.T__74:
            this.enterOuterAlt(localctx, 2);
            this.state = 580;
            this.match(cqlParser.T__74);
            break;
        case cqlParser.T__75:
            this.enterOuterAlt(localctx, 3);
            this.state = 581;
            this.match(cqlParser.T__75);
            break;
        case cqlParser.T__76:
            this.enterOuterAlt(localctx, 4);
            this.state = 582;
            this.match(cqlParser.T__76);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PluralDateTimePrecisionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_pluralDateTimePrecision;
    return this;
}

PluralDateTimePrecisionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PluralDateTimePrecisionContext.prototype.constructor = PluralDateTimePrecisionContext;


PluralDateTimePrecisionContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterPluralDateTimePrecision(this);
	}
};

PluralDateTimePrecisionContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitPluralDateTimePrecision(this);
	}
};




cqlParser.PluralDateTimePrecisionContext = PluralDateTimePrecisionContext;

cqlParser.prototype.pluralDateTimePrecision = function() {

    var localctx = new PluralDateTimePrecisionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, cqlParser.RULE_pluralDateTimePrecision);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 585;
        _la = this._input.LA(1);
        if(!(((((_la - 78)) & ~0x1f) == 0 && ((1 << (_la - 78)) & ((1 << (cqlParser.T__77 - 78)) | (1 << (cqlParser.T__78 - 78)) | (1 << (cqlParser.T__79 - 78)) | (1 << (cqlParser.T__80 - 78)) | (1 << (cqlParser.T__81 - 78)) | (1 << (cqlParser.T__82 - 78)) | (1 << (cqlParser.T__83 - 78)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionTermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_expressionTerm;
    return this;
}

ExpressionTermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionTermContext.prototype.constructor = ExpressionTermContext;


 
ExpressionTermContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function AdditionExpressionTermContext(parser, ctx) {
	ExpressionTermContext.call(this, parser);
    ExpressionTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditionExpressionTermContext.prototype = Object.create(ExpressionTermContext.prototype);
AdditionExpressionTermContext.prototype.constructor = AdditionExpressionTermContext;

cqlParser.AdditionExpressionTermContext = AdditionExpressionTermContext;

AdditionExpressionTermContext.prototype.expressionTerm = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionTermContext);
    } else {
        return this.getTypedRuleContext(ExpressionTermContext,i);
    }
};
AdditionExpressionTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterAdditionExpressionTerm(this);
	}
};

AdditionExpressionTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitAdditionExpressionTerm(this);
	}
};


function IndexedExpressionTermContext(parser, ctx) {
	ExpressionTermContext.call(this, parser);
    ExpressionTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IndexedExpressionTermContext.prototype = Object.create(ExpressionTermContext.prototype);
IndexedExpressionTermContext.prototype.constructor = IndexedExpressionTermContext;

cqlParser.IndexedExpressionTermContext = IndexedExpressionTermContext;

IndexedExpressionTermContext.prototype.expressionTerm = function() {
    return this.getTypedRuleContext(ExpressionTermContext,0);
};

IndexedExpressionTermContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
IndexedExpressionTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterIndexedExpressionTerm(this);
	}
};

IndexedExpressionTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitIndexedExpressionTerm(this);
	}
};


function WidthExpressionTermContext(parser, ctx) {
	ExpressionTermContext.call(this, parser);
    ExpressionTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WidthExpressionTermContext.prototype = Object.create(ExpressionTermContext.prototype);
WidthExpressionTermContext.prototype.constructor = WidthExpressionTermContext;

cqlParser.WidthExpressionTermContext = WidthExpressionTermContext;

WidthExpressionTermContext.prototype.expressionTerm = function() {
    return this.getTypedRuleContext(ExpressionTermContext,0);
};
WidthExpressionTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterWidthExpressionTerm(this);
	}
};

WidthExpressionTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitWidthExpressionTerm(this);
	}
};


function TimeUnitExpressionTermContext(parser, ctx) {
	ExpressionTermContext.call(this, parser);
    ExpressionTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TimeUnitExpressionTermContext.prototype = Object.create(ExpressionTermContext.prototype);
TimeUnitExpressionTermContext.prototype.constructor = TimeUnitExpressionTermContext;

cqlParser.TimeUnitExpressionTermContext = TimeUnitExpressionTermContext;

TimeUnitExpressionTermContext.prototype.dateTimeComponent = function() {
    return this.getTypedRuleContext(DateTimeComponentContext,0);
};

TimeUnitExpressionTermContext.prototype.expressionTerm = function() {
    return this.getTypedRuleContext(ExpressionTermContext,0);
};
TimeUnitExpressionTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterTimeUnitExpressionTerm(this);
	}
};

TimeUnitExpressionTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitTimeUnitExpressionTerm(this);
	}
};


function IfThenElseExpressionTermContext(parser, ctx) {
	ExpressionTermContext.call(this, parser);
    ExpressionTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IfThenElseExpressionTermContext.prototype = Object.create(ExpressionTermContext.prototype);
IfThenElseExpressionTermContext.prototype.constructor = IfThenElseExpressionTermContext;

cqlParser.IfThenElseExpressionTermContext = IfThenElseExpressionTermContext;

IfThenElseExpressionTermContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
IfThenElseExpressionTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterIfThenElseExpressionTerm(this);
	}
};

IfThenElseExpressionTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitIfThenElseExpressionTerm(this);
	}
};


function TimeBoundaryExpressionTermContext(parser, ctx) {
	ExpressionTermContext.call(this, parser);
    ExpressionTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TimeBoundaryExpressionTermContext.prototype = Object.create(ExpressionTermContext.prototype);
TimeBoundaryExpressionTermContext.prototype.constructor = TimeBoundaryExpressionTermContext;

cqlParser.TimeBoundaryExpressionTermContext = TimeBoundaryExpressionTermContext;

TimeBoundaryExpressionTermContext.prototype.expressionTerm = function() {
    return this.getTypedRuleContext(ExpressionTermContext,0);
};
TimeBoundaryExpressionTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterTimeBoundaryExpressionTerm(this);
	}
};

TimeBoundaryExpressionTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitTimeBoundaryExpressionTerm(this);
	}
};


function ElementExtractorExpressionTermContext(parser, ctx) {
	ExpressionTermContext.call(this, parser);
    ExpressionTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ElementExtractorExpressionTermContext.prototype = Object.create(ExpressionTermContext.prototype);
ElementExtractorExpressionTermContext.prototype.constructor = ElementExtractorExpressionTermContext;

cqlParser.ElementExtractorExpressionTermContext = ElementExtractorExpressionTermContext;

ElementExtractorExpressionTermContext.prototype.expressionTerm = function() {
    return this.getTypedRuleContext(ExpressionTermContext,0);
};
ElementExtractorExpressionTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterElementExtractorExpressionTerm(this);
	}
};

ElementExtractorExpressionTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitElementExtractorExpressionTerm(this);
	}
};


function ConversionExpressionTermContext(parser, ctx) {
	ExpressionTermContext.call(this, parser);
    ExpressionTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConversionExpressionTermContext.prototype = Object.create(ExpressionTermContext.prototype);
ConversionExpressionTermContext.prototype.constructor = ConversionExpressionTermContext;

cqlParser.ConversionExpressionTermContext = ConversionExpressionTermContext;

ConversionExpressionTermContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ConversionExpressionTermContext.prototype.typeSpecifier = function() {
    return this.getTypedRuleContext(TypeSpecifierContext,0);
};
ConversionExpressionTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterConversionExpressionTerm(this);
	}
};

ConversionExpressionTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitConversionExpressionTerm(this);
	}
};


function TypeExtentExpressionTermContext(parser, ctx) {
	ExpressionTermContext.call(this, parser);
    ExpressionTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TypeExtentExpressionTermContext.prototype = Object.create(ExpressionTermContext.prototype);
TypeExtentExpressionTermContext.prototype.constructor = TypeExtentExpressionTermContext;

cqlParser.TypeExtentExpressionTermContext = TypeExtentExpressionTermContext;

TypeExtentExpressionTermContext.prototype.namedTypeSpecifier = function() {
    return this.getTypedRuleContext(NamedTypeSpecifierContext,0);
};
TypeExtentExpressionTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterTypeExtentExpressionTerm(this);
	}
};

TypeExtentExpressionTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitTypeExtentExpressionTerm(this);
	}
};


function PredecessorExpressionTermContext(parser, ctx) {
	ExpressionTermContext.call(this, parser);
    ExpressionTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PredecessorExpressionTermContext.prototype = Object.create(ExpressionTermContext.prototype);
PredecessorExpressionTermContext.prototype.constructor = PredecessorExpressionTermContext;

cqlParser.PredecessorExpressionTermContext = PredecessorExpressionTermContext;

PredecessorExpressionTermContext.prototype.expressionTerm = function() {
    return this.getTypedRuleContext(ExpressionTermContext,0);
};
PredecessorExpressionTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterPredecessorExpressionTerm(this);
	}
};

PredecessorExpressionTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitPredecessorExpressionTerm(this);
	}
};


function AccessorExpressionTermContext(parser, ctx) {
	ExpressionTermContext.call(this, parser);
    ExpressionTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AccessorExpressionTermContext.prototype = Object.create(ExpressionTermContext.prototype);
AccessorExpressionTermContext.prototype.constructor = AccessorExpressionTermContext;

cqlParser.AccessorExpressionTermContext = AccessorExpressionTermContext;

AccessorExpressionTermContext.prototype.expressionTerm = function() {
    return this.getTypedRuleContext(ExpressionTermContext,0);
};

AccessorExpressionTermContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};
AccessorExpressionTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterAccessorExpressionTerm(this);
	}
};

AccessorExpressionTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitAccessorExpressionTerm(this);
	}
};


function MultiplicationExpressionTermContext(parser, ctx) {
	ExpressionTermContext.call(this, parser);
    ExpressionTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplicationExpressionTermContext.prototype = Object.create(ExpressionTermContext.prototype);
MultiplicationExpressionTermContext.prototype.constructor = MultiplicationExpressionTermContext;

cqlParser.MultiplicationExpressionTermContext = MultiplicationExpressionTermContext;

MultiplicationExpressionTermContext.prototype.expressionTerm = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionTermContext);
    } else {
        return this.getTypedRuleContext(ExpressionTermContext,i);
    }
};
MultiplicationExpressionTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterMultiplicationExpressionTerm(this);
	}
};

MultiplicationExpressionTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitMultiplicationExpressionTerm(this);
	}
};


function AggregateExpressionTermContext(parser, ctx) {
	ExpressionTermContext.call(this, parser);
    ExpressionTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AggregateExpressionTermContext.prototype = Object.create(ExpressionTermContext.prototype);
AggregateExpressionTermContext.prototype.constructor = AggregateExpressionTermContext;

cqlParser.AggregateExpressionTermContext = AggregateExpressionTermContext;

AggregateExpressionTermContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
AggregateExpressionTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterAggregateExpressionTerm(this);
	}
};

AggregateExpressionTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitAggregateExpressionTerm(this);
	}
};


function DurationExpressionTermContext(parser, ctx) {
	ExpressionTermContext.call(this, parser);
    ExpressionTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DurationExpressionTermContext.prototype = Object.create(ExpressionTermContext.prototype);
DurationExpressionTermContext.prototype.constructor = DurationExpressionTermContext;

cqlParser.DurationExpressionTermContext = DurationExpressionTermContext;

DurationExpressionTermContext.prototype.pluralDateTimePrecision = function() {
    return this.getTypedRuleContext(PluralDateTimePrecisionContext,0);
};

DurationExpressionTermContext.prototype.expressionTerm = function() {
    return this.getTypedRuleContext(ExpressionTermContext,0);
};
DurationExpressionTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterDurationExpressionTerm(this);
	}
};

DurationExpressionTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitDurationExpressionTerm(this);
	}
};


function CaseExpressionTermContext(parser, ctx) {
	ExpressionTermContext.call(this, parser);
    ExpressionTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CaseExpressionTermContext.prototype = Object.create(ExpressionTermContext.prototype);
CaseExpressionTermContext.prototype.constructor = CaseExpressionTermContext;

cqlParser.CaseExpressionTermContext = CaseExpressionTermContext;

CaseExpressionTermContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

CaseExpressionTermContext.prototype.caseExpressionItem = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CaseExpressionItemContext);
    } else {
        return this.getTypedRuleContext(CaseExpressionItemContext,i);
    }
};
CaseExpressionTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterCaseExpressionTerm(this);
	}
};

CaseExpressionTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitCaseExpressionTerm(this);
	}
};


function PowerExpressionTermContext(parser, ctx) {
	ExpressionTermContext.call(this, parser);
    ExpressionTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowerExpressionTermContext.prototype = Object.create(ExpressionTermContext.prototype);
PowerExpressionTermContext.prototype.constructor = PowerExpressionTermContext;

cqlParser.PowerExpressionTermContext = PowerExpressionTermContext;

PowerExpressionTermContext.prototype.expressionTerm = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionTermContext);
    } else {
        return this.getTypedRuleContext(ExpressionTermContext,i);
    }
};
PowerExpressionTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterPowerExpressionTerm(this);
	}
};

PowerExpressionTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitPowerExpressionTerm(this);
	}
};


function SuccessorExpressionTermContext(parser, ctx) {
	ExpressionTermContext.call(this, parser);
    ExpressionTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SuccessorExpressionTermContext.prototype = Object.create(ExpressionTermContext.prototype);
SuccessorExpressionTermContext.prototype.constructor = SuccessorExpressionTermContext;

cqlParser.SuccessorExpressionTermContext = SuccessorExpressionTermContext;

SuccessorExpressionTermContext.prototype.expressionTerm = function() {
    return this.getTypedRuleContext(ExpressionTermContext,0);
};
SuccessorExpressionTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterSuccessorExpressionTerm(this);
	}
};

SuccessorExpressionTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitSuccessorExpressionTerm(this);
	}
};


function PolarityExpressionTermContext(parser, ctx) {
	ExpressionTermContext.call(this, parser);
    ExpressionTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PolarityExpressionTermContext.prototype = Object.create(ExpressionTermContext.prototype);
PolarityExpressionTermContext.prototype.constructor = PolarityExpressionTermContext;

cqlParser.PolarityExpressionTermContext = PolarityExpressionTermContext;

PolarityExpressionTermContext.prototype.expressionTerm = function() {
    return this.getTypedRuleContext(ExpressionTermContext,0);
};
PolarityExpressionTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterPolarityExpressionTerm(this);
	}
};

PolarityExpressionTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitPolarityExpressionTerm(this);
	}
};


function TermExpressionTermContext(parser, ctx) {
	ExpressionTermContext.call(this, parser);
    ExpressionTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TermExpressionTermContext.prototype = Object.create(ExpressionTermContext.prototype);
TermExpressionTermContext.prototype.constructor = TermExpressionTermContext;

cqlParser.TermExpressionTermContext = TermExpressionTermContext;

TermExpressionTermContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};
TermExpressionTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterTermExpressionTerm(this);
	}
};

TermExpressionTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitTermExpressionTerm(this);
	}
};


function InvocationExpressionTermContext(parser, ctx) {
	ExpressionTermContext.call(this, parser);
    ExpressionTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InvocationExpressionTermContext.prototype = Object.create(ExpressionTermContext.prototype);
InvocationExpressionTermContext.prototype.constructor = InvocationExpressionTermContext;

cqlParser.InvocationExpressionTermContext = InvocationExpressionTermContext;

InvocationExpressionTermContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

InvocationExpressionTermContext.prototype.qualifier = function() {
    return this.getTypedRuleContext(QualifierContext,0);
};

InvocationExpressionTermContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
InvocationExpressionTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterInvocationExpressionTerm(this);
	}
};

InvocationExpressionTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitInvocationExpressionTerm(this);
	}
};



cqlParser.prototype.expressionTerm = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionTermContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 108;
    this.enterRecursionRule(localctx, 108, cqlParser.RULE_expressionTerm, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 664;
        var la_ = this._interp.adaptivePredict(this._input,57,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PolarityExpressionTermContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 588;
            _la = this._input.LA(1);
            if(!(_la===cqlParser.T__86 || _la===cqlParser.T__87)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 589;
            this.expressionTerm(15);
            break;

        case 2:
            localctx = new TimeBoundaryExpressionTermContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 590;
            _la = this._input.LA(1);
            if(!(_la===cqlParser.T__88 || _la===cqlParser.T__89)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 591;
            this.match(cqlParser.T__90);
            this.state = 592;
            this.expressionTerm(14);
            break;

        case 3:
            localctx = new TimeUnitExpressionTermContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 593;
            this.dateTimeComponent();
            this.state = 594;
            this.match(cqlParser.T__33);
            this.state = 595;
            this.expressionTerm(13);
            break;

        case 4:
            localctx = new DurationExpressionTermContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 597;
            this.match(cqlParser.T__91);
            this.state = 598;
            this.match(cqlParser.T__31);
            this.state = 599;
            this.pluralDateTimePrecision();
            this.state = 600;
            this.match(cqlParser.T__90);
            this.state = 601;
            this.expressionTerm(12);
            break;

        case 5:
            localctx = new WidthExpressionTermContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 603;
            this.match(cqlParser.T__92);
            this.state = 604;
            this.match(cqlParser.T__90);
            this.state = 605;
            this.expressionTerm(11);
            break;

        case 6:
            localctx = new SuccessorExpressionTermContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 606;
            this.match(cqlParser.T__93);
            this.state = 607;
            this.match(cqlParser.T__90);
            this.state = 608;
            this.expressionTerm(10);
            break;

        case 7:
            localctx = new PredecessorExpressionTermContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 609;
            this.match(cqlParser.T__94);
            this.state = 610;
            this.match(cqlParser.T__90);
            this.state = 611;
            this.expressionTerm(9);
            break;

        case 8:
            localctx = new ElementExtractorExpressionTermContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 612;
            this.match(cqlParser.T__95);
            this.state = 613;
            this.match(cqlParser.T__33);
            this.state = 614;
            this.expressionTerm(8);
            break;

        case 9:
            localctx = new TermExpressionTermContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 615;
            this.term();
            break;

        case 10:
            localctx = new InvocationExpressionTermContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 619;
            var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
            if(la_===1) {
                this.state = 616;
                this.qualifier();
                this.state = 617;
                this.match(cqlParser.T__16);

            }
            this.state = 621;
            this.identifier();
            this.state = 622;
            this.match(cqlParser.T__13);
            this.state = 631;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << cqlParser.T__1) | (1 << cqlParser.T__13) | (1 << cqlParser.T__17) | (1 << cqlParser.T__20) | (1 << cqlParser.T__21) | (1 << cqlParser.T__22) | (1 << cqlParser.T__30))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (cqlParser.T__33 - 34)) | (1 << (cqlParser.T__37 - 34)) | (1 << (cqlParser.T__45 - 34)) | (1 << (cqlParser.T__46 - 34)) | (1 << (cqlParser.T__47 - 34)) | (1 << (cqlParser.T__48 - 34)) | (1 << (cqlParser.T__50 - 34)) | (1 << (cqlParser.T__51 - 34)) | (1 << (cqlParser.T__55 - 34)))) !== 0) || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (cqlParser.T__67 - 68)) | (1 << (cqlParser.T__68 - 68)) | (1 << (cqlParser.T__69 - 68)) | (1 << (cqlParser.T__70 - 68)) | (1 << (cqlParser.T__71 - 68)) | (1 << (cqlParser.T__72 - 68)) | (1 << (cqlParser.T__73 - 68)) | (1 << (cqlParser.T__74 - 68)) | (1 << (cqlParser.T__75 - 68)) | (1 << (cqlParser.T__76 - 68)) | (1 << (cqlParser.T__77 - 68)) | (1 << (cqlParser.T__78 - 68)) | (1 << (cqlParser.T__79 - 68)) | (1 << (cqlParser.T__80 - 68)) | (1 << (cqlParser.T__81 - 68)) | (1 << (cqlParser.T__82 - 68)) | (1 << (cqlParser.T__83 - 68)) | (1 << (cqlParser.T__84 - 68)) | (1 << (cqlParser.T__86 - 68)) | (1 << (cqlParser.T__87 - 68)) | (1 << (cqlParser.T__88 - 68)) | (1 << (cqlParser.T__89 - 68)) | (1 << (cqlParser.T__91 - 68)) | (1 << (cqlParser.T__92 - 68)) | (1 << (cqlParser.T__93 - 68)) | (1 << (cqlParser.T__94 - 68)) | (1 << (cqlParser.T__95 - 68)) | (1 << (cqlParser.T__96 - 68)) | (1 << (cqlParser.T__97 - 68)))) !== 0) || ((((_la - 104)) & ~0x1f) == 0 && ((1 << (_la - 104)) & ((1 << (cqlParser.T__103 - 104)) | (1 << (cqlParser.T__106 - 104)) | (1 << (cqlParser.T__107 - 104)) | (1 << (cqlParser.T__108 - 104)) | (1 << (cqlParser.T__126 - 104)) | (1 << (cqlParser.T__127 - 104)) | (1 << (cqlParser.T__128 - 104)) | (1 << (cqlParser.IDENTIFIER - 104)) | (1 << (cqlParser.QUANTITY - 104)) | (1 << (cqlParser.DATETIME - 104)) | (1 << (cqlParser.TIME - 104)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 104)) | (1 << (cqlParser.STRING - 104)))) !== 0)) {
                this.state = 623;
                this.expression(0);
                this.state = 628;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===cqlParser.T__14) {
                    this.state = 624;
                    this.match(cqlParser.T__14);
                    this.state = 625;
                    this.expression(0);
                    this.state = 630;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }

            this.state = 633;
            this.match(cqlParser.T__15);
            break;

        case 11:
            localctx = new ConversionExpressionTermContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 635;
            this.match(cqlParser.T__84);
            this.state = 636;
            this.expression(0);
            this.state = 637;
            this.match(cqlParser.T__85);
            this.state = 638;
            this.typeSpecifier();
            break;

        case 12:
            localctx = new TypeExtentExpressionTermContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 640;
            _la = this._input.LA(1);
            if(!(_la===cqlParser.T__96 || _la===cqlParser.T__97)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 641;
            this.namedTypeSpecifier();
            break;

        case 13:
            localctx = new IfThenElseExpressionTermContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 642;
            this.match(cqlParser.T__103);
            this.state = 643;
            this.expression(0);
            this.state = 644;
            this.match(cqlParser.T__104);
            this.state = 645;
            this.expression(0);
            this.state = 646;
            this.match(cqlParser.T__105);
            this.state = 647;
            this.expression(0);
            break;

        case 14:
            localctx = new CaseExpressionTermContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 649;
            this.match(cqlParser.T__106);
            this.state = 651;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << cqlParser.T__1) | (1 << cqlParser.T__13) | (1 << cqlParser.T__17) | (1 << cqlParser.T__20) | (1 << cqlParser.T__21) | (1 << cqlParser.T__22) | (1 << cqlParser.T__30))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (cqlParser.T__33 - 34)) | (1 << (cqlParser.T__37 - 34)) | (1 << (cqlParser.T__45 - 34)) | (1 << (cqlParser.T__46 - 34)) | (1 << (cqlParser.T__47 - 34)) | (1 << (cqlParser.T__48 - 34)) | (1 << (cqlParser.T__50 - 34)) | (1 << (cqlParser.T__51 - 34)) | (1 << (cqlParser.T__55 - 34)))) !== 0) || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (cqlParser.T__67 - 68)) | (1 << (cqlParser.T__68 - 68)) | (1 << (cqlParser.T__69 - 68)) | (1 << (cqlParser.T__70 - 68)) | (1 << (cqlParser.T__71 - 68)) | (1 << (cqlParser.T__72 - 68)) | (1 << (cqlParser.T__73 - 68)) | (1 << (cqlParser.T__74 - 68)) | (1 << (cqlParser.T__75 - 68)) | (1 << (cqlParser.T__76 - 68)) | (1 << (cqlParser.T__77 - 68)) | (1 << (cqlParser.T__78 - 68)) | (1 << (cqlParser.T__79 - 68)) | (1 << (cqlParser.T__80 - 68)) | (1 << (cqlParser.T__81 - 68)) | (1 << (cqlParser.T__82 - 68)) | (1 << (cqlParser.T__83 - 68)) | (1 << (cqlParser.T__84 - 68)) | (1 << (cqlParser.T__86 - 68)) | (1 << (cqlParser.T__87 - 68)) | (1 << (cqlParser.T__88 - 68)) | (1 << (cqlParser.T__89 - 68)) | (1 << (cqlParser.T__91 - 68)) | (1 << (cqlParser.T__92 - 68)) | (1 << (cqlParser.T__93 - 68)) | (1 << (cqlParser.T__94 - 68)) | (1 << (cqlParser.T__95 - 68)) | (1 << (cqlParser.T__96 - 68)) | (1 << (cqlParser.T__97 - 68)))) !== 0) || ((((_la - 104)) & ~0x1f) == 0 && ((1 << (_la - 104)) & ((1 << (cqlParser.T__103 - 104)) | (1 << (cqlParser.T__106 - 104)) | (1 << (cqlParser.T__107 - 104)) | (1 << (cqlParser.T__108 - 104)) | (1 << (cqlParser.T__126 - 104)) | (1 << (cqlParser.T__127 - 104)) | (1 << (cqlParser.T__128 - 104)) | (1 << (cqlParser.IDENTIFIER - 104)) | (1 << (cqlParser.QUANTITY - 104)) | (1 << (cqlParser.DATETIME - 104)) | (1 << (cqlParser.TIME - 104)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 104)) | (1 << (cqlParser.STRING - 104)))) !== 0)) {
                this.state = 650;
                this.expression(0);
            }

            this.state = 654; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 653;
                this.caseExpressionItem();
                this.state = 656; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===cqlParser.T__109);
            this.state = 658;
            this.match(cqlParser.T__105);
            this.state = 659;
            this.expression(0);
            this.state = 660;
            this.match(cqlParser.T__89);
            break;

        case 15:
            localctx = new AggregateExpressionTermContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 662;
            _la = this._input.LA(1);
            if(!(_la===cqlParser.T__37 || _la===cqlParser.T__107 || _la===cqlParser.T__108)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 663;
            this.expression(0);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 685;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,59,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 683;
                var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowerExpressionTermContext(this, new ExpressionTermContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, cqlParser.RULE_expressionTerm);
                    this.state = 666;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 667;
                    this.match(cqlParser.T__98);
                    this.state = 668;
                    this.expressionTerm(7);
                    break;

                case 2:
                    localctx = new MultiplicationExpressionTermContext(this, new ExpressionTermContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, cqlParser.RULE_expressionTerm);
                    this.state = 669;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 670;
                    _la = this._input.LA(1);
                    if(!(((((_la - 100)) & ~0x1f) == 0 && ((1 << (_la - 100)) & ((1 << (cqlParser.T__99 - 100)) | (1 << (cqlParser.T__100 - 100)) | (1 << (cqlParser.T__101 - 100)) | (1 << (cqlParser.T__102 - 100)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 671;
                    this.expressionTerm(6);
                    break;

                case 3:
                    localctx = new AdditionExpressionTermContext(this, new ExpressionTermContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, cqlParser.RULE_expressionTerm);
                    this.state = 672;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 673;
                    _la = this._input.LA(1);
                    if(!(_la===cqlParser.T__86 || _la===cqlParser.T__87)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 674;
                    this.expressionTerm(5);
                    break;

                case 4:
                    localctx = new AccessorExpressionTermContext(this, new ExpressionTermContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, cqlParser.RULE_expressionTerm);
                    this.state = 675;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 676;
                    this.match(cqlParser.T__16);
                    this.state = 677;
                    this.identifier();
                    break;

                case 5:
                    localctx = new IndexedExpressionTermContext(this, new ExpressionTermContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, cqlParser.RULE_expressionTerm);
                    this.state = 678;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 679;
                    this.match(cqlParser.T__30);
                    this.state = 680;
                    this.expression(0);
                    this.state = 681;
                    this.match(cqlParser.T__32);
                    break;

                } 
            }
            this.state = 687;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,59,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function CaseExpressionItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_caseExpressionItem;
    return this;
}

CaseExpressionItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaseExpressionItemContext.prototype.constructor = CaseExpressionItemContext;

CaseExpressionItemContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

CaseExpressionItemContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterCaseExpressionItem(this);
	}
};

CaseExpressionItemContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitCaseExpressionItem(this);
	}
};




cqlParser.CaseExpressionItemContext = CaseExpressionItemContext;

cqlParser.prototype.caseExpressionItem = function() {

    var localctx = new CaseExpressionItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, cqlParser.RULE_caseExpressionItem);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 688;
        this.match(cqlParser.T__109);
        this.state = 689;
        this.expression(0);
        this.state = 690;
        this.match(cqlParser.T__104);
        this.state = 691;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DateTimePrecisionSpecifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_dateTimePrecisionSpecifier;
    return this;
}

DateTimePrecisionSpecifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DateTimePrecisionSpecifierContext.prototype.constructor = DateTimePrecisionSpecifierContext;

DateTimePrecisionSpecifierContext.prototype.dateTimePrecision = function() {
    return this.getTypedRuleContext(DateTimePrecisionContext,0);
};

DateTimePrecisionSpecifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterDateTimePrecisionSpecifier(this);
	}
};

DateTimePrecisionSpecifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitDateTimePrecisionSpecifier(this);
	}
};




cqlParser.DateTimePrecisionSpecifierContext = DateTimePrecisionSpecifierContext;

cqlParser.prototype.dateTimePrecisionSpecifier = function() {

    var localctx = new DateTimePrecisionSpecifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, cqlParser.RULE_dateTimePrecisionSpecifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 693;
        this.dateTimePrecision();
        this.state = 694;
        this.match(cqlParser.T__90);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RelativeQualifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_relativeQualifier;
    return this;
}

RelativeQualifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelativeQualifierContext.prototype.constructor = RelativeQualifierContext;


RelativeQualifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterRelativeQualifier(this);
	}
};

RelativeQualifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitRelativeQualifier(this);
	}
};




cqlParser.RelativeQualifierContext = RelativeQualifierContext;

cqlParser.prototype.relativeQualifier = function() {

    var localctx = new RelativeQualifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, cqlParser.RULE_relativeQualifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 696;
        _la = this._input.LA(1);
        if(!(_la===cqlParser.T__110 || _la===cqlParser.T__111)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OffsetRelativeQualifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_offsetRelativeQualifier;
    return this;
}

OffsetRelativeQualifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OffsetRelativeQualifierContext.prototype.constructor = OffsetRelativeQualifierContext;


OffsetRelativeQualifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterOffsetRelativeQualifier(this);
	}
};

OffsetRelativeQualifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitOffsetRelativeQualifier(this);
	}
};




cqlParser.OffsetRelativeQualifierContext = OffsetRelativeQualifierContext;

cqlParser.prototype.offsetRelativeQualifier = function() {

    var localctx = new OffsetRelativeQualifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, cqlParser.RULE_offsetRelativeQualifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 698;
        _la = this._input.LA(1);
        if(!(_la===cqlParser.T__112 || _la===cqlParser.T__113)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QuantityOffsetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_quantityOffset;
    return this;
}

QuantityOffsetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuantityOffsetContext.prototype.constructor = QuantityOffsetContext;

QuantityOffsetContext.prototype.quantityLiteral = function() {
    return this.getTypedRuleContext(QuantityLiteralContext,0);
};

QuantityOffsetContext.prototype.offsetRelativeQualifier = function() {
    return this.getTypedRuleContext(OffsetRelativeQualifierContext,0);
};

QuantityOffsetContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterQuantityOffset(this);
	}
};

QuantityOffsetContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitQuantityOffset(this);
	}
};




cqlParser.QuantityOffsetContext = QuantityOffsetContext;

cqlParser.prototype.quantityOffset = function() {

    var localctx = new QuantityOffsetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 118, cqlParser.RULE_quantityOffset);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 700;
        this.quantityLiteral();
        this.state = 702;
        _la = this._input.LA(1);
        if(_la===cqlParser.T__112 || _la===cqlParser.T__113) {
            this.state = 701;
            this.offsetRelativeQualifier();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IntervalOperatorPhraseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_intervalOperatorPhrase;
    return this;
}

IntervalOperatorPhraseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntervalOperatorPhraseContext.prototype.constructor = IntervalOperatorPhraseContext;


 
IntervalOperatorPhraseContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function WithinIntervalOperatorPhraseContext(parser, ctx) {
	IntervalOperatorPhraseContext.call(this, parser);
    IntervalOperatorPhraseContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WithinIntervalOperatorPhraseContext.prototype = Object.create(IntervalOperatorPhraseContext.prototype);
WithinIntervalOperatorPhraseContext.prototype.constructor = WithinIntervalOperatorPhraseContext;

cqlParser.WithinIntervalOperatorPhraseContext = WithinIntervalOperatorPhraseContext;

WithinIntervalOperatorPhraseContext.prototype.quantityLiteral = function() {
    return this.getTypedRuleContext(QuantityLiteralContext,0);
};
WithinIntervalOperatorPhraseContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterWithinIntervalOperatorPhrase(this);
	}
};

WithinIntervalOperatorPhraseContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitWithinIntervalOperatorPhrase(this);
	}
};


function IncludedInIntervalOperatorPhraseContext(parser, ctx) {
	IntervalOperatorPhraseContext.call(this, parser);
    IntervalOperatorPhraseContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IncludedInIntervalOperatorPhraseContext.prototype = Object.create(IntervalOperatorPhraseContext.prototype);
IncludedInIntervalOperatorPhraseContext.prototype.constructor = IncludedInIntervalOperatorPhraseContext;

cqlParser.IncludedInIntervalOperatorPhraseContext = IncludedInIntervalOperatorPhraseContext;

IncludedInIntervalOperatorPhraseContext.prototype.dateTimePrecisionSpecifier = function() {
    return this.getTypedRuleContext(DateTimePrecisionSpecifierContext,0);
};
IncludedInIntervalOperatorPhraseContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterIncludedInIntervalOperatorPhrase(this);
	}
};

IncludedInIntervalOperatorPhraseContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitIncludedInIntervalOperatorPhrase(this);
	}
};


function EndsIntervalOperatorPhraseContext(parser, ctx) {
	IntervalOperatorPhraseContext.call(this, parser);
    IntervalOperatorPhraseContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EndsIntervalOperatorPhraseContext.prototype = Object.create(IntervalOperatorPhraseContext.prototype);
EndsIntervalOperatorPhraseContext.prototype.constructor = EndsIntervalOperatorPhraseContext;

cqlParser.EndsIntervalOperatorPhraseContext = EndsIntervalOperatorPhraseContext;

EndsIntervalOperatorPhraseContext.prototype.dateTimePrecisionSpecifier = function() {
    return this.getTypedRuleContext(DateTimePrecisionSpecifierContext,0);
};
EndsIntervalOperatorPhraseContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterEndsIntervalOperatorPhrase(this);
	}
};

EndsIntervalOperatorPhraseContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitEndsIntervalOperatorPhrase(this);
	}
};


function ConcurrentWithIntervalOperatorPhraseContext(parser, ctx) {
	IntervalOperatorPhraseContext.call(this, parser);
    IntervalOperatorPhraseContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConcurrentWithIntervalOperatorPhraseContext.prototype = Object.create(IntervalOperatorPhraseContext.prototype);
ConcurrentWithIntervalOperatorPhraseContext.prototype.constructor = ConcurrentWithIntervalOperatorPhraseContext;

cqlParser.ConcurrentWithIntervalOperatorPhraseContext = ConcurrentWithIntervalOperatorPhraseContext;

ConcurrentWithIntervalOperatorPhraseContext.prototype.relativeQualifier = function() {
    return this.getTypedRuleContext(RelativeQualifierContext,0);
};

ConcurrentWithIntervalOperatorPhraseContext.prototype.dateTimePrecision = function() {
    return this.getTypedRuleContext(DateTimePrecisionContext,0);
};
ConcurrentWithIntervalOperatorPhraseContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterConcurrentWithIntervalOperatorPhrase(this);
	}
};

ConcurrentWithIntervalOperatorPhraseContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitConcurrentWithIntervalOperatorPhrase(this);
	}
};


function OverlapsIntervalOperatorPhraseContext(parser, ctx) {
	IntervalOperatorPhraseContext.call(this, parser);
    IntervalOperatorPhraseContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OverlapsIntervalOperatorPhraseContext.prototype = Object.create(IntervalOperatorPhraseContext.prototype);
OverlapsIntervalOperatorPhraseContext.prototype.constructor = OverlapsIntervalOperatorPhraseContext;

cqlParser.OverlapsIntervalOperatorPhraseContext = OverlapsIntervalOperatorPhraseContext;

OverlapsIntervalOperatorPhraseContext.prototype.dateTimePrecisionSpecifier = function() {
    return this.getTypedRuleContext(DateTimePrecisionSpecifierContext,0);
};
OverlapsIntervalOperatorPhraseContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterOverlapsIntervalOperatorPhrase(this);
	}
};

OverlapsIntervalOperatorPhraseContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitOverlapsIntervalOperatorPhrase(this);
	}
};


function IncludesIntervalOperatorPhraseContext(parser, ctx) {
	IntervalOperatorPhraseContext.call(this, parser);
    IntervalOperatorPhraseContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IncludesIntervalOperatorPhraseContext.prototype = Object.create(IntervalOperatorPhraseContext.prototype);
IncludesIntervalOperatorPhraseContext.prototype.constructor = IncludesIntervalOperatorPhraseContext;

cqlParser.IncludesIntervalOperatorPhraseContext = IncludesIntervalOperatorPhraseContext;

IncludesIntervalOperatorPhraseContext.prototype.dateTimePrecisionSpecifier = function() {
    return this.getTypedRuleContext(DateTimePrecisionSpecifierContext,0);
};
IncludesIntervalOperatorPhraseContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterIncludesIntervalOperatorPhrase(this);
	}
};

IncludesIntervalOperatorPhraseContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitIncludesIntervalOperatorPhrase(this);
	}
};


function BeforeOrAfterIntervalOperatorPhraseContext(parser, ctx) {
	IntervalOperatorPhraseContext.call(this, parser);
    IntervalOperatorPhraseContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BeforeOrAfterIntervalOperatorPhraseContext.prototype = Object.create(IntervalOperatorPhraseContext.prototype);
BeforeOrAfterIntervalOperatorPhraseContext.prototype.constructor = BeforeOrAfterIntervalOperatorPhraseContext;

cqlParser.BeforeOrAfterIntervalOperatorPhraseContext = BeforeOrAfterIntervalOperatorPhraseContext;

BeforeOrAfterIntervalOperatorPhraseContext.prototype.quantityOffset = function() {
    return this.getTypedRuleContext(QuantityOffsetContext,0);
};

BeforeOrAfterIntervalOperatorPhraseContext.prototype.dateTimePrecisionSpecifier = function() {
    return this.getTypedRuleContext(DateTimePrecisionSpecifierContext,0);
};
BeforeOrAfterIntervalOperatorPhraseContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterBeforeOrAfterIntervalOperatorPhrase(this);
	}
};

BeforeOrAfterIntervalOperatorPhraseContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitBeforeOrAfterIntervalOperatorPhrase(this);
	}
};


function MeetsIntervalOperatorPhraseContext(parser, ctx) {
	IntervalOperatorPhraseContext.call(this, parser);
    IntervalOperatorPhraseContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MeetsIntervalOperatorPhraseContext.prototype = Object.create(IntervalOperatorPhraseContext.prototype);
MeetsIntervalOperatorPhraseContext.prototype.constructor = MeetsIntervalOperatorPhraseContext;

cqlParser.MeetsIntervalOperatorPhraseContext = MeetsIntervalOperatorPhraseContext;

MeetsIntervalOperatorPhraseContext.prototype.dateTimePrecisionSpecifier = function() {
    return this.getTypedRuleContext(DateTimePrecisionSpecifierContext,0);
};
MeetsIntervalOperatorPhraseContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterMeetsIntervalOperatorPhrase(this);
	}
};

MeetsIntervalOperatorPhraseContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitMeetsIntervalOperatorPhrase(this);
	}
};


function StartsIntervalOperatorPhraseContext(parser, ctx) {
	IntervalOperatorPhraseContext.call(this, parser);
    IntervalOperatorPhraseContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StartsIntervalOperatorPhraseContext.prototype = Object.create(IntervalOperatorPhraseContext.prototype);
StartsIntervalOperatorPhraseContext.prototype.constructor = StartsIntervalOperatorPhraseContext;

cqlParser.StartsIntervalOperatorPhraseContext = StartsIntervalOperatorPhraseContext;

StartsIntervalOperatorPhraseContext.prototype.dateTimePrecisionSpecifier = function() {
    return this.getTypedRuleContext(DateTimePrecisionSpecifierContext,0);
};
StartsIntervalOperatorPhraseContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterStartsIntervalOperatorPhrase(this);
	}
};

StartsIntervalOperatorPhraseContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitStartsIntervalOperatorPhrase(this);
	}
};



cqlParser.IntervalOperatorPhraseContext = IntervalOperatorPhraseContext;

cqlParser.prototype.intervalOperatorPhrase = function() {

    var localctx = new IntervalOperatorPhraseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 120, cqlParser.RULE_intervalOperatorPhrase);
    var _la = 0; // Token type
    try {
        this.state = 785;
        var la_ = this._interp.adaptivePredict(this._input,84,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ConcurrentWithIntervalOperatorPhraseContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 705;
            _la = this._input.LA(1);
            if(((((_la - 115)) & ~0x1f) == 0 && ((1 << (_la - 115)) & ((1 << (cqlParser.T__114 - 115)) | (1 << (cqlParser.T__115 - 115)) | (1 << (cqlParser.T__116 - 115)))) !== 0)) {
                this.state = 704;
                _la = this._input.LA(1);
                if(!(((((_la - 115)) & ~0x1f) == 0 && ((1 << (_la - 115)) & ((1 << (cqlParser.T__114 - 115)) | (1 << (cqlParser.T__115 - 115)) | (1 << (cqlParser.T__116 - 115)))) !== 0))) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }
            }

            this.state = 707;
            this.match(cqlParser.T__117);
            this.state = 709;
            _la = this._input.LA(1);
            if(((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (cqlParser.T__67 - 68)) | (1 << (cqlParser.T__68 - 68)) | (1 << (cqlParser.T__69 - 68)) | (1 << (cqlParser.T__70 - 68)) | (1 << (cqlParser.T__71 - 68)) | (1 << (cqlParser.T__72 - 68)) | (1 << (cqlParser.T__73 - 68)))) !== 0)) {
                this.state = 708;
                this.dateTimePrecision();
            }

            this.state = 713;
            switch(this._input.LA(1)) {
            case cqlParser.T__110:
            case cqlParser.T__111:
                this.state = 711;
                this.relativeQualifier();
                break;
            case cqlParser.T__49:
                this.state = 712;
                this.match(cqlParser.T__49);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 716;
            var la_ = this._interp.adaptivePredict(this._input,64,this._ctx);
            if(la_===1) {
                this.state = 715;
                _la = this._input.LA(1);
                if(!(_la===cqlParser.T__88 || _la===cqlParser.T__89)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }

            }
            break;

        case 2:
            localctx = new IncludesIntervalOperatorPhraseContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 719;
            _la = this._input.LA(1);
            if(_la===cqlParser.T__52) {
                this.state = 718;
                this.match(cqlParser.T__52);
            }

            this.state = 721;
            this.match(cqlParser.T__118);
            this.state = 723;
            var la_ = this._interp.adaptivePredict(this._input,66,this._ctx);
            if(la_===1) {
                this.state = 722;
                this.dateTimePrecisionSpecifier();

            }
            this.state = 726;
            var la_ = this._interp.adaptivePredict(this._input,67,this._ctx);
            if(la_===1) {
                this.state = 725;
                _la = this._input.LA(1);
                if(!(_la===cqlParser.T__88 || _la===cqlParser.T__89)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }

            }
            break;

        case 3:
            localctx = new IncludedInIntervalOperatorPhraseContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 729;
            _la = this._input.LA(1);
            if(((((_la - 115)) & ~0x1f) == 0 && ((1 << (_la - 115)) & ((1 << (cqlParser.T__114 - 115)) | (1 << (cqlParser.T__115 - 115)) | (1 << (cqlParser.T__116 - 115)))) !== 0)) {
                this.state = 728;
                _la = this._input.LA(1);
                if(!(((((_la - 115)) & ~0x1f) == 0 && ((1 << (_la - 115)) & ((1 << (cqlParser.T__114 - 115)) | (1 << (cqlParser.T__115 - 115)) | (1 << (cqlParser.T__116 - 115)))) !== 0))) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }
            }

            this.state = 732;
            _la = this._input.LA(1);
            if(_la===cqlParser.T__52) {
                this.state = 731;
                this.match(cqlParser.T__52);
            }

            this.state = 734;
            _la = this._input.LA(1);
            if(!(_la===cqlParser.T__119 || _la===cqlParser.T__120)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 736;
            var la_ = this._interp.adaptivePredict(this._input,70,this._ctx);
            if(la_===1) {
                this.state = 735;
                this.dateTimePrecisionSpecifier();

            }
            break;

        case 4:
            localctx = new BeforeOrAfterIntervalOperatorPhraseContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 739;
            _la = this._input.LA(1);
            if(((((_la - 115)) & ~0x1f) == 0 && ((1 << (_la - 115)) & ((1 << (cqlParser.T__114 - 115)) | (1 << (cqlParser.T__115 - 115)) | (1 << (cqlParser.T__116 - 115)))) !== 0)) {
                this.state = 738;
                _la = this._input.LA(1);
                if(!(((((_la - 115)) & ~0x1f) == 0 && ((1 << (_la - 115)) & ((1 << (cqlParser.T__114 - 115)) | (1 << (cqlParser.T__115 - 115)) | (1 << (cqlParser.T__116 - 115)))) !== 0))) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }
            }

            this.state = 742;
            _la = this._input.LA(1);
            if(_la===cqlParser.QUANTITY) {
                this.state = 741;
                this.quantityOffset();
            }

            this.state = 744;
            _la = this._input.LA(1);
            if(!(_la===cqlParser.T__121 || _la===cqlParser.T__122)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 746;
            var la_ = this._interp.adaptivePredict(this._input,73,this._ctx);
            if(la_===1) {
                this.state = 745;
                this.dateTimePrecisionSpecifier();

            }
            this.state = 749;
            var la_ = this._interp.adaptivePredict(this._input,74,this._ctx);
            if(la_===1) {
                this.state = 748;
                _la = this._input.LA(1);
                if(!(_la===cqlParser.T__88 || _la===cqlParser.T__89)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }

            }
            break;

        case 5:
            localctx = new WithinIntervalOperatorPhraseContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 752;
            _la = this._input.LA(1);
            if(((((_la - 115)) & ~0x1f) == 0 && ((1 << (_la - 115)) & ((1 << (cqlParser.T__114 - 115)) | (1 << (cqlParser.T__115 - 115)) | (1 << (cqlParser.T__116 - 115)))) !== 0)) {
                this.state = 751;
                _la = this._input.LA(1);
                if(!(((((_la - 115)) & ~0x1f) == 0 && ((1 << (_la - 115)) & ((1 << (cqlParser.T__114 - 115)) | (1 << (cqlParser.T__115 - 115)) | (1 << (cqlParser.T__116 - 115)))) !== 0))) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }
            }

            this.state = 755;
            _la = this._input.LA(1);
            if(_la===cqlParser.T__52) {
                this.state = 754;
                this.match(cqlParser.T__52);
            }

            this.state = 757;
            this.match(cqlParser.T__123);
            this.state = 758;
            this.quantityLiteral();
            this.state = 759;
            this.match(cqlParser.T__90);
            this.state = 761;
            var la_ = this._interp.adaptivePredict(this._input,77,this._ctx);
            if(la_===1) {
                this.state = 760;
                _la = this._input.LA(1);
                if(!(_la===cqlParser.T__88 || _la===cqlParser.T__89)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }

            }
            break;

        case 6:
            localctx = new MeetsIntervalOperatorPhraseContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 763;
            this.match(cqlParser.T__124);
            this.state = 765;
            _la = this._input.LA(1);
            if(_la===cqlParser.T__121 || _la===cqlParser.T__122) {
                this.state = 764;
                _la = this._input.LA(1);
                if(!(_la===cqlParser.T__121 || _la===cqlParser.T__122)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }
            }

            this.state = 768;
            var la_ = this._interp.adaptivePredict(this._input,79,this._ctx);
            if(la_===1) {
                this.state = 767;
                this.dateTimePrecisionSpecifier();

            }
            break;

        case 7:
            localctx = new OverlapsIntervalOperatorPhraseContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 770;
            this.match(cqlParser.T__125);
            this.state = 772;
            _la = this._input.LA(1);
            if(_la===cqlParser.T__121 || _la===cqlParser.T__122) {
                this.state = 771;
                _la = this._input.LA(1);
                if(!(_la===cqlParser.T__121 || _la===cqlParser.T__122)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }
            }

            this.state = 775;
            var la_ = this._interp.adaptivePredict(this._input,81,this._ctx);
            if(la_===1) {
                this.state = 774;
                this.dateTimePrecisionSpecifier();

            }
            break;

        case 8:
            localctx = new StartsIntervalOperatorPhraseContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 777;
            this.match(cqlParser.T__114);
            this.state = 779;
            var la_ = this._interp.adaptivePredict(this._input,82,this._ctx);
            if(la_===1) {
                this.state = 778;
                this.dateTimePrecisionSpecifier();

            }
            break;

        case 9:
            localctx = new EndsIntervalOperatorPhraseContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 781;
            this.match(cqlParser.T__115);
            this.state = 783;
            var la_ = this._interp.adaptivePredict(this._input,83,this._ctx);
            if(la_===1) {
                this.state = 782;
                this.dateTimePrecisionSpecifier();

            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;


 
TermContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function TupleSelectorTermContext(parser, ctx) {
	TermContext.call(this, parser);
    TermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TupleSelectorTermContext.prototype = Object.create(TermContext.prototype);
TupleSelectorTermContext.prototype.constructor = TupleSelectorTermContext;

cqlParser.TupleSelectorTermContext = TupleSelectorTermContext;

TupleSelectorTermContext.prototype.tupleSelector = function() {
    return this.getTypedRuleContext(TupleSelectorContext,0);
};
TupleSelectorTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterTupleSelectorTerm(this);
	}
};

TupleSelectorTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitTupleSelectorTerm(this);
	}
};


function IdentifierTermContext(parser, ctx) {
	TermContext.call(this, parser);
    TermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierTermContext.prototype = Object.create(TermContext.prototype);
IdentifierTermContext.prototype.constructor = IdentifierTermContext;

cqlParser.IdentifierTermContext = IdentifierTermContext;

IdentifierTermContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};
IdentifierTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterIdentifierTerm(this);
	}
};

IdentifierTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitIdentifierTerm(this);
	}
};


function LiteralTermContext(parser, ctx) {
	TermContext.call(this, parser);
    TermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LiteralTermContext.prototype = Object.create(TermContext.prototype);
LiteralTermContext.prototype.constructor = LiteralTermContext;

cqlParser.LiteralTermContext = LiteralTermContext;

LiteralTermContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};
LiteralTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterLiteralTerm(this);
	}
};

LiteralTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitLiteralTerm(this);
	}
};


function ConceptSelectorTermContext(parser, ctx) {
	TermContext.call(this, parser);
    TermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConceptSelectorTermContext.prototype = Object.create(TermContext.prototype);
ConceptSelectorTermContext.prototype.constructor = ConceptSelectorTermContext;

cqlParser.ConceptSelectorTermContext = ConceptSelectorTermContext;

ConceptSelectorTermContext.prototype.conceptSelector = function() {
    return this.getTypedRuleContext(ConceptSelectorContext,0);
};
ConceptSelectorTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterConceptSelectorTerm(this);
	}
};

ConceptSelectorTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitConceptSelectorTerm(this);
	}
};


function ParenthesizedTermContext(parser, ctx) {
	TermContext.call(this, parser);
    TermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenthesizedTermContext.prototype = Object.create(TermContext.prototype);
ParenthesizedTermContext.prototype.constructor = ParenthesizedTermContext;

cqlParser.ParenthesizedTermContext = ParenthesizedTermContext;

ParenthesizedTermContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ParenthesizedTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterParenthesizedTerm(this);
	}
};

ParenthesizedTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitParenthesizedTerm(this);
	}
};


function CodeSelectorTermContext(parser, ctx) {
	TermContext.call(this, parser);
    TermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CodeSelectorTermContext.prototype = Object.create(TermContext.prototype);
CodeSelectorTermContext.prototype.constructor = CodeSelectorTermContext;

cqlParser.CodeSelectorTermContext = CodeSelectorTermContext;

CodeSelectorTermContext.prototype.codeSelector = function() {
    return this.getTypedRuleContext(CodeSelectorContext,0);
};
CodeSelectorTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterCodeSelectorTerm(this);
	}
};

CodeSelectorTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitCodeSelectorTerm(this);
	}
};


function InstanceSelectorTermContext(parser, ctx) {
	TermContext.call(this, parser);
    TermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InstanceSelectorTermContext.prototype = Object.create(TermContext.prototype);
InstanceSelectorTermContext.prototype.constructor = InstanceSelectorTermContext;

cqlParser.InstanceSelectorTermContext = InstanceSelectorTermContext;

InstanceSelectorTermContext.prototype.instanceSelector = function() {
    return this.getTypedRuleContext(InstanceSelectorContext,0);
};
InstanceSelectorTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterInstanceSelectorTerm(this);
	}
};

InstanceSelectorTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitInstanceSelectorTerm(this);
	}
};


function IntervalSelectorTermContext(parser, ctx) {
	TermContext.call(this, parser);
    TermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntervalSelectorTermContext.prototype = Object.create(TermContext.prototype);
IntervalSelectorTermContext.prototype.constructor = IntervalSelectorTermContext;

cqlParser.IntervalSelectorTermContext = IntervalSelectorTermContext;

IntervalSelectorTermContext.prototype.intervalSelector = function() {
    return this.getTypedRuleContext(IntervalSelectorContext,0);
};
IntervalSelectorTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterIntervalSelectorTerm(this);
	}
};

IntervalSelectorTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitIntervalSelectorTerm(this);
	}
};


function ListSelectorTermContext(parser, ctx) {
	TermContext.call(this, parser);
    TermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ListSelectorTermContext.prototype = Object.create(TermContext.prototype);
ListSelectorTermContext.prototype.constructor = ListSelectorTermContext;

cqlParser.ListSelectorTermContext = ListSelectorTermContext;

ListSelectorTermContext.prototype.listSelector = function() {
    return this.getTypedRuleContext(ListSelectorContext,0);
};
ListSelectorTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterListSelectorTerm(this);
	}
};

ListSelectorTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitListSelectorTerm(this);
	}
};



cqlParser.TermContext = TermContext;

cqlParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 122, cqlParser.RULE_term);
    try {
        this.state = 799;
        var la_ = this._interp.adaptivePredict(this._input,85,this._ctx);
        switch(la_) {
        case 1:
            localctx = new IdentifierTermContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 787;
            this.identifier();
            break;

        case 2:
            localctx = new LiteralTermContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 788;
            this.literal();
            break;

        case 3:
            localctx = new IntervalSelectorTermContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 789;
            this.intervalSelector();
            break;

        case 4:
            localctx = new TupleSelectorTermContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 790;
            this.tupleSelector();
            break;

        case 5:
            localctx = new InstanceSelectorTermContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 791;
            this.instanceSelector();
            break;

        case 6:
            localctx = new ListSelectorTermContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 792;
            this.listSelector();
            break;

        case 7:
            localctx = new CodeSelectorTermContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 793;
            this.codeSelector();
            break;

        case 8:
            localctx = new ConceptSelectorTermContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 794;
            this.conceptSelector();
            break;

        case 9:
            localctx = new ParenthesizedTermContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 795;
            this.match(cqlParser.T__13);
            this.state = 796;
            this.expression(0);
            this.state = 797;
            this.match(cqlParser.T__15);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IntervalSelectorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_intervalSelector;
    return this;
}

IntervalSelectorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntervalSelectorContext.prototype.constructor = IntervalSelectorContext;

IntervalSelectorContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

IntervalSelectorContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterIntervalSelector(this);
	}
};

IntervalSelectorContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitIntervalSelector(this);
	}
};




cqlParser.IntervalSelectorContext = IntervalSelectorContext;

cqlParser.prototype.intervalSelector = function() {

    var localctx = new IntervalSelectorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 124, cqlParser.RULE_intervalSelector);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 801;
        this.match(cqlParser.T__20);
        this.state = 802;
        _la = this._input.LA(1);
        if(!(_la===cqlParser.T__13 || _la===cqlParser.T__30)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 803;
        this.expression(0);
        this.state = 804;
        this.match(cqlParser.T__14);
        this.state = 805;
        this.expression(0);
        this.state = 806;
        _la = this._input.LA(1);
        if(!(_la===cqlParser.T__15 || _la===cqlParser.T__32)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TupleSelectorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_tupleSelector;
    return this;
}

TupleSelectorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TupleSelectorContext.prototype.constructor = TupleSelectorContext;

TupleSelectorContext.prototype.tupleElementSelector = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TupleElementSelectorContext);
    } else {
        return this.getTypedRuleContext(TupleElementSelectorContext,i);
    }
};

TupleSelectorContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterTupleSelector(this);
	}
};

TupleSelectorContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitTupleSelector(this);
	}
};




cqlParser.TupleSelectorContext = TupleSelectorContext;

cqlParser.prototype.tupleSelector = function() {

    var localctx = new TupleSelectorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 126, cqlParser.RULE_tupleSelector);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 809;
        _la = this._input.LA(1);
        if(_la===cqlParser.T__21) {
            this.state = 808;
            this.match(cqlParser.T__21);
        }

        this.state = 811;
        this.match(cqlParser.T__22);
        this.state = 821;
        switch(this._input.LA(1)) {
        case cqlParser.T__10:
            this.state = 812;
            this.match(cqlParser.T__10);
            break;
        case cqlParser.T__1:
        case cqlParser.T__74:
        case cqlParser.T__75:
        case cqlParser.T__76:
        case cqlParser.T__126:
        case cqlParser.T__127:
        case cqlParser.T__128:
        case cqlParser.IDENTIFIER:
        case cqlParser.QUOTEDIDENTIFIER:
            this.state = 813;
            this.tupleElementSelector();
            this.state = 818;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===cqlParser.T__14) {
                this.state = 814;
                this.match(cqlParser.T__14);
                this.state = 815;
                this.tupleElementSelector();
                this.state = 820;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 823;
        this.match(cqlParser.T__23);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TupleElementSelectorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_tupleElementSelector;
    return this;
}

TupleElementSelectorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TupleElementSelectorContext.prototype.constructor = TupleElementSelectorContext;

TupleElementSelectorContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

TupleElementSelectorContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

TupleElementSelectorContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterTupleElementSelector(this);
	}
};

TupleElementSelectorContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitTupleElementSelector(this);
	}
};




cqlParser.TupleElementSelectorContext = TupleElementSelectorContext;

cqlParser.prototype.tupleElementSelector = function() {

    var localctx = new TupleElementSelectorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 128, cqlParser.RULE_tupleElementSelector);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 825;
        this.identifier();
        this.state = 826;
        this.match(cqlParser.T__10);
        this.state = 827;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InstanceSelectorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_instanceSelector;
    return this;
}

InstanceSelectorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstanceSelectorContext.prototype.constructor = InstanceSelectorContext;

InstanceSelectorContext.prototype.namedTypeSpecifier = function() {
    return this.getTypedRuleContext(NamedTypeSpecifierContext,0);
};

InstanceSelectorContext.prototype.instanceElementSelector = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InstanceElementSelectorContext);
    } else {
        return this.getTypedRuleContext(InstanceElementSelectorContext,i);
    }
};

InstanceSelectorContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterInstanceSelector(this);
	}
};

InstanceSelectorContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitInstanceSelector(this);
	}
};




cqlParser.InstanceSelectorContext = InstanceSelectorContext;

cqlParser.prototype.instanceSelector = function() {

    var localctx = new InstanceSelectorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 130, cqlParser.RULE_instanceSelector);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 829;
        this.namedTypeSpecifier();
        this.state = 830;
        this.match(cqlParser.T__22);
        this.state = 840;
        switch(this._input.LA(1)) {
        case cqlParser.T__10:
            this.state = 831;
            this.match(cqlParser.T__10);
            break;
        case cqlParser.T__1:
        case cqlParser.T__74:
        case cqlParser.T__75:
        case cqlParser.T__76:
        case cqlParser.T__126:
        case cqlParser.T__127:
        case cqlParser.T__128:
        case cqlParser.IDENTIFIER:
        case cqlParser.QUOTEDIDENTIFIER:
            this.state = 832;
            this.instanceElementSelector();
            this.state = 837;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===cqlParser.T__14) {
                this.state = 833;
                this.match(cqlParser.T__14);
                this.state = 834;
                this.instanceElementSelector();
                this.state = 839;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 842;
        this.match(cqlParser.T__23);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InstanceElementSelectorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_instanceElementSelector;
    return this;
}

InstanceElementSelectorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstanceElementSelectorContext.prototype.constructor = InstanceElementSelectorContext;

InstanceElementSelectorContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

InstanceElementSelectorContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

InstanceElementSelectorContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterInstanceElementSelector(this);
	}
};

InstanceElementSelectorContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitInstanceElementSelector(this);
	}
};




cqlParser.InstanceElementSelectorContext = InstanceElementSelectorContext;

cqlParser.prototype.instanceElementSelector = function() {

    var localctx = new InstanceElementSelectorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 132, cqlParser.RULE_instanceElementSelector);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 844;
        this.identifier();
        this.state = 845;
        this.match(cqlParser.T__10);
        this.state = 846;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ListSelectorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_listSelector;
    return this;
}

ListSelectorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListSelectorContext.prototype.constructor = ListSelectorContext;

ListSelectorContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ListSelectorContext.prototype.typeSpecifier = function() {
    return this.getTypedRuleContext(TypeSpecifierContext,0);
};

ListSelectorContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterListSelector(this);
	}
};

ListSelectorContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitListSelector(this);
	}
};




cqlParser.ListSelectorContext = ListSelectorContext;

cqlParser.prototype.listSelector = function() {

    var localctx = new ListSelectorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 134, cqlParser.RULE_listSelector);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 855;
        _la = this._input.LA(1);
        if(_la===cqlParser.T__17) {
            this.state = 848;
            this.match(cqlParser.T__17);
            this.state = 853;
            _la = this._input.LA(1);
            if(_la===cqlParser.T__18) {
                this.state = 849;
                this.match(cqlParser.T__18);
                this.state = 850;
                this.typeSpecifier();
                this.state = 851;
                this.match(cqlParser.T__19);
            }

        }

        this.state = 857;
        this.match(cqlParser.T__22);
        this.state = 866;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << cqlParser.T__1) | (1 << cqlParser.T__13) | (1 << cqlParser.T__17) | (1 << cqlParser.T__20) | (1 << cqlParser.T__21) | (1 << cqlParser.T__22) | (1 << cqlParser.T__30))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (cqlParser.T__33 - 34)) | (1 << (cqlParser.T__37 - 34)) | (1 << (cqlParser.T__45 - 34)) | (1 << (cqlParser.T__46 - 34)) | (1 << (cqlParser.T__47 - 34)) | (1 << (cqlParser.T__48 - 34)) | (1 << (cqlParser.T__50 - 34)) | (1 << (cqlParser.T__51 - 34)) | (1 << (cqlParser.T__55 - 34)))) !== 0) || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (cqlParser.T__67 - 68)) | (1 << (cqlParser.T__68 - 68)) | (1 << (cqlParser.T__69 - 68)) | (1 << (cqlParser.T__70 - 68)) | (1 << (cqlParser.T__71 - 68)) | (1 << (cqlParser.T__72 - 68)) | (1 << (cqlParser.T__73 - 68)) | (1 << (cqlParser.T__74 - 68)) | (1 << (cqlParser.T__75 - 68)) | (1 << (cqlParser.T__76 - 68)) | (1 << (cqlParser.T__77 - 68)) | (1 << (cqlParser.T__78 - 68)) | (1 << (cqlParser.T__79 - 68)) | (1 << (cqlParser.T__80 - 68)) | (1 << (cqlParser.T__81 - 68)) | (1 << (cqlParser.T__82 - 68)) | (1 << (cqlParser.T__83 - 68)) | (1 << (cqlParser.T__84 - 68)) | (1 << (cqlParser.T__86 - 68)) | (1 << (cqlParser.T__87 - 68)) | (1 << (cqlParser.T__88 - 68)) | (1 << (cqlParser.T__89 - 68)) | (1 << (cqlParser.T__91 - 68)) | (1 << (cqlParser.T__92 - 68)) | (1 << (cqlParser.T__93 - 68)) | (1 << (cqlParser.T__94 - 68)) | (1 << (cqlParser.T__95 - 68)) | (1 << (cqlParser.T__96 - 68)) | (1 << (cqlParser.T__97 - 68)))) !== 0) || ((((_la - 104)) & ~0x1f) == 0 && ((1 << (_la - 104)) & ((1 << (cqlParser.T__103 - 104)) | (1 << (cqlParser.T__106 - 104)) | (1 << (cqlParser.T__107 - 104)) | (1 << (cqlParser.T__108 - 104)) | (1 << (cqlParser.T__126 - 104)) | (1 << (cqlParser.T__127 - 104)) | (1 << (cqlParser.T__128 - 104)) | (1 << (cqlParser.IDENTIFIER - 104)) | (1 << (cqlParser.QUANTITY - 104)) | (1 << (cqlParser.DATETIME - 104)) | (1 << (cqlParser.TIME - 104)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 104)) | (1 << (cqlParser.STRING - 104)))) !== 0)) {
            this.state = 858;
            this.expression(0);
            this.state = 863;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===cqlParser.T__14) {
                this.state = 859;
                this.match(cqlParser.T__14);
                this.state = 860;
                this.expression(0);
                this.state = 865;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 868;
        this.match(cqlParser.T__23);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DisplayClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_displayClause;
    return this;
}

DisplayClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DisplayClauseContext.prototype.constructor = DisplayClauseContext;

DisplayClauseContext.prototype.stringLiteral = function() {
    return this.getTypedRuleContext(StringLiteralContext,0);
};

DisplayClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterDisplayClause(this);
	}
};

DisplayClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitDisplayClause(this);
	}
};




cqlParser.DisplayClauseContext = DisplayClauseContext;

cqlParser.prototype.displayClause = function() {

    var localctx = new DisplayClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 136, cqlParser.RULE_displayClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 870;
        this.match(cqlParser.T__126);
        this.state = 871;
        this.stringLiteral();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CodeSelectorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_codeSelector;
    return this;
}

CodeSelectorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeSelectorContext.prototype.constructor = CodeSelectorContext;

CodeSelectorContext.prototype.stringLiteral = function() {
    return this.getTypedRuleContext(StringLiteralContext,0);
};

CodeSelectorContext.prototype.codesystemIdentifier = function() {
    return this.getTypedRuleContext(CodesystemIdentifierContext,0);
};

CodeSelectorContext.prototype.displayClause = function() {
    return this.getTypedRuleContext(DisplayClauseContext,0);
};

CodeSelectorContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterCodeSelector(this);
	}
};

CodeSelectorContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitCodeSelector(this);
	}
};




cqlParser.CodeSelectorContext = CodeSelectorContext;

cqlParser.prototype.codeSelector = function() {

    var localctx = new CodeSelectorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 138, cqlParser.RULE_codeSelector);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 873;
        this.match(cqlParser.T__127);
        this.state = 874;
        this.stringLiteral();
        this.state = 875;
        this.match(cqlParser.T__33);
        this.state = 876;
        this.codesystemIdentifier();
        this.state = 878;
        var la_ = this._interp.adaptivePredict(this._input,95,this._ctx);
        if(la_===1) {
            this.state = 877;
            this.displayClause();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConceptSelectorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_conceptSelector;
    return this;
}

ConceptSelectorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConceptSelectorContext.prototype.constructor = ConceptSelectorContext;

ConceptSelectorContext.prototype.codeSelector = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CodeSelectorContext);
    } else {
        return this.getTypedRuleContext(CodeSelectorContext,i);
    }
};

ConceptSelectorContext.prototype.displayClause = function() {
    return this.getTypedRuleContext(DisplayClauseContext,0);
};

ConceptSelectorContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterConceptSelector(this);
	}
};

ConceptSelectorContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitConceptSelector(this);
	}
};




cqlParser.ConceptSelectorContext = ConceptSelectorContext;

cqlParser.prototype.conceptSelector = function() {

    var localctx = new ConceptSelectorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 140, cqlParser.RULE_conceptSelector);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 880;
        this.match(cqlParser.T__128);
        this.state = 881;
        this.match(cqlParser.T__22);
        this.state = 882;
        this.codeSelector();
        this.state = 887;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===cqlParser.T__14) {
            this.state = 883;
            this.match(cqlParser.T__14);
            this.state = 884;
            this.codeSelector();
            this.state = 889;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 890;
        this.match(cqlParser.T__23);
        this.state = 892;
        var la_ = this._interp.adaptivePredict(this._input,97,this._ctx);
        if(la_===1) {
            this.state = 891;
            this.displayClause();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.nullLiteral = function() {
    return this.getTypedRuleContext(NullLiteralContext,0);
};

LiteralContext.prototype.booleanLiteral = function() {
    return this.getTypedRuleContext(BooleanLiteralContext,0);
};

LiteralContext.prototype.stringLiteral = function() {
    return this.getTypedRuleContext(StringLiteralContext,0);
};

LiteralContext.prototype.dateTimeLiteral = function() {
    return this.getTypedRuleContext(DateTimeLiteralContext,0);
};

LiteralContext.prototype.timeLiteral = function() {
    return this.getTypedRuleContext(TimeLiteralContext,0);
};

LiteralContext.prototype.quantityLiteral = function() {
    return this.getTypedRuleContext(QuantityLiteralContext,0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitLiteral(this);
	}
};




cqlParser.LiteralContext = LiteralContext;

cqlParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 142, cqlParser.RULE_literal);
    try {
        this.state = 900;
        switch(this._input.LA(1)) {
        case cqlParser.T__46:
            this.enterOuterAlt(localctx, 1);
            this.state = 894;
            this.nullLiteral();
            break;
        case cqlParser.T__47:
        case cqlParser.T__48:
            this.enterOuterAlt(localctx, 2);
            this.state = 895;
            this.booleanLiteral();
            break;
        case cqlParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 896;
            this.stringLiteral();
            break;
        case cqlParser.DATETIME:
            this.enterOuterAlt(localctx, 4);
            this.state = 897;
            this.dateTimeLiteral();
            break;
        case cqlParser.TIME:
            this.enterOuterAlt(localctx, 5);
            this.state = 898;
            this.timeLiteral();
            break;
        case cqlParser.QUANTITY:
            this.enterOuterAlt(localctx, 6);
            this.state = 899;
            this.quantityLiteral();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NullLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_nullLiteral;
    return this;
}

NullLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NullLiteralContext.prototype.constructor = NullLiteralContext;


NullLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterNullLiteral(this);
	}
};

NullLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitNullLiteral(this);
	}
};




cqlParser.NullLiteralContext = NullLiteralContext;

cqlParser.prototype.nullLiteral = function() {

    var localctx = new NullLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 144, cqlParser.RULE_nullLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 902;
        this.match(cqlParser.T__46);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BooleanLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_booleanLiteral;
    return this;
}

BooleanLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BooleanLiteralContext.prototype.constructor = BooleanLiteralContext;


BooleanLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterBooleanLiteral(this);
	}
};

BooleanLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitBooleanLiteral(this);
	}
};




cqlParser.BooleanLiteralContext = BooleanLiteralContext;

cqlParser.prototype.booleanLiteral = function() {

    var localctx = new BooleanLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 146, cqlParser.RULE_booleanLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 904;
        _la = this._input.LA(1);
        if(!(_la===cqlParser.T__47 || _la===cqlParser.T__48)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StringLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_stringLiteral;
    return this;
}

StringLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringLiteralContext.prototype.constructor = StringLiteralContext;

StringLiteralContext.prototype.STRING = function() {
    return this.getToken(cqlParser.STRING, 0);
};

StringLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterStringLiteral(this);
	}
};

StringLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitStringLiteral(this);
	}
};




cqlParser.StringLiteralContext = StringLiteralContext;

cqlParser.prototype.stringLiteral = function() {

    var localctx = new StringLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 148, cqlParser.RULE_stringLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 906;
        this.match(cqlParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DateTimeLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_dateTimeLiteral;
    return this;
}

DateTimeLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DateTimeLiteralContext.prototype.constructor = DateTimeLiteralContext;

DateTimeLiteralContext.prototype.DATETIME = function() {
    return this.getToken(cqlParser.DATETIME, 0);
};

DateTimeLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterDateTimeLiteral(this);
	}
};

DateTimeLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitDateTimeLiteral(this);
	}
};




cqlParser.DateTimeLiteralContext = DateTimeLiteralContext;

cqlParser.prototype.dateTimeLiteral = function() {

    var localctx = new DateTimeLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 150, cqlParser.RULE_dateTimeLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 908;
        this.match(cqlParser.DATETIME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TimeLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_timeLiteral;
    return this;
}

TimeLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TimeLiteralContext.prototype.constructor = TimeLiteralContext;

TimeLiteralContext.prototype.TIME = function() {
    return this.getToken(cqlParser.TIME, 0);
};

TimeLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterTimeLiteral(this);
	}
};

TimeLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitTimeLiteral(this);
	}
};




cqlParser.TimeLiteralContext = TimeLiteralContext;

cqlParser.prototype.timeLiteral = function() {

    var localctx = new TimeLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 152, cqlParser.RULE_timeLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 910;
        this.match(cqlParser.TIME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QuantityLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_quantityLiteral;
    return this;
}

QuantityLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuantityLiteralContext.prototype.constructor = QuantityLiteralContext;

QuantityLiteralContext.prototype.QUANTITY = function() {
    return this.getToken(cqlParser.QUANTITY, 0);
};

QuantityLiteralContext.prototype.unit = function() {
    return this.getTypedRuleContext(UnitContext,0);
};

QuantityLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterQuantityLiteral(this);
	}
};

QuantityLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitQuantityLiteral(this);
	}
};




cqlParser.QuantityLiteralContext = QuantityLiteralContext;

cqlParser.prototype.quantityLiteral = function() {

    var localctx = new QuantityLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 154, cqlParser.RULE_quantityLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 912;
        this.match(cqlParser.QUANTITY);
        this.state = 914;
        var la_ = this._interp.adaptivePredict(this._input,99,this._ctx);
        if(la_===1) {
            this.state = 913;
            this.unit();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UnitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_unit;
    return this;
}

UnitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnitContext.prototype.constructor = UnitContext;

UnitContext.prototype.dateTimePrecision = function() {
    return this.getTypedRuleContext(DateTimePrecisionContext,0);
};

UnitContext.prototype.pluralDateTimePrecision = function() {
    return this.getTypedRuleContext(PluralDateTimePrecisionContext,0);
};

UnitContext.prototype.STRING = function() {
    return this.getToken(cqlParser.STRING, 0);
};

UnitContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterUnit(this);
	}
};

UnitContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitUnit(this);
	}
};




cqlParser.UnitContext = UnitContext;

cqlParser.prototype.unit = function() {

    var localctx = new UnitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 156, cqlParser.RULE_unit);
    try {
        this.state = 919;
        switch(this._input.LA(1)) {
        case cqlParser.T__67:
        case cqlParser.T__68:
        case cqlParser.T__69:
        case cqlParser.T__70:
        case cqlParser.T__71:
        case cqlParser.T__72:
        case cqlParser.T__73:
            this.enterOuterAlt(localctx, 1);
            this.state = 916;
            this.dateTimePrecision();
            break;
        case cqlParser.T__77:
        case cqlParser.T__78:
        case cqlParser.T__79:
        case cqlParser.T__80:
        case cqlParser.T__81:
        case cqlParser.T__82:
        case cqlParser.T__83:
            this.enterOuterAlt(localctx, 2);
            this.state = 917;
            this.pluralDateTimePrecision();
            break;
        case cqlParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 918;
            this.match(cqlParser.STRING);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cqlParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.IDENTIFIER = function() {
    return this.getToken(cqlParser.IDENTIFIER, 0);
};

IdentifierContext.prototype.QUOTEDIDENTIFIER = function() {
    return this.getToken(cqlParser.QUOTEDIDENTIFIER, 0);
};

IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof cqlListener ) {
        listener.exitIdentifier(this);
	}
};




cqlParser.IdentifierContext = IdentifierContext;

cqlParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 158, cqlParser.RULE_identifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 921;
        _la = this._input.LA(1);
        if(!(_la===cqlParser.T__1 || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (cqlParser.T__74 - 75)) | (1 << (cqlParser.T__75 - 75)) | (1 << (cqlParser.T__76 - 75)))) !== 0) || ((((_la - 127)) & ~0x1f) == 0 && ((1 << (_la - 127)) & ((1 << (cqlParser.T__126 - 127)) | (1 << (cqlParser.T__127 - 127)) | (1 << (cqlParser.T__128 - 127)) | (1 << (cqlParser.IDENTIFIER - 127)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 127)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


cqlParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 50:
			return this.expression_sempred(localctx, predIndex);
	case 54:
			return this.expressionTerm_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

cqlParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);
		case 1:
			return this.precpred(this._ctx, 6);
		case 2:
			return this.precpred(this._ctx, 5);
		case 3:
			return this.precpred(this._ctx, 4);
		case 4:
			return this.precpred(this._ctx, 3);
		case 5:
			return this.precpred(this._ctx, 2);
		case 6:
			return this.precpred(this._ctx, 1);
		case 7:
			return this.precpred(this._ctx, 15);
		case 8:
			return this.precpred(this._ctx, 14);
		case 9:
			return this.precpred(this._ctx, 10);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

cqlParser.prototype.expressionTerm_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 10:
			return this.precpred(this._ctx, 6);
		case 11:
			return this.precpred(this._ctx, 5);
		case 12:
			return this.precpred(this._ctx, 4);
		case 13:
			return this.precpred(this._ctx, 19);
		case 14:
			return this.precpred(this._ctx, 18);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.cqlParser = cqlParser;
});