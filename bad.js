
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
	this.moves = [0,2,1,1];
	this.hp = 1;

	this.bulletrtn = 'left';
	this.s_interval = 9;
	this.s_num = 1;
	this.stages = null; // { s0: 0, s1: 1, s2: 0, s3: 1, s4: 0 }
	this.bchar = '$';
	this.bspd = 4;
	this.dimension = 3;

	if(m){ 
		if(m.y != undefined){this.y = m.y;}
		if(m.xoffset != undefined){this.xoffset = m.xoffset;}
		if(m.delay != undefined){this.delay = m.delay;}
		if(m.spd != undefined){this.spd = m.spd;}
		if(m.arr != undefined){this.arr = m.arr;}
		if(m.moves != undefined){this.moves = m.moves;}
		if(m.bulletrtn != undefined){this.bulletrtn = m.bulletrtn;}
		if(m.s_interval != undefined){this.s_interval = m.s_interval;}
		if(m.s_num != undefined){this.s_num = m.s_num;}
		if(m.stages != undefined){this.stages = m.stages;}
		if(m.bchar != undefined){this.bchar = m.bchar;}
		if(m.bspd != undefined){this.bspd = m.bspd;}
		if(m.dimension != undefined){this.dimension = m.dimension;}
		if(m.payload != undefined){this.payload = m.payload;}
	}

	this.movecb = globalmvCb;
	this.splode = false;
	this.fade = false;
	this.x = screenW+this.xoffset; 
	this.mcnt = 0-this.delay;
	this.cnt = 0;
	this.char = '';
	this.a = 0;
	this.mode = 0;
	this.rmv = false;

	this.setDelay = function(delay){
		this.mcnt = 0-delay;
	}

	this.move = function(){
		 this.movecb(this.moves);
		 if(this.x+3 < 0){ this.rmv = true; }
	}

	this.shoot = function(){ 
		if(!this.splode)
		this.shootFunc(this.s_interval, this.s_num, this.stages);
	}

	this.shootFunc = function(interval, num, stages){
		if(this.x < screenW){
			if(!stages){
			if(this.mcnt%interval < num){// || this.mcnt === 1) //immediate shoot 
				bullets.push(createBullet(this.x-1, this.y, this.bulletrtn, this.bspd, this.bulletrtn, this.bchar));
			}
			}else{ 
			if(this.mode === 0 && stages.s0 || this.mode === 1 && stages.s1 || this.mode === 2 && stages.s2 
				|| this.mode === 3 && stages.s3 || this.mode === 4 && stages.s4){
				if(this.mcnt%interval < num)
				bullets.push(createBullet(this.x-1, this.y, this.bulletrtn, this.bspd, this.bulletrtn, this.bchar));
				}
			}
		}
	}

	this.explode = function(n){
		this.splode = true;
		this.hp -= (n || 1);
		if(this.hp > 0){
			this.tempsplode = true;
		}
		console.log('i am bad i splod');
	}

	this.fadeIn = function(){
		this.fade = true;
		this.splode = true;
	}

	this.explodeChar = function(){
		if(this.tempsplode || this.fade){ return this.flicker(); }
	    this.cnt++;
	    if(this.cnt > 150){ this.rmv = true; this.cnt = 0; }
	    if(this.char == ''){ return ''; }
	    return String.fromCharCode(((this.cnt)%13)+33);
	}

	this.flicker = function(){
		if(this.fade){return this.fadeChar();}
		this.cnt++;
		if(this.cnt > 38){this.tempsplode = false; this.splode = false; this.cnt = 0;}
		if(this.hp >= 1){
//			if(this.cnt % 10 < 5){
			if(this.cnt % 30 < 15){
				return '';
			}else{
				return this.char;
			}
		} 
	}

	this.fadeChar = function(){
		this.cnt++;
		if(this.cnt > 1000){this.splode = false; this.fade = false; this.cnt = 0;}	
		if(this.cnt%15 == 0){ this.a = ++this.a%3; }
		if(this.char == ''){ return ''; }
		if(this.a == 0){ return '\\'; }
		else if(this.a == 1){ return '-'; }
		else if(this.a == 2){ return '/'; }
	}


	this.getchar33 = function(x,y){
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
        	else{ return ''; }
		}else{ return ''; }
	}
	this.getchar2 = function(x,y){
		if(x >= this.x && x <= this.x+7){
			if(y == this.y){
        		return !this.splode ? this.arr[noNaN(x%this.x)] : this.explodeChar();
        	}
        	else{ return ''; }
		}else{ return ''; }
	} 
	this.getchar1 = function(x,y){
		if(x >= this.x && x <= this.x+7){
			if(y == this.y){
        		return !this.splode ? this.arr[noNaN(x%this.x)] : this.explodeChar();
        	}
        	else{ return ''; }
		}else{ return ''; }
	} 

	this.getChar = this.dimension == 3? this.getchar33 : this.dimension == 2? this.getchar2 : this.getchar1;

 }
