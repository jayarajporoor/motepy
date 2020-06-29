// Generated from Python3.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var Python3Listener = require('./Python3Listener').Python3Listener;
var Python3Visitor = require('./Python3Visitor').Python3Visitor;

var grammarFileName = "Python3.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003$\u009a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0005\u0002*\n\u0002\u0003\u0003\u0003\u0003",
    "\u0007\u0003.\n\u0003\f\u0003\u000e\u00031\u000b\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0005\u00047\n\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006?",
    "\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0005\bG\n\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0005\u000bO\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0007\fZ\n\f\f\f\u000e\f]\u000b\f\u0003\f",
    "\u0003\f\u0003\f\u0005\fb\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0006\u000em\n\u000e",
    "\r\u000e\u000e\u000en\u0003\u000e\u0003\u000e\u0005\u000es\n\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000fy\n\u000f\f\u000f",
    "\u000e\u000f|\u000b\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u0081\n\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012",
    "\u008c\n\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0006\u0012\u0091",
    "\n\u0012\r\u0012\u000e\u0012\u0092\u0007\u0012\u0095\n\u0012\f\u0012",
    "\u000e\u0012\u0098\u000b\u0012\u0003\u0012\u0002\u0003\"\u0013\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"\u0002\u0004\u0003\u0002\f\u0011\u0003\u0002\u0012\u0013\u009b\u0002",
    ")\u0003\u0002\u0002\u0002\u0004/\u0003\u0002\u0002\u0002\u00066\u0003",
    "\u0002\u0002\u0002\b8\u0003\u0002\u0002\u0002\n>\u0003\u0002\u0002\u0002",
    "\f@\u0003\u0002\u0002\u0002\u000eF\u0003\u0002\u0002\u0002\u0010H\u0003",
    "\u0002\u0002\u0002\u0012J\u0003\u0002\u0002\u0002\u0014N\u0003\u0002",
    "\u0002\u0002\u0016P\u0003\u0002\u0002\u0002\u0018c\u0003\u0002\u0002",
    "\u0002\u001ar\u0003\u0002\u0002\u0002\u001ct\u0003\u0002\u0002\u0002",
    "\u001e\u0080\u0003\u0002\u0002\u0002 \u0082\u0003\u0002\u0002\u0002",
    "\"\u008b\u0003\u0002\u0002\u0002$*\u0007\u0017\u0002\u0002%*\u0005\b",
    "\u0005\u0002&\'\u0005\u0014\u000b\u0002\'(\u0007\u0017\u0002\u0002(",
    "*\u0003\u0002\u0002\u0002)$\u0003\u0002\u0002\u0002)%\u0003\u0002\u0002",
    "\u0002)&\u0003\u0002\u0002\u0002*\u0003\u0003\u0002\u0002\u0002+.\u0007",
    "\u0017\u0002\u0002,.\u0005\u0006\u0004\u0002-+\u0003\u0002\u0002\u0002",
    "-,\u0003\u0002\u0002\u0002.1\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002",
    "\u0002/0\u0003\u0002\u0002\u000202\u0003\u0002\u0002\u00021/\u0003\u0002",
    "\u0002\u000223\u0007\u0002\u0002\u00033\u0005\u0003\u0002\u0002\u0002",
    "47\u0005\b\u0005\u000257\u0005\u0014\u000b\u000264\u0003\u0002\u0002",
    "\u000265\u0003\u0002\u0002\u00027\u0007\u0003\u0002\u0002\u000289\u0005",
    "\n\u0006\u00029:\u0007\u0017\u0002\u0002:\t\u0003\u0002\u0002\u0002",
    ";?\u0005\f\u0007\u0002<?\u0005\u000e\b\u0002=?\u0005\u001e\u0010\u0002",
    ">;\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002>=\u0003\u0002\u0002",
    "\u0002?\u000b\u0003\u0002\u0002\u0002@A\u0007\u0018\u0002\u0002AB\u0007",
    "\u0003\u0002\u0002BC\u0005\"\u0012\u0002C\r\u0003\u0002\u0002\u0002",
    "DG\u0005\u0010\t\u0002EG\u0005\u0012\n\u0002FD\u0003\u0002\u0002\u0002",
    "FE\u0003\u0002\u0002\u0002G\u000f\u0003\u0002\u0002\u0002HI\u0007\u0004",
    "\u0002\u0002I\u0011\u0003\u0002\u0002\u0002JK\u0007\u0005\u0002\u0002",
    "K\u0013\u0003\u0002\u0002\u0002LO\u0005\u0016\f\u0002MO\u0005\u0018",
    "\r\u0002NL\u0003\u0002\u0002\u0002NM\u0003\u0002\u0002\u0002O\u0015",
    "\u0003\u0002\u0002\u0002PQ\u0007\u0006\u0002\u0002QR\u0005\u001c\u000f",
    "\u0002RS\u0007\u0007\u0002\u0002S[\u0005\u001a\u000e\u0002TU\u0007\b",
    "\u0002\u0002UV\u0005\u001c\u000f\u0002VW\u0007\u0007\u0002\u0002WX\u0005",
    "\u001a\u000e\u0002XZ\u0003\u0002\u0002\u0002YT\u0003\u0002\u0002\u0002",
    "Z]\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002[\\\u0003\u0002",
    "\u0002\u0002\\a\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002^_",
    "\u0007\t\u0002\u0002_`\u0007\u0007\u0002\u0002`b\u0005\u001a\u000e\u0002",
    "a^\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002b\u0017\u0003\u0002",
    "\u0002\u0002cd\u0007\n\u0002\u0002de\u0005\u001c\u000f\u0002ef\u0007",
    "\u0007\u0002\u0002fg\u0005\u001a\u000e\u0002g\u0019\u0003\u0002\u0002",
    "\u0002hs\u0005\b\u0005\u0002ij\u0007\u0017\u0002\u0002jl\u0007#\u0002",
    "\u0002km\u0005\u0006\u0004\u0002lk\u0003\u0002\u0002\u0002mn\u0003\u0002",
    "\u0002\u0002nl\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002op\u0003",
    "\u0002\u0002\u0002pq\u0007$\u0002\u0002qs\u0003\u0002\u0002\u0002rh",
    "\u0003\u0002\u0002\u0002ri\u0003\u0002\u0002\u0002s\u001b\u0003\u0002",
    "\u0002\u0002tz\u0005\"\u0012\u0002uv\u0005 \u0011\u0002vw\u0005\"\u0012",
    "\u0002wy\u0003\u0002\u0002\u0002xu\u0003\u0002\u0002\u0002y|\u0003\u0002",
    "\u0002\u0002zx\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{\u001d",
    "\u0003\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002}~\u0007\u000b\u0002",
    "\u0002~\u0081\u0007\u0014\u0002\u0002\u007f\u0081\u0005\"\u0012\u0002",
    "\u0080}\u0003\u0002\u0002\u0002\u0080\u007f\u0003\u0002\u0002\u0002",
    "\u0081\u001f\u0003\u0002\u0002\u0002\u0082\u0083\t\u0002\u0002\u0002",
    "\u0083!\u0003\u0002\u0002\u0002\u0084\u0085\b\u0012\u0001\u0002\u0085",
    "\u008c\u0007\u0018\u0002\u0002\u0086\u008c\u0007\u0015\u0002\u0002\u0087",
    "\u0088\u0007\u001b\u0002\u0002\u0088\u0089\u0005\"\u0012\u0002\u0089",
    "\u008a\u0007\u001c\u0002\u0002\u008a\u008c\u0003\u0002\u0002\u0002\u008b",
    "\u0084\u0003\u0002\u0002\u0002\u008b\u0086\u0003\u0002\u0002\u0002\u008b",
    "\u0087\u0003\u0002\u0002\u0002\u008c\u0096\u0003\u0002\u0002\u0002\u008d",
    "\u0090\f\u0006\u0002\u0002\u008e\u008f\t\u0003\u0002\u0002\u008f\u0091",
    "\u0005\"\u0012\u0002\u0090\u008e\u0003\u0002\u0002\u0002\u0091\u0092",
    "\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0092\u0093",
    "\u0003\u0002\u0002\u0002\u0093\u0095\u0003\u0002\u0002\u0002\u0094\u008d",
    "\u0003\u0002\u0002\u0002\u0095\u0098\u0003\u0002\u0002\u0002\u0096\u0094",
    "\u0003\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097#",
    "\u0003\u0002\u0002\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0012)",
    "-/6>FN[anrz\u0080\u008b\u0092\u0096"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'='", "'break'", "'continue'", "'if'", "':'", 
                     "'elif'", "'else'", "'while'", "'print'", "'<'", "'>'", 
                     "'=='", "'>='", "'<='", "'!='", "'+'", "'-'", null, 
                     null, null, null, null, null, null, "'('", "')'", "'['", 
                     "']'", "'{'", "'}'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      "STRING", "NUMBER", "INTEGER", "NEWLINE", "NAME", 
                      "STRING_LITERAL", "DECIMAL_INTEGER", "OPEN_PAREN", 
                      "CLOSE_PAREN", "OPEN_BRACK", "CLOSE_BRACK", "OPEN_BRACE", 
                      "CLOSE_BRACE", "SKIP_", "UNKNOWN_CHAR", "INDENT", 
                      "DEDENT" ];

