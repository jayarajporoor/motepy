const assert = require('assert');
const ast_util = require("../ast_util.js");

const alignment = 4;

var ltmap ={};
var full_ltmap = {};
var regions = [];

function compute_ltmap(duseq){
	var idx = 0;
	var idx_used;

	for(var i=0;i<duseq.length;i++){
		var du = duseq[i];
		idx_used = false;
		if(du.mem){
			for(var j=0;j < du.mem.length;j++){
				var m = du.mem[j];
				var scoped_name = ast_util.get_scoped_name(m);
				ltmap[scoped_name] = {mem: true, sym: m};
			}
		}
		if(du.undef){
			for(var j=0;j< du.undef.length;j++){
				var m = du.undef[j];
				var scoped_name = ast_util.get_scoped_name(m);
				ltmap[scoped_name] = {undef: true, sym: m, du_idx : i};
			}
		}

		//must process use before def, otherwise we will miss memness of situations like:
		//int [3] xx;  flow() {xxx = xxx + 3;}
		if(du.use){
			for(var j=0;j < du.use.length;j++){
				var m = du.use[j];
				var scoped_name = ast_util.get_scoped_name(m);
				var lt = ltmap[scoped_name];
				if(lt){
					if(lt.undef && lt.du_idx !== i){
						mpbuild.error("Local variable used before initialization.", m.name, " in scope: ", m.scope_names);
					}else
					if(lt.mem){
						full_ltmap[scoped_name] = lt.sym;
						delete ltmap[scoped_name];
					}else{
						lt.end = idx;
						idx_used = true;
					}
				}else
				if(!full_ltmap[scoped_name])
				{
					mpbuild.error("LT entry for variable definition not found before use ", m.name, " in scope: ", m.scope_names);
				}
			}
		}

		if(du.def){
			for(var j=0;j < du.def.length;j++){
				var m = du.def[j];
				var scoped_name = ast_util.get_scoped_name(m);
				var lt = ltmap[scoped_name];
				if(lt){
					lt.mem = false;
					lt.undef = false;
					if(typeof(lt.start) === 'undefined'){
						lt.start = idx;
						idx_used = true;
					}
					//unused definitions must be optimized away before allocator is called.
					//memory allocator won't ignore unused definitions.
					lt.end = idx;
					idx_used = true;
				}else
				if(!full_ltmap[scoped_name])
				{
					mpbuild.error("LT entry for variable definition not found before def ", m.name, " in scope: ", m.scope_names);
				}
			}
		}

		if(idx_used) idx++;
	}
}

function init_regions(){
	var max_lifetime = 0;
	for(id in ltmap){
		//initially create separate region for each object.
		var ltentry = ltmap[id];
		if(typeof ltentry.start !== 'undefined'){
			ltentry.sym.info.size = Math.ceil(ltentry.sym.info.size/alignment);//allocate in words.
			var block = {lt_start: ltentry.start, lt_end: ltentry.end, size: ltentry.sym.info.size, lt_available: false,
									owners: [{sym: ltentry.sym}] };
			if(!block.size){
				mpbuild.error("LT entry with unknown size ", id, " cannot be automatically allocated.");
			}else
			if(isNaN(block.size)){
				mpbuild.error("LT entry with malformed size ", id, " cannot be automatically allocated.");
			}
			else{
				regions.push({blocks: [block], size: block.size});
				if(block.lt_end > max_lifetime){
					max_lifetime = block.lt_end;
				}
			}
		}
	}
	return max_lifetime;
}

function default_merge_policy(size_saving, candidate, target){
	var merge_threshold = 0.5;
	return size_saving/candidate.size > merge_threshold;
}

function is_adjacent_and_non_overlapping(lt_end, lt_start, adjacency){
	return (lt_start > lt_end) && (lt_start <= (lt_end + adjacency));
}

