const util = require('util')
var fs = require('fs');
const path = require('path');
var antlr4 = require('antlr4/index');
var MotePyLexer = require(__dirname + '/grammar/parser/MotePyLexer');
var MotePyParser = require(__dirname + '/grammar/parser/MotePy');
var astBuilder = require("./astbuilder.js");
var SymbolTable = require("./symtbl.js");
var ast_util = require("./ast_util.js");

var parseErrorListener = {};
var errors=0;

global.mpbuild ={errors: [], warnings: [], msgs: [], current_path: null};

mpbuild.error = function(){
	var str = Array.from(arguments).join(" ");
	var msg = {text: str};
	mpbuild.errors.push(msg);
	throw msg;
}

mpbuild.warning = function(){
	var str = Array.from(arguments).join(" ");
	var msg = {text: str};
	mpbuild.warnings.push(msg);
}

mpbuild.info = function(){
	var str = Array.from(arguments).join(" ");
	var msg = {text: str};
	mpbuild.msgs.push(msg);
}

mpbuild. set_path = function(path){
	mpbuild.current_path = path;
}

parseErrorListener.syntaxError = function(offendingToken, line, column, msg, err){
//	console.log('stx', line);
	errors++;
}
parseErrorListener.reportAttemptingFullContext = function(offendingToken, line, column, msg, err){
	//console.log('ctx', line);
	//errors++;
}
parseErrorListener.reportAmbiguity = function(offendingToken, line, column, msg, err){
	//console.log('amb', line);
	//errors++;
}

parseErrorListener.reportContextSensitivity = function(offendingToken, line, column, msg, err){
	//console.log(line, column);
}

function parse(srcpath, input) {
	console.log("Parsing " + srcpath);
    var chars = new antlr4.InputStream(input);
    var lexer = new MotePyLexer.MotePyLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new MotePyParser.MotePy(tokens);
    parser.buildParseTrees = true;
    parser.addErrorListener(parseErrorListener);
    errors=0;
    var tree = parser.module();
    if(errors > 0) {
    	mpbuild.set_path(srcpath);
    	return mpbuild.error("Please fix the syntax errors in the module ", srcpath);
    }
    return tree;
}

function loadInclude(name, basepath, symtbl){
	var filepath = basepath + "/" + name + ".py";
	var src;
	try{
		src = fs.readFileSync(filepath, 'utf8');
	}catch(e){
		mpbuild.set_path(filepath);
		return mpbuild.error("Cannot load module ", name, ". File cannot be accessed: ", filepath);
	}
	var tree = parse(filepath, src);
	var mod_ast = {};
	astBuilder.buildAst(tree, mod_ast, symtbl, name);
	return mod_ast;
}

function loadModule(ast, name, basepath, symtbl){
	if(ast.modules[name]){
		return;//already loaded.
	}

	var filepath = basepath + "/" + name + ".py";
	var src;
	try{
		src = fs.readFileSync(filepath, 'utf8');
	}catch(e){
		mpbuild.set_path(filepath);
		return mpbuild.error("Cannot load module ", name, ". File cannot be accessed: ", filepath);
	}
	var tree = parse(filepath, src);
	symtbl.createNestedScope(name);

	var mod_ast = {fdefs:[], vars:[]};

	var includes = astBuilder.getIncludes(tree, symtbl);

	for(var j=0;j<includes.length;j++){
		var inc_ast = loadInclude(includes[j].name, basepath, symtbl);
		for(k=0;k<inc_ast.fdefs.length;k++){
			mod_ast.fdefs.push(inc_ast.fdefs[k]);
		}
		for(k=0;k<inc_ast.vars.length;k++){
			mod_ast.vars.push(inc_ast.vars[k]);
		}
	}

	astBuilder.buildAst(tree, mod_ast, symtbl, name);
	symtbl.exitNestedScope();
	mod_ast.srcpath = filepath;
	ast.modules[name] = mod_ast;
	for(var j=0;j<mod_ast.uses.length;j++){
		loadModule(ast, mod_ast.uses[j].name, basepath, symtbl);
	}

}

function loadPipelineBlock(block, basepath, symtbl, ast){
	for(var i=0;i<block.length;i++){
		var entry = block[i];
		if(entry.qname){
			var name = entry.qname[0];
			if(!ast.modules[name]) {
				loadModule(ast, name, basepath, symtbl);
			}
		}else{
			loadPipelineBlock(entry, basepath, symtbl, ast);//this is a nested block
		}
	}
}

function loadPipeline(ast, basepath, symtbl) {
	var pipeline = ast.pipeline;
	if(!pipeline) {
		return mpbuild.error("Pipeline definition not found.");
	}
	loadPipelineBlock(ast.pipeline.block, basepath, symtbl, ast);
}

var printColor = false;
var printJson = false;

function compile(argv)
{
	var srcpath;
	var printAst = false;
	var printSymtbl = false;

	var ast_transforms = [];
	var code_path = null;
	var ctx_attr = null;
	var config_paths =[];

	var mod_params = {};

	mpbuild.errors = [];
	compiler_warnings = [];
	compiler_info = [];

	if(argv.length === 0) {
		return mpbuild.error("Please provide the pipeline definition file name to be compiled.");
	}

	srcpath = argv[0];
	argv.shift();

	try{
		if(argv[0] !== "-bare"){
			var paramspath = __dirname + "/mpparams.js";
			var params = require(paramspath);
			argv = params.concat(argv);
		}
	}catch(e){
		mpbuild.warning("Default parameter file ", paramspath , "not accessible or properly formed.");
	}

	for(var i=0;i<argv.length;i++){
		switch(argv[i]){
			case "-ast" :
				printAst = true;
			break;
			case "-symtbl":
				printSymtbl = true;
			break;
			case "-color":
				printColor = true;
			break;
			case "-json":
				printJson = true;
			break;
			case "-xast":
				if(argv[i+1]){
					ast_transforms.push(argv[i+1]);
					i++;
				}else{
					return mpbuild.error("Please provide the compiler xast module file path.");
				}
			break;
			case "-code":
				if(argv[i+1]){
					code_path = argv[i+1];
					i++;
				}else{
					code_path = "";
				}
			break;
			case "-ctx":
				if(argv[i+1]){
					ctx_attr = argv[i+1];
					i++;
				}else{
					ctx_attr = "";
				}
			break;
			case "-config":
				if(argv[i+1]){
					config_paths.push(argv[i+1]);
					i++;
				}else{
					return mpbuild.error("Please specify the configuration file after the -config parameter.");
				}
			break;
			default:
				var arg = argv[i];
				var argval = true;
				var next_arg = argv[i+1];
				if(next_arg && next_arg[0] !== '-'){
					argval = next_arg;
					i++;
				}
				mod_params[arg] = argval;
			break;
		}
	}

	var input;

	try{
		input  = fs.readFileSync(srcpath, 'utf8');
	}catch(e){
		return mpbuild.error("Cannot access source file " + srcpath);
	}
	var tree = parse(srcpath, input);
	var symtbl = new SymbolTable("<root>");
	var ast = astBuilder.buildAst(tree, symtbl);

	if(ast.pipeline){
		ast.pipeline.srcpath = srcpath;
	}

	ast.modules = {};

	loadPipeline(ast, path.dirname(srcpath), symtbl);

	var transform_ctx = {symtbl: symtbl, params: mod_params, resources: {}, config: {}};

	for(var i=0;i<config_paths.length;i++){
		var config = JSON.parse(fs.readFileSync(config_paths[i]));
		transform_ctx.config = Object.assign(transform_ctx.config, config);
	}

	for(var i=0;i<ast_transforms.length;i++){
		var xmod = require(ast_transforms[i]);
		if(!xmod.transform){
			return mpbuild.error("The transform module ", ast_transforms[i], " do not have transform(ast, ctx) function defined.");
		}else{
			mpbuild.info("Applying transform ", ast_transforms[i]);
			xmod.transform(ast, transform_ctx);
		}
	}

	if(printAst){
		ast_util.print_object(ast, printJson, printColor);
	}

	if(printSymtbl){
		console.log(util.inspect(symtbl, false, 500, printColor));
	}

	if(code_path !== null){
		if(!transform_ctx.code || transform_ctx.code.length === 0){
			console.log("Code not generated!");
		}else{
			var code_str = transform_ctx.code.join("\n");
			if(code_path === ""){
				console.log(code_str);
			}else{
				fs.writeFileSync(code_path, code_str);
			}
		}
	}

	if(ctx_attr !== null){
		if(ctx_attr === ""){
			ast_util.print_object(transform_ctx, printJson, printColor);
		}else{
			ast_util.print_object(transform_ctx[ctx_attr], printJson, printColor);
		}
	}

	return {ast: ast, ctx: transform_ctx};
}

if(require.main === module){
	process.argv.splice(0, 2);
	try{
		compile(process.argv);
	}catch(e){
		if(mpbuild.errors.length > 0){
			console.log("Compile has errors: ");
			ast_util.print_object(e, printJson, printColor);
			ast_util.print_object(mpbuild.errors, printJson, printColor);
		}else{
			throw e;
		}
	}

	if(mpbuild.warnings.length > 0){
		console.log("Warnings: ");
		ast_util.print_object(mpbuild.warnings, printJson, printColor);
	}
}else{
	exports.compile = compile;
}