var ruleNames =  [ "single_input", "file_input", "stmt", "simple_stmt", 
                   "small_stmt", "assignment_stmt", "flow_stmt", "break_stmt", 
                   "continue_stmt", "compound_stmt", "if_stmt", "while_stmt", 
                   "suite", "test", "print_stmt", "comp_op", "expr" ];

function Python3Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

Python3Parser.prototype = Object.create(antlr4.Parser.prototype);
Python3Parser.prototype.constructor = Python3Parser;

Object.defineProperty(Python3Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

Python3Parser.EOF = antlr4.Token.EOF;
Python3Parser.T__0 = 1;
Python3Parser.T__1 = 2;
Python3Parser.T__2 = 3;
Python3Parser.T__3 = 4;
Python3Parser.T__4 = 5;
Python3Parser.T__5 = 6;
Python3Parser.T__6 = 7;
Python3Parser.T__7 = 8;
Python3Parser.T__8 = 9;
Python3Parser.T__9 = 10;
Python3Parser.T__10 = 11;
Python3Parser.T__11 = 12;
Python3Parser.T__12 = 13;
Python3Parser.T__13 = 14;
Python3Parser.T__14 = 15;
Python3Parser.T__15 = 16;
Python3Parser.T__16 = 17;
Python3Parser.STRING = 18;
Python3Parser.NUMBER = 19;
Python3Parser.INTEGER = 20;
Python3Parser.NEWLINE = 21;
Python3Parser.NAME = 22;
Python3Parser.STRING_LITERAL = 23;
Python3Parser.DECIMAL_INTEGER = 24;
Python3Parser.OPEN_PAREN = 25;
Python3Parser.CLOSE_PAREN = 26;
Python3Parser.OPEN_BRACK = 27;
Python3Parser.CLOSE_BRACK = 28;
Python3Parser.OPEN_BRACE = 29;
Python3Parser.CLOSE_BRACE = 30;
Python3Parser.SKIP_ = 31;
Python3Parser.UNKNOWN_CHAR = 32;
Python3Parser.INDENT = 33;
Python3Parser.DEDENT = 34;

Python3Parser.RULE_single_input = 0;
Python3Parser.RULE_file_input = 1;
Python3Parser.RULE_stmt = 2;
Python3Parser.RULE_simple_stmt = 3;
Python3Parser.RULE_small_stmt = 4;
Python3Parser.RULE_assignment_stmt = 5;
Python3Parser.RULE_flow_stmt = 6;
Python3Parser.RULE_break_stmt = 7;
Python3Parser.RULE_continue_stmt = 8;
Python3Parser.RULE_compound_stmt = 9;
Python3Parser.RULE_if_stmt = 10;
Python3Parser.RULE_while_stmt = 11;
Python3Parser.RULE_suite = 12;
Python3Parser.RULE_test = 13;
Python3Parser.RULE_print_stmt = 14;
Python3Parser.RULE_comp_op = 15;
Python3Parser.RULE_expr = 16;

function Single_inputContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Python3Parser.RULE_single_input;
    return this;
}

