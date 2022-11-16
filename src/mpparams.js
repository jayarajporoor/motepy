
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default [
	  "-xast", "pseq"
	, "-xast", "typechecker"      
	, "-xast", "duseq"
	, "-xast", "stdalloc"
	, "-xast", "simplify_matrix_expr"
	, "-xast", "loop_gen"
	, "-xast", "loop_fusion"
	, "-xast", "codegen"
	, "-xast", "codepp"
];
