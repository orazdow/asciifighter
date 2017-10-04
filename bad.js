
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

function Bad(x, y) {
	
	
	this.y = 10; // mid start pos
	this.ydir = 1; // -1 reverses ydir
	this.xoffset = 10;
	this.delay = 0;
	this.spd = 1; //0 = slower, 1 = norm, 2 = faster etc
	this.arr = bchars_a;
	this.movecb = straight_stop_down_stop_up;
//	this.movecb = globalmvCb;
//	this.moves = ['straight', 'stop', 'down', 'stop', 'up'];
	
	this.bulletrtn = 'left';
	this.s_interval = 9;
	this.s_num = 1;
	this.stages = null; // { s0: 0, s1: 1, s2: 0, s3: 1, s4: 0 }
	this.bchar = '$';
	this.bspd = 3;


	this.splode = false;
	this.fade = false;
	this.x = screenW+this.xoffset; // left edge
	this.mcnt = 0-this.delay;
	this.ycoef = 2*this.ydir; 
	this.cnt = 0;
	this.char = 'n';
	this.a = 0;
	this.mode = 0;
	this.mlen = 16; // not using

	this.move = function(){
		// this.movecb(this.moves);
		this.movecb();
	}

	this.shoot = function(){
		this.shootFunc(this.s_interval, this.s_num, this.stages);
	}

	this.shootFunc = function(interval, num, stages){
		if(this.x < screenW){
			if(stages){
				if(this.mode === 0 && stages.s0 || this.mode === 1 && stages.s1 || this.mode === 2 && stages.s2 
					|| this.mode === 3 && stages.s3 || this.mode === 4 && stages.s4){
					if(this.mcnt%interval < num)
						bullets.push(createBullet(this.x-1, this.y, this.bulletrtn, this.bspd, this.bulletrtn, this.bchar));
				}
			}else{
				if(this.mcnt%interval < num)// || this.mcnt === 1) //immediate shoot 
					bullets.push(createBullet(this.x-1, this.y, this.bulletrtn, this.bspd, this.bulletrtn, this.bchar));
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