Single_inputContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Single_inputContext.prototype.constructor = Single_inputContext;

Single_inputContext.prototype.NEWLINE = function() {
    return this.getToken(Python3Parser.NEWLINE, 0);
};

Single_inputContext.prototype.simple_stmt = function() {
    return this.getTypedRuleContext(Simple_stmtContext,0);
};

Single_inputContext.prototype.compound_stmt = function() {
    return this.getTypedRuleContext(Compound_stmtContext,0);
};

Single_inputContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterSingle_input(this);
	}
};

Single_inputContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitSingle_input(this);
	}
};

Single_inputContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitSingle_input(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.Single_inputContext = Single_inputContext;

Python3Parser.prototype.single_input = function() {

    var localctx = new Single_inputContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, Python3Parser.RULE_single_input);
    try {
        this.state = 39;
        switch(this._input.LA(1)) {
        case Python3Parser.NEWLINE:
            this.enterOuterAlt(localctx, 1);
            this.state = 34;
            this.match(Python3Parser.NEWLINE);
            break;
        case Python3Parser.T__1:
        case Python3Parser.T__2:
        case Python3Parser.T__8:
        case Python3Parser.NUMBER:
        case Python3Parser.NAME:
        case Python3Parser.OPEN_PAREN:
            this.enterOuterAlt(localctx, 2);
            this.state = 35;
            this.simple_stmt();
            break;
        case Python3Parser.T__3:
        case Python3Parser.T__7:
            this.enterOuterAlt(localctx, 3);
            this.state = 36;
            this.compound_stmt();
            this.state = 37;
            this.match(Python3Parser.NEWLINE);
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

function File_inputContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Python3Parser.RULE_file_input;
    return this;
}

File_inputContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
File_inputContext.prototype.constructor = File_inputContext;

File_inputContext.prototype.EOF = function() {
    return this.getToken(Python3Parser.EOF, 0);
};

File_inputContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Python3Parser.NEWLINE);
    } else {
        return this.getToken(Python3Parser.NEWLINE, i);
    }
};


