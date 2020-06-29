// Generated from MotePy.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MotePyListener = require('./MotePyListener').MotePyListener;
var MotePyVisitor = require('./MotePyVisitor').MotePyVisitor;

var grammarFileName = "MotePy.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003T\u023a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u00049\t9\u0004",
    ":\t:\u0004;\t;\u0003\u0002\u0007\u0002x\n\u0002\f\u0002\u000e\u0002",
    "{\u000b\u0002\u0003\u0002\u0007\u0002~\n\u0002\f\u0002\u000e\u0002\u0081",
    "\u000b\u0002\u0003\u0002\u0007\u0002\u0084\n\u0002\f\u0002\u000e\u0002",
    "\u0087\u000b\u0002\u0003\u0002\u0007\u0002\u008a\n\u0002\f\u0002\u000e",
    "\u0002\u008d\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003\u0093\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u009c\n\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006\u00a1\n\u0006\f\u0006",
    "\u000e\u0006\u00a4\u000b\u0006\u0003\u0006\u0005\u0006\u00a7\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u00b7",
    "\n\n\f\n\u000e\n\u00ba\u000b\n\u0005\n\u00bc\n\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00c3\n\u000b\u0003\f\u0003",
    "\f\u0003\f\u0005\f\u00c8\n\f\u0003\r\u0005\r\u00cb\n\r\u0003\r\u0005",
    "\r\u00ce\n\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u00d4\n\r\f\r\u000e",
    "\r\u00d7\u000b\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0005\u000f\u00de\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0006\u000f\u00e4\n\u000f\r\u000f\u000e\u000f\u00e5\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0005\u0011\u00ec\n\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u0109\n\u0017\u0003\u0017",
    "\u0005\u0017\u010c\n\u0017\u0003\u0017\u0005\u0017\u010f\n\u0017\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u0114\n\u0018\f\u0018\u000e",
    "\u0018\u0117\u000b\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u001a\u0003\u001a\u0003\u001b\u0005\u001b\u0120\n\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0007",
    "\u001c\u0128\n\u001c\f\u001c\u000e\u001c\u012b\u000b\u001c\u0003\u001d",
    "\u0003\u001d\u0007\u001d\u012f\n\u001d\f\u001d\u000e\u001d\u0132\u000b",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0005",
    "\u001e\u0139\n\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0005\u001f\u0141\n\u001f\u0003 \u0003 \u0003",
    " \u0007 \u0146\n \f \u000e \u0149\u000b \u0003!\u0003!\u0003!\u0003",
    "!\u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003",
    "#\u0003#\u0005#\u0159\n#\u0003#\u0005#\u015c\n#\u0003#\u0003#\u0003",
    "#\u0003$\u0003$\u0003$\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0005\'\u017d\n\'\u0003(\u0003(\u0003(\u0003(\u0003)\u0005)\u0184",
    "\n)\u0003)\u0003)\u0003)\u0003)\u0005)\u018a\n)\u0003)\u0003)\u0003",
    ")\u0007)\u018f\n)\f)\u000e)\u0192\u000b)\u0003)\u0007)\u0195\n)\f)\u000e",
    ")\u0198\u000b)\u0003)\u0003)\u0003*\u0003*\u0003*\u0007*\u019f\n*\f",
    "*\u000e*\u01a2\u000b*\u0003+\u0003+\u0003+\u0006+\u01a7\n+\r+\u000e",
    "+\u01a8\u0003,\u0003,\u0005,\u01ad\n,\u0003,\u0003,\u0005,\u01b1\n,",
    "\u0003,\u0003,\u0003-\u0003-\u0005-\u01b7\n-\u0003-\u0003-\u0005-\u01bb",
    "\n-\u0003.\u0003.\u0003.\u0007.\u01c0\n.\f.\u000e.\u01c3\u000b.\u0003",
    ".\u0005.\u01c6\n.\u0003/\u0003/\u0003/\u0003/\u0006/\u01cc\n/\r/\u000e",
    "/\u01cd\u00030\u00030\u00030\u00031\u00031\u00031\u00051\u01d6\n1\u0003",
    "2\u00032\u00032\u00032\u00032\u00033\u00033\u00033\u00033\u00033\u0003",
    "3\u00033\u00033\u00033\u00033\u00033\u00033\u00033\u00053\u01ea\n3\u0003",
    "3\u00033\u00033\u00033\u00033\u00033\u00033\u00033\u00033\u00033\u0003",
    "3\u00033\u00033\u00033\u00033\u00033\u00033\u00033\u00073\u01fe\n3\f",
    "3\u000e3\u0201\u000b3\u00034\u00034\u00034\u00034\u00034\u00034\u0003",
    "4\u00034\u00054\u020b\n4\u00035\u00035\u00035\u00035\u00035\u00035\u0003",
    "5\u00035\u00035\u00055\u0216\n5\u00035\u00035\u00035\u00075\u021b\n",
    "5\f5\u000e5\u021e\u000b5\u00036\u00036\u00036\u00056\u0223\n6\u0003",
    "7\u00037\u00037\u00057\u0228\n7\u00038\u00038\u00038\u00038\u00039\u0003",
    "9\u0003:\u0003:\u0003:\u0005:\u0233\n:\u0003;\u0003;\u0003;\u0005;\u0238",
    "\n;\u0003;\u0002\u0004dh<\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ",
    "\\^`bdfhjlnprt\u0002\u0011\u0003\u0002\u0018\u0019\u0003\u0002KL\u0004",
    "\u0002\"\"$$\u0004\u0002@BDI\u0005\u0002\u0016\u0016@BDI\u0003\u0002",
    "\b\t\u0004\u0002\'\'<<\u0003\u000289\u0004\u0002:;==\u0004\u0002(*,",
    ",\u0003\u0002&\'\u0003\u0002.3\u0003\u000256\u0003\u0002\u0004\u0005",
    "\u0003\u0002LM\u0253\u0002y\u0003\u0002\u0002\u0002\u0004\u008e\u0003",
    "\u0002\u0002\u0002\u0006\u0094\u0003\u0002\u0002\u0002\b\u009b\u0003",
    "\u0002\u0002\u0002\n\u009d\u0003\u0002\u0002\u0002\f\u00a8\u0003\u0002",
    "\u0002\u0002\u000e\u00ac\u0003\u0002\u0002\u0002\u0010\u00b0\u0003\u0002",
    "\u0002\u0002\u0012\u00b2\u0003\u0002\u0002\u0002\u0014\u00c2\u0003\u0002",
    "\u0002\u0002\u0016\u00c4\u0003\u0002\u0002\u0002\u0018\u00ca\u0003\u0002",
    "\u0002\u0002\u001a\u00da\u0003\u0002\u0002\u0002\u001c\u00dd\u0003\u0002",
    "\u0002\u0002\u001e\u00e7\u0003\u0002\u0002\u0002 \u00eb\u0003\u0002",
    "\u0002\u0002\"\u00ed\u0003\u0002\u0002\u0002$\u00f3\u0003\u0002\u0002",
    "\u0002&\u00f5\u0003\u0002\u0002\u0002(\u00f7\u0003\u0002\u0002\u0002",
    "*\u00fc\u0003\u0002\u0002\u0002,\u0108\u0003\u0002\u0002\u0002.\u0110",
    "\u0003\u0002\u0002\u00020\u0118\u0003\u0002\u0002\u00022\u011c\u0003",
    "\u0002\u0002\u00024\u011f\u0003\u0002\u0002\u00026\u0124\u0003\u0002",
    "\u0002\u00028\u012c\u0003\u0002\u0002\u0002:\u0135\u0003\u0002\u0002",
    "\u0002<\u013a\u0003\u0002\u0002\u0002>\u0142\u0003\u0002\u0002\u0002",
    "@\u014a\u0003\u0002\u0002\u0002B\u0150\u0003\u0002\u0002\u0002D\u015b",
    "\u0003\u0002\u0002\u0002F\u0160\u0003\u0002\u0002\u0002H\u0163\u0003",
    "\u0002\u0002\u0002J\u0166\u0003\u0002\u0002\u0002L\u017c\u0003\u0002",
    "\u0002\u0002N\u017e\u0003\u0002\u0002\u0002P\u0183\u0003\u0002\u0002",
    "\u0002R\u019b\u0003\u0002\u0002\u0002T\u01a3\u0003\u0002\u0002\u0002",
    "V\u01ac\u0003\u0002\u0002\u0002X\u01b6\u0003\u0002\u0002\u0002Z\u01bc",
    "\u0003\u0002\u0002\u0002\\\u01cb\u0003\u0002\u0002\u0002^\u01cf\u0003",
    "\u0002\u0002\u0002`\u01d2\u0003\u0002\u0002\u0002b\u01d7\u0003\u0002",
    "\u0002\u0002d\u01e9\u0003\u0002\u0002\u0002f\u020a\u0003\u0002\u0002",
    "\u0002h\u0215\u0003\u0002\u0002\u0002j\u021f\u0003\u0002\u0002\u0002",
    "l\u0227\u0003\u0002\u0002\u0002n\u0229\u0003\u0002\u0002\u0002p\u022d",
    "\u0003\u0002\u0002\u0002r\u0232\u0003\u0002\u0002\u0002t\u0237\u0003",
    "\u0002\u0002\u0002vx\u0005\f\u0007\u0002wv\u0003\u0002\u0002\u0002x",
    "{\u0003\u0002\u0002\u0002yw\u0003\u0002\u0002\u0002yz\u0003\u0002\u0002",
    "\u0002z\u007f\u0003\u0002\u0002\u0002{y\u0003\u0002\u0002\u0002|~\u0005",
    "\u000e\b\u0002}|\u0003\u0002\u0002\u0002~\u0081\u0003\u0002\u0002\u0002",
    "\u007f}\u0003\u0002\u0002\u0002\u007f\u0080\u0003\u0002\u0002\u0002",
    "\u0080\u0085\u0003\u0002\u0002\u0002\u0081\u007f\u0003\u0002\u0002\u0002",
    "\u0082\u0084\u0005\u0018\r\u0002\u0083\u0082\u0003\u0002\u0002\u0002",
    "\u0084\u0087\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002",
    "\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u008b\u0003\u0002\u0002\u0002",
    "\u0087\u0085\u0003\u0002\u0002\u0002\u0088\u008a\u0005P)\u0002\u0089",
    "\u0088\u0003\u0002\u0002\u0002\u008a\u008d\u0003\u0002\u0002\u0002\u008b",
    "\u0089\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c",
    "\u0003\u0003\u0002\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002\u008e",
    "\u008f\u0007\u000b\u0002\u0002\u008f\u0090\u0007K\u0002\u0002\u0090",
    "\u0092\u0005\u0006\u0004\u0002\u0091\u0093\u0007\u001b\u0002\u0002\u0092",
    "\u0091\u0003\u0002\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093",
    "\u0005\u0003\u0002\u0002\u0002\u0094\u0095\u0007\u001e\u0002\u0002\u0095",
    "\u0096\u0005\n\u0006\u0002\u0096\u0097\u0007\u001f\u0002\u0002\u0097",
    "\u0007\u0003\u0002\u0002\u0002\u0098\u009c\u0005R*\u0002\u0099\u009c",
    "\u0005V,\u0002\u009a\u009c\u0005\u0006\u0004\u0002\u009b\u0098\u0003",
    "\u0002\u0002\u0002\u009b\u0099\u0003\u0002\u0002\u0002\u009b\u009a\u0003",
    "\u0002\u0002\u0002\u009c\t\u0003\u0002\u0002\u0002\u009d\u00a2\u0005",
    "\b\u0005\u0002\u009e\u009f\u0007\"\u0002\u0002\u009f\u00a1\u0005\b\u0005",
    "\u0002\u00a0\u009e\u0003\u0002\u0002\u0002\u00a1\u00a4\u0003\u0002\u0002",
    "\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002",
    "\u0002\u00a3\u00a6\u0003\u0002\u0002\u0002\u00a4\u00a2\u0003\u0002\u0002",
    "\u0002\u00a5\u00a7\u0007\"\u0002\u0002\u00a6\u00a5\u0003\u0002\u0002",
    "\u0002\u00a6\u00a7\u0003\u0002\u0002\u0002\u00a7\u000b\u0003\u0002\u0002",
    "\u0002\u00a8\u00a9\u0007\u0007\u0002\u0002\u00a9\u00aa\u0007K\u0002",
    "\u0002\u00aa\u00ab\u0007\u001b\u0002\u0002\u00ab\r\u0003\u0002\u0002",
    "\u0002\u00ac\u00ad\u0007\u0015\u0002\u0002\u00ad\u00ae\u0007K\u0002",
    "\u0002\u00ae\u00af\u0007\u001b\u0002\u0002\u00af\u000f\u0003\u0002\u0002",
    "\u0002\u00b0\u00b1\t\u0002\u0002\u0002\u00b1\u0011\u0003\u0002\u0002",
    "\u0002\u00b2\u00bb\u0007\u001e\u0002\u0002\u00b3\u00b8\u0005h5\u0002",
    "\u00b4\u00b5\u0007\"\u0002\u0002\u00b5\u00b7\u0005h5\u0002\u00b6\u00b4",
    "\u0003\u0002\u0002\u0002\u00b7\u00ba\u0003\u0002\u0002\u0002\u00b8\u00b6",
    "\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002\u0002\u00b9\u00bc",
    "\u0003\u0002\u0002\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00bb\u00b3",
    "\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc\u00bd",
    "\u0003\u0002\u0002\u0002\u00bd\u00be\u0007\u001f\u0002\u0002\u00be\u0013",
    "\u0003\u0002\u0002\u0002\u00bf\u00c3\u0005h5\u0002\u00c0\u00c3\u0007",
    "P\u0002\u0002\u00c1\u00c3\u0005\u0012\n\u0002\u00c2\u00bf\u0003\u0002",
    "\u0002\u0002\u00c2\u00c0\u0003\u0002\u0002\u0002\u00c2\u00c1\u0003\u0002",
    "\u0002\u0002\u00c3\u0015\u0003\u0002\u0002\u0002\u00c4\u00c7\u0007K",
    "\u0002\u0002\u00c5\u00c6\u00074\u0002\u0002\u00c6\u00c8\u0005\u0014",
    "\u000b\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003\u0002",
    "\u0002\u0002\u00c8\u0017\u0003\u0002\u0002\u0002\u00c9\u00cb\u0007\u0010",
    "\u0002\u0002\u00ca\u00c9\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002",
    "\u0002\u0002\u00cb\u00cd\u0003\u0002\u0002\u0002\u00cc\u00ce\u0007C",
    "\u0002\u0002\u00cd\u00cc\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002",
    "\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf\u00d0\u0005,",
    "\u0017\u0002\u00d0\u00d5\u0005\u0016\f\u0002\u00d1\u00d2\u0007\"\u0002",
    "\u0002\u00d2\u00d4\u0005\u0016\f\u0002\u00d3\u00d1\u0003\u0002\u0002",
    "\u0002\u00d4\u00d7\u0003\u0002\u0002\u0002\u00d5\u00d3\u0003\u0002\u0002",
    "\u0002\u00d5\u00d6\u0003\u0002\u0002\u0002\u00d6\u00d8\u0003\u0002\u0002",
    "\u0002\u00d7\u00d5\u0003\u0002\u0002\u0002\u00d8\u00d9\u0007\u001b\u0002",
    "\u0002\u00d9\u0019\u0003\u0002\u0002\u0002\u00da\u00db\t\u0003\u0002",
    "\u0002\u00db\u001b\u0003\u0002\u0002\u0002\u00dc\u00de\u0007\u001a\u0002",
    "\u0002\u00dd\u00dc\u0003\u0002\u0002\u0002\u00dd\u00de\u0003\u0002\u0002",
    "\u0002\u00de\u00e3\u0003\u0002\u0002\u0002\u00df\u00e0\u0007 \u0002",
    "\u0002\u00e0\u00e1\u0005\u001a\u000e\u0002\u00e1\u00e2\u0007!\u0002",
    "\u0002\u00e2\u00e4\u0003\u0002\u0002\u0002\u00e3\u00df\u0003\u0002\u0002",
    "\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e5\u00e3\u0003\u0002\u0002",
    "\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6\u001d\u0003\u0002\u0002",
    "\u0002\u00e7\u00e8\t\u0003\u0002\u0002\u00e8\u001f\u0003\u0002\u0002",
    "\u0002\u00e9\u00ec\u0007K\u0002\u0002\u00ea\u00ec\u0005p9\u0002\u00eb",
    "\u00e9\u0003\u0002\u0002\u0002\u00eb\u00ea\u0003\u0002\u0002\u0002\u00ec",
    "!\u0003\u0002\u0002\u0002\u00ed\u00ee\u0007 \u0002\u0002\u00ee\u00ef",
    "\u0005 \u0011\u0002\u00ef\u00f0\t\u0004\u0002\u0002\u00f0\u00f1\u0005",
    " \u0011\u0002\u00f1\u00f2\u0007!\u0002\u0002\u00f2#\u0003\u0002\u0002",
    "\u0002\u00f3\u00f4\t\u0005\u0002\u0002\u00f4%\u0003\u0002\u0002\u0002",
    "\u00f5\u00f6\t\u0006\u0002\u0002\u00f6\'\u0003\u0002\u0002\u0002\u00f7",
    "\u00f8\u0007\u0006\u0002\u0002\u00f8\u00f9\u0007.\u0002\u0002\u00f9",
    "\u00fa\u0005,\u0017\u0002\u00fa\u00fb\u0007/\u0002\u0002\u00fb)\u0003",
    "\u0002\u0002\u0002\u00fc\u00fd\t\u0007\u0002\u0002\u00fd\u00fe\u0007",
    ".\u0002\u0002\u00fe\u00ff\u0007K\u0002\u0002\u00ff\u0100\u0007/\u0002",
    "\u0002\u0100+\u0003\u0002\u0002\u0002\u0101\u0109\u0005R*\u0002\u0102",
    "\u0109\u0005T+\u0002\u0103\u0109\u0005\"\u0012\u0002\u0104\u0109\u0005",
    "&\u0014\u0002\u0105\u0109\u0005(\u0015\u0002\u0106\u0109\u0005*\u0016",
    "\u0002\u0107\u0109\u00050\u0019\u0002\u0108\u0101\u0003\u0002\u0002",
    "\u0002\u0108\u0102\u0003\u0002\u0002\u0002\u0108\u0103\u0003\u0002\u0002",
    "\u0002\u0108\u0104\u0003\u0002\u0002\u0002\u0108\u0105\u0003\u0002\u0002",
    "\u0002\u0108\u0106\u0003\u0002\u0002\u0002\u0108\u0107\u0003\u0002\u0002",
    "\u0002\u0109\u010b\u0003\u0002\u0002\u0002\u010a\u010c\u0005\u001c\u000f",
    "\u0002\u010b\u010a\u0003\u0002\u0002\u0002\u010b\u010c\u0003\u0002\u0002",
    "\u0002\u010c\u010e\u0003\u0002\u0002\u0002\u010d\u010f\u0007:\u0002",
    "\u0002\u010e\u010d\u0003\u0002\u0002\u0002\u010e\u010f\u0003\u0002\u0002",
    "\u0002\u010f-\u0003\u0002\u0002\u0002\u0110\u0115\u0005,\u0017\u0002",
    "\u0111\u0112\u0007\"\u0002\u0002\u0112\u0114\u0005,\u0017\u0002\u0113",
    "\u0111\u0003\u0002\u0002\u0002\u0114\u0117\u0003\u0002\u0002\u0002\u0115",
    "\u0113\u0003\u0002\u0002\u0002\u0115\u0116\u0003\u0002\u0002\u0002\u0116",
    "/\u0003\u0002\u0002\u0002\u0117\u0115\u0003\u0002\u0002\u0002\u0118",
    "\u0119\u0007\u001c\u0002\u0002\u0119\u011a\u0005.\u0018\u0002\u011a",
    "\u011b\u0007\u001d\u0002\u0002\u011b1\u0003\u0002\u0002\u0002\u011c",
    "\u011d\u0005,\u0017\u0002\u011d3\u0003\u0002\u0002\u0002\u011e\u0120",
    "\u0007\u0010\u0002\u0002\u011f\u011e\u0003\u0002\u0002\u0002\u011f\u0120",
    "\u0003\u0002\u0002\u0002\u0120\u0121\u0003\u0002\u0002\u0002\u0121\u0122",
    "\u0005,\u0017\u0002\u0122\u0123\u0007K\u0002\u0002\u01235\u0003\u0002",
    "\u0002\u0002\u0124\u0129\u00054\u001b\u0002\u0125\u0126\u0007\"\u0002",
    "\u0002\u0126\u0128\u00054\u001b\u0002\u0127\u0125\u0003\u0002\u0002",
    "\u0002\u0128\u012b\u0003\u0002\u0002\u0002\u0129\u0127\u0003\u0002\u0002",
    "\u0002\u0129\u012a\u0003\u0002\u0002\u0002\u012a7\u0003\u0002\u0002",
    "\u0002\u012b\u0129\u0003\u0002\u0002\u0002\u012c\u0130\u0007\u001e\u0002",
    "\u0002\u012d\u012f\u0005L\'\u0002\u012e\u012d\u0003\u0002\u0002\u0002",
    "\u012f\u0132\u0003\u0002\u0002\u0002\u0130\u012e\u0003\u0002\u0002\u0002",
    "\u0130\u0131\u0003\u0002\u0002\u0002\u0131\u0133\u0003\u0002\u0002\u0002",
    "\u0132\u0130\u0003\u0002\u0002\u0002\u0133\u0134\u0007\u001f\u0002\u0002",
    "\u01349\u0003\u0002\u0002\u0002\u0135\u0138\u0007\u0012\u0002\u0002",
    "\u0136\u0139\u00058\u001d\u0002\u0137\u0139\u0005<\u001f\u0002\u0138",
    "\u0136\u0003\u0002\u0002\u0002\u0138\u0137\u0003\u0002\u0002\u0002\u0139",
    ";\u0003\u0002\u0002\u0002\u013a\u013b\u0007\u0011\u0002\u0002\u013b",
    "\u013c\u0007\u001c\u0002\u0002\u013c\u013d\u0005h5\u0002\u013d\u013e",
    "\u0007\u001d\u0002\u0002\u013e\u0140\u00058\u001d\u0002\u013f\u0141",
    "\u0005:\u001e\u0002\u0140\u013f\u0003\u0002\u0002\u0002\u0140\u0141",
    "\u0003\u0002\u0002\u0002\u0141=\u0003\u0002\u0002\u0002\u0142\u0147",
    "\u0007K\u0002\u0002\u0143\u0144\u0007\"\u0002\u0002\u0144\u0146\u0007",
    "K\u0002\u0002\u0145\u0143\u0003\u0002\u0002\u0002\u0146\u0149\u0003",
    "\u0002\u0002\u0002\u0147\u0145\u0003\u0002\u0002\u0002\u0147\u0148\u0003",
    "\u0002\u0002\u0002\u0148?\u0003\u0002\u0002\u0002\u0149\u0147\u0003",
    "\u0002\u0002\u0002\u014a\u014b\u0007\u0013\u0002\u0002\u014b\u014c\u0005",
    "> \u0002\u014c\u014d\u0007\u0014\u0002\u0002\u014d\u014e\u0005\"\u0012",
    "\u0002\u014e\u014f\u00058\u001d\u0002\u014fA\u0003\u0002\u0002\u0002",
    "\u0150\u0151\u0007\u0017\u0002\u0002\u0151\u0152\u0007\u001c\u0002\u0002",
    "\u0152\u0153\u0005h5\u0002\u0153\u0154\u0007\u001d\u0002\u0002\u0154",
    "\u0155\u00058\u001d\u0002\u0155C\u0003\u0002\u0002\u0002\u0156\u0158",
    "\u0005R*\u0002\u0157\u0159\u0005\\/\u0002\u0158\u0157\u0003\u0002\u0002",
    "\u0002\u0158\u0159\u0003\u0002\u0002\u0002\u0159\u015c\u0003\u0002\u0002",
    "\u0002\u015a\u015c\u0005N(\u0002\u015b\u0156\u0003\u0002\u0002\u0002",
    "\u015b\u015a\u0003\u0002\u0002\u0002\u015c\u015d\u0003\u0002\u0002\u0002",
    "\u015d\u015e\u00074\u0002\u0002\u015e\u015f\u0005l7\u0002\u015fE\u0003",
    "\u0002\u0002\u0002\u0160\u0161\u0007\u0004\u0002\u0002\u0161\u0162\u0005",
    "R*\u0002\u0162G\u0003\u0002\u0002\u0002\u0163\u0164\u0007\u0005\u0002",
    "\u0002\u0164\u0165\u0005R*\u0002\u0165I\u0003\u0002\u0002\u0002\u0166",
    "\u0167\u0007J\u0002\u0002\u0167\u0168\u0005l7\u0002\u0168K\u0003\u0002",
    "\u0002\u0002\u0169\u017d\u00058\u001d\u0002\u016a\u017d\u0005<\u001f",
    "\u0002\u016b\u017d\u0005@!\u0002\u016c\u017d\u0005B\"\u0002\u016d\u016e",
    "\u0005D#\u0002\u016e\u016f\u0007\u001b\u0002\u0002\u016f\u017d\u0003",
    "\u0002\u0002\u0002\u0170\u0171\u0005V,\u0002\u0171\u0172\u0007\u001b",
    "\u0002\u0002\u0172\u017d\u0003\u0002\u0002\u0002\u0173\u0174\u0005J",
    "&\u0002\u0174\u0175\u0007\u001b\u0002\u0002\u0175\u017d\u0003\u0002",
    "\u0002\u0002\u0176\u0177\u0005F$\u0002\u0177\u0178\u0007\u001b\u0002",
    "\u0002\u0178\u017d\u0003\u0002\u0002\u0002\u0179\u017a\u0005H%\u0002",
    "\u017a\u017b\u0007\u001b\u0002\u0002\u017b\u017d\u0003\u0002\u0002\u0002",
    "\u017c\u0169\u0003\u0002\u0002\u0002\u017c\u016a\u0003\u0002\u0002\u0002",
    "\u017c\u016b\u0003\u0002\u0002\u0002\u017c\u016c\u0003\u0002\u0002\u0002",
    "\u017c\u016d\u0003\u0002\u0002\u0002\u017c\u0170\u0003\u0002\u0002\u0002",
    "\u017c\u0173\u0003\u0002\u0002\u0002\u017c\u0176\u0003\u0002\u0002\u0002",
    "\u017c\u0179\u0003\u0002\u0002\u0002\u017dM\u0003\u0002\u0002\u0002",
    "\u017e\u017f\u0007\u001c\u0002\u0002\u017f\u0180\u0005> \u0002\u0180",
    "\u0181\u0007\u001d\u0002\u0002\u0181O\u0003\u0002\u0002\u0002\u0182",
    "\u0184\u0007\u0003\u0002\u0002\u0183\u0182\u0003\u0002\u0002\u0002\u0183",
    "\u0184\u0003\u0002\u0002\u0002\u0184\u0185\u0003\u0002\u0002\u0002\u0185",
    "\u0186\u00052\u001a\u0002\u0186\u0187\u0007K\u0002\u0002\u0187\u0189",
    "\u0007\u001c\u0002\u0002\u0188\u018a\u00056\u001c\u0002\u0189\u0188",
    "\u0003\u0002\u0002\u0002\u0189\u018a\u0003\u0002\u0002\u0002\u018a\u018b",
    "\u0003\u0002\u0002\u0002\u018b\u018c\u0007\u001d\u0002\u0002\u018c\u0190",
    "\u0007\u001e\u0002\u0002\u018d\u018f\u0005\u0018\r\u0002\u018e\u018d",
    "\u0003\u0002\u0002\u0002\u018f\u0192\u0003\u0002\u0002\u0002\u0190\u018e",
    "\u0003\u0002\u0002\u0002\u0190\u0191\u0003\u0002\u0002\u0002\u0191\u0196",
    "\u0003\u0002\u0002\u0002\u0192\u0190\u0003\u0002\u0002\u0002\u0193\u0195",
    "\u0005L\'\u0002\u0194\u0193\u0003\u0002\u0002\u0002\u0195\u0198\u0003",
    "\u0002\u0002\u0002\u0196\u0194\u0003\u0002\u0002\u0002\u0196\u0197\u0003",
    "\u0002\u0002\u0002\u0197\u0199\u0003\u0002\u0002\u0002\u0198\u0196\u0003",
    "\u0002\u0002\u0002\u0199\u019a\u0007\u001f\u0002\u0002\u019aQ\u0003",
    "\u0002\u0002\u0002\u019b\u01a0\u0007K\u0002\u0002\u019c\u019d\u0007",
    "%\u0002\u0002\u019d\u019f\u0007K\u0002\u0002\u019e\u019c\u0003\u0002",
    "\u0002\u0002\u019f\u01a2\u0003\u0002\u0002\u0002\u01a0\u019e\u0003\u0002",
    "\u0002\u0002\u01a0\u01a1\u0003\u0002\u0002\u0002\u01a1S\u0003\u0002",
    "\u0002\u0002\u01a2\u01a0\u0003\u0002\u0002\u0002\u01a3\u01a6\u0007K",
    "\u0002\u0002\u01a4\u01a5\u0007#\u0002\u0002\u01a5\u01a7\u0007K\u0002",
    "\u0002\u01a6\u01a4\u0003\u0002\u0002\u0002\u01a7\u01a8\u0003\u0002\u0002",
    "\u0002\u01a8\u01a6\u0003\u0002\u0002\u0002\u01a8\u01a9\u0003\u0002\u0002",
    "\u0002\u01a9U\u0003\u0002\u0002\u0002\u01aa\u01ad\u0005R*\u0002\u01ab",
    "\u01ad\u0005T+\u0002\u01ac\u01aa\u0003\u0002\u0002\u0002\u01ac\u01ab",
    "\u0003\u0002\u0002\u0002\u01ad\u01ae\u0003\u0002\u0002\u0002\u01ae\u01b0",
    "\u0007\u001c\u0002\u0002\u01af\u01b1\u0005Z.\u0002\u01b0\u01af\u0003",
    "\u0002\u0002\u0002\u01b0\u01b1\u0003\u0002\u0002\u0002\u01b1\u01b2\u0003",
    "\u0002\u0002\u0002\u01b2\u01b3\u0007\u001d\u0002\u0002\u01b3W\u0003",
    "\u0002\u0002\u0002\u01b4\u01b5\u0007K\u0002\u0002\u01b5\u01b7\u0007",
    "4\u0002\u0002\u01b6\u01b4\u0003\u0002\u0002\u0002\u01b6\u01b7\u0003",
    "\u0002\u0002\u0002\u01b7\u01ba\u0003\u0002\u0002\u0002\u01b8\u01bb\u0005",
    "h5\u0002\u01b9\u01bb\u0007P\u0002\u0002\u01ba\u01b8\u0003\u0002\u0002",
    "\u0002\u01ba\u01b9\u0003\u0002\u0002\u0002\u01bbY\u0003\u0002\u0002",
    "\u0002\u01bc\u01c1\u0005X-\u0002\u01bd\u01be\u0007\"\u0002\u0002\u01be",
    "\u01c0\u0005X-\u0002\u01bf\u01bd\u0003\u0002\u0002\u0002\u01c0\u01c3",
    "\u0003\u0002\u0002\u0002\u01c1\u01bf\u0003\u0002\u0002\u0002\u01c1\u01c2",
    "\u0003\u0002\u0002\u0002\u01c2\u01c5\u0003\u0002\u0002\u0002\u01c3\u01c1",
    "\u0003\u0002\u0002\u0002\u01c4\u01c6\u0007\"\u0002\u0002\u01c5\u01c4",
    "\u0003\u0002\u0002\u0002\u01c5\u01c6\u0003\u0002\u0002\u0002\u01c6[",
    "\u0003\u0002\u0002\u0002\u01c7\u01c8\u0007 \u0002\u0002\u01c8\u01c9",
    "\u0005h5\u0002\u01c9\u01ca\u0007!\u0002\u0002\u01ca\u01cc\u0003\u0002",
    "\u0002\u0002\u01cb\u01c7\u0003\u0002\u0002\u0002\u01cc\u01cd\u0003\u0002",
    "\u0002\u0002\u01cd\u01cb\u0003\u0002\u0002\u0002\u01cd\u01ce\u0003\u0002",
    "\u0002\u0002\u01ce]\u0003\u0002\u0002\u0002\u01cf\u01d0\u0007K\u0002",
    "\u0002\u01d0\u01d1\u0005\\/\u0002\u01d1_\u0003\u0002\u0002\u0002\u01d2",
    "\u01d5\u0007:\u0002\u0002\u01d3\u01d6\u0005^0\u0002\u01d4\u01d6\u0005",
    "R*\u0002\u01d5\u01d3\u0003\u0002\u0002\u0002\u01d5\u01d4\u0003\u0002",
    "\u0002\u0002\u01d6a\u0003\u0002\u0002\u0002\u01d7\u01d8\u0005$\u0013",
    "\u0002\u01d8\u01d9\u0007\u001c\u0002\u0002\u01d9\u01da\u0005d3\u0002",
    "\u01da\u01db\u0007\u001d\u0002\u0002\u01dbc\u0003\u0002\u0002\u0002",
    "\u01dc\u01dd\b3\u0001\u0002\u01dd\u01de\t\b\u0002\u0002\u01de\u01ea",
    "\u0005d3\t\u01df\u01ea\u0005b2\u0002\u01e0\u01ea\u0005R*\u0002\u01e1",
    "\u01ea\u0005^0\u0002\u01e2\u01ea\u0005`1\u0002\u01e3\u01ea\u0005V,\u0002",
    "\u01e4\u01ea\u0005t;\u0002\u01e5\u01e6\u0007\u001c\u0002\u0002\u01e6",
    "\u01e7\u0005d3\u0002\u01e7\u01e8\u0007\u001d\u0002\u0002\u01e8\u01ea",
    "\u0003\u0002\u0002\u0002\u01e9\u01dc\u0003\u0002\u0002\u0002\u01e9\u01df",
    "\u0003\u0002\u0002\u0002\u01e9\u01e0\u0003\u0002\u0002\u0002\u01e9\u01e1",
    "\u0003\u0002\u0002\u0002\u01e9\u01e2\u0003\u0002\u0002\u0002\u01e9\u01e3",
    "\u0003\u0002\u0002\u0002\u01e9\u01e4\u0003\u0002\u0002\u0002\u01e9\u01e5",
    "\u0003\u0002\u0002\u0002\u01ea\u01ff\u0003\u0002\u0002\u0002\u01eb\u01ec",
    "\f\u0010\u0002\u0002\u01ec\u01ed\u0007+\u0002\u0002\u01ed\u01fe\u0005",
    "d3\u0011\u01ee\u01ef\f\b\u0002\u0002\u01ef\u01f0\t\t\u0002\u0002\u01f0",
    "\u01fe\u0005d3\t\u01f1\u01f2\f\u0007\u0002\u0002\u01f2\u01f3\t\n\u0002",
    "\u0002\u01f3\u01fe\u0005d3\b\u01f4\u01f5\f\u0006\u0002\u0002\u01f5\u01f6",
    "\u0007-\u0002\u0002\u01f6\u01fe\u0005d3\u0007\u01f7\u01f8\f\u0005\u0002",
    "\u0002\u01f8\u01f9\t\u000b\u0002\u0002\u01f9\u01fe\u0005d3\u0006\u01fa",
    "\u01fb\f\u0004\u0002\u0002\u01fb\u01fc\t\f\u0002\u0002\u01fc\u01fe\u0005",
    "d3\u0005\u01fd\u01eb\u0003\u0002\u0002\u0002\u01fd\u01ee\u0003\u0002",
    "\u0002\u0002\u01fd\u01f1\u0003\u0002\u0002\u0002\u01fd\u01f4\u0003\u0002",
    "\u0002\u0002\u01fd\u01f7\u0003\u0002\u0002\u0002\u01fd\u01fa\u0003\u0002",
    "\u0002\u0002\u01fe\u0201\u0003\u0002\u0002\u0002\u01ff\u01fd\u0003\u0002",
    "\u0002\u0002\u01ff\u0200\u0003\u0002\u0002\u0002\u0200e\u0003\u0002",
    "\u0002\u0002\u0201\u01ff\u0003\u0002\u0002\u0002\u0202\u0203\u0005d",
    "3\u0002\u0203\u0204\t\r\u0002\u0002\u0204\u0205\u0005d3\u0002\u0205",
    "\u020b\u0003\u0002\u0002\u0002\u0206\u0207\u0007\u001c\u0002\u0002\u0207",
    "\u0208\u0005f4\u0002\u0208\u0209\u0007\u001d\u0002\u0002\u0209\u020b",
    "\u0003\u0002\u0002\u0002\u020a\u0202\u0003\u0002\u0002\u0002\u020a\u0206",
    "\u0003\u0002\u0002\u0002\u020bg\u0003\u0002\u0002\u0002\u020c\u020d",
    "\b5\u0001\u0002\u020d\u020e\u00077\u0002\u0002\u020e\u0216\u0005h5\u0007",
    "\u020f\u0216\u0005d3\u0002\u0210\u0216\u0005f4\u0002\u0211\u0212\u0007",
    "\u001c\u0002\u0002\u0212\u0213\u0005h5\u0002\u0213\u0214\u0007\u001d",
    "\u0002\u0002\u0214\u0216\u0003\u0002\u0002\u0002\u0215\u020c\u0003\u0002",
    "\u0002\u0002\u0215\u020f\u0003\u0002\u0002\u0002\u0215\u0210\u0003\u0002",
    "\u0002\u0002\u0215\u0211\u0003\u0002\u0002\u0002\u0216\u021c\u0003\u0002",
    "\u0002\u0002\u0217\u0218\f\u0004\u0002\u0002\u0218\u0219\t\u000e\u0002",
    "\u0002\u0219\u021b\u0005h5\u0005\u021a\u0217\u0003\u0002\u0002\u0002",
    "\u021b\u021e\u0003\u0002\u0002\u0002\u021c\u021a\u0003\u0002\u0002\u0002",
    "\u021c\u021d\u0003\u0002\u0002\u0002\u021di\u0003\u0002\u0002\u0002",
    "\u021e\u021c\u0003\u0002\u0002\u0002\u021f\u0222\t\u000f\u0002\u0002",
    "\u0220\u0223\u0005V,\u0002\u0221\u0223\u0007K\u0002\u0002\u0222\u0220",
    "\u0003\u0002\u0002\u0002\u0222\u0221\u0003\u0002\u0002\u0002\u0223k",
    "\u0003\u0002\u0002\u0002\u0224\u0228\u0005j6\u0002\u0225\u0228\u0005",
    "n8\u0002\u0226\u0228\u0005h5\u0002\u0227\u0224\u0003\u0002\u0002\u0002",
    "\u0227\u0225\u0003\u0002\u0002\u0002\u0227\u0226\u0003\u0002\u0002\u0002",
    "\u0228m\u0003\u0002\u0002\u0002\u0229\u022a\u0007\u001c\u0002\u0002",
    "\u022a\u022b\u0005Z.\u0002\u022b\u022c\u0007\u001d\u0002\u0002\u022c",
    "o\u0003\u0002\u0002\u0002\u022d\u022e\t\u0010\u0002\u0002\u022eq\u0003",
    "\u0002\u0002\u0002\u022f\u0233\u0005p9\u0002\u0230\u0233\u0007O\u0002",
    "\u0002\u0231\u0233\u0005\u0010\t\u0002\u0232\u022f\u0003\u0002\u0002",
    "\u0002\u0232\u0230\u0003\u0002\u0002\u0002\u0232\u0231\u0003\u0002\u0002",
    "\u0002\u0233s\u0003\u0002\u0002\u0002\u0234\u0238\u0005r:\u0002\u0235",
    "\u0238\u0005\u0012\n\u0002\u0236\u0238\u0007P\u0002\u0002\u0237\u0234",
    "\u0003\u0002\u0002\u0002\u0237\u0235\u0003\u0002\u0002\u0002\u0237\u0236",
    "\u0003\u0002\u0002\u0002\u0238u\u0003\u0002\u0002\u00029y\u007f\u0085",
    "\u008b\u0092\u009b\u00a2\u00a6\u00b8\u00bb\u00c2\u00c7\u00ca\u00cd\u00d5",
    "\u00dd\u00e5\u00eb\u0108\u010b\u010e\u0115\u011f\u0129\u0130\u0138\u0140",
    "\u0147\u0158\u015b\u017c\u0183\u0189\u0190\u0196\u01a0\u01a8\u01ac\u01b0",
    "\u01b6\u01ba\u01c1\u01c5\u01cd\u01d5\u01e9\u01fd\u01ff\u020a\u0215\u021c",
    "\u0222\u0227\u0232\u0237"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'async'", "'await'", "'signal'", "'future'", 
                     "'using'", "'rchan'", "'chan'", "'module'", "'pipeline'", 
                     "'flow'", "'use'", "'config'", "'default'", "'const'", 
                     "'if'", "'else'", "'for'", "'in'", "'include'", "'void'", 
                     "'while'", "'true'", "'false'", "'ring'", "';'", "'('", 
                     "')'", "'{'", "'}'", "'['", "']'", "','", "'::'", "':'", 
                     "'.'", "'+'", "'-'", "'*'", "'/'", "'%'", "'**'", "'(*)'", 
                     "'(.)'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", 
                     "'='", "'&&'", "'||'", "'!'", "'<<'", "'>>'", "'&'", 
                     "'|'", "'~'", "'^'", "'@effects'", "':='", "'int'", 
                     "'float'", "'boolean'", "'static'", "'int8_t'", "'uint8_t'", 
                     "'int16_t'", "'uint16_t'", "'int32_t'", "'uint32_t'", 
                     "'return'" ];

