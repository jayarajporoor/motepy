'use strict';

var ast_util = require("../ast_util.js");

'use strict';

var DynScope = require("../dynscope.js");
var ast_util = require("../ast_util.js");

function typecheck_array_op(op, ltype_, rtype_, src){
    //console.log("OP", op, "L", JSON.stringify(ltype_), "R", JSON.stringify(rtype_))
    var match = true;
    var res_type = {"primitive": ltype_.primitive}
    if (op === "+" || op === "-" || op === "(*)"){
        if (ltype_.dim.dim.length == rtype_.dim.dim.length){
            match = true;
            for(var i=0;i<ltype_.dim.dim.length;i++){
                if(ltype_.dim.dim[i].iconst !== rtype_.dim.dim[i].iconst){
                    match = false;
                }
            }
        }else{
            match = false;
        }
        res_type = ltype_;
    }else if(op === "*"){
        if(ltype_.dim.dim[ltype_.dim.dim.length-1].iconst !==
            rtype_.dim.dim[0].iconst){
            match = false;
        }
        if(match){
            var res_dim = []
            for(var i=0;i<ltype_.dim.dim.length-1;i++){
                res_dim.push(ltype_.dim.dim[i])
            }
            for(var i=1;i<rtype_.dim.dim.length;i++){
                res_dim.push(rtype_.dim.dim[i])
            }
            if(res_dim.length > 0){
                res_type.dim ={dim: res_dim, is_ring:false}
            }
        }
    }
    if(!match){
       mpbuild.error("Array dimension mismatch for: " + op + " operation at", src);
    }
    return res_type;
}

class Typechecker{
  constructor(ctx) {
    this.seq = [];
    this.ctx = ctx;
  }

  vardef(vr){

    if(!vr.type.dim || (vr.decorator && vr.decorator.id === "address") ){//if not array type, ignore.
      return;
    }
    for(var i=0;i<vr.defs.length;i++){
      var sym = this.symtbl.lookup(vr.defs[i].id);
      if(sym){
        if(sym.has_init)
        {

        }
        else
        {

        }
      }else{
        console.log("Symbol not found for vardef ", vr.defs[i].id);
      }
    }
  }

  vardefs(vardefs, is_mod){
    for(var i=0;i < vardefs.length;i++){
      this.vardef(vardefs[i]);
    }

    var entry=null;
    if(is_mod){
    }else{
    }
  }

  expr(ast){
    var id = ast.qid ? ast.qid[0] : ast.id;
    //console.log("EXPR", ast)
    if(id){
      var sym = this.dynscope.lookup_sym(id);
      //console.log("SYM", sym)
      //if(sym) console.log(id, " alias to ", sym.name, sym.scope_names); else console.log(id, " not found");
      if(sym){
          return sym.info.type;
      }
    }else{
      if(ast.expr){
        var type_ = this.expr(ast.expr);
        return type_;
      }
      var ltype_ = null, rtype_=null;
      if(ast.lexpr){
        ltype_ = this.expr(ast.lexpr);
      }
      if(ast.rexpr){
        rtype_ = this.expr(ast.rexpr);
      }
      if(!ltype_){
          ltype_ = {primitive: 'unk'};
      }
      if(!rtype_){
          rtype_ = {primitive: 'unk'}
      }
      //TODO: typecheck
      if(ltype_.primitive !== rtype_.primitive){
          //TODO: mpbuild.error("Type mismatch at", ast.src);
          return {primitive: 'unk'};
      }
      if(ltype_.dim && rtype_.dim){
          return typecheck_array_op(ast.op, ltype_, rtype_, ast.src);
      }
      if(ast.fcall){
        this.fcall(ast.fcall);
      }
    }
  }

