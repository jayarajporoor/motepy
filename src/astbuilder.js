var SymbolTable = require("./symtbl.js");

var ctx = {};

function addSymbol(name, info){
	ctx.symtbl.addSymbolToCurrentScope(name, info);
}

function getSymbol(name){
	return ctx.symtbl.lookup(name);
}

function getId(node) {
	return node.Identifier() ? node.Identifier().getText() : null;
}

function getIConst(node) {
	return parseInt(node.IntegerConstant().getText());
}

function getFConst(node) {
	return parseFloat(node.FloatingConstant().getText());
}

function getCConst(node) {
	return node.CharacterConstant().getText();
}

function getBConst(node) {
	return (node.value.text === 'true') ? true : false;
}

function getNumConstAst(node){
	var ast = {src: src_info(node)};
	var iconst = node.IntegerConstant();
	var fconst = node.FloatingConstant();
	if(iconst)
	{
		ast.iconst = getIConst(node);
	}else
	if(fconst){
		ast.fconst = getFConst(node);
	}
	return ast;
}

function getExprConstAst(node) {
	var num = node.numConstant();
	var char = node.CharacterConstant();
	var bconst = node.booleanLiteral();
	var ast ={};
	if(num){
		ast = getNumConstAst(num);
	}else
	if(char){
		ast = {cconst: getCharConst(char)};
	}else
	if(bconst){
		ast = {bconst: getBConst(bconst)};
	}
	ast.src = src_info(node);
	return ast;
}

function getIdList(node) {
	var ids = node.Identifier();
	var res = [];
	for(var j=0;j<ids.length;j++) {
		res.push(ids[j].getText());
	}	
	return res;	
}


function astIntVal(val){
	//Identifier|IntegerConstant;
	var identifier = val.Identifier();
	var iconst = val.IntegerConstant();
	var ast = {src: src_info(val)};
	if(identifier){
		ast.id = getId(val);
	}else{
		ast.iconst = getIConst(iconst);
	}
	return ast;
}


function getDimensionSpec(dimSpec){
	var dim = [];
	var dimValue = dimSpec.dimValue();
	for(var i=0;i<dimValue.length;i++){
		var dimval = {};
		if(dimValue[i].IntegerConstant()){
			dimval.iconst = getIConst(dimValue[i]);
		}else
		if(dimValue[i].Identifier()){
			dimval.id = getId(dimValue[i]);
			var sym = getSymbol(dimval.id);//try to replace the ID with constant defined if available.
			if(sym && sym.info.value && sym.info.value.iconst){
				var dimlen = sym.info.value.iconst;
		  		delete dimval.id;
		  		dimval.iconst = dimlen;				
			}
		}
		dim.push(dimval);
	}
	return {dim: dim, is_ring: dimSpec.RING() ? true: false};
}

function getStringLiteral(s){
	return s.getText();
}

function getActualParams(params) {
	var param = params.actualParam();
	var res =[];
	for(var i=0;i < param.length;i++) {
		v={};
		var expr = param[i].expr();
		var strLiteral = param[i].StringLiteral();
		var id = param[i].Identifier();
		if(id){
			v.name = getId(param[i]);
		}

		if(expr){
			v.expr = getExprAst(expr);
		}else
		if(strLiteral)
		{
			v.sconst = getStringLiteral(strLiteral);
		}
		res.push(v);
	}
	return res;
}

function getFunctionCallAst(fcall){
	var ast = {};
	var qualIdentifier = fcall.qualIdentifier();
	var cppQualIdentifier = fcall.cppQualIdentifier();
	var actualParams = fcall.actualParams();
	if(qualIdentifier){
		ast.qid = getIdList(qualIdentifier);
		if(ast.qid.length === 1){
			ast.id = ast.qid[0];
		}
	}else
	if(cppQualIdentifier){
		ast.qidCpp = getIdList(cppQualIdentifier);
	}
	if(actualParams){
		ast.params = getActualParams(actualParams);
	}else{
		ast.params = [];
	}
	return {fcall: ast, src: src_info(fcall)};
}

function astDimensionExpr(dimexpr){
	var dim = [];
	var exprs = dimexpr.expr();
	for(var i=0;i<exprs.length;i++){
		dim.push(getExprAst(exprs[i]));
	}
	return {dim: dim};
}

