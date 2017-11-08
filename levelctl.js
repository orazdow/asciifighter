class LevelCtl{

	constructor(){
		this.tcoef = 10;
		this.index = 0;
	}

	//checkState(ship, display)

	loadLevel(bads, display, level){

		if(level.scene){
			display.setScene(level.scene);
		}

		this.genBads(bads, level.seq, level.models, level.moves);

	}


	genBads(badsArr, seqString, modelsList, movesList){
		let seqArr = this.parseSeq(seqString);
		this.gen(seqArr, badsArr, modelsList, movesList);
	}

	parseSeq(seq){
		let arr = seq.split('-');
		arr.forEach((el, i)=>{
			arr[i] = el.split(',');
		});
		return arr;
	}

	gen(arr, bads, models, moves){ 
		if(bads.length > 0){ console.log('populating non-empty array'); }
		for (var i = 0; i <arr.length; i++){
			let ship;  
			let row = arr[i];
			  if(row[1]){
			    ship = new Bad(models[+row[1]]);
			    if(!ship){console.log('ship undefined'); return;}
			  }else{console.log('field missing'); return;}
			  
			  if(row[0]){ 
			    ship.setDelay(this.tcoef*+row[0]);
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

}

//badsGen(bads, seq1, models1);

var levelctl = new LevelCtl();

//levelctl.genBads(bads, seq1, models1);

levelctl.loadLevel(bads, hud, level1);