function merge_regions(target_region, candidate_region, run_start, adjacency, commit){
	var merged_blocks = null;
	if(commit){
		merged_blocks = [];
	}
	var target = target_region.blocks;
	var candidate = candidate_region.blocks;

	var tidx = run_start;
	var saved_run_start = run_start;
	var cidx = 0;
	var tblock = null;
	var cblock = null;
	var done = false;
	var size_saving = 0;
	var last_was_matching = false;

	//console.log("New merge run");
	while(!done){
		if(!tblock){
			if(tidx < target.length){
				tblock = target[tidx++];
				if(!commit){
					tblock = ast_util.deep_copy(tblock);
				}
			}else{
				done = true;
				break;
			}
		}
		if(!cblock){
			if(cidx < candidate.length){
				cblock = candidate[cidx++];
				if(!commit){
					cblock = ast_util.deep_copy(cblock);
				}
			}else{
				done = true;
				break;
			}
		}

		if( is_adjacent_and_non_overlapping(cblock.lt_end, tblock.lt_start, adjacency) ||
			is_adjacent_and_non_overlapping(tblock.lt_end, cblock.lt_start, adjacency) ){

			var merged_block = {  lt_start: Math.min(tblock.lt_start, cblock.lt_start),
				 				  lt_end: Math.max(tblock.lt_end,cblock.lt_end),
                        		  owners: tblock.owners.concat(cblock.owners)
                        		};
			//print_block("Try cblock ", cblock);
			//print_block("Try tblock ", tblock);
            if(tblock.size > cblock.size){
				tblock.size = tblock.size - cblock.size;
				merged_block.size = cblock.size;
				size_saving += cblock.size;
				cblock = null;
            }else if(cblock.size > tblock.size){
				cblock.size = cblock.size - tblock.size;
				merged_block.size = tblock.size;
				size_saving += tblock.size;
				tblock = null;
            }else{
				merged_block.size = tblock.size;
				size_saving += tblock.size;
				tblock = cblock = null;
            }
            if(merged_blocks){
				merged_blocks.push(merged_block);
			//	print_block("Merged block ", merged_block);
			}

			if(size_saving === 0) run_start = i;//we're just starting a merge-run.
			last_was_matching = true;
		}else{
			if(merged_blocks) merged_blocks = [];
			size_saving = 0;
			run_start++;//start the run from the next index in the target region.
			t = run_start;
			c = 0;
			tblock = cblock = null;
			last_was_matching = false;
		}
	}

	//assert(!(tblock && cblock));//both not pending together.

	if( (tblock || tidx < target.length ) &&
		(cblock || cidx < candidate.length ) ){
			last_was_matching = false;
			//console.log("Last was not matching!");
	}
	if(merged_blocks){
		for(var i=0;i<saved_run_start;i++){
			//print_block("pushing run start ", target[i]);
			merged_blocks.unshift(target[i]);
		}
		if(!tblock){
			tblock = target[tidx++];
		}
		while(tblock){
			//print_block("Extra tblock ", tblock);
			merged_blocks.push(tblock);
			tblock = target[tidx++];
		}

		if(!cblock){
			cblock = candidate[cidx++];
		}
		while(cblock){
			//print_block("Extra cblock ", cblock);
			merged_blocks.push(cblock);
			target_region.size += cblock.size;
			cblock = candidate[cidx++];
		}
		target_region.blocks = merged_blocks;
	}

	return {size_saving: size_saving, run_start: run_start, match: last_was_matching};

}

function optimize_regions(max_lifetime, merge_policy){
	var changed = false;
	do{
		changed = false;
		var adjacency = 1;
		while(adjacency < max_lifetime) {

			for(var i=0;i<regions.length && !changed;i++){
				for(var j=0;j<regions.length && !changed;j++){
					if(i === j ) continue;
					var target_region = regions[i];
					var candidate_region = regions[j];
					var res = merge_regions(target_region, candidate_region, 0, adjacency, false);
					if(res.match && merge_policy(res.size_saving, candidate_region, target_region)){
						merge_regions(target_region, candidate_region, res.run_start, adjacency, true);
						regions.splice(j, 1);
						changed = true;
						break;
					}
				}
			}

			if(changed){
				break;
			}else{
				adjacency++;
			}
		}
	}while(changed);
}