function astArrayExpr(expr){
	var ast = {
		id: getId(expr),
		dim: astDimensionExpr(expr.dimensionExpr()),
		src: src_info(expr)
	};
	return ast;
}

function getCastExprAst(expr){
	//castExpr : castableType LP basicExpr RP;
	return {up: 'cast', type: astPrimitiveType(expr.castableType()), expr: getBasicExprAst(expr.basicExpr()), src: src_info(expr)};
}

function astAddressExpr(expr){
	//addressExpr: ADDRESSOF (arrayExpr | qualIdentifier);	
	var arrayExpr = expr.arrayExpr();
	var qualIdentifier = expr.qualIdentifier();
	var ast = null;
	if(arrayExpr){
		ast = astArrayExpr(arrayExpr);
	}else
	if(qualIdentifier){
		ast = {qid: getIdList(qualIdentifier)};
		if(ast.qid.length === 1){
			ast.id = ast.qid[0];
		}
	}

	ast.address_of = true;
	return ast;
}

function getBasicExprAst(expr){
    var ast = {src: src_info(expr)};
	var qualIdentifier = expr.qualIdentifier();
	var arrayExpr = expr.arrayExpr();
	var functionCall = expr.functionCall();
	var literal = expr.literal();
	var basicSubExpr = expr.basicExpr();
	var castExpr = expr.castExpr();
	var addrExpr = expr.addressExpr();

	var op = expr.op ? expr.op.text : null;
	var up = expr.up ? expr.up.text : null;//unary op

	if(addrExpr){
		return astAddressExpr(addrExpr);
	}else
	if(castExpr){
		return getCastExprAst(castExpr);
	}else
	if(qualIdentifier){
		ast = {qid: getIdList(qualIdentifier)};
		if(ast.qid.length === 1){
			ast.id = ast.qid[0];
		}
	}else
	if(arrayExpr){
		ast = astArrayExpr(arrayExpr);
	}else
	if(functionCall){
		ast = getFunctionCallAst(functionCall);
	}else
	if(literal){
		ast = astLiteral(literal);
	}else
	if(op){
		ast.op = op;
		ast.lexpr = getBasicExprAst(basicSubExpr[0]);
		ast.rexpr = getBasicExprAst(basicSubExpr[1]);
	}else
	if(up){
		ast.up = up;
		ast.expr = getBasicExprAst(basicSubExpr[0]);
	}else{
		ast = getBasicExprAst(basicSubExpr[0]);		
	}

	return ast;
}

function getRelExprAst(expr){
	   //basicExpr op=GT basicExpr |
	var basicExpr = expr.basicExpr();
	var relSubExpr = expr.relExpr();

	if(relSubExpr){
		return getRelExprAst(relSubExpr);
	}else {
		return {
			op : expr.op.text,
			lexpr: getBasicExprAst(basicExpr[0]),
			rexpr: getBasicExprAst(basicExpr[1]),
			src: src_info(expr)
		};
	}
}


function getExprAst(expr){
	var ast = {src: src_info(expr)};
	var basicExpr = expr.basicExpr();
	var relExpr = expr.relExpr();
	var subExpr = expr.expr();

	if(basicExpr){
		ast = getBasicExprAst(basicExpr);
	}else if(relExpr){
        ast = getRelExprAst(relExpr);
	}else
	if(subExpr) {
		if(expr.LNOT()){//(subExpr.length == 1): right now the only UP at expr-level is !
			ast.expr = getExprAst(subExpr[0]);
			ast.up = '!';
		}else
		if(subExpr.length==1){
			ast = getExprAst(subExpr[0]);
		}else{
			ast.lexpr = getExprAst(subExpr[0]);
			ast.rexpr = getExprAst(subExpr[1]);
			ast.op =  expr.op.text;
		}
	}
	return ast;
}