  effects(ast, qid, write_params){
      var effects_found = false;
      var mod_name = this.symtbl.getCurrentScope().parent.name;
      var uses = this.root_ast.modules[mod_name].uses;
      qid = qid.slice();//take a copy!
      if(qid.length > 1){
        var firstname = qid.shift();
      }
      var scoped_qname = qid.join("_");

      for(var i=0; uses && (i < uses.length);i++){
        var usename = uses[i].name;
        var mod_use = this.root_ast.modules[usename];
        var effects = mod_use.effectsMap[scoped_qname];
        if(effects){
          effects_found = true;
          for(var j=0;j<effects.length;j++){
            var effect = effects[j];
            switch(effect.kind){
              case 'write':
                var writeparam = ast.params[effect.expr.param].expr;
                var sym = this.dynscope.lookup_sym(writeparam && ast_util.get_var_id(writeparam) );
                if(sym && sym.info.type.dim){
                  //def_syms.push(sym);
                }
                write_params.push(effect.expr.param);
              break;
              case 'acquire':
                if(effect.expr.params){
                  var effect_param_values = [];
                  for(var k=0;k<effect.expr.params.length;k++){
                    var eparam = effect.expr.params[k];
                    var param = typeof eparam.param !== 'undefined' ? ast.params[eparam.param].expr : eparam;
                    var val = param.iconst || param.fconst;//currently only considering params/constant values.
                    if(typeof val === 'undefined'){
                      val = this.dynscope.lookup_sym(param);
                      if(val){
                        val = val.info.value;
                      }
                    }
                    if(typeof val !== 'undefined'){
                      effect_param_values.push(val);
                    }
                  }
                  var effect_term_str = effect.expr.id + "(" +  effect_param_values.join(",") + ")";
                  if(!this.ctx.resources[effect_term_str]){
                    this.ctx.resources[effect_term_str] = [];
                  }
                  if(this.ctx.resources[effect_term_str].indexOf(mod_name) < 0){
                    this.ctx.resources[effect_term_str].push(mod_name);
                  }
                }
              break;
            }
          }
          //console.log("Effects for ", scoped_qname, effects);
        }
      }

      return effects_found;
  }

  fcall(ast){
      var fname = ast.qid[0];
      var qname= ast.qid[1];
      var is_flow = false;
      var qid_unresolved = null;
      var is_array_op = false;

      if(qname){
        if(ast_util.vector_ops.indexOf(qname) >= 0){
          var sym = this.dynscope.lookup_sym(fname);
          is_array_op = true;
        }
        qid_unresolved = ast.qid;
      }else{
        var mod_ast;
        if(fname === 'next'){
          if(this.pipeline_stack[0].next){//index 0 is top of the stack.
            mod_ast = this.root_ast.modules[this.pipeline_stack[0].next.qname[0]];
            is_flow = true;
          }else{
            mpbuild.warning("Next flow module not found for ", this.pipeline_stack[0].qname);
            return;
          }
        }else{
          mod_ast = this.root_ast.modules[this.pipeline_stack[0].qname[0]];
        }

        var fdef_ast=null;
        var mod_name = null;
        if(mod_ast){
          mod_name = mod_ast.name;
          //console.log("MOD AST", mod_ast.name, "FNAME", fname, JSON.stringify(this.pipeline_stack))
          if(fname === 'next'){
            fdef_ast = ast_util.find_flow(mod_ast, this.pipeline_stack[0].next.qname[1]);
          }else{
              fdef_ast = ast_util.find_fdef(mod_ast, fname);
          }
        }
        if(fdef_ast){
          var saved_scope_name = this.symtbl.getCurrentScope().name;
          var saved_mod_scope_name;
          this.symtbl.exitNestedScope();//of the caller
          if(is_flow){
            saved_mod_scope_name = this.symtbl.getCurrentScope().name;
            this.symtbl.exitNestedScope();//of the caller module
            this.symtbl.enterNestedScope(mod_name);
            this.vardefs(mod_ast.vars, true);
            this.pipeline_stack.unshift(this.pipeline_stack[0].next);
            //console.log("Save and exit scope ", saved_mod_scope_name, " and enter ", mod_name);
          }
          //console.log("Entering ", fdef_ast.id, " from dyn scope ", this.dynscope.current_scope.symtbl.name);
          this.dynscope.enterFunctionCall(fdef_ast.id, ast.params);

          this.symtbl.enterNestedScope(fdef_ast.id);//of the calleee

          this.fdef(fdef_ast);
          this.symtbl.exitNestedScope();//of the callee

          if(is_flow){
            this.pipeline_stack.shift();//remove top of the stack.
            this.symtbl.exitNestedScope();
            this.symtbl.enterNestedScope(saved_mod_scope_name);
            //console.log("Exit and re-enter ", saved_mod_scope_name, " ", this.symtbl.getCurrentScope().name);
          }
          this.symtbl.enterNestedScope(saved_scope_name);//of the caller
          this.dynscope.exitFunctionCall();
        }else{
          //console.log("FDEF not found", ast.qid);
          qid_unresolved = ast.qid;
        }
      }

      if(qid_unresolved){
        var write_params = [];

        var effects_found = null;

        if(!is_array_op){
          effects_found = this.effects(ast, qid_unresolved, write_params);
        }

        for(var k=0;k<ast.params.length;k++){
          if(write_params.indexOf(k) < 0){
            var param = ast.params[k].expr;
            var sym = this.dynscope.lookup_sym(ast_util.get_var_id(param) );
            if(sym && sym.info.type.dim){
              //use_syms.push(sym);
            }
          }
        }
        if(!effects_found && !is_array_op){
          mpbuild.warning("Unresolved function name ", qid_unresolved, " in scope ", this.symtbl.getCurrentScope().name);
        }
      }
  }