var symbolicNames = [ null, "ASYNC", "AWAIT", "SIGNAL", "FUTURE", "USING", 
                      "RCHAN", "CHAN", "MODULE", "PIPELINE", "FLOW", "USE", 
                      "CONFIG", "DEFAULT", "CONST", "IF", "ELSE", "FOR", 
                      "IN", "INCLUDE", "VOID", "WHILE", "TRUE", "FALSE", 
                      "RING", "SEMI", "LP", "RP", "LB", "RB", "LS", "RS", 
                      "COMMA", "DCOLON", "COLON", "PERIOD", "PLUS", "MINUS", 
                      "MUL", "DIV", "MOD", "POW", "HPROD", "CAT", "LT", 
                      "GT", "LTE", "GTE", "EQ", "NEQ", "ASSIGN", "LAND", 
                      "LOR", "LNOT", "LSHIFT", "RSHIFT", "BAND", "BOR", 
                      "BNOT", "BXOR", "EFFECTS", "EASSIGN", "INT", "FLOAT", 
                      "BOOLEAN", "STATIC", "I8", "U8", "I16", "U16", "I32", 
                      "U32", "RETURN", "Identifier", "IntegerConstant", 
                      "FloatingConstant", "DigitSequence", "CharacterConstant", 
                      "StringLiteral", "Whitespace", "Newline", "BlockComment", 
                      "LineComment" ];