function astPipelineBlock(pipelineBlock, ast){
	var list = pipelineBlock.pipelineList().pipelineEntry();
	for(var i=0;i<list.length;i++) {
		var entry = list[i];
		var entryQualId = entry.qualIdentifier();
		var entryFcall = entry.functionCall();
		var entryBlock = entry.pipelineBlock();
		if(entryQualId) {
			ast.push({qname: getIdList(entryQualId)});
		}else
		if(entryFcall) {
			ast.push({qname: getIdList(entryFcall.qualIdentifier()), params: getActualParams(entryFcall.actualParams())});
		}else 
		if(entryBlock) {
			var newBlock = [];
			ast.push(newBlock);
			astPipelineBlock(entryBlock, newBlock);
		}
	}

	ast.src = src_info(pipelineBlock);
}

function astPipeline(pipelineDef, ast){
	ast.src = src_info(pipelineDef);
	ast.name = getId(pipelineDef);
	ast.block = [];
	astPipelineBlock(pipelineDef.pipelineBlock(), ast.block);
}

function astUseSpec(useSpec){
	var uses = [];
	for(var i=0;i<useSpec.length;i++){
		uses.push({name: getId(useSpec[i])});
	}
	return uses;
}

function astIncludeSpec(incSpec){
	var inc = [];

	for(var i=0;i<incSpec.length;i++){
		inc.push({name: getId(incSpec[i])});
	}

	return inc;
}

function astNumVal(numVal){
	var identifier = numVal.Identifier();
	var numConstant = numVal.numConstant();
	var ast ={};
	if(identifier){
		ast = {id: getId(numVal)};
	}else
	if(numConstant){
		ast = getNumConstAst(numConstant);
	}
	ast.src = src_info(numVal);
	return ast;
}

function astRangeType(rangeType){
	var numVal = rangeType.numVal();
	return {from: astNumVal(numVal[0]), to: astNumVal(numVal[1]), is_inclusive: rangeType.COLON()? true : false, src: src_info(rangeType)};
}

function astPrimitiveType(ptype){
	return {primitive: ptype.type.text,  src: src_info(ptype)};
}

function astVarType(varType){
	//(qualIdentifier | cppQualIdentifier | rangeType | builtinType)	
	var qualIdentifier = varType.qualIdentifier();
	var cppQualIdentifier = varType.cppQualIdentifier();
	var rangeType = varType.rangeType();
	var primitiveType = varType.primitiveType();

	var ast = {};

	if(qualIdentifier){
		ast.qid = getIdList(qualIdentifier);
		if(ast.qid.length === 1){
			ast.id = ast.qid[0];
		}
	}else
	if(cppQualIdentifier){
		ast.qidCpp = getIdList(cppQualIdentifier);
	}else
	if(rangeType){
		ast.range = astRangeType(rangeType);
	}else
	if(primitiveType){
		ast = astPrimitiveType(primitiveType);
	}

	var dimensionSpec = varType.dimensionSpec();  
	if(dimensionSpec){
		ast.dim = getDimensionSpec(dimensionSpec);
	}

	ast.src = src_info(varType);

	return ast;
}


function astArrayLiteral(alit){
    var entries = alit.expr();
    var ast = [];

    for(var i=0;i<entries.length;i++){
    	ast.push(getExprAst(entries[i]));
    }
    return ast;
}

function astLiteral(literal){

    var exprConstant = literal.exprConstant ? literal.exprConstant() : null;//if astInitValue calls us we won't have exprConstant
    var stringLiteral = literal.StringLiteral();
    var arrayLiteral = literal.arrayLiteral();

    var ast = {};
    if(exprConstant){
    	ast = getExprConstAst(exprConstant);
    }else
    if(stringLiteral){
    	ast.sconst = getStringLiteral(stringLiteral);
    }else
    if(arrayLiteral){
    	ast.aconst  = astArrayLiteral(arrayLiteral);
    }

    ast.src = src_info(literal);

    return ast;
}


function astInitValue(initValue){
	//expr | StringLiteral | arrayLiteral;
	var expr = initValue.expr();
	var sliteral = initValue.StringLiteral();
	var arrayLiteral = initValue.arrayLiteral();
	if(expr){
		return getExprAst(expr);
	}else{
		return astLiteral(initValue);
	}
}

const primitive_sizes = {
	'int8_t': 1,
	'int16_t': 2,
	'int32_t': 3,
	'uint8_t': 1,
	'uint16_t': 2,
	'uint32_t': 3,	
	'int': 4,
	'float': 4,
	'char' : 1
};

