
parser grammar MotePy;

tokens { INDENT, DEDENT }

options {tokenVocab = MotePyLexer;}

module
    :   useSpec* includeSpec* varDef*
        (funcDef* | pipelineDef | effectsDef)
    ;

effectsDef: EFFECTS LB (effectStmt SEMI)* RB;

effectStmt: effectTarget (COMMA effectCtx)* EASSIGN effectSpec (COMMA effectSpec)*;

effectTarget: qualIdentifier LP (effectParam (COMMA effectParam)*)? RP;

effectParam: BAND? Identifier;

effectCtx: Identifier COLON Identifier;

effectSpec: Identifier opsList? effectExpr;

opsList: LS Identifier (COMMA Identifier)* RS;

effectExpr: Identifier | exprConstant | StringLiteral | effectTerm ;

effectTerm: Identifier LP (effectExpr (COMMA effectExpr)*)? RP;

pipelineDef
    :  pipelineBlock
    ;

pipelineBlock
    :  LS NEWLINE? pipelineList NEWLINE? RS NEWLINE
    ;

pipelineEntry
    :  (qualIdentifier | functionCall | pipelineBlock);

pipelineList
    :   (pipelineEntry COMMA NEWLINE?)* pipelineEntry
    ;

useSpec
    :   USE Identifier SEMI
    ;

includeSpec
    :   INCLUDE Identifier SEMI
    ;


booleanLiteral: value=(TRUE | FALSE);

arrayLiteral
    : LB (expr (COMMA expr)*)? RB
    ;

initValue: expr | StringLiteral | arrayLiteral;

varIdDef: Identifier (ASSIGN initValue)?;

varDef
    :  CONST? varType varIdDef (COMMA varIdDef)* NEWLINE
    ;

dimValue: (IntegerConstant|Identifier);

dimensionSpec
    : RING? (LS dimValue RS)+
    ;

intVal: Identifier|IntegerConstant;

numVal: Identifier|numConstant;

rangeType
    : LS numVal (COMMA|COLON) numVal RS
    ;

castableType
    : type=(INT | FLOAT | BOOLEAN | I8 | U8 | I16 | U16 | I32 | U32)
    ;

primitiveType
    : type=(INT | FLOAT | BOOLEAN | VOID | I8 | U8 | I16 | U16 | I32 | U32)
    ;

varType
    :   (qualIdentifier | cppQualIdentifier | rangeType | primitiveType) dimensionSpec?
    ;

flowType
    :   DEFAULT? FLOW
    ;

formalParam
    :   CONST? varType Identifier
    ;

formalParams
    :  formalParam (COMMA formalParam)*
    ;

stmtBlock
    :
        NEWLINE INDENT stmt+ DEDENT
    ;

elseStmt
    : ELSE (stmtBlock | ifStmt)
    ;

ifStmt
    :   IF LP expr RP stmtBlock elseStmt?
    ;

identifierList
    :   Identifier (COMMA Identifier)*
    ;

forStmt
    :   FOR identifierList IN rangeType stmtBlock
    ;

whileStmt
    :   WHILE LP expr RP stmtBlock
    ;

assignStmt
    : qualIdentifier dimensionExpr? ASSIGN expr
    ;

returnStmt: RETURN expr;

stmt
    :   stmtBlock | ifStmt | forStmt | whileStmt | assignStmt NEWLINE | functionCall NEWLINE | returnStmt NEWLINE
    ;

funcDef
    :  (varType | flowType)? Identifier LP formalParams? RP
        NEWLINE INDENT varDef* stmt+ DEDENT
    ;

qualIdentifier
    : Identifier (PERIOD Identifier)*
    ;

cppQualIdentifier
    : Identifier (DCOLON Identifier)+
    ;

functionCall
	:  (qualIdentifier|cppQualIdentifier) LP actualParams? RP
	;

actualParam
    : (Identifier ASSIGN)? (expr | StringLiteral)
    ;

actualParams
	:  actualParam (COMMA actualParam)* COMMA?
	;


dimensionExpr
    : (LS expr RS)+
    ;

arrayExpr: Identifier dimensionExpr;

addressExpr: BAND (arrayExpr | qualIdentifier);

castExpr : castableType LP basicExpr RP;

basicExpr
    :
        basicExpr op=POW basicExpr |
        castExpr |
        qualIdentifier |
        arrayExpr |
        addressExpr |
        functionCall |
        literal |
        up=(BNOT|MINUS) basicExpr |
        basicExpr op=(LSHIFT|RSHIFT) basicExpr |
        basicExpr op=(BAND|BOR|BXOR) basicExpr |
        basicExpr op=CAT basicExpr |
        basicExpr op=(HPROD | MUL|DIV|MOD) basicExpr |
        basicExpr op=(PLUS|MINUS) basicExpr |
        LP basicExpr RP
    ;

relExpr
    :   basicExpr op=(GT|GTE|LT|LTE|EQ|NEQ) basicExpr |
        LP relExpr RP
    ;

expr
    :
        LNOT expr |
        basicExpr |
        relExpr |
        expr op=(LOR|LAND) expr |
        LP expr RP
    ;

numConstant: IntegerConstant | FloatingConstant;

exprConstant:
        numConstant
    |   CharacterConstant
    |   booleanLiteral
    ;

literal: exprConstant | arrayLiteral | StringLiteral;