var ruleNames =  [ "module", "pipelineDef", "pipelineBlock", "pipelineEntry", 
                   "pipelineList", "usingSpec", "includeSpec", "booleanLiteral", 
                   "arrayLiteral", "initValue", "varIdDef", "varDef", "dimValue", 
                   "dimensionSpec", "intVal", "numVal", "rangeType", "castableType", 
                   "primitiveType", "futureType", "chanType", "varType", 
                   "varTypeList", "tupleType", "returnType", "formalParam", 
                   "formalParams", "stmtBlock", "elseStmt", "ifStmt", "identifierList", 
                   "forStmt", "whileStmt", "assignStmt", "awaitStmt", "signalStmt", 
                   "returnStmt", "stmt", "tupleIds", "funcDef", "qualIdentifier", 
                   "cppQualIdentifier", "functionCall", "actualParam", "actualParams", 
                   "dimensionExpr", "arrayExpr", "addressExpr", "castExpr", 
                   "basicExpr", "relExpr", "expr", "syncExpr", "toplevelExpr", 
                   "tupleExpr", "numConstant", "exprConstant", "literal" ];

function MotePy (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

MotePy.prototype = Object.create(antlr4.Parser.prototype);
MotePy.prototype.constructor = MotePy;

Object.defineProperty(MotePy.prototype, "atn", {
	get : function() {
		return atn;
	}
});

MotePy.EOF = antlr4.Token.EOF;
MotePy.ASYNC = 1;
MotePy.AWAIT = 2;
MotePy.SIGNAL = 3;
MotePy.FUTURE = 4;
MotePy.USING = 5;
MotePy.RCHAN = 6;
MotePy.CHAN = 7;
MotePy.MODULE = 8;
MotePy.PIPELINE = 9;
MotePy.FLOW = 10;
MotePy.USE = 11;
MotePy.CONFIG = 12;
MotePy.DEFAULT = 13;
MotePy.CONST = 14;
MotePy.IF = 15;
MotePy.ELSE = 16;
MotePy.FOR = 17;
MotePy.IN = 18;
MotePy.INCLUDE = 19;
MotePy.VOID = 20;
MotePy.WHILE = 21;
MotePy.TRUE = 22;
MotePy.FALSE = 23;
MotePy.RING = 24;
MotePy.SEMI = 25;
MotePy.LP = 26;
MotePy.RP = 27;
MotePy.LB = 28;
MotePy.RB = 29;
MotePy.LS = 30;
MotePy.RS = 31;
MotePy.COMMA = 32;
MotePy.DCOLON = 33;
MotePy.COLON = 34;
MotePy.PERIOD = 35;
MotePy.PLUS = 36;
MotePy.MINUS = 37;
MotePy.MUL = 38;
MotePy.DIV = 39;
MotePy.MOD = 40;
MotePy.POW = 41;
MotePy.HPROD = 42;
MotePy.CAT = 43;
MotePy.LT = 44;
MotePy.GT = 45;
MotePy.LTE = 46;
MotePy.GTE = 47;
MotePy.EQ = 48;
MotePy.NEQ = 49;
MotePy.ASSIGN = 50;
MotePy.LAND = 51;
MotePy.LOR = 52;
MotePy.LNOT = 53;
MotePy.LSHIFT = 54;
MotePy.RSHIFT = 55;
MotePy.BAND = 56;
MotePy.BOR = 57;
MotePy.BNOT = 58;
MotePy.BXOR = 59;
MotePy.EFFECTS = 60;
MotePy.EASSIGN = 61;
MotePy.INT = 62;
MotePy.FLOAT = 63;
MotePy.BOOLEAN = 64;
MotePy.STATIC = 65;
MotePy.I8 = 66;
MotePy.U8 = 67;
MotePy.I16 = 68;
MotePy.U16 = 69;
MotePy.I32 = 70;
MotePy.U32 = 71;
MotePy.RETURN = 72;
MotePy.Identifier = 73;
MotePy.IntegerConstant = 74;
MotePy.FloatingConstant = 75;
MotePy.DigitSequence = 76;
MotePy.CharacterConstant = 77;
MotePy.StringLiteral = 78;
MotePy.Whitespace = 79;
MotePy.Newline = 80;
MotePy.BlockComment = 81;
MotePy.LineComment = 82;

MotePy.RULE_module = 0;
MotePy.RULE_pipelineDef = 1;
MotePy.RULE_pipelineBlock = 2;
MotePy.RULE_pipelineEntry = 3;
MotePy.RULE_pipelineList = 4;
MotePy.RULE_usingSpec = 5;
MotePy.RULE_includeSpec = 6;
MotePy.RULE_booleanLiteral = 7;
MotePy.RULE_arrayLiteral = 8;
MotePy.RULE_initValue = 9;
MotePy.RULE_varIdDef = 10;
MotePy.RULE_varDef = 11;
MotePy.RULE_dimValue = 12;
MotePy.RULE_dimensionSpec = 13;
MotePy.RULE_intVal = 14;
MotePy.RULE_numVal = 15;
MotePy.RULE_rangeType = 16;
MotePy.RULE_castableType = 17;
MotePy.RULE_primitiveType = 18;
MotePy.RULE_futureType = 19;
MotePy.RULE_chanType = 20;
MotePy.RULE_varType = 21;
MotePy.RULE_varTypeList = 22;
MotePy.RULE_tupleType = 23;
MotePy.RULE_returnType = 24;
MotePy.RULE_formalParam = 25;
MotePy.RULE_formalParams = 26;
MotePy.RULE_stmtBlock = 27;
MotePy.RULE_elseStmt = 28;
MotePy.RULE_ifStmt = 29;
MotePy.RULE_identifierList = 30;
MotePy.RULE_forStmt = 31;
MotePy.RULE_whileStmt = 32;
MotePy.RULE_assignStmt = 33;
MotePy.RULE_awaitStmt = 34;
MotePy.RULE_signalStmt = 35;
MotePy.RULE_returnStmt = 36;
MotePy.RULE_stmt = 37;
MotePy.RULE_tupleIds = 38;
MotePy.RULE_funcDef = 39;
MotePy.RULE_qualIdentifier = 40;
MotePy.RULE_cppQualIdentifier = 41;
MotePy.RULE_functionCall = 42;
MotePy.RULE_actualParam = 43;
MotePy.RULE_actualParams = 44;
MotePy.RULE_dimensionExpr = 45;
MotePy.RULE_arrayExpr = 46;
MotePy.RULE_addressExpr = 47;
MotePy.RULE_castExpr = 48;
MotePy.RULE_basicExpr = 49;
MotePy.RULE_relExpr = 50;
MotePy.RULE_expr = 51;
MotePy.RULE_syncExpr = 52;
MotePy.RULE_toplevelExpr = 53;
MotePy.RULE_tupleExpr = 54;
MotePy.RULE_numConstant = 55;
MotePy.RULE_exprConstant = 56;
MotePy.RULE_literal = 57;

function ModuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_module;
    return this;
}

ModuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModuleContext.prototype.constructor = ModuleContext;

ModuleContext.prototype.usingSpec = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UsingSpecContext);
    } else {
        return this.getTypedRuleContext(UsingSpecContext,i);
    }
};

ModuleContext.prototype.includeSpec = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IncludeSpecContext);
    } else {
        return this.getTypedRuleContext(IncludeSpecContext,i);
    }
};

ModuleContext.prototype.varDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarDefContext);
    } else {
        return this.getTypedRuleContext(VarDefContext,i);
    }
};

ModuleContext.prototype.funcDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FuncDefContext);
    } else {
        return this.getTypedRuleContext(FuncDefContext,i);
    }
};

ModuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterModule(this);
	}
};

ModuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitModule(this);
	}
};

ModuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitModule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.ModuleContext = ModuleContext;

MotePy.prototype.module = function() {

    var localctx = new ModuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, MotePy.RULE_module);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MotePy.USING) {
            this.state = 116;
            this.usingSpec();
            this.state = 121;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 125;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MotePy.INCLUDE) {
            this.state = 122;
            this.includeSpec();
            this.state = 127;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 131;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 128;
                this.varDef(); 
            }
            this.state = 133;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

        this.state = 137;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MotePy.ASYNC) | (1 << MotePy.FUTURE) | (1 << MotePy.RCHAN) | (1 << MotePy.CHAN) | (1 << MotePy.VOID) | (1 << MotePy.LP) | (1 << MotePy.LS))) !== 0) || ((((_la - 62)) & ~0x1f) == 0 && ((1 << (_la - 62)) & ((1 << (MotePy.INT - 62)) | (1 << (MotePy.FLOAT - 62)) | (1 << (MotePy.BOOLEAN - 62)) | (1 << (MotePy.I8 - 62)) | (1 << (MotePy.U8 - 62)) | (1 << (MotePy.I16 - 62)) | (1 << (MotePy.U16 - 62)) | (1 << (MotePy.I32 - 62)) | (1 << (MotePy.U32 - 62)) | (1 << (MotePy.Identifier - 62)))) !== 0)) {
            this.state = 134;
            this.funcDef();
            this.state = 139;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function PipelineDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_pipelineDef;
    return this;
}

PipelineDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PipelineDefContext.prototype.constructor = PipelineDefContext;

PipelineDefContext.prototype.PIPELINE = function() {
    return this.getToken(MotePy.PIPELINE, 0);
};

PipelineDefContext.prototype.Identifier = function() {
    return this.getToken(MotePy.Identifier, 0);
};

PipelineDefContext.prototype.pipelineBlock = function() {
    return this.getTypedRuleContext(PipelineBlockContext,0);
};

PipelineDefContext.prototype.SEMI = function() {
    return this.getToken(MotePy.SEMI, 0);
};

PipelineDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterPipelineDef(this);
	}
};

PipelineDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitPipelineDef(this);
	}
};

PipelineDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitPipelineDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.PipelineDefContext = PipelineDefContext;

MotePy.prototype.pipelineDef = function() {

    var localctx = new PipelineDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, MotePy.RULE_pipelineDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.match(MotePy.PIPELINE);
        this.state = 141;
        this.match(MotePy.Identifier);
        this.state = 142;
        this.pipelineBlock();
        this.state = 144;
        _la = this._input.LA(1);
        if(_la===MotePy.SEMI) {
            this.state = 143;
            this.match(MotePy.SEMI);
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

function PipelineBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_pipelineBlock;
    return this;
}

PipelineBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PipelineBlockContext.prototype.constructor = PipelineBlockContext;

PipelineBlockContext.prototype.LB = function() {
    return this.getToken(MotePy.LB, 0);
};

PipelineBlockContext.prototype.pipelineList = function() {
    return this.getTypedRuleContext(PipelineListContext,0);
};

PipelineBlockContext.prototype.RB = function() {
    return this.getToken(MotePy.RB, 0);
};

PipelineBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterPipelineBlock(this);
	}
};

PipelineBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitPipelineBlock(this);
	}
};

PipelineBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitPipelineBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.PipelineBlockContext = PipelineBlockContext;

MotePy.prototype.pipelineBlock = function() {

    var localctx = new PipelineBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, MotePy.RULE_pipelineBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        this.match(MotePy.LB);
        this.state = 147;
        this.pipelineList();
        this.state = 148;
        this.match(MotePy.RB);
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

function PipelineEntryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_pipelineEntry;
    return this;
}

PipelineEntryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PipelineEntryContext.prototype.constructor = PipelineEntryContext;

PipelineEntryContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

PipelineEntryContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

PipelineEntryContext.prototype.pipelineBlock = function() {
    return this.getTypedRuleContext(PipelineBlockContext,0);
};

PipelineEntryContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterPipelineEntry(this);
	}
};

PipelineEntryContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitPipelineEntry(this);
	}
};

PipelineEntryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitPipelineEntry(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.PipelineEntryContext = PipelineEntryContext;

MotePy.prototype.pipelineEntry = function() {

    var localctx = new PipelineEntryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, MotePy.RULE_pipelineEntry);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.state = 150;
            this.qualIdentifier();
            break;

        case 2:
            this.state = 151;
            this.functionCall();
            break;

        case 3:
            this.state = 152;
            this.pipelineBlock();
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

function PipelineListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_pipelineList;
    return this;
}

PipelineListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PipelineListContext.prototype.constructor = PipelineListContext;

PipelineListContext.prototype.pipelineEntry = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PipelineEntryContext);
    } else {
        return this.getTypedRuleContext(PipelineEntryContext,i);
    }
};

PipelineListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MotePy.COMMA);
    } else {
        return this.getToken(MotePy.COMMA, i);
    }
};


PipelineListContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterPipelineList(this);
	}
};

PipelineListContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitPipelineList(this);
	}
};

PipelineListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitPipelineList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.PipelineListContext = PipelineListContext;

MotePy.prototype.pipelineList = function() {

    var localctx = new PipelineListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, MotePy.RULE_pipelineList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.pipelineEntry();
        this.state = 160;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 156;
                this.match(MotePy.COMMA);
                this.state = 157;
                this.pipelineEntry(); 
            }
            this.state = 162;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
        }

        this.state = 164;
        _la = this._input.LA(1);
        if(_la===MotePy.COMMA) {
            this.state = 163;
            this.match(MotePy.COMMA);
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

function UsingSpecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_usingSpec;
    return this;
}

UsingSpecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsingSpecContext.prototype.constructor = UsingSpecContext;

UsingSpecContext.prototype.USING = function() {
    return this.getToken(MotePy.USING, 0);
};

UsingSpecContext.prototype.Identifier = function() {
    return this.getToken(MotePy.Identifier, 0);
};

UsingSpecContext.prototype.SEMI = function() {
    return this.getToken(MotePy.SEMI, 0);
};

UsingSpecContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterUsingSpec(this);
	}
};

UsingSpecContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitUsingSpec(this);
	}
};

UsingSpecContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitUsingSpec(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.UsingSpecContext = UsingSpecContext;

MotePy.prototype.usingSpec = function() {

    var localctx = new UsingSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, MotePy.RULE_usingSpec);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.match(MotePy.USING);
        this.state = 167;
        this.match(MotePy.Identifier);
        this.state = 168;
        this.match(MotePy.SEMI);
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

function IncludeSpecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_includeSpec;
    return this;
}

IncludeSpecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IncludeSpecContext.prototype.constructor = IncludeSpecContext;

IncludeSpecContext.prototype.INCLUDE = function() {
    return this.getToken(MotePy.INCLUDE, 0);
};

IncludeSpecContext.prototype.Identifier = function() {
    return this.getToken(MotePy.Identifier, 0);
};

IncludeSpecContext.prototype.SEMI = function() {
    return this.getToken(MotePy.SEMI, 0);
};

IncludeSpecContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterIncludeSpec(this);
	}
};

IncludeSpecContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitIncludeSpec(this);
	}
};

IncludeSpecContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitIncludeSpec(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.IncludeSpecContext = IncludeSpecContext;

MotePy.prototype.includeSpec = function() {

    var localctx = new IncludeSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, MotePy.RULE_includeSpec);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this.match(MotePy.INCLUDE);
        this.state = 171;
        this.match(MotePy.Identifier);
        this.state = 172;
        this.match(MotePy.SEMI);
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
    this.ruleIndex = MotePy.RULE_booleanLiteral;
    this.value = null; // Token
    return this;
}

BooleanLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BooleanLiteralContext.prototype.constructor = BooleanLiteralContext;

BooleanLiteralContext.prototype.TRUE = function() {
    return this.getToken(MotePy.TRUE, 0);
};

BooleanLiteralContext.prototype.FALSE = function() {
    return this.getToken(MotePy.FALSE, 0);
};

BooleanLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterBooleanLiteral(this);
	}
};

BooleanLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitBooleanLiteral(this);
	}
};

BooleanLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitBooleanLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.BooleanLiteralContext = BooleanLiteralContext;

MotePy.prototype.booleanLiteral = function() {

    var localctx = new BooleanLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, MotePy.RULE_booleanLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        localctx.value = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(_la===MotePy.TRUE || _la===MotePy.FALSE)) {
            localctx.value = this._errHandler.recoverInline(this);
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

function ArrayLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_arrayLiteral;
    return this;
}

ArrayLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayLiteralContext.prototype.constructor = ArrayLiteralContext;

ArrayLiteralContext.prototype.LB = function() {
    return this.getToken(MotePy.LB, 0);
};

ArrayLiteralContext.prototype.RB = function() {
    return this.getToken(MotePy.RB, 0);
};

ArrayLiteralContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ArrayLiteralContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MotePy.COMMA);
    } else {
        return this.getToken(MotePy.COMMA, i);
    }
};


ArrayLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterArrayLiteral(this);
	}
};

ArrayLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitArrayLiteral(this);
	}
};

ArrayLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitArrayLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.ArrayLiteralContext = ArrayLiteralContext;

MotePy.prototype.arrayLiteral = function() {

    var localctx = new ArrayLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, MotePy.RULE_arrayLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.match(MotePy.LB);
        this.state = 185;
        _la = this._input.LA(1);
        if(((((_la - 22)) & ~0x1f) == 0 && ((1 << (_la - 22)) & ((1 << (MotePy.TRUE - 22)) | (1 << (MotePy.FALSE - 22)) | (1 << (MotePy.LP - 22)) | (1 << (MotePy.LB - 22)) | (1 << (MotePy.MINUS - 22)) | (1 << (MotePy.LNOT - 22)))) !== 0) || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (MotePy.BAND - 56)) | (1 << (MotePy.BNOT - 56)) | (1 << (MotePy.INT - 56)) | (1 << (MotePy.FLOAT - 56)) | (1 << (MotePy.BOOLEAN - 56)) | (1 << (MotePy.I8 - 56)) | (1 << (MotePy.U8 - 56)) | (1 << (MotePy.I16 - 56)) | (1 << (MotePy.U16 - 56)) | (1 << (MotePy.I32 - 56)) | (1 << (MotePy.U32 - 56)) | (1 << (MotePy.Identifier - 56)) | (1 << (MotePy.IntegerConstant - 56)) | (1 << (MotePy.FloatingConstant - 56)) | (1 << (MotePy.CharacterConstant - 56)) | (1 << (MotePy.StringLiteral - 56)))) !== 0)) {
            this.state = 177;
            this.expr(0);
            this.state = 182;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===MotePy.COMMA) {
                this.state = 178;
                this.match(MotePy.COMMA);
                this.state = 179;
                this.expr(0);
                this.state = 184;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 187;
        this.match(MotePy.RB);
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

function InitValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_initValue;
    return this;
}

InitValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InitValueContext.prototype.constructor = InitValueContext;

InitValueContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

InitValueContext.prototype.StringLiteral = function() {
    return this.getToken(MotePy.StringLiteral, 0);
};

InitValueContext.prototype.arrayLiteral = function() {
    return this.getTypedRuleContext(ArrayLiteralContext,0);
};

InitValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterInitValue(this);
	}
};

InitValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitInitValue(this);
	}
};

InitValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitInitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.InitValueContext = InitValueContext;

MotePy.prototype.initValue = function() {

    var localctx = new InitValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, MotePy.RULE_initValue);
    try {
        this.state = 192;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 189;
            this.expr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 190;
            this.match(MotePy.StringLiteral);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 191;
            this.arrayLiteral();
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

function VarIdDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_varIdDef;
    return this;
}

VarIdDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarIdDefContext.prototype.constructor = VarIdDefContext;

VarIdDefContext.prototype.Identifier = function() {
    return this.getToken(MotePy.Identifier, 0);
};