function primitive_size(t){
	return primitive_sizes[t];
}

function computeDimensions(ast, val, varid){//varid is only for debug purpose.
	var dim = ast.type.dim.dim;
	var nested_val = val && val.aconst;
	var i;
	var size = 1;
	for(i=0;i<dim.length;i++){
		var dimval = dim[i];
		var dimsize = 0;
		if(dimval.id){
			var dimlen = nested_val && nested_val.length;
			var sym = null;
			if(!dimlen){
				sym = getSymbol(dimval.id);
				if(sym && sym.info.value && sym.info.value.iconst){
					dimlen = sym.info.value.iconst;
				}
			}
			//console.log(dimval.id, nested_val.length);
			if(!sym){
		  		addSymbol(dimval.id, { type: {primitive: 'int', is_const: true}
		  			                 , src: ast.src
		  			                 , value: {iconst: dimlen}
		  			                 , is_dim: true
		  			                 } );
	  		}
	  		delete dimval.id;
	  		dimval.iconst = dimlen;
		}
		if(dimval.iconst){
			dimsize = dimval.iconst;
		}
		size *= dimsize;
		nested_val = nested_val && nested_val[0].aconst;
	}
	size *= primitive_size(ast.type.primitive);
	return size;
}

function astVarDef(def){
  //varIdDef: Identifier (ASSIGN initValue)?;
  var varType = def.varType();
  var varIdDef  = def.varIdDef();
  var ast = {
  	type : astVarType(varType),
  	defs : [],
	src: src_info(def)  	
  };

  ast.type.is_const = def.CONST() ? true : false;

  for(var i=0;i<varIdDef.length;i++){
  	  var def = {id: getId(varIdDef[i])};
  	  var initValue = varIdDef[i].initValue();
	  if(initValue){
	  	def.init = astInitValue(initValue);
	  }
	  var syminfo = {type: ast.type, is_const: ast.is_const, src: ast.src, value: def.init};
	  if(ast.type.dim){
	  	var size = computeDimensions(ast, def.init, def.id);
	  	if(size){
	  		syminfo.size = size;
	  	}
	  }  
	  addSymbol(def.id, syminfo);
	  if(ast.type.dim && ast.type.dim.is_ring){
	  	var sym_ringpos = {type: {primitive: 'int'}, is_const: false, src: ast.src, value: {iconst: 0}};
	  	addSymbol("__pos_" + def.id, sym_ringpos);
	  }
	  ast.defs.push(def);
  }
  return ast;
}

function astFormalParam(param){
	//varType Identifier
	var ast= {
		is_const: param.CONST() ? true : false,
		type: astVarType(param.varType()),
		id: getId(param),
		src: src_info(param)		
	};
	addSymbol(ast.id, {type: ast.type, is_const: ast.is_const, src: ast.src, is_formal_param: true, src: ast.src} );	

	if(ast.type.dim && ast.type.dim.is_ring){
		var sym_ringpos = {type: {primitive: 'int'}, is_const: ast.is_const, is_formal_param: true, src: ast.src};
		addSymbol("__pos_" + ast.id, sym_ringpos);
	}

	return ast;
}

function astAssignStmt(stmt){
	//qualIdentifier dimensionSpec? ASSIGN expr
	var ast = {
		kind: 'assign',
		qid : getIdList(stmt.qualIdentifier()),
		expr: getExprAst(stmt.expr()),
		src: src_info(stmt)		
	};
	if(ast.qid.length === 1){
		ast.id = ast.qid[0];
	}
	var dimExpr = stmt.dimensionExpr();
	if(dimExpr){
		ast.dim = astDimensionExpr(dimExpr);
	}	
	return ast;
}

function astForStmt(stmt){
	 //FOR identifierList IN rangeType stmtBlock
    var ast = {
    	kind: 'for',
    	ids: getIdList(stmt.identifierList()),
    	range: astRangeType(stmt.rangeType()),
    	body: astStmtBlock(stmt.stmtBlock()),
		src: src_info(stmt)    	
    };
    return ast;
}

function astWhileStmt(stmt){
	//:   WHILE LP expr RP stmtBlock
	var ast = {
		kind: 'while',
		expr: getExprAst(stmt.expr()),
		body: astStmtBlock(stmt.stmtBlock()),
		src: src_info(stmt)		
	};
	return ast;
}

