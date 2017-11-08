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
/* 
models: (bchars_*)
a:
@ @
 @
@ @

b:
 {
{{{
 {

c:
  %
 %
  %

 [[
[
 [[

 <>
<>
 <>
 
defaults:
y = 10; 
xoffset = 0; 
delay = 0;
spd = 1; // 1 = norm
arr = bchars_a;
moves = [0,2,1,1];

bulletrtn = 'left';
s_interval = 9;
s_num = 1;
stages = null; // { s0: 0, s1: 1, s2: 0, s3: 1, s4: 0 }
bchar = '$';
bspd = 3;
 */

// arr, moves s_interval, s_num
let models1 = [

{
	arr: bchars_a,
	moves: [0,2,1,1],
	s_interval: 9,
	s_num: 1
},
{
	arr: bchars_a,
	moves: [0,2,1,1],
	s_interval: 9,
	s_num: 1
},
{
	arr: bchars_a,
	moves: [0,2,1,1],
	s_interval: 9,
	s_num: 1
},
{
	arr: bchars_a,
	moves: [0,2,1,1],
	s_interval: 9,
	s_num: 1
},

];


// timecnt, modelindex, y, movesoverride, optsoverride, (last 2 optional)
// movesoverride: can be array string or moveslist index
// optsoverride: object of ship options (stringify, or escape props in double quotes)
let seq1 = 
"0,0,10,,,-\
4,0,28,,,-\
7,1,35,,,-\
10,1,12,,,-\
12,0,20,,,-\
15,0,40,,,-\
18,2,12,,,-\
21,1,28,,,-\
24,0,20,,,-\
26,1,30,,,";

//badsGen(bads, seq1, models1);

var levelctl = new LevelCtl();

//levelctl.genBads(bads, seq1, models1);

levelctl.loadLevel(bads, hud, level1);

