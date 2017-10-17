const tcoef = 10;
const initDelay = 0;

// let seqArr = parseSeq(seq);
// gen(seqArr, bads, models);

//badsGen(bads, seq, models);

function badsGen(badsArr, seqString, modelsList, movesList){
	let seqArr = parseSeq(seqString);
	gen(seqArr, badsArr, modelsList, movesList);
}

function parseSeq(seq){
	let arr = seq.split('-');
	arr.forEach((el, i)=>{
		arr[i] = el.split(',');
	});
	return arr;
}

function gen(arr, bads, models, moves){ 
	if(bads.length > 0){ console.log('populating non-empty array'); }
	for (var i = 0; i <arr.length; i++){
		let ship;  
		let row = arr[i];
		  if(row[1]){
		    ship = new Bad(models[+row[1]]);
		    if(!ship){console.log('ship undefined'); return;}
		  }else{console.log('field missing'); return;}
		  
		  if(row[0]){ 
		    ship.setDelay(tcoef*+row[0]);
		  }else{console.log('field missing'); return;}
		  
		  if(row[2]){
		    ship.y = +row[2];
		  }else{console.log('field missing'); return;}
		  
		  if(row[3]){
		  		let p = JSON.parse(row[3]);
		  		if(p.constructor === Array){
		  			ship.moves = p;
		  		}else if(moves){
		  			ship.moves = moves[p];
		  		}		    
		  }
  		  if(row[4]){
		    let opts = JSON.parse(row[4]);
		    if(ship){
			    Object.assign(ship, opts);
			}
		  }		  
		  if(ship){bads.push(ship);}
	}
}