File_inputContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

File_inputContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterFile_input(this);
	}
};

File_inputContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitFile_input(this);
	}
};

File_inputContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitFile_input(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.File_inputContext = File_inputContext;

Python3Parser.prototype.file_input = function() {

    var localctx = new File_inputContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, Python3Parser.RULE_file_input);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Python3Parser.T__1) | (1 << Python3Parser.T__2) | (1 << Python3Parser.T__3) | (1 << Python3Parser.T__7) | (1 << Python3Parser.T__8) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.NEWLINE) | (1 << Python3Parser.NAME) | (1 << Python3Parser.OPEN_PAREN))) !== 0)) {
            this.state = 43;
            switch(this._input.LA(1)) {
            case Python3Parser.NEWLINE:
                this.state = 41;
                this.match(Python3Parser.NEWLINE);
                break;
            case Python3Parser.T__1:
            case Python3Parser.T__2:
            case Python3Parser.T__3:
            case Python3Parser.T__7:
            case Python3Parser.T__8:
            case Python3Parser.NUMBER:
            case Python3Parser.NAME:
            case Python3Parser.OPEN_PAREN:
                this.state = 42;
                this.stmt();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 47;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 48;
        this.match(Python3Parser.EOF);
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
    this.ruleIndex = Python3Parser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.simple_stmt = function() {
    return this.getTypedRuleContext(Simple_stmtContext,0);
};

StmtContext.prototype.compound_stmt = function() {
    return this.getTypedRuleContext(Compound_stmtContext,0);
};

StmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterStmt(this);
	}
};

StmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitStmt(this);
	}
};

StmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.StmtContext = StmtContext;

Python3Parser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, Python3Parser.RULE_stmt);
    try {
        this.state = 52;
        switch(this._input.LA(1)) {
        case Python3Parser.T__1:
        case Python3Parser.T__2:
        case Python3Parser.T__8:
        case Python3Parser.NUMBER:
        case Python3Parser.NAME:
        case Python3Parser.OPEN_PAREN:
            this.enterOuterAlt(localctx, 1);
            this.state = 50;
            this.simple_stmt();
            break;
        case Python3Parser.T__3:
        case Python3Parser.T__7:
            this.enterOuterAlt(localctx, 2);
            this.state = 51;
            this.compound_stmt();
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

function Simple_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Python3Parser.RULE_simple_stmt;
    return this;
}

Simple_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Simple_stmtContext.prototype.constructor = Simple_stmtContext;

Simple_stmtContext.prototype.small_stmt = function() {
    return this.getTypedRuleContext(Small_stmtContext,0);
};

Simple_stmtContext.prototype.NEWLINE = function() {
    return this.getToken(Python3Parser.NEWLINE, 0);
};

Simple_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterSimple_stmt(this);
	}
};

Simple_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitSimple_stmt(this);
	}
};

Simple_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitSimple_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.Simple_stmtContext = Simple_stmtContext;

Python3Parser.prototype.simple_stmt = function() {

    var localctx = new Simple_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, Python3Parser.RULE_simple_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this.small_stmt();
        this.state = 55;
        this.match(Python3Parser.NEWLINE);
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

function Small_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Python3Parser.RULE_small_stmt;
    return this;
}

Small_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Small_stmtContext.prototype.constructor = Small_stmtContext;

Small_stmtContext.prototype.assignment_stmt = function() {
    return this.getTypedRuleContext(Assignment_stmtContext,0);
};

Small_stmtContext.prototype.flow_stmt = function() {
    return this.getTypedRuleContext(Flow_stmtContext,0);
};

Small_stmtContext.prototype.print_stmt = function() {
    return this.getTypedRuleContext(Print_stmtContext,0);
};

Small_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterSmall_stmt(this);
	}
};

Small_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitSmall_stmt(this);
	}
};

Small_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitSmall_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.Small_stmtContext = Small_stmtContext;

Python3Parser.prototype.small_stmt = function() {

    var localctx = new Small_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, Python3Parser.RULE_small_stmt);
    try {
        this.state = 60;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 57;
            this.assignment_stmt();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 58;
            this.flow_stmt();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 59;
            this.print_stmt();
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

function Assignment_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Python3Parser.RULE_assignment_stmt;
    return this;
}

Assignment_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Assignment_stmtContext.prototype.constructor = Assignment_stmtContext;

Assignment_stmtContext.prototype.NAME = function() {
    return this.getToken(Python3Parser.NAME, 0);
};

Assignment_stmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Assignment_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterAssignment_stmt(this);
	}
};

Assignment_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitAssignment_stmt(this);
	}
};

Assignment_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitAssignment_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.Assignment_stmtContext = Assignment_stmtContext;

Python3Parser.prototype.assignment_stmt = function() {

    var localctx = new Assignment_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, Python3Parser.RULE_assignment_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(Python3Parser.NAME);
        this.state = 63;
        this.match(Python3Parser.T__0);
        this.state = 64;
        this.expr(0);
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

function Flow_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Python3Parser.RULE_flow_stmt;
    return this;
}

Flow_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Flow_stmtContext.prototype.constructor = Flow_stmtContext;

Flow_stmtContext.prototype.break_stmt = function() {
    return this.getTypedRuleContext(Break_stmtContext,0);
};