function allocate_addresses(max_lifetime){
	var next_loc = 0;
	var address_assigned = {};
	var alloc = [];
	var total_alloc_size = 0, total_obj_size = 0;

	for(var k in full_ltmap){
		var sym = full_ltmap[k];

		if(sym.info.type.is_const){
			continue;//ignore constants.
		}
		if(isNaN(sym.info.size)){
			mpbuild.error("LT entry (full LT) with malformed size ", sym.name, " cannot be automatically allocated.");
		}

		var sym_alloc = {sym: sym, loc: next_loc, lifetime: {full: true, start: 0, end: max_lifetime}};
		sym.info.size = Math.ceil(sym.info.size/alignment);
		alloc.push(sym_alloc);
		var aligned_size = sym.info.size;
		next_loc += aligned_size;
		total_alloc_size += aligned_size;
		total_obj_size += aligned_size;
	}

	for(var i=0;i<regions.length;i++){
		var blocks = regions[i].blocks;
		for(var j=0;j<blocks.length;j++){
			var block = blocks[j];
			var owners = block.owners;
			//console.log(" ADDRESS ", next_loc);
			for(var k=0;k<owners.length;k++){
				var sym = owners[k].sym;
			//	console.log("owner ", sym.name, sym.scope_names, sym.info.size);
				var scoped_name = ast_util.get_scoped_name(sym);
				if(!address_assigned[scoped_name]){
					address_assigned[scoped_name] = true;
					var ltmap_entry = ltmap[scoped_name];
					var sym_alloc = {sym: sym, loc: next_loc, lifetime: {start: ltmap_entry.start, end: ltmap_entry.end}};
					alloc.push(sym_alloc);
					total_obj_size += sym_alloc.sym.info.size;
				}
			}
			total_alloc_size += block.size;
			next_loc += block.size;
		}
	}
	return {alloc: alloc, total_alloc_size: total_alloc_size, total_obj_size: total_obj_size};
}

function print_block(msg, block){
	var str = msg + ", size=" + block.size + "; owners: ";
	var owners = block.owners;
	for(var k=0;k<owners.length;k++){
		var sym = owners[k].sym;
		var scoped_name = ast_util.get_scoped_name(sym);
		str += scoped_name + "=" + sym.info.size + ", ";
	}
	console.log(str);
}

function print_regions(){
	for(var i=0;i<regions.length;i++){
		var blocks = regions[i].blocks;
		for(var j=0;j<blocks.length;j++){
			var block = blocks[j];
			print_block("Region " + i + ", block: " + j, block);
		}
	}
}
exports.transform = function(ast, ctx){
	if(!ctx.duseq){
		console.log("DUseq must be created prior to calling stdalloc.");
		return;
	}

    console.log("DUSEQ", ast_util.print_object(ctx.duseq))
	compute_ltmap(ctx.duseq);

	ctx.stdalloc = {full_ltmap: full_ltmap, ltmap: ltmap};

	console.log("FULL LTMAP", full_ltmap);
	console.log("LTMAP", ltmap);

	var max_lifetime = init_regions();

	//console.log(JSON.stringify(regions, null, 1));
	//print_regions();

	optimize_regions(max_lifetime, default_merge_policy);

//	console.log("After optimize");
//	print_regions();
	//console.log(JSON.stringify(regions));

	ctx.stdalloc.regions = regions;
	//console.log(JSON.stringify(regions));

	var mem = allocate_addresses(max_lifetime);

	ctx.mem = mem;
	if(ctx.params['-printalloc']){
		console.log("Total alloc size ", mem.total_alloc_size, ", total size of objects ", mem.total_obj_size);
		for(var i=0;i<mem.alloc.length;i++){
			var alloc = mem.alloc[i];
			console.log(ast_util.get_scoped_name(alloc.sym, "'s "), " at "
					, alloc.loc, ", object size ", alloc.sym.info.size, ", life time: ", alloc.lifetime.start+ ".."+ alloc.lifetime.end);
		}
	}
};

exports.name = "stdalloc";