VarIdDefContext.prototype.ASSIGN = function() {
    return this.getToken(MotePy.ASSIGN, 0);
};

VarIdDefContext.prototype.initValue = function() {
    return this.getTypedRuleContext(InitValueContext,0);
};

VarIdDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterVarIdDef(this);
	}
};

VarIdDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitVarIdDef(this);
	}
};

VarIdDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitVarIdDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.VarIdDefContext = VarIdDefContext;

MotePy.prototype.varIdDef = function() {

    var localctx = new VarIdDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, MotePy.RULE_varIdDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194;
        this.match(MotePy.Identifier);
        this.state = 197;
        _la = this._input.LA(1);
        if(_la===MotePy.ASSIGN) {
            this.state = 195;
            this.match(MotePy.ASSIGN);
            this.state = 196;
            this.initValue();
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

function VarDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_varDef;
    return this;
}

VarDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarDefContext.prototype.constructor = VarDefContext;

VarDefContext.prototype.varType = function() {
    return this.getTypedRuleContext(VarTypeContext,0);
};

VarDefContext.prototype.varIdDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarIdDefContext);
    } else {
        return this.getTypedRuleContext(VarIdDefContext,i);
    }
};

VarDefContext.prototype.SEMI = function() {
    return this.getToken(MotePy.SEMI, 0);
};

VarDefContext.prototype.CONST = function() {
    return this.getToken(MotePy.CONST, 0);
};

VarDefContext.prototype.STATIC = function() {
    return this.getToken(MotePy.STATIC, 0);
};

VarDefContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MotePy.COMMA);
    } else {
        return this.getToken(MotePy.COMMA, i);
    }
};


VarDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterVarDef(this);
	}
};

VarDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitVarDef(this);
	}
};

VarDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitVarDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.VarDefContext = VarDefContext;

MotePy.prototype.varDef = function() {

    var localctx = new VarDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, MotePy.RULE_varDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        _la = this._input.LA(1);
        if(_la===MotePy.CONST) {
            this.state = 199;
            this.match(MotePy.CONST);
        }

        this.state = 203;
        _la = this._input.LA(1);
        if(_la===MotePy.STATIC) {
            this.state = 202;
            this.match(MotePy.STATIC);
        }

        this.state = 205;
        this.varType();
        this.state = 206;
        this.varIdDef();
        this.state = 211;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MotePy.COMMA) {
            this.state = 207;
            this.match(MotePy.COMMA);
            this.state = 208;
            this.varIdDef();
            this.state = 213;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 214;
        this.match(MotePy.SEMI);
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

function DimValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_dimValue;
    return this;
}

DimValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DimValueContext.prototype.constructor = DimValueContext;

DimValueContext.prototype.IntegerConstant = function() {
    return this.getToken(MotePy.IntegerConstant, 0);
};

DimValueContext.prototype.Identifier = function() {
    return this.getToken(MotePy.Identifier, 0);
};

DimValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterDimValue(this);
	}
};

DimValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitDimValue(this);
	}
};

DimValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitDimValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.DimValueContext = DimValueContext;

MotePy.prototype.dimValue = function() {

    var localctx = new DimValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, MotePy.RULE_dimValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
        _la = this._input.LA(1);
        if(!(_la===MotePy.Identifier || _la===MotePy.IntegerConstant)) {
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

function DimensionSpecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_dimensionSpec;
    return this;
}

DimensionSpecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DimensionSpecContext.prototype.constructor = DimensionSpecContext;

DimensionSpecContext.prototype.RING = function() {
    return this.getToken(MotePy.RING, 0);
};

DimensionSpecContext.prototype.LS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MotePy.LS);
    } else {
        return this.getToken(MotePy.LS, i);
    }
};


DimensionSpecContext.prototype.dimValue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DimValueContext);
    } else {
        return this.getTypedRuleContext(DimValueContext,i);
    }
};

DimensionSpecContext.prototype.RS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MotePy.RS);
    } else {
        return this.getToken(MotePy.RS, i);
    }
};


DimensionSpecContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterDimensionSpec(this);
	}
};

DimensionSpecContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitDimensionSpec(this);
	}
};

DimensionSpecContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitDimensionSpec(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.DimensionSpecContext = DimensionSpecContext;

MotePy.prototype.dimensionSpec = function() {

    var localctx = new DimensionSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, MotePy.RULE_dimensionSpec);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 219;
        _la = this._input.LA(1);
        if(_la===MotePy.RING) {
            this.state = 218;
            this.match(MotePy.RING);
        }

        this.state = 225; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 221;
            this.match(MotePy.LS);
            this.state = 222;
            this.dimValue();
            this.state = 223;
            this.match(MotePy.RS);
            this.state = 227; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===MotePy.LS);
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

function IntValContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_intVal;
    return this;
}

IntValContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntValContext.prototype.constructor = IntValContext;

IntValContext.prototype.Identifier = function() {
    return this.getToken(MotePy.Identifier, 0);
};

IntValContext.prototype.IntegerConstant = function() {
    return this.getToken(MotePy.IntegerConstant, 0);
};

IntValContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterIntVal(this);
	}
};

IntValContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitIntVal(this);
	}
};

IntValContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitIntVal(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.IntValContext = IntValContext;

MotePy.prototype.intVal = function() {

    var localctx = new IntValContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, MotePy.RULE_intVal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 229;
        _la = this._input.LA(1);
        if(!(_la===MotePy.Identifier || _la===MotePy.IntegerConstant)) {
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

function NumValContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_numVal;
    return this;
}

NumValContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumValContext.prototype.constructor = NumValContext;

NumValContext.prototype.Identifier = function() {
    return this.getToken(MotePy.Identifier, 0);
};

NumValContext.prototype.numConstant = function() {
    return this.getTypedRuleContext(NumConstantContext,0);
};

NumValContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterNumVal(this);
	}
};

NumValContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitNumVal(this);
	}
};

NumValContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitNumVal(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.NumValContext = NumValContext;

MotePy.prototype.numVal = function() {

    var localctx = new NumValContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, MotePy.RULE_numVal);
    try {
        this.state = 233;
        switch(this._input.LA(1)) {
        case MotePy.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 231;
            this.match(MotePy.Identifier);
            break;
        case MotePy.IntegerConstant:
        case MotePy.FloatingConstant:
            this.enterOuterAlt(localctx, 2);
            this.state = 232;
            this.numConstant();
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

function RangeTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_rangeType;
    return this;
}

RangeTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RangeTypeContext.prototype.constructor = RangeTypeContext;

RangeTypeContext.prototype.LS = function() {
    return this.getToken(MotePy.LS, 0);
};

RangeTypeContext.prototype.numVal = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumValContext);
    } else {
        return this.getTypedRuleContext(NumValContext,i);
    }
};

RangeTypeContext.prototype.RS = function() {
    return this.getToken(MotePy.RS, 0);
};

RangeTypeContext.prototype.COMMA = function() {
    return this.getToken(MotePy.COMMA, 0);
};

RangeTypeContext.prototype.COLON = function() {
    return this.getToken(MotePy.COLON, 0);
};

RangeTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterRangeType(this);
	}
};

RangeTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitRangeType(this);
	}
};

RangeTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitRangeType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.RangeTypeContext = RangeTypeContext;

MotePy.prototype.rangeType = function() {

    var localctx = new RangeTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, MotePy.RULE_rangeType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
        this.match(MotePy.LS);
        this.state = 236;
        this.numVal();
        this.state = 237;
        _la = this._input.LA(1);
        if(!(_la===MotePy.COMMA || _la===MotePy.COLON)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 238;
        this.numVal();
        this.state = 239;
        this.match(MotePy.RS);
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

function CastableTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_castableType;
    this.type = null; // Token
    return this;
}

CastableTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CastableTypeContext.prototype.constructor = CastableTypeContext;

CastableTypeContext.prototype.INT = function() {
    return this.getToken(MotePy.INT, 0);
};

CastableTypeContext.prototype.FLOAT = function() {
    return this.getToken(MotePy.FLOAT, 0);
};

CastableTypeContext.prototype.BOOLEAN = function() {
    return this.getToken(MotePy.BOOLEAN, 0);
};

CastableTypeContext.prototype.I8 = function() {
    return this.getToken(MotePy.I8, 0);
};

CastableTypeContext.prototype.U8 = function() {
    return this.getToken(MotePy.U8, 0);
};

CastableTypeContext.prototype.I16 = function() {
    return this.getToken(MotePy.I16, 0);
};

CastableTypeContext.prototype.U16 = function() {
    return this.getToken(MotePy.U16, 0);
};

CastableTypeContext.prototype.I32 = function() {
    return this.getToken(MotePy.I32, 0);
};

CastableTypeContext.prototype.U32 = function() {
    return this.getToken(MotePy.U32, 0);
};

CastableTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterCastableType(this);
	}
};

CastableTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitCastableType(this);
	}
};

CastableTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitCastableType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.CastableTypeContext = CastableTypeContext;

MotePy.prototype.castableType = function() {

    var localctx = new CastableTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, MotePy.RULE_castableType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 241;
        localctx.type = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(((((_la - 62)) & ~0x1f) == 0 && ((1 << (_la - 62)) & ((1 << (MotePy.INT - 62)) | (1 << (MotePy.FLOAT - 62)) | (1 << (MotePy.BOOLEAN - 62)) | (1 << (MotePy.I8 - 62)) | (1 << (MotePy.U8 - 62)) | (1 << (MotePy.I16 - 62)) | (1 << (MotePy.U16 - 62)) | (1 << (MotePy.I32 - 62)) | (1 << (MotePy.U32 - 62)))) !== 0))) {
            localctx.type = this._errHandler.recoverInline(this);
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

function PrimitiveTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_primitiveType;
    this.type = null; // Token
    return this;
}

PrimitiveTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveTypeContext.prototype.constructor = PrimitiveTypeContext;

PrimitiveTypeContext.prototype.INT = function() {
    return this.getToken(MotePy.INT, 0);
};

PrimitiveTypeContext.prototype.FLOAT = function() {
    return this.getToken(MotePy.FLOAT, 0);
};

PrimitiveTypeContext.prototype.BOOLEAN = function() {
    return this.getToken(MotePy.BOOLEAN, 0);
};

PrimitiveTypeContext.prototype.VOID = function() {
    return this.getToken(MotePy.VOID, 0);
};

PrimitiveTypeContext.prototype.I8 = function() {
    return this.getToken(MotePy.I8, 0);
};

PrimitiveTypeContext.prototype.U8 = function() {
    return this.getToken(MotePy.U8, 0);
};

PrimitiveTypeContext.prototype.I16 = function() {
    return this.getToken(MotePy.I16, 0);
};

PrimitiveTypeContext.prototype.U16 = function() {
    return this.getToken(MotePy.U16, 0);
};

PrimitiveTypeContext.prototype.I32 = function() {
    return this.getToken(MotePy.I32, 0);
};

PrimitiveTypeContext.prototype.U32 = function() {
    return this.getToken(MotePy.U32, 0);
};

PrimitiveTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterPrimitiveType(this);
	}
};

PrimitiveTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitPrimitiveType(this);
	}
};

PrimitiveTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitPrimitiveType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.PrimitiveTypeContext = PrimitiveTypeContext;

MotePy.prototype.primitiveType = function() {

    var localctx = new PrimitiveTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, MotePy.RULE_primitiveType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        localctx.type = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(_la===MotePy.VOID || ((((_la - 62)) & ~0x1f) == 0 && ((1 << (_la - 62)) & ((1 << (MotePy.INT - 62)) | (1 << (MotePy.FLOAT - 62)) | (1 << (MotePy.BOOLEAN - 62)) | (1 << (MotePy.I8 - 62)) | (1 << (MotePy.U8 - 62)) | (1 << (MotePy.I16 - 62)) | (1 << (MotePy.U16 - 62)) | (1 << (MotePy.I32 - 62)) | (1 << (MotePy.U32 - 62)))) !== 0))) {
            localctx.type = this._errHandler.recoverInline(this);
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

function FutureTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_futureType;
    return this;
}

FutureTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FutureTypeContext.prototype.constructor = FutureTypeContext;

FutureTypeContext.prototype.FUTURE = function() {
    return this.getToken(MotePy.FUTURE, 0);
};

FutureTypeContext.prototype.LT = function() {
    return this.getToken(MotePy.LT, 0);
};

FutureTypeContext.prototype.varType = function() {
    return this.getTypedRuleContext(VarTypeContext,0);
};

FutureTypeContext.prototype.GT = function() {
    return this.getToken(MotePy.GT, 0);
};

FutureTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterFutureType(this);
	}
};

FutureTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitFutureType(this);
	}
};

FutureTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitFutureType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.FutureTypeContext = FutureTypeContext;

MotePy.prototype.futureType = function() {

    var localctx = new FutureTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, MotePy.RULE_futureType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        this.match(MotePy.FUTURE);
        this.state = 246;
        this.match(MotePy.LT);
        this.state = 247;
        this.varType();
        this.state = 248;
        this.match(MotePy.GT);
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

function ChanTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_chanType;
    return this;
}

ChanTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ChanTypeContext.prototype.constructor = ChanTypeContext;

ChanTypeContext.prototype.LT = function() {
    return this.getToken(MotePy.LT, 0);
};

ChanTypeContext.prototype.Identifier = function() {
    return this.getToken(MotePy.Identifier, 0);
};

ChanTypeContext.prototype.GT = function() {
    return this.getToken(MotePy.GT, 0);
};

ChanTypeContext.prototype.RCHAN = function() {
    return this.getToken(MotePy.RCHAN, 0);
};

ChanTypeContext.prototype.CHAN = function() {
    return this.getToken(MotePy.CHAN, 0);
};

ChanTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterChanType(this);
	}
};

ChanTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitChanType(this);
	}
};

ChanTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitChanType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.ChanTypeContext = ChanTypeContext;

MotePy.prototype.chanType = function() {

    var localctx = new ChanTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, MotePy.RULE_chanType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 250;
        _la = this._input.LA(1);
        if(!(_la===MotePy.RCHAN || _la===MotePy.CHAN)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 251;
        this.match(MotePy.LT);
        this.state = 252;
        this.match(MotePy.Identifier);
        this.state = 253;
        this.match(MotePy.GT);
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

function VarTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_varType;
    return this;
}

VarTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarTypeContext.prototype.constructor = VarTypeContext;

VarTypeContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

VarTypeContext.prototype.cppQualIdentifier = function() {
    return this.getTypedRuleContext(CppQualIdentifierContext,0);
};

VarTypeContext.prototype.rangeType = function() {
    return this.getTypedRuleContext(RangeTypeContext,0);
};

VarTypeContext.prototype.primitiveType = function() {
    return this.getTypedRuleContext(PrimitiveTypeContext,0);
};

VarTypeContext.prototype.futureType = function() {
    return this.getTypedRuleContext(FutureTypeContext,0);
};

VarTypeContext.prototype.chanType = function() {
    return this.getTypedRuleContext(ChanTypeContext,0);
};

VarTypeContext.prototype.tupleType = function() {
    return this.getTypedRuleContext(TupleTypeContext,0);
};

VarTypeContext.prototype.dimensionSpec = function() {
    return this.getTypedRuleContext(DimensionSpecContext,0);
};

VarTypeContext.prototype.BAND = function() {
    return this.getToken(MotePy.BAND, 0);
};

VarTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterVarType(this);
	}
};

VarTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitVarType(this);
	}
};

VarTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitVarType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.VarTypeContext = VarTypeContext;

