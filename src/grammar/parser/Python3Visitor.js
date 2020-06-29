// Generated from Python3.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by Python3Parser.

function Python3Visitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

Python3Visitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
Python3Visitor.prototype.constructor = Python3Visitor;

// Visit a parse tree produced by Python3Parser#single_input.
Python3Visitor.prototype.visitSingle_input = function(ctx) {
};


// Visit a parse tree produced by Python3Parser#file_input.
Python3Visitor.prototype.visitFile_input = function(ctx) {
};


// Visit a parse tree produced by Python3Parser#stmt.
Python3Visitor.prototype.visitStmt = function(ctx) {
};


// Visit a parse tree produced by Python3Parser#simple_stmt.
Python3Visitor.prototype.visitSimple_stmt = function(ctx) {
};


// Visit a parse tree produced by Python3Parser#small_stmt.
Python3Visitor.prototype.visitSmall_stmt = function(ctx) {
};


// Visit a parse tree produced by Python3Parser#assignment_stmt.
Python3Visitor.prototype.visitAssignment_stmt = function(ctx) {
};


// Visit a parse tree produced by Python3Parser#flow_stmt.
Python3Visitor.prototype.visitFlow_stmt = function(ctx) {
};


// Visit a parse tree produced by Python3Parser#break_stmt.
Python3Visitor.prototype.visitBreak_stmt = function(ctx) {
};


// Visit a parse tree produced by Python3Parser#continue_stmt.
Python3Visitor.prototype.visitContinue_stmt = function(ctx) {
};


// Visit a parse tree produced by Python3Parser#compound_stmt.
Python3Visitor.prototype.visitCompound_stmt = function(ctx) {
};


// Visit a parse tree produced by Python3Parser#if_stmt.
Python3Visitor.prototype.visitIf_stmt = function(ctx) {
};


// Visit a parse tree produced by Python3Parser#while_stmt.
Python3Visitor.prototype.visitWhile_stmt = function(ctx) {
};


// Visit a parse tree produced by Python3Parser#suite.
Python3Visitor.prototype.visitSuite = function(ctx) {
};


// Visit a parse tree produced by Python3Parser#test.
Python3Visitor.prototype.visitTest = function(ctx) {
};


// Visit a parse tree produced by Python3Parser#print_stmt.
Python3Visitor.prototype.visitPrint_stmt = function(ctx) {
};


// Visit a parse tree produced by Python3Parser#comp_op.
Python3Visitor.prototype.visitComp_op = function(ctx) {
};


// Visit a parse tree produced by Python3Parser#expr.
Python3Visitor.prototype.visitExpr = function(ctx) {
};



exports.Python3Visitor = Python3Visitor;