module.exports = [
	, "-xast", __dirname + "/modules/simplify_matrix_expr.js"
	, "-xast", __dirname + "/modules/loop_gen.js"
	, "-xast", __dirname + "/modules/loop_fusion.js"
	, "-xast", __dirname + "/codegen.js"
	, "-xast", __dirname + "/codepp.js"
];