MotePy.prototype.varType = function() {

    var localctx = new VarTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, MotePy.RULE_varType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 262;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        switch(la_) {
        case 1:
            this.state = 255;
            this.qualIdentifier();
            break;

        case 2:
            this.state = 256;
            this.cppQualIdentifier();
            break;

        case 3:
            this.state = 257;
            this.rangeType();
            break;

        case 4:
            this.state = 258;
            this.primitiveType();
            break;

        case 5:
            this.state = 259;
            this.futureType();
            break;

        case 6:
            this.state = 260;
            this.chanType();
            break;

        case 7:
            this.state = 261;
            this.tupleType();
            break;

        }
        this.state = 265;
        _la = this._input.LA(1);
        if(_la===MotePy.RING || _la===MotePy.LS) {
            this.state = 264;
            this.dimensionSpec();
        }

        this.state = 268;
        _la = this._input.LA(1);
        if(_la===MotePy.BAND) {
            this.state = 267;
            this.match(MotePy.BAND);
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

function VarTypeListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_varTypeList;
    return this;
}

VarTypeListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarTypeListContext.prototype.constructor = VarTypeListContext;

VarTypeListContext.prototype.varType = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarTypeContext);
    } else {
        return this.getTypedRuleContext(VarTypeContext,i);
    }
};

VarTypeListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MotePy.COMMA);
    } else {
        return this.getToken(MotePy.COMMA, i);
    }
};


VarTypeListContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterVarTypeList(this);
	}
};

VarTypeListContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitVarTypeList(this);
	}
};

VarTypeListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitVarTypeList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.VarTypeListContext = VarTypeListContext;

MotePy.prototype.varTypeList = function() {

    var localctx = new VarTypeListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, MotePy.RULE_varTypeList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 270;
        this.varType();
        this.state = 275;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MotePy.COMMA) {
            this.state = 271;
            this.match(MotePy.COMMA);
            this.state = 272;
            this.varType();
            this.state = 277;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function TupleTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_tupleType;
    return this;
}

TupleTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TupleTypeContext.prototype.constructor = TupleTypeContext;

TupleTypeContext.prototype.LP = function() {
    return this.getToken(MotePy.LP, 0);
};

TupleTypeContext.prototype.varTypeList = function() {
    return this.getTypedRuleContext(VarTypeListContext,0);
};

TupleTypeContext.prototype.RP = function() {
    return this.getToken(MotePy.RP, 0);
};

TupleTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterTupleType(this);
	}
};

TupleTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitTupleType(this);
	}
};

TupleTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitTupleType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.TupleTypeContext = TupleTypeContext;

MotePy.prototype.tupleType = function() {

    var localctx = new TupleTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, MotePy.RULE_tupleType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 278;
        this.match(MotePy.LP);
        this.state = 279;
        this.varTypeList();
        this.state = 280;
        this.match(MotePy.RP);
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

function ReturnTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_returnType;
    return this;
}

ReturnTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnTypeContext.prototype.constructor = ReturnTypeContext;

ReturnTypeContext.prototype.varType = function() {
    return this.getTypedRuleContext(VarTypeContext,0);
};

ReturnTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterReturnType(this);
	}
};

ReturnTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitReturnType(this);
	}
};

ReturnTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitReturnType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.ReturnTypeContext = ReturnTypeContext;

MotePy.prototype.returnType = function() {

    var localctx = new ReturnTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, MotePy.RULE_returnType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 282;
        this.varType();
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

function FormalParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_formalParam;
    return this;
}

FormalParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParamContext.prototype.constructor = FormalParamContext;

FormalParamContext.prototype.varType = function() {
    return this.getTypedRuleContext(VarTypeContext,0);
};

FormalParamContext.prototype.Identifier = function() {
    return this.getToken(MotePy.Identifier, 0);
};

FormalParamContext.prototype.CONST = function() {
    return this.getToken(MotePy.CONST, 0);
};

FormalParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterFormalParam(this);
	}
};

FormalParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitFormalParam(this);
	}
};

FormalParamContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitFormalParam(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.FormalParamContext = FormalParamContext;

MotePy.prototype.formalParam = function() {

    var localctx = new FormalParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, MotePy.RULE_formalParam);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 285;
        _la = this._input.LA(1);
        if(_la===MotePy.CONST) {
            this.state = 284;
            this.match(MotePy.CONST);
        }

        this.state = 287;
        this.varType();
        this.state = 288;
        this.match(MotePy.Identifier);
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

function FormalParamsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_formalParams;
    return this;
}

FormalParamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParamsContext.prototype.constructor = FormalParamsContext;

FormalParamsContext.prototype.formalParam = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormalParamContext);
    } else {
        return this.getTypedRuleContext(FormalParamContext,i);
    }
};

FormalParamsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MotePy.COMMA);
    } else {
        return this.getToken(MotePy.COMMA, i);
    }
};


FormalParamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterFormalParams(this);
	}
};

FormalParamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitFormalParams(this);
	}
};

FormalParamsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitFormalParams(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.FormalParamsContext = FormalParamsContext;

MotePy.prototype.formalParams = function() {

    var localctx = new FormalParamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, MotePy.RULE_formalParams);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 290;
        this.formalParam();
        this.state = 295;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MotePy.COMMA) {
            this.state = 291;
            this.match(MotePy.COMMA);
            this.state = 292;
            this.formalParam();
            this.state = 297;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function StmtBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_stmtBlock;
    return this;
}

StmtBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtBlockContext.prototype.constructor = StmtBlockContext;

StmtBlockContext.prototype.LB = function() {
    return this.getToken(MotePy.LB, 0);
};

StmtBlockContext.prototype.RB = function() {
    return this.getToken(MotePy.RB, 0);
};

StmtBlockContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

StmtBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterStmtBlock(this);
	}
};

StmtBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitStmtBlock(this);
	}
};

StmtBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitStmtBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.StmtBlockContext = StmtBlockContext;

MotePy.prototype.stmtBlock = function() {

    var localctx = new StmtBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, MotePy.RULE_stmtBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 298;
        this.match(MotePy.LB);
        this.state = 302;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MotePy.AWAIT) | (1 << MotePy.SIGNAL) | (1 << MotePy.IF) | (1 << MotePy.FOR) | (1 << MotePy.WHILE) | (1 << MotePy.LP) | (1 << MotePy.LB))) !== 0) || _la===MotePy.RETURN || _la===MotePy.Identifier) {
            this.state = 299;
            this.stmt();
            this.state = 304;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 305;
        this.match(MotePy.RB);
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

function ElseStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_elseStmt;
    return this;
}

ElseStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseStmtContext.prototype.constructor = ElseStmtContext;

ElseStmtContext.prototype.ELSE = function() {
    return this.getToken(MotePy.ELSE, 0);
};

ElseStmtContext.prototype.stmtBlock = function() {
    return this.getTypedRuleContext(StmtBlockContext,0);
};

ElseStmtContext.prototype.ifStmt = function() {
    return this.getTypedRuleContext(IfStmtContext,0);
};

ElseStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterElseStmt(this);
	}
};

ElseStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitElseStmt(this);
	}
};

ElseStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitElseStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.ElseStmtContext = ElseStmtContext;

MotePy.prototype.elseStmt = function() {

    var localctx = new ElseStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, MotePy.RULE_elseStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 307;
        this.match(MotePy.ELSE);
        this.state = 310;
        switch(this._input.LA(1)) {
        case MotePy.LB:
            this.state = 308;
            this.stmtBlock();
            break;
        case MotePy.IF:
            this.state = 309;
            this.ifStmt();
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

function IfStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_ifStmt;
    return this;
}

IfStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStmtContext.prototype.constructor = IfStmtContext;

IfStmtContext.prototype.IF = function() {
    return this.getToken(MotePy.IF, 0);
};

IfStmtContext.prototype.LP = function() {
    return this.getToken(MotePy.LP, 0);
};

IfStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

IfStmtContext.prototype.RP = function() {
    return this.getToken(MotePy.RP, 0);
};

IfStmtContext.prototype.stmtBlock = function() {
    return this.getTypedRuleContext(StmtBlockContext,0);
};

IfStmtContext.prototype.elseStmt = function() {
    return this.getTypedRuleContext(ElseStmtContext,0);
};

IfStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterIfStmt(this);
	}
};

IfStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitIfStmt(this);
	}
};

IfStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitIfStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.IfStmtContext = IfStmtContext;

MotePy.prototype.ifStmt = function() {

    var localctx = new IfStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, MotePy.RULE_ifStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 312;
        this.match(MotePy.IF);
        this.state = 313;
        this.match(MotePy.LP);
        this.state = 314;
        this.expr(0);
        this.state = 315;
        this.match(MotePy.RP);
        this.state = 316;
        this.stmtBlock();
        this.state = 318;
        _la = this._input.LA(1);
        if(_la===MotePy.ELSE) {
            this.state = 317;
            this.elseStmt();
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

function IdentifierListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_identifierList;
    return this;
}

IdentifierListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierListContext.prototype.constructor = IdentifierListContext;

IdentifierListContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MotePy.Identifier);
    } else {
        return this.getToken(MotePy.Identifier, i);
    }
};


IdentifierListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MotePy.COMMA);
    } else {
        return this.getToken(MotePy.COMMA, i);
    }
};


IdentifierListContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterIdentifierList(this);
	}
};

IdentifierListContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitIdentifierList(this);
	}
};

IdentifierListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitIdentifierList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.IdentifierListContext = IdentifierListContext;

MotePy.prototype.identifierList = function() {

    var localctx = new IdentifierListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, MotePy.RULE_identifierList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 320;
        this.match(MotePy.Identifier);
        this.state = 325;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MotePy.COMMA) {
            this.state = 321;
            this.match(MotePy.COMMA);
            this.state = 322;
            this.match(MotePy.Identifier);
            this.state = 327;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function ForStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_forStmt;
    return this;
}

ForStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForStmtContext.prototype.constructor = ForStmtContext;

ForStmtContext.prototype.FOR = function() {
    return this.getToken(MotePy.FOR, 0);
};

ForStmtContext.prototype.identifierList = function() {
    return this.getTypedRuleContext(IdentifierListContext,0);
};

ForStmtContext.prototype.IN = function() {
    return this.getToken(MotePy.IN, 0);
};

ForStmtContext.prototype.rangeType = function() {
    return this.getTypedRuleContext(RangeTypeContext,0);
};

ForStmtContext.prototype.stmtBlock = function() {
    return this.getTypedRuleContext(StmtBlockContext,0);
};

ForStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterForStmt(this);
	}
};

ForStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitForStmt(this);
	}
};

ForStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitForStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.ForStmtContext = ForStmtContext;

MotePy.prototype.forStmt = function() {

    var localctx = new ForStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, MotePy.RULE_forStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 328;
        this.match(MotePy.FOR);
        this.state = 329;
        this.identifierList();
        this.state = 330;
        this.match(MotePy.IN);
        this.state = 331;
        this.rangeType();
        this.state = 332;
        this.stmtBlock();
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

function WhileStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_whileStmt;
    return this;
}

WhileStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileStmtContext.prototype.constructor = WhileStmtContext;

WhileStmtContext.prototype.WHILE = function() {
    return this.getToken(MotePy.WHILE, 0);
};

WhileStmtContext.prototype.LP = function() {
    return this.getToken(MotePy.LP, 0);
};

WhileStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

WhileStmtContext.prototype.RP = function() {
    return this.getToken(MotePy.RP, 0);
};

WhileStmtContext.prototype.stmtBlock = function() {
    return this.getTypedRuleContext(StmtBlockContext,0);
};

WhileStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterWhileStmt(this);
	}
};

WhileStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitWhileStmt(this);
	}
};

WhileStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitWhileStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.WhileStmtContext = WhileStmtContext;

MotePy.prototype.whileStmt = function() {

    var localctx = new WhileStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, MotePy.RULE_whileStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 334;
        this.match(MotePy.WHILE);
        this.state = 335;
        this.match(MotePy.LP);
        this.state = 336;
        this.expr(0);
        this.state = 337;
        this.match(MotePy.RP);
        this.state = 338;
        this.stmtBlock();
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

function AssignStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_assignStmt;
    return this;
}

AssignStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignStmtContext.prototype.constructor = AssignStmtContext;

AssignStmtContext.prototype.ASSIGN = function() {
    return this.getToken(MotePy.ASSIGN, 0);
};

AssignStmtContext.prototype.toplevelExpr = function() {
    return this.getTypedRuleContext(ToplevelExprContext,0);
};

AssignStmtContext.prototype.tupleIds = function() {
    return this.getTypedRuleContext(TupleIdsContext,0);
};

AssignStmtContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

AssignStmtContext.prototype.dimensionExpr = function() {
    return this.getTypedRuleContext(DimensionExprContext,0);
};

AssignStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterAssignStmt(this);
	}
};

AssignStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitAssignStmt(this);
	}
};

AssignStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitAssignStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.AssignStmtContext = AssignStmtContext;

MotePy.prototype.assignStmt = function() {

    var localctx = new AssignStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, MotePy.RULE_assignStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 345;
        switch(this._input.LA(1)) {
        case MotePy.Identifier:
            this.state = 340;
            this.qualIdentifier();
            this.state = 342;
            _la = this._input.LA(1);
            if(_la===MotePy.LS) {
                this.state = 341;
                this.dimensionExpr();
            }

            break;
        case MotePy.LP:
            this.state = 344;
            this.tupleIds();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 347;
        this.match(MotePy.ASSIGN);
        this.state = 348;
        this.toplevelExpr();
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

function AwaitStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_awaitStmt;
    return this;
}

AwaitStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AwaitStmtContext.prototype.constructor = AwaitStmtContext;

AwaitStmtContext.prototype.AWAIT = function() {
    return this.getToken(MotePy.AWAIT, 0);
};

AwaitStmtContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

AwaitStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterAwaitStmt(this);
	}
};

AwaitStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitAwaitStmt(this);
	}
};

AwaitStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitAwaitStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.AwaitStmtContext = AwaitStmtContext;

MotePy.prototype.awaitStmt = function() {

    var localctx = new AwaitStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, MotePy.RULE_awaitStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 350;
        this.match(MotePy.AWAIT);
        this.state = 351;
        this.qualIdentifier();
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

function SignalStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_signalStmt;
    return this;
}

SignalStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SignalStmtContext.prototype.constructor = SignalStmtContext;

SignalStmtContext.prototype.SIGNAL = function() {
    return this.getToken(MotePy.SIGNAL, 0);
};

SignalStmtContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

SignalStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterSignalStmt(this);
	}
};

SignalStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitSignalStmt(this);
	}
};

SignalStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitSignalStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.SignalStmtContext = SignalStmtContext;

MotePy.prototype.signalStmt = function() {

    var localctx = new SignalStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, MotePy.RULE_signalStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 353;
        this.match(MotePy.SIGNAL);
        this.state = 354;
        this.qualIdentifier();
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

function ReturnStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_returnStmt;
    return this;
}

ReturnStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStmtContext.prototype.constructor = ReturnStmtContext;

ReturnStmtContext.prototype.RETURN = function() {
    return this.getToken(MotePy.RETURN, 0);
};

ReturnStmtContext.prototype.toplevelExpr = function() {
    return this.getTypedRuleContext(ToplevelExprContext,0);
};

ReturnStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterReturnStmt(this);
	}
};

ReturnStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitReturnStmt(this);
	}
};

ReturnStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitReturnStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.ReturnStmtContext = ReturnStmtContext;