  stmt(ast){
    switch(ast.kind){
      case 'block':
        for(var i=0;i<ast.stmts.length;i++){
          this.stmt(ast.stmts[i]);
        }
      break;
      case 'if':
        this.stmt(ast.if_body);
        if(ast.else_body){
            this.stmt(ast.else_body);
        }
      break;
      case 'fcall':
        this.fcall(ast.fcall);
      break;
      case 'for':
      case 'while':
        var expr_seq = [];
        if(ast.expr){
          this.expr(ast.expr);
        }
        this.stmt(ast.body);
      break;
      case 'assign':
        this.expr(ast.expr);
        var id = ast.qid[0] || ast.id;
        var sym = this.dynscope.lookup_sym(id);
        if(sym){
        }else{
          mpbuild.warning("Unresolved identifier ", id, " in scope ", this.symtbl.getCurrentScope().name);
        }
      break;
    }
  }

  fdef(ast){
    if(ast.vars){
      this.vardefs(ast.vars);
    }
    var stmt_seq = this.stmt(ast.body);
  }

  flow(mod, flow_name){
    var mod_name = flow_name[0];

    this.vardefs(mod.vars, true);

    var fdef = ast_util.find_flow(mod, flow_name[1]);

    if(fdef){
      this.dynscope.enterFlow(fdef.id);
      this.symtbl.enterNestedScope(fdef.id);
      this.fdef(fdef, this.seq);
      this.symtbl.exitNestedScope();
      this.dynscope.exitFunctionCall();
    }else{
      mpbuild.warning("Typechecker: Flow name", flow_name, "not found");
    }
  }

  enter_pipeline(entry){
    this.pipeline_stack = [entry];
    var name = entry.qname[0];
    var mod = this.root_ast.modules[name];
    if(mod) {
      this.symtbl.enterNestedScope(name);
      this.flow(mod, entry.qname);
      this.symtbl.exitNestedScope();
    }
  }

  verify(ast, symtbl){
     //ast_util.print_object(symtbl)
    this.root_ast = ast;
    symtbl.setRootScope();
    this.symtbl = symtbl;
    this.mods_visited = {};
    this.dynscope = new DynScope(symtbl);
    if(ast.pipeline && ast.pipeline.block.length > 0){
      this.enter_pipeline(ast_util.first_pipeline_entry(ast));
    }else{
      mpbuild.warning("Typechecker.verify: No/empty pipeline found");
    }
    return this.seq;
  }

}

exports.transform = function(ast, ctx){
  var typechecker = new Typechecker(ctx);
  typechecker.verify(ast, ctx.symtbl);
};

exports.name = "typechecker";
