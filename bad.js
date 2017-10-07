
/* 
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

  <<>
<<
 <<>
  */


function Bad(m) {
	
	this.y = 10; 
	this.xoffset = 0; 
	this.delay = 0;
	this.spd = 1; // 1 = norm
	this.arr = bchars_a;
	this.moves = [0,0,2,1];

	this.bulletrtn = 'left';
	this.s_interval = 9;
	this.s_num = 1;
	this.stages = null; // { s0: 0, s1: 1, s2: 0, s3: 1, s4: 0 }
	this.bchar = '$';
	this.bspd = 3;

	if(m){
		if(m.y){this.y = m.y;}
		if(m.xoffset){this.xoffset = m.xoffset;}
		if(m.delay){this.delay = m.delay;}
		if(m.spd){this.spd = m.spd;}
		if(m.arr){this.arr = m.arr;}
		if(m.moves){this.moves = m.moves;}
		if(m.bulletrtn){this.bulletrtn = m.bulletrtn;}
		if(m.s_interval){this.s_interval = m.s_interval;}
		if(m.s_num){this.s_num = m.s_num;}
		if(m.stages){this.stages = m.stages;}
		if(m.bchar){this.bchar = m.bchar;}
		if(m.bspd){this.bspd = m.bspd;}
	}

	this.movecb = globalmvCb;
	this.splode = false;
	this.fade = false;
	this.x = screenW+this.xoffset; 
	this.mcnt = 0-this.delay;
	this.cnt = 0;
	this.char = 'n';
	this.a = 0;
	this.mode = 0;

	this.move = function(){
		 this.movecb(this.moves);
	}

	this.shoot = function(){
		this.shootFunc(this.s_interval, this.s_num, this.stages);
	}

	this.shootFunc = function(interval, num, stages){
		if(this.x < screenW){
			if(!stages){
			if(this.mcnt%interval < num)// || this.mcnt === 1) //immediate shoot 
				bullets.push(createBullet(this.x-1, this.y, this.bulletrtn, this.bspd, this.bulletrtn, this.bchar));
			}else{
			if(this.mode === 0 && stages.s0 || this.mode === 1 && stages.s1 || this.mode === 2 && stages.s2 
				|| this.mode === 3 && stages.s3 || this.mode === 4 && stages.s4){
				if(this.mcnt%interval < num)
				bullets.push(createBullet(this.x-1, this.y, this.bulletrtn, this.bspd, this.bulletrtn, this.bchar));
				}
			}
		}
	}

	this.explode = function(){
		this.splode = true;
		console.log('i am bad i splod');
	}

	this.fadeIn = function(){
		this.fade = true;
		this.splode = true;
	}

	this.explodeChar = function(){
		if(this.fade){ return this.fadeChar(); }
	    this.cnt++;
	    if(this.cnt > 1000){ this.splode = false; this.cnt = 0; }
	    if(this.char == 'n'){ return 'n'; }
	    return String.fromCharCode(((this.cnt)%13)+33);
	}

	this.fadeChar = function(){
		this.cnt++;
		if(this.cnt > 1000){this.splode = false; this.fade = false; this.cnt = 0;}	
		if(this.cnt%15 == 0){ this.a = ++this.a%3; }
		if(this.char == 'n'){ return 'n'; }
		if(this.a == 0){ return '\\'; }
		else if(this.a == 1){ return '-'; }
		else if(this.a == 2){ return '/'; }
	}

	this.getChar = function(x,y){
		if(x >= this.x && x <= this.x+2){
        	if(y == this.y-1){ 
        		this.char = this.arr[noNaN(x%this.x)];
        		return !this.splode ? this.char : this.explodeChar();
        	}
        	else if(y == this.y){
        		this.char = this.arr[noNaN(x%this.x)+3];
        		return !this.splode ? this.char : this.explodeChar();
        	}
        	else if(y == this.y+1){
        		this.char = this.arr[noNaN(x%this.x)+6];
        		return !this.splode ? this.char : this.explodeChar();
        	}
        	else{ return 'n'; }
		}else{ return 'n'; }
	}

}