Flow_stmtContext.prototype.continue_stmt = function() {
    return this.getTypedRuleContext(Continue_stmtContext,0);
};

Flow_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterFlow_stmt(this);
	}
};

Flow_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitFlow_stmt(this);
	}
};

Flow_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitFlow_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.Flow_stmtContext = Flow_stmtContext;

Python3Parser.prototype.flow_stmt = function() {

    var localctx = new Flow_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, Python3Parser.RULE_flow_stmt);
    try {
        this.state = 68;
        switch(this._input.LA(1)) {
        case Python3Parser.T__1:
            this.enterOuterAlt(localctx, 1);
            this.state = 66;
            this.break_stmt();
            break;
        case Python3Parser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 67;
            this.continue_stmt();
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

function Break_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Python3Parser.RULE_break_stmt;
    return this;
}

Break_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Break_stmtContext.prototype.constructor = Break_stmtContext;


Break_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterBreak_stmt(this);
	}
};

Break_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitBreak_stmt(this);
	}
};

Break_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitBreak_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.Break_stmtContext = Break_stmtContext;

Python3Parser.prototype.break_stmt = function() {

    var localctx = new Break_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, Python3Parser.RULE_break_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(Python3Parser.T__1);
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

function Continue_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Python3Parser.RULE_continue_stmt;
    return this;
}

Continue_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Continue_stmtContext.prototype.constructor = Continue_stmtContext;


Continue_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterContinue_stmt(this);
	}
};

Continue_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitContinue_stmt(this);
	}
};

Continue_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitContinue_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.Continue_stmtContext = Continue_stmtContext;

Python3Parser.prototype.continue_stmt = function() {

    var localctx = new Continue_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, Python3Parser.RULE_continue_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        this.match(Python3Parser.T__2);
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

function Compound_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Python3Parser.RULE_compound_stmt;
    return this;
}

Compound_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Compound_stmtContext.prototype.constructor = Compound_stmtContext;

Compound_stmtContext.prototype.if_stmt = function() {
    return this.getTypedRuleContext(If_stmtContext,0);
};

Compound_stmtContext.prototype.while_stmt = function() {
    return this.getTypedRuleContext(While_stmtContext,0);
};

Compound_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterCompound_stmt(this);
	}
};

Compound_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitCompound_stmt(this);
	}
};

Compound_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitCompound_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.Compound_stmtContext = Compound_stmtContext;

Python3Parser.prototype.compound_stmt = function() {

    var localctx = new Compound_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, Python3Parser.RULE_compound_stmt);
    try {
        this.state = 76;
        switch(this._input.LA(1)) {
        case Python3Parser.T__3:
            this.enterOuterAlt(localctx, 1);
            this.state = 74;
            this.if_stmt();
            break;
        case Python3Parser.T__7:
            this.enterOuterAlt(localctx, 2);
            this.state = 75;
            this.while_stmt();
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

function If_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Python3Parser.RULE_if_stmt;
    return this;
}

If_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_stmtContext.prototype.constructor = If_stmtContext;

If_stmtContext.prototype.test = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TestContext);
    } else {
        return this.getTypedRuleContext(TestContext,i);
    }
};

If_stmtContext.prototype.suite = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SuiteContext);
    } else {
        return this.getTypedRuleContext(SuiteContext,i);
    }
};

If_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterIf_stmt(this);
	}
};

If_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitIf_stmt(this);
	}
};

If_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitIf_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.If_stmtContext = If_stmtContext;