function astIfStmt(stmt){
    //:   IF LP expr RP stmtBlock elseStmt?
    var ast = {
    	kind: 'if',
    	expr: getExprAst(stmt.expr()),
    	if_body: astStmtBlock(stmt.stmtBlock()),
		src: src_info(stmt)    	
    };
    var elseStmt = stmt.elseStmt();
    if(elseStmt){
    	//ELSE (stmtBlock | ifStmt)
    	if(elseStmt.ifStmt()){
    		ast.else_body = astIfStmt(elseStmt.ifStmt());
    	}else{
    		ast.else_body = astStmtBlock(elseStmt.stmtBlock());
    	}    	
    }
    return ast;
}

function astReturnStmt(stmt){
	//returnStmt: RETURN expr;
	return {
		kind: 'return',
		expr: getExprAst(stmt.expr()),
		src: src_info(stmt)
	};
}

function astStmt(stmt){
	//stmtBlock | ifStmt | forStmt | whileStmt | assignStmt SEMI | functionCall SEMI
	var stmtBlock = stmt.stmtBlock();
	var ifStmt = stmt.ifStmt();
	var whileStmt = stmt.whileStmt();
	var assignStmt = stmt.assignStmt();
	var functionCall = stmt.functionCall();
	var forStmt = stmt.forStmt();
	var retStmt = stmt.returnStmt();

	if(retStmt){
		return astReturnStmt(retStmt);
	}else
	if(stmtBlock){
		return astStmtBlock(stmtBlock);
	}else
	if(ifStmt){
		return astIfStmt(ifStmt);
	}else
	if(whileStmt){
		return astWhileStmt(whileStmt);		
	}else
	if(assignStmt){
		return astAssignStmt(assignStmt);
	}else
	if(functionCall){
		var ast = getFunctionCallAst(functionCall);
		ast.kind = 'fcall';
		return ast;
	}else
	if(forStmt){
		return astForStmt(forStmt);
	}
}

function astStmtBlock(block){
	var blockStmts = block.stmt();
	var stmts = [];
	for(var i=0;i<blockStmts.length;i++){
		stmts.push(astStmt(blockStmts[i]));
	}
	return {stmts: stmts, kind: 'block', src: src_info(block)};
}

function astFuncDef(fdef){
	var ast = {};
	ast.src = src_info(fdef);	
	var varType = fdef.varType();
	var flowType = fdef.flowType();

	if(varType){
		ast.type = astVarType(varType);
	}
	if(flowType){
		if(flowType.DEFAULT()){
			ast.flow = 'default';
		}else{
			ast.flow = 'normal';
		}
	}
	ast.id = getId(fdef);
	ast.params = [];

	addSymbol(ast.id, {type:{is_func: true, ftype: ast.type, formal_params: ast.params}, src:  ast.src})

	ctx.symtbl.createNestedScope(ast.id);

	var fparams = fdef.formalParams();
	if(fparams){
		fparams = fparams.formalParam();
		for(var i=0;i<fparams.length;i++){
			ast.params.push(astFormalParam(fparams[i]));
		}
	}
	var varDef = fdef.varDef();
	if(varDef){
		ast.vars = [];
		for(var i=0;i<varDef.length;i++){
			ast.vars.push(astVarDef(varDef[i]));
		}
	}
	ast.body = astStmtBlock(fdef);

	ctx.symtbl.exitNestedScope();

	return ast;
}

function get_token_info(tok){
	return {
		line: tok.line, 
		col: tok.column
	};
}

function src_info(node){
	var src =
	{
		start: get_token_info(node.start),
		end: get_token_info(node.stop)
	};
	return src;
}


function astEffectTerm(term, params){
//effectExpr: Identifier | exprConstant | StringLiteral | effectTerm ;
//effectTerm: Identifier LP (effectExpr (COMMA effectExpr)*)? RP;
	var termid = getId(term);
	var expr = term.effectExpr();
	var res = {id: termid, params:[]};
	if(expr){
		for(var i=0;i<expr.length;i++){
			var paramid = getId(expr[i]);
			paramidx = params[paramid];
			if(typeof paramidx !== 'undefined'){
				res.params.push({param: paramidx});
			}else
			if(paramid)
			{
				res.params.push({id: paramid});
			}else{
				var exprConstant = expr[i].exprConstant();
				var c = getExprConstAst(exprConstant);
				res.params.push(c);
			}
		}
	}
	return res;
}