MotePy.prototype.returnStmt = function() {

    var localctx = new ReturnStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, MotePy.RULE_returnStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 356;
        this.match(MotePy.RETURN);
        this.state = 357;
        this.toplevelExpr();
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

function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.stmtBlock = function() {
    return this.getTypedRuleContext(StmtBlockContext,0);
};

StmtContext.prototype.ifStmt = function() {
    return this.getTypedRuleContext(IfStmtContext,0);
};

StmtContext.prototype.forStmt = function() {
    return this.getTypedRuleContext(ForStmtContext,0);
};

StmtContext.prototype.whileStmt = function() {
    return this.getTypedRuleContext(WhileStmtContext,0);
};

StmtContext.prototype.assignStmt = function() {
    return this.getTypedRuleContext(AssignStmtContext,0);
};

StmtContext.prototype.SEMI = function() {
    return this.getToken(MotePy.SEMI, 0);
};

StmtContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

StmtContext.prototype.returnStmt = function() {
    return this.getTypedRuleContext(ReturnStmtContext,0);
};

StmtContext.prototype.awaitStmt = function() {
    return this.getTypedRuleContext(AwaitStmtContext,0);
};

StmtContext.prototype.signalStmt = function() {
    return this.getTypedRuleContext(SignalStmtContext,0);
};

StmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterStmt(this);
	}
};

StmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitStmt(this);
	}
};

StmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.StmtContext = StmtContext;

MotePy.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, MotePy.RULE_stmt);
    try {
        this.state = 378;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 359;
            this.stmtBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 360;
            this.ifStmt();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 361;
            this.forStmt();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 362;
            this.whileStmt();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 363;
            this.assignStmt();
            this.state = 364;
            this.match(MotePy.SEMI);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 366;
            this.functionCall();
            this.state = 367;
            this.match(MotePy.SEMI);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 369;
            this.returnStmt();
            this.state = 370;
            this.match(MotePy.SEMI);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 372;
            this.awaitStmt();
            this.state = 373;
            this.match(MotePy.SEMI);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 375;
            this.signalStmt();
            this.state = 376;
            this.match(MotePy.SEMI);
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

function TupleIdsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_tupleIds;
    return this;
}

TupleIdsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TupleIdsContext.prototype.constructor = TupleIdsContext;

TupleIdsContext.prototype.LP = function() {
    return this.getToken(MotePy.LP, 0);
};

TupleIdsContext.prototype.identifierList = function() {
    return this.getTypedRuleContext(IdentifierListContext,0);
};

TupleIdsContext.prototype.RP = function() {
    return this.getToken(MotePy.RP, 0);
};

TupleIdsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterTupleIds(this);
	}
};

TupleIdsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitTupleIds(this);
	}
};

TupleIdsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitTupleIds(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.TupleIdsContext = TupleIdsContext;

MotePy.prototype.tupleIds = function() {

    var localctx = new TupleIdsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, MotePy.RULE_tupleIds);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 380;
        this.match(MotePy.LP);
        this.state = 381;
        this.identifierList();
        this.state = 382;
        this.match(MotePy.RP);
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

function FuncDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_funcDef;
    return this;
}

FuncDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncDefContext.prototype.constructor = FuncDefContext;

FuncDefContext.prototype.returnType = function() {
    return this.getTypedRuleContext(ReturnTypeContext,0);
};

FuncDefContext.prototype.Identifier = function() {
    return this.getToken(MotePy.Identifier, 0);
};

FuncDefContext.prototype.LP = function() {
    return this.getToken(MotePy.LP, 0);
};

FuncDefContext.prototype.RP = function() {
    return this.getToken(MotePy.RP, 0);
};

FuncDefContext.prototype.LB = function() {
    return this.getToken(MotePy.LB, 0);
};

FuncDefContext.prototype.RB = function() {
    return this.getToken(MotePy.RB, 0);
};

FuncDefContext.prototype.ASYNC = function() {
    return this.getToken(MotePy.ASYNC, 0);
};

FuncDefContext.prototype.formalParams = function() {
    return this.getTypedRuleContext(FormalParamsContext,0);
};

FuncDefContext.prototype.varDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarDefContext);
    } else {
        return this.getTypedRuleContext(VarDefContext,i);
    }
};

FuncDefContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

FuncDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterFuncDef(this);
	}
};

FuncDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitFuncDef(this);
	}
};

FuncDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitFuncDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.FuncDefContext = FuncDefContext;

MotePy.prototype.funcDef = function() {

    var localctx = new FuncDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, MotePy.RULE_funcDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 385;
        _la = this._input.LA(1);
        if(_la===MotePy.ASYNC) {
            this.state = 384;
            this.match(MotePy.ASYNC);
        }

        this.state = 387;
        this.returnType();
        this.state = 388;
        this.match(MotePy.Identifier);
        this.state = 389;
        this.match(MotePy.LP);
        this.state = 391;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MotePy.FUTURE) | (1 << MotePy.RCHAN) | (1 << MotePy.CHAN) | (1 << MotePy.CONST) | (1 << MotePy.VOID) | (1 << MotePy.LP) | (1 << MotePy.LS))) !== 0) || ((((_la - 62)) & ~0x1f) == 0 && ((1 << (_la - 62)) & ((1 << (MotePy.INT - 62)) | (1 << (MotePy.FLOAT - 62)) | (1 << (MotePy.BOOLEAN - 62)) | (1 << (MotePy.I8 - 62)) | (1 << (MotePy.U8 - 62)) | (1 << (MotePy.I16 - 62)) | (1 << (MotePy.U16 - 62)) | (1 << (MotePy.I32 - 62)) | (1 << (MotePy.U32 - 62)) | (1 << (MotePy.Identifier - 62)))) !== 0)) {
            this.state = 390;
            this.formalParams();
        }

        this.state = 393;
        this.match(MotePy.RP);
        this.state = 394;
        this.match(MotePy.LB);
        this.state = 398;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 395;
                this.varDef(); 
            }
            this.state = 400;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
        }

        this.state = 404;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MotePy.AWAIT) | (1 << MotePy.SIGNAL) | (1 << MotePy.IF) | (1 << MotePy.FOR) | (1 << MotePy.WHILE) | (1 << MotePy.LP) | (1 << MotePy.LB))) !== 0) || _la===MotePy.RETURN || _la===MotePy.Identifier) {
            this.state = 401;
            this.stmt();
            this.state = 406;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 407;
        this.match(MotePy.RB);
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

function QualIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_qualIdentifier;
    return this;
}

QualIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QualIdentifierContext.prototype.constructor = QualIdentifierContext;

QualIdentifierContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MotePy.Identifier);
    } else {
        return this.getToken(MotePy.Identifier, i);
    }
};


QualIdentifierContext.prototype.PERIOD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MotePy.PERIOD);
    } else {
        return this.getToken(MotePy.PERIOD, i);
    }
};


QualIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterQualIdentifier(this);
	}
};

QualIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitQualIdentifier(this);
	}
};

QualIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitQualIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.QualIdentifierContext = QualIdentifierContext;

MotePy.prototype.qualIdentifier = function() {

    var localctx = new QualIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, MotePy.RULE_qualIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 409;
        this.match(MotePy.Identifier);
        this.state = 414;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 410;
                this.match(MotePy.PERIOD);
                this.state = 411;
                this.match(MotePy.Identifier); 
            }
            this.state = 416;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
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

function CppQualIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_cppQualIdentifier;
    return this;
}

CppQualIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CppQualIdentifierContext.prototype.constructor = CppQualIdentifierContext;

CppQualIdentifierContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MotePy.Identifier);
    } else {
        return this.getToken(MotePy.Identifier, i);
    }
};


CppQualIdentifierContext.prototype.DCOLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MotePy.DCOLON);
    } else {
        return this.getToken(MotePy.DCOLON, i);
    }
};


CppQualIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterCppQualIdentifier(this);
	}
};

CppQualIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitCppQualIdentifier(this);
	}
};

CppQualIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitCppQualIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.CppQualIdentifierContext = CppQualIdentifierContext;

MotePy.prototype.cppQualIdentifier = function() {

    var localctx = new CppQualIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, MotePy.RULE_cppQualIdentifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 417;
        this.match(MotePy.Identifier);
        this.state = 420; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 418;
            this.match(MotePy.DCOLON);
            this.state = 419;
            this.match(MotePy.Identifier);
            this.state = 422; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===MotePy.DCOLON);
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

function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.LP = function() {
    return this.getToken(MotePy.LP, 0);
};

FunctionCallContext.prototype.RP = function() {
    return this.getToken(MotePy.RP, 0);
};

FunctionCallContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

FunctionCallContext.prototype.cppQualIdentifier = function() {
    return this.getTypedRuleContext(CppQualIdentifierContext,0);
};

FunctionCallContext.prototype.actualParams = function() {
    return this.getTypedRuleContext(ActualParamsContext,0);
};

FunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterFunctionCall(this);
	}
};

FunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitFunctionCall(this);
	}
};

FunctionCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitFunctionCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.FunctionCallContext = FunctionCallContext;

MotePy.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, MotePy.RULE_functionCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 426;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
        switch(la_) {
        case 1:
            this.state = 424;
            this.qualIdentifier();
            break;

        case 2:
            this.state = 425;
            this.cppQualIdentifier();
            break;

        }
        this.state = 428;
        this.match(MotePy.LP);
        this.state = 430;
        _la = this._input.LA(1);
        if(((((_la - 22)) & ~0x1f) == 0 && ((1 << (_la - 22)) & ((1 << (MotePy.TRUE - 22)) | (1 << (MotePy.FALSE - 22)) | (1 << (MotePy.LP - 22)) | (1 << (MotePy.LB - 22)) | (1 << (MotePy.MINUS - 22)) | (1 << (MotePy.LNOT - 22)))) !== 0) || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (MotePy.BAND - 56)) | (1 << (MotePy.BNOT - 56)) | (1 << (MotePy.INT - 56)) | (1 << (MotePy.FLOAT - 56)) | (1 << (MotePy.BOOLEAN - 56)) | (1 << (MotePy.I8 - 56)) | (1 << (MotePy.U8 - 56)) | (1 << (MotePy.I16 - 56)) | (1 << (MotePy.U16 - 56)) | (1 << (MotePy.I32 - 56)) | (1 << (MotePy.U32 - 56)) | (1 << (MotePy.Identifier - 56)) | (1 << (MotePy.IntegerConstant - 56)) | (1 << (MotePy.FloatingConstant - 56)) | (1 << (MotePy.CharacterConstant - 56)) | (1 << (MotePy.StringLiteral - 56)))) !== 0)) {
            this.state = 429;
            this.actualParams();
        }

        this.state = 432;
        this.match(MotePy.RP);
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

function ActualParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_actualParam;
    return this;
}

ActualParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActualParamContext.prototype.constructor = ActualParamContext;

ActualParamContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ActualParamContext.prototype.StringLiteral = function() {
    return this.getToken(MotePy.StringLiteral, 0);
};

ActualParamContext.prototype.Identifier = function() {
    return this.getToken(MotePy.Identifier, 0);
};

ActualParamContext.prototype.ASSIGN = function() {
    return this.getToken(MotePy.ASSIGN, 0);
};

ActualParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterActualParam(this);
	}
};

ActualParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitActualParam(this);
	}
};

ActualParamContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitActualParam(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.ActualParamContext = ActualParamContext;

MotePy.prototype.actualParam = function() {

    var localctx = new ActualParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, MotePy.RULE_actualParam);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 436;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
        if(la_===1) {
            this.state = 434;
            this.match(MotePy.Identifier);
            this.state = 435;
            this.match(MotePy.ASSIGN);

        }
        this.state = 440;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
        switch(la_) {
        case 1:
            this.state = 438;
            this.expr(0);
            break;

        case 2:
            this.state = 439;
            this.match(MotePy.StringLiteral);
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

function ActualParamsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_actualParams;
    return this;
}

ActualParamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActualParamsContext.prototype.constructor = ActualParamsContext;

ActualParamsContext.prototype.actualParam = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ActualParamContext);
    } else {
        return this.getTypedRuleContext(ActualParamContext,i);
    }
};

ActualParamsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MotePy.COMMA);
    } else {
        return this.getToken(MotePy.COMMA, i);
    }
};


ActualParamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterActualParams(this);
	}
};

ActualParamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitActualParams(this);
	}
};

ActualParamsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitActualParams(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.ActualParamsContext = ActualParamsContext;

MotePy.prototype.actualParams = function() {

    var localctx = new ActualParamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, MotePy.RULE_actualParams);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 442;
        this.actualParam();
        this.state = 447;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 443;
                this.match(MotePy.COMMA);
                this.state = 444;
                this.actualParam(); 
            }
            this.state = 449;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,41,this._ctx);
        }

        this.state = 451;
        _la = this._input.LA(1);
        if(_la===MotePy.COMMA) {
            this.state = 450;
            this.match(MotePy.COMMA);
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

function DimensionExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_dimensionExpr;
    return this;
}

DimensionExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DimensionExprContext.prototype.constructor = DimensionExprContext;

DimensionExprContext.prototype.LS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MotePy.LS);
    } else {
        return this.getToken(MotePy.LS, i);
    }
};


DimensionExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

DimensionExprContext.prototype.RS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MotePy.RS);
    } else {
        return this.getToken(MotePy.RS, i);
    }
};


DimensionExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterDimensionExpr(this);
	}
};

DimensionExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitDimensionExpr(this);
	}
};

DimensionExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitDimensionExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.DimensionExprContext = DimensionExprContext;

MotePy.prototype.dimensionExpr = function() {

    var localctx = new DimensionExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, MotePy.RULE_dimensionExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 457; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 453;
        		this.match(MotePy.LS);
        		this.state = 454;
        		this.expr(0);
        		this.state = 455;
        		this.match(MotePy.RS);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 459; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,43, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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

function ArrayExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_arrayExpr;
    return this;
}

ArrayExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayExprContext.prototype.constructor = ArrayExprContext;

ArrayExprContext.prototype.Identifier = function() {
    return this.getToken(MotePy.Identifier, 0);
};

ArrayExprContext.prototype.dimensionExpr = function() {
    return this.getTypedRuleContext(DimensionExprContext,0);
};

ArrayExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterArrayExpr(this);
	}
};

ArrayExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitArrayExpr(this);
	}
};

ArrayExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitArrayExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.ArrayExprContext = ArrayExprContext;

MotePy.prototype.arrayExpr = function() {

    var localctx = new ArrayExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, MotePy.RULE_arrayExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 461;
        this.match(MotePy.Identifier);
        this.state = 462;
        this.dimensionExpr();
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

function AddressExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_addressExpr;
    return this;
}

AddressExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddressExprContext.prototype.constructor = AddressExprContext;

AddressExprContext.prototype.BAND = function() {
    return this.getToken(MotePy.BAND, 0);
};

AddressExprContext.prototype.arrayExpr = function() {
    return this.getTypedRuleContext(ArrayExprContext,0);
};

AddressExprContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

AddressExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterAddressExpr(this);
	}
};

AddressExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitAddressExpr(this);
	}
};

AddressExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitAddressExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.AddressExprContext = AddressExprContext;

MotePy.prototype.addressExpr = function() {

    var localctx = new AddressExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, MotePy.RULE_addressExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 464;
        this.match(MotePy.BAND);
        this.state = 467;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
        switch(la_) {
        case 1:
            this.state = 465;
            this.arrayExpr();
            break;

        case 2:
            this.state = 466;
            this.qualIdentifier();
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

function CastExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_castExpr;
    return this;
}

CastExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CastExprContext.prototype.constructor = CastExprContext;

CastExprContext.prototype.castableType = function() {
    return this.getTypedRuleContext(CastableTypeContext,0);
};

CastExprContext.prototype.LP = function() {
    return this.getToken(MotePy.LP, 0);
};

CastExprContext.prototype.basicExpr = function() {
    return this.getTypedRuleContext(BasicExprContext,0);
};

CastExprContext.prototype.RP = function() {
    return this.getToken(MotePy.RP, 0);
};

CastExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterCastExpr(this);
	}
};

CastExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitCastExpr(this);
	}
};

CastExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitCastExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.CastExprContext = CastExprContext;

MotePy.prototype.castExpr = function() {

    var localctx = new CastExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, MotePy.RULE_castExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 469;
        this.castableType();
        this.state = 470;
        this.match(MotePy.LP);
        this.state = 471;
        this.basicExpr(0);
        this.state = 472;
        this.match(MotePy.RP);
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

function BasicExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_basicExpr;
    this.up = null; // Token
    this.op = null; // Token
    return this;
}

BasicExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BasicExprContext.prototype.constructor = BasicExprContext;

BasicExprContext.prototype.basicExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BasicExprContext);
    } else {
        return this.getTypedRuleContext(BasicExprContext,i);
    }
};

BasicExprContext.prototype.BNOT = function() {
    return this.getToken(MotePy.BNOT, 0);
};

BasicExprContext.prototype.MINUS = function() {
    return this.getToken(MotePy.MINUS, 0);
};

BasicExprContext.prototype.castExpr = function() {
    return this.getTypedRuleContext(CastExprContext,0);
};

BasicExprContext.prototype.qualIdentifier = function() {
    return this.getTypedRuleContext(QualIdentifierContext,0);
};

BasicExprContext.prototype.arrayExpr = function() {
    return this.getTypedRuleContext(ArrayExprContext,0);
};

BasicExprContext.prototype.addressExpr = function() {
    return this.getTypedRuleContext(AddressExprContext,0);
};

BasicExprContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

BasicExprContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

BasicExprContext.prototype.LP = function() {
    return this.getToken(MotePy.LP, 0);
};

BasicExprContext.prototype.RP = function() {
    return this.getToken(MotePy.RP, 0);
};

BasicExprContext.prototype.POW = function() {
    return this.getToken(MotePy.POW, 0);
};

BasicExprContext.prototype.LSHIFT = function() {
    return this.getToken(MotePy.LSHIFT, 0);
};

BasicExprContext.prototype.RSHIFT = function() {
    return this.getToken(MotePy.RSHIFT, 0);
};

BasicExprContext.prototype.BAND = function() {
    return this.getToken(MotePy.BAND, 0);
};

BasicExprContext.prototype.BOR = function() {
    return this.getToken(MotePy.BOR, 0);
};

BasicExprContext.prototype.BXOR = function() {
    return this.getToken(MotePy.BXOR, 0);
};

BasicExprContext.prototype.CAT = function() {
    return this.getToken(MotePy.CAT, 0);
};

BasicExprContext.prototype.HPROD = function() {
    return this.getToken(MotePy.HPROD, 0);
};

BasicExprContext.prototype.MUL = function() {
    return this.getToken(MotePy.MUL, 0);
};

BasicExprContext.prototype.DIV = function() {
    return this.getToken(MotePy.DIV, 0);
};

BasicExprContext.prototype.MOD = function() {
    return this.getToken(MotePy.MOD, 0);
};

BasicExprContext.prototype.PLUS = function() {
    return this.getToken(MotePy.PLUS, 0);
};

BasicExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterBasicExpr(this);
	}
};

BasicExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitBasicExpr(this);
	}
};

BasicExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitBasicExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



MotePy.prototype.basicExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new BasicExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 98;
    this.enterRecursionRule(localctx, 98, MotePy.RULE_basicExpr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 487;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
        switch(la_) {
        case 1:
            this.state = 475;
            localctx.up = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===MotePy.MINUS || _la===MotePy.BNOT)) {
                localctx.up = this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 476;
            this.basicExpr(7);
            break;

        case 2:
            this.state = 477;
            this.castExpr();
            break;

        case 3:
            this.state = 478;
            this.qualIdentifier();
            break;

        case 4:
            this.state = 479;
            this.arrayExpr();
            break;

        case 5:
            this.state = 480;
            this.addressExpr();
            break;

        case 6:
            this.state = 481;
            this.functionCall();
            break;

        case 7:
            this.state = 482;
            this.literal();
            break;

        case 8:
            this.state = 483;
            this.match(MotePy.LP);
            this.state = 484;
            this.basicExpr(0);
            this.state = 485;
            this.match(MotePy.RP);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 509;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,47,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 507;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MotePy.RULE_basicExpr);
                    this.state = 489;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 490;
                    localctx.op = this.match(MotePy.POW);
                    this.state = 491;
                    this.basicExpr(15);
                    break;

                case 2:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MotePy.RULE_basicExpr);
                    this.state = 492;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 493;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===MotePy.LSHIFT || _la===MotePy.RSHIFT)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 494;
                    this.basicExpr(7);
                    break;

                case 3:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MotePy.RULE_basicExpr);
                    this.state = 495;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 496;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (MotePy.BAND - 56)) | (1 << (MotePy.BOR - 56)) | (1 << (MotePy.BXOR - 56)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 497;
                    this.basicExpr(6);
                    break;

                case 4:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MotePy.RULE_basicExpr);
                    this.state = 498;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 499;
                    localctx.op = this.match(MotePy.CAT);
                    this.state = 500;
                    this.basicExpr(5);
                    break;

                case 5:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MotePy.RULE_basicExpr);
                    this.state = 501;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 502;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (MotePy.MUL - 38)) | (1 << (MotePy.DIV - 38)) | (1 << (MotePy.MOD - 38)) | (1 << (MotePy.HPROD - 38)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 503;
                    this.basicExpr(4);
                    break;

                case 6:
                    localctx = new BasicExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MotePy.RULE_basicExpr);
                    this.state = 504;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 505;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===MotePy.PLUS || _la===MotePy.MINUS)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 506;
                    this.basicExpr(3);
                    break;

                } 
            }
            this.state = 511;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,47,this._ctx);
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

function RelExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_relExpr;
    this.op = null; // Token
    return this;
}

RelExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelExprContext.prototype.constructor = RelExprContext;

RelExprContext.prototype.basicExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BasicExprContext);
    } else {
        return this.getTypedRuleContext(BasicExprContext,i);
    }
};

RelExprContext.prototype.GT = function() {
    return this.getToken(MotePy.GT, 0);
};

RelExprContext.prototype.GTE = function() {
    return this.getToken(MotePy.GTE, 0);
};

RelExprContext.prototype.LT = function() {
    return this.getToken(MotePy.LT, 0);
};

RelExprContext.prototype.LTE = function() {
    return this.getToken(MotePy.LTE, 0);
};

RelExprContext.prototype.EQ = function() {
    return this.getToken(MotePy.EQ, 0);
};

RelExprContext.prototype.NEQ = function() {
    return this.getToken(MotePy.NEQ, 0);
};

RelExprContext.prototype.LP = function() {
    return this.getToken(MotePy.LP, 0);
};

RelExprContext.prototype.relExpr = function() {
    return this.getTypedRuleContext(RelExprContext,0);
};

RelExprContext.prototype.RP = function() {
    return this.getToken(MotePy.RP, 0);
};

RelExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterRelExpr(this);
	}
};

RelExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitRelExpr(this);
	}
};

RelExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitRelExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.RelExprContext = RelExprContext;

MotePy.prototype.relExpr = function() {

    var localctx = new RelExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, MotePy.RULE_relExpr);
    var _la = 0; // Token type
    try {
        this.state = 520;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 512;
            this.basicExpr(0);
            this.state = 513;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (MotePy.LT - 44)) | (1 << (MotePy.GT - 44)) | (1 << (MotePy.LTE - 44)) | (1 << (MotePy.GTE - 44)) | (1 << (MotePy.EQ - 44)) | (1 << (MotePy.NEQ - 44)))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 514;
            this.basicExpr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 516;
            this.match(MotePy.LP);
            this.state = 517;
            this.relExpr();
            this.state = 518;
            this.match(MotePy.RP);
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

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_expr;
    this.op = null; // Token
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.LNOT = function() {
    return this.getToken(MotePy.LNOT, 0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.basicExpr = function() {
    return this.getTypedRuleContext(BasicExprContext,0);
};

ExprContext.prototype.relExpr = function() {
    return this.getTypedRuleContext(RelExprContext,0);
};

ExprContext.prototype.LP = function() {
    return this.getToken(MotePy.LP, 0);
};

ExprContext.prototype.RP = function() {
    return this.getToken(MotePy.RP, 0);
};

ExprContext.prototype.LOR = function() {
    return this.getToken(MotePy.LOR, 0);
};

ExprContext.prototype.LAND = function() {
    return this.getToken(MotePy.LAND, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



MotePy.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 102;
    this.enterRecursionRule(localctx, 102, MotePy.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 531;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
        switch(la_) {
        case 1:
            this.state = 523;
            this.match(MotePy.LNOT);
            this.state = 524;
            this.expr(5);
            break;

        case 2:
            this.state = 525;
            this.basicExpr(0);
            break;

        case 3:
            this.state = 526;
            this.relExpr();
            break;

        case 4:
            this.state = 527;
            this.match(MotePy.LP);
            this.state = 528;
            this.expr(0);
            this.state = 529;
            this.match(MotePy.RP);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 538;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,50,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ExprContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, MotePy.RULE_expr);
                this.state = 533;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 534;
                localctx.op = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(_la===MotePy.LAND || _la===MotePy.LOR)) {
                    localctx.op = this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }
                this.state = 535;
                this.expr(3); 
            }
            this.state = 540;
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

function SyncExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_syncExpr;
    return this;
}

SyncExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SyncExprContext.prototype.constructor = SyncExprContext;

SyncExprContext.prototype.AWAIT = function() {
    return this.getToken(MotePy.AWAIT, 0);
};

SyncExprContext.prototype.SIGNAL = function() {
    return this.getToken(MotePy.SIGNAL, 0);
};

SyncExprContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

SyncExprContext.prototype.Identifier = function() {
    return this.getToken(MotePy.Identifier, 0);
};

SyncExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterSyncExpr(this);
	}
};

SyncExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitSyncExpr(this);
	}
};

SyncExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitSyncExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.SyncExprContext = SyncExprContext;

MotePy.prototype.syncExpr = function() {

    var localctx = new SyncExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, MotePy.RULE_syncExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 541;
        _la = this._input.LA(1);
        if(!(_la===MotePy.AWAIT || _la===MotePy.SIGNAL)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 544;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
        switch(la_) {
        case 1:
            this.state = 542;
            this.functionCall();
            break;

        case 2:
            this.state = 543;
            this.match(MotePy.Identifier);
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

function ToplevelExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_toplevelExpr;
    return this;
}

ToplevelExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ToplevelExprContext.prototype.constructor = ToplevelExprContext;

ToplevelExprContext.prototype.syncExpr = function() {
    return this.getTypedRuleContext(SyncExprContext,0);
};

ToplevelExprContext.prototype.tupleExpr = function() {
    return this.getTypedRuleContext(TupleExprContext,0);
};

ToplevelExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ToplevelExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterToplevelExpr(this);
	}
};

ToplevelExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitToplevelExpr(this);
	}
};

ToplevelExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitToplevelExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.ToplevelExprContext = ToplevelExprContext;

MotePy.prototype.toplevelExpr = function() {

    var localctx = new ToplevelExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, MotePy.RULE_toplevelExpr);
    try {
        this.state = 549;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 546;
            this.syncExpr();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 547;
            this.tupleExpr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 548;
            this.expr(0);
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

function TupleExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_tupleExpr;
    return this;
}

TupleExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TupleExprContext.prototype.constructor = TupleExprContext;

TupleExprContext.prototype.LP = function() {
    return this.getToken(MotePy.LP, 0);
};

TupleExprContext.prototype.actualParams = function() {
    return this.getTypedRuleContext(ActualParamsContext,0);
};

TupleExprContext.prototype.RP = function() {
    return this.getToken(MotePy.RP, 0);
};

TupleExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterTupleExpr(this);
	}
};

TupleExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitTupleExpr(this);
	}
};

TupleExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitTupleExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.TupleExprContext = TupleExprContext;

MotePy.prototype.tupleExpr = function() {

    var localctx = new TupleExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, MotePy.RULE_tupleExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 551;
        this.match(MotePy.LP);
        this.state = 552;
        this.actualParams();
        this.state = 553;
        this.match(MotePy.RP);
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

function NumConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_numConstant;
    return this;
}

NumConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumConstantContext.prototype.constructor = NumConstantContext;

NumConstantContext.prototype.IntegerConstant = function() {
    return this.getToken(MotePy.IntegerConstant, 0);
};

NumConstantContext.prototype.FloatingConstant = function() {
    return this.getToken(MotePy.FloatingConstant, 0);
};

NumConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterNumConstant(this);
	}
};

NumConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitNumConstant(this);
	}
};

NumConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitNumConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.NumConstantContext = NumConstantContext;

MotePy.prototype.numConstant = function() {

    var localctx = new NumConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, MotePy.RULE_numConstant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 555;
        _la = this._input.LA(1);
        if(!(_la===MotePy.IntegerConstant || _la===MotePy.FloatingConstant)) {
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

function ExprConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_exprConstant;
    return this;
}

ExprConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprConstantContext.prototype.constructor = ExprConstantContext;

ExprConstantContext.prototype.numConstant = function() {
    return this.getTypedRuleContext(NumConstantContext,0);
};

ExprConstantContext.prototype.CharacterConstant = function() {
    return this.getToken(MotePy.CharacterConstant, 0);
};

ExprConstantContext.prototype.booleanLiteral = function() {
    return this.getTypedRuleContext(BooleanLiteralContext,0);
};

ExprConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterExprConstant(this);
	}
};

ExprConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitExprConstant(this);
	}
};

ExprConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitExprConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.ExprConstantContext = ExprConstantContext;

MotePy.prototype.exprConstant = function() {

    var localctx = new ExprConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, MotePy.RULE_exprConstant);
    try {
        this.state = 560;
        switch(this._input.LA(1)) {
        case MotePy.IntegerConstant:
        case MotePy.FloatingConstant:
            this.enterOuterAlt(localctx, 1);
            this.state = 557;
            this.numConstant();
            break;
        case MotePy.CharacterConstant:
            this.enterOuterAlt(localctx, 2);
            this.state = 558;
            this.match(MotePy.CharacterConstant);
            break;
        case MotePy.TRUE:
        case MotePy.FALSE:
            this.enterOuterAlt(localctx, 3);
            this.state = 559;
            this.booleanLiteral();
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

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MotePy.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.exprConstant = function() {
    return this.getTypedRuleContext(ExprConstantContext,0);
};

LiteralContext.prototype.arrayLiteral = function() {
    return this.getTypedRuleContext(ArrayLiteralContext,0);
};

LiteralContext.prototype.StringLiteral = function() {
    return this.getToken(MotePy.StringLiteral, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof MotePyListener ) {
        listener.exitLiteral(this);
	}
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MotePyVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MotePy.LiteralContext = LiteralContext;

MotePy.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, MotePy.RULE_literal);
    try {
        this.state = 565;
        switch(this._input.LA(1)) {
        case MotePy.TRUE:
        case MotePy.FALSE:
        case MotePy.IntegerConstant:
        case MotePy.FloatingConstant:
        case MotePy.CharacterConstant:
            this.enterOuterAlt(localctx, 1);
            this.state = 562;
            this.exprConstant();
            break;
        case MotePy.LB:
            this.enterOuterAlt(localctx, 2);
            this.state = 563;
            this.arrayLiteral();
            break;
        case MotePy.StringLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 564;
            this.match(MotePy.StringLiteral);
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


MotePy.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 49:
			return this.basicExpr_sempred(localctx, predIndex);
	case 51:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

MotePy.prototype.basicExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);
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
		default:
			throw "No predicate with index:" + predIndex;
	}
};

MotePy.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 6:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.MotePy = MotePy;