Python3Parser.prototype.if_stmt = function() {

    var localctx = new If_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, Python3Parser.RULE_if_stmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.match(Python3Parser.T__3);
        this.state = 79;
        this.test();
        this.state = 80;
        this.match(Python3Parser.T__4);
        this.state = 81;
        this.suite();
        this.state = 89;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Python3Parser.T__5) {
            this.state = 82;
            this.match(Python3Parser.T__5);
            this.state = 83;
            this.test();
            this.state = 84;
            this.match(Python3Parser.T__4);
            this.state = 85;
            this.suite();
            this.state = 91;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 95;
        _la = this._input.LA(1);
        if(_la===Python3Parser.T__6) {
            this.state = 92;
            this.match(Python3Parser.T__6);
            this.state = 93;
            this.match(Python3Parser.T__4);
            this.state = 94;
            this.suite();
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

function While_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Python3Parser.RULE_while_stmt;
    return this;
}

While_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
While_stmtContext.prototype.constructor = While_stmtContext;

While_stmtContext.prototype.test = function() {
    return this.getTypedRuleContext(TestContext,0);
};

While_stmtContext.prototype.suite = function() {
    return this.getTypedRuleContext(SuiteContext,0);
};

While_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterWhile_stmt(this);
	}
};

While_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitWhile_stmt(this);
	}
};

While_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitWhile_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.While_stmtContext = While_stmtContext;

Python3Parser.prototype.while_stmt = function() {

    var localctx = new While_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, Python3Parser.RULE_while_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this.match(Python3Parser.T__7);
        this.state = 98;
        this.test();
        this.state = 99;
        this.match(Python3Parser.T__4);
        this.state = 100;
        this.suite();
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

function SuiteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Python3Parser.RULE_suite;
    return this;
}

SuiteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SuiteContext.prototype.constructor = SuiteContext;

SuiteContext.prototype.simple_stmt = function() {
    return this.getTypedRuleContext(Simple_stmtContext,0);
};

SuiteContext.prototype.NEWLINE = function() {
    return this.getToken(Python3Parser.NEWLINE, 0);
};

SuiteContext.prototype.INDENT = function() {
    return this.getToken(Python3Parser.INDENT, 0);
};

SuiteContext.prototype.DEDENT = function() {
    return this.getToken(Python3Parser.DEDENT, 0);
};

SuiteContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

SuiteContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterSuite(this);
	}
};

SuiteContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitSuite(this);
	}
};

SuiteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitSuite(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.SuiteContext = SuiteContext;

Python3Parser.prototype.suite = function() {

    var localctx = new SuiteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, Python3Parser.RULE_suite);
    var _la = 0; // Token type
    try {
        this.state = 112;
        switch(this._input.LA(1)) {
        case Python3Parser.T__1:
        case Python3Parser.T__2:
        case Python3Parser.T__8:
        case Python3Parser.NUMBER:
        case Python3Parser.NAME:
        case Python3Parser.OPEN_PAREN:
            this.enterOuterAlt(localctx, 1);
            this.state = 102;
            this.simple_stmt();
            break;
        case Python3Parser.NEWLINE:
            this.enterOuterAlt(localctx, 2);
            this.state = 103;
            this.match(Python3Parser.NEWLINE);
            this.state = 104;
            this.match(Python3Parser.INDENT);
            this.state = 106; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 105;
                this.stmt();
                this.state = 108; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Python3Parser.T__1) | (1 << Python3Parser.T__2) | (1 << Python3Parser.T__3) | (1 << Python3Parser.T__7) | (1 << Python3Parser.T__8) | (1 << Python3Parser.NUMBER) | (1 << Python3Parser.NAME) | (1 << Python3Parser.OPEN_PAREN))) !== 0));
            this.state = 110;
            this.match(Python3Parser.DEDENT);
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

function TestContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Python3Parser.RULE_test;
    return this;
}

TestContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TestContext.prototype.constructor = TestContext;

TestContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

TestContext.prototype.comp_op = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Comp_opContext);
    } else {
        return this.getTypedRuleContext(Comp_opContext,i);
    }
};

TestContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterTest(this);
	}
};

TestContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitTest(this);
	}
};

TestContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitTest(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.TestContext = TestContext;

Python3Parser.prototype.test = function() {

    var localctx = new TestContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, Python3Parser.RULE_test);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.expr(0);
        this.state = 120;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Python3Parser.T__9) | (1 << Python3Parser.T__10) | (1 << Python3Parser.T__11) | (1 << Python3Parser.T__12) | (1 << Python3Parser.T__13) | (1 << Python3Parser.T__14))) !== 0)) {
            this.state = 115;
            this.comp_op();
            this.state = 116;
            this.expr(0);
            this.state = 122;
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

function Print_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Python3Parser.RULE_print_stmt;
    return this;
}

Print_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Print_stmtContext.prototype.constructor = Print_stmtContext;

Print_stmtContext.prototype.STRING = function() {
    return this.getToken(Python3Parser.STRING, 0);
};

Print_stmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Print_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterPrint_stmt(this);
	}
};

Print_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitPrint_stmt(this);
	}
};

Print_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitPrint_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.Print_stmtContext = Print_stmtContext;

Python3Parser.prototype.print_stmt = function() {

    var localctx = new Print_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, Python3Parser.RULE_print_stmt);
    try {
        this.state = 126;
        switch(this._input.LA(1)) {
        case Python3Parser.T__8:
            this.enterOuterAlt(localctx, 1);
            this.state = 123;
            this.match(Python3Parser.T__8);
            this.state = 124;
            this.match(Python3Parser.STRING);
            break;
        case Python3Parser.NUMBER:
        case Python3Parser.NAME:
        case Python3Parser.OPEN_PAREN:
            this.enterOuterAlt(localctx, 2);
            this.state = 125;
            this.expr(0);
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

function Comp_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Python3Parser.RULE_comp_op;
    return this;
}

Comp_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Comp_opContext.prototype.constructor = Comp_opContext;


Comp_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterComp_op(this);
	}
};

Comp_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitComp_op(this);
	}
};

Comp_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitComp_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.Comp_opContext = Comp_opContext;

Python3Parser.prototype.comp_op = function() {

    var localctx = new Comp_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, Python3Parser.RULE_comp_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Python3Parser.T__9) | (1 << Python3Parser.T__10) | (1 << Python3Parser.T__11) | (1 << Python3Parser.T__12) | (1 << Python3Parser.T__13) | (1 << Python3Parser.T__14))) !== 0))) {
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

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Python3Parser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.NAME = function() {
    return this.getToken(Python3Parser.NAME, 0);
};

ExprContext.prototype.NUMBER = function() {
    return this.getToken(Python3Parser.NUMBER, 0);
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

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



Python3Parser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 32;
    this.enterRecursionRule(localctx, 32, Python3Parser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        switch(this._input.LA(1)) {
        case Python3Parser.NAME:
            this.state = 131;
            this.match(Python3Parser.NAME);
            break;
        case Python3Parser.NUMBER:
            this.state = 132;
            this.match(Python3Parser.NUMBER);
            break;
        case Python3Parser.OPEN_PAREN:
            this.state = 133;
            this.match(Python3Parser.OPEN_PAREN);
            this.state = 134;
            this.expr(0);
            this.state = 135;
            this.match(Python3Parser.CLOSE_PAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 148;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ExprContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, Python3Parser.RULE_expr);
                this.state = 139;
                if (!( this.precpred(this._ctx, 4))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                }
                this.state = 142; 
                this._errHandler.sync(this);
                var _alt = 1;
                do {
                	switch (_alt) {
                	case 1:
                		this.state = 140;
                		_la = this._input.LA(1);
                		if(!(_la===Python3Parser.T__15 || _la===Python3Parser.T__16)) {
                		this._errHandler.recoverInline(this);
                		}
                		else {
                		    this.consume();
                		}
                		this.state = 141;
                		this.expr(0);
                		break;
                	default:
                		throw new antlr4.error.NoViableAltException(this);
                	}
                	this.state = 144; 
                	this._errHandler.sync(this);
                	_alt = this._interp.adaptivePredict(this._input,14, this._ctx);
                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER ); 
            }
            this.state = 150;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
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


Python3Parser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 16:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

Python3Parser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.Python3Parser = Python3Parser;