function astEffectExpr(expr, params){
	var ast = null;
	var id = expr.Identifier();
	var term = expr.effectTerm();
	var exprConstant = expr.exprConstant();
	if(id){
		id = id.getText();
		var idx = params[id];
		if(typeof idx !== 'undefined'){
			ast = {param: idx};
		}else{
			ast = {id: id};
		}
	}else
	if(exprConstant){
		ast = getExprConstAst(exprConstant);
	}
	if(term){
		ast = astEffectTerm(term, params);
	}
	return ast;
}

function astEffectSpec(espec, params){
	var effect = {kind: getId(espec), expr: astEffectExpr(espec.effectExpr(), params)};	
	var opsList = espec.opsList();
	if(opsList){
		effect.ops = getIdList(opsList);
	}	
	return effect;
}

function astEffectStmt(estmt, effectsmap){
	//effectStmt: effectTarget (COMMA effectCtx)* EASSIGN effectSpec (COMMA effectSpec)*;
	//effectTarget: qualIdentifier LP effectParam (COMMA effectParam)* RP;
	//effectParam: ADDRESSOF? Identifier;	

	var effectTarget = estmt.effectTarget();
	var effectCtx = estmt.effectCtx();
	var effectSpec = estmt.effectSpec();
	var effectParam = effectTarget.effectParam();

	var qid = getIdList(effectTarget.qualIdentifier());

	var qname;
	if(qid.length > 1){
		qid.shift();//remove the first element - this it the object id.
		qname = qid.join("_");
	}else{
		qname = qid[0];
	}

	var params = {};
	if(effectParam){
		for(var i=0;i<effectParam.length;i++){
			var param_name = getId(effectParam[i]);
			params[param_name] = i;
		}
	}

	var effects = effectsmap[qname];
	if(!effects){
		effectsmap[qname] = effects = [];
	}

	for(var i=0;i<effectSpec.length;i++){
		var effect = astEffectSpec(effectSpec[i], params);
		if(effect){
			effects.push(effect);
		}
	}
}

function astEffectsDef(ast){
	var effectsmap = {};
	var estmts = ast.effectStmt();
	for(var i=0;i<estmts.length;i++){
		var estmt = estmts[i];
		astEffectStmt(estmt, effectsmap);
	}
	return effectsmap;
}

function astModule(moduleDef, ast) {
	ast.name = getId(moduleDef);
	ast.src = src_info(moduleDef);
	var useSpec = moduleDef.useSpec();

	if(useSpec){
		ast.uses = astUseSpec(useSpec);
	}else{
		ast.uses = [];
	}
	var varDef = moduleDef.varDef();
	if(varDef){
		if(!ast.vars){
			ast.vars = [];
		}
		for(var i=0;i<varDef.length;i++){
			ast.vars.push(astVarDef(varDef[i]));
		}
	}
	var pipeline = moduleDef.pipelineDef();
	if(pipeline) {
		ast.pipeline = {};
		astPipeline(pipeline, ast.pipeline);
	}
	var funcDef = moduleDef.funcDef();
	if(funcDef){
		if(!ast.fdefs){
			ast.fdefs = [];
		}
		for(var i=0;i<funcDef.length;i++){
			ast.fdefs.push(astFuncDef(funcDef[i]));
		}
	}
	var effectsDef = moduleDef.effectsDef();
	if(effectsDef){
		ast.effectsMap = astEffectsDef(effectsDef);
	}
	return ast;
}

function buildAst(tree, mod_ast, symtbl) {
	ctx.symtbl = symtbl;
	astModule(tree, mod_ast);
	return mod_ast;
}

function getIncludes(moduleDef, symtbl) {
	ctx.symtbl = symtbl;	
	var incSpec = moduleDef.includeSpec();
	if(incSpec){
		return astIncludeSpec(incSpec);
	}

	return null;
}


exports.buildAst = buildAst;
exports.getIncludes = getIncludes;


