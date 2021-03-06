
function Ship(){

	this.y = 10;
	this.x = 4;
	this.splode = false;
	this.fade = false;
	this.cnt = 0;
	this.a = 0;
	this.char = '';
	this.limit = false;
	this.bcnt = 0;
	this.laser = 10;
	this.shield = 10;
	this.b_spec = false;
	this.l_cnt = 0;
	this.s_cnt = 0;
	this.s_cnt_m = 0;
	
	this.chars = ['<','#','#','#','','','',
 				  '','#','#','#','#','>','',
 				  '<','#','#','#','','',''];

	this.chars_fast = ['<','<','#','#','#','','',
 			    	   '','','#','#','#','#','>',
 			    	   '<','<','#','#','#','',''];

	this.chars_slow = ['#','#','#','','','','',
 		    		   '#','#','#','#','>','','',
 			       	   '#','#','#','','','','',];

    this.arr = this.chars;

  //  this.speed = 1; //0 == slow, 1 == norm, 2 == fast

    this.setSpeed = function(spd){
    	if(spd == 0){
    		this.arr = this.chars_slow;
    		this.x = 3;
    	}else if(spd == 1){
    		this.arr = this.chars;
    		this.x = 4;
    	}else if(spd ==2 ){
    		this.arr = this.chars_fast;
    		this.x = 5;
    	}

    }

    this.setDisplay = function(d){
    	this.hud = d;
    } 

    this.moveUp = function(){
    	this.y--;
    }

    this.moveDown = function(){
    	this.y++;
    }

	this.shoot = function() { 
		// if(!this.limit){
		if(shootType === 0){
			if(!this.b_spec){
		 	bullets.push( createBullet(this.x, this.y, 'right', 4, '$') ); //3
		 	}else{
		 		if(!this.limit){
		 			bullets.push( createBullet(this.x, this.y, 'split_r', 3, '$') );
		 			
		 			if(++this.l_cnt >= 3){
		 				this.limit = true;
		 				this.l_cnt = 0;
		 			}
		 		}

		 	}
		 //	this.bcnt++; if(this.bcnt > 15){this.limit = true;}
		}else if(shootType === 2){	
			if(!this.limit){		
				bullets.push( createBullet(this.x, this.y, 'bomb', 2, '$') );
				this.limit = true;
				}				
		}
	//}
	}

	this.energy = function(shootType, shoot, shield){
		 if(shoot && shootType === 1){
		 		if(this.laser > 0){
				 	if(++this.cnt%4 === 0){
		 			this.laser--; this.hud.laser = this.laser; this.hud.updateStr();
		 		}
		 	  }
		 	}else{
		 			if(this.laser < 10){
				 		if(++this.cnt%5 === 0){
		 				this.laser++; this.hud.laser = this.laser; this.hud.updateStr();
		 			}
		 		}
		 	}

		 if(shield){
		 		if(this.shield > 0){
				 	if(++this.cnt%4 === 0){
		 			this.shield--; this.hud.shield = this.shield; this.hud.updateStr();
		 		}
		 	  }
		 	}else{
		 			if(this.shield < 10){
				 		if(++this.cnt%5 === 0){
		 				this.shield++; this.hud.shield = this.shield; this.hud.updateStr();
		 			}
		 		}
		 	}

			if(this.b_spec)
			if(++this.s_cnt_m%20===0){
				this.s_cnt++;
				console.log(this.s_cnt);
			}
	}

	this.shootReset = function(){
		this.bcnt = 0;
		this.limit = false;
	}

	this.explode = function(){
		 if(this.payload){
		 	console.log(this.payload);
		 	this.payload = null;
		 	return;
		 }
		this.splode = true;
		console.log('i explod');
	}

	this.fadeIn = function(){
		this.fade = true;
		this.splode = true;
	}

	this.explodeChar = function(){
		if(this.fade){ return this.fadeChar(); }
	    this.cnt++;
	    if(this.cnt > 2000){ this.splode = false; this.cnt = 0; }
	    if(this.char == ''){ return ''; }
	    return String.fromCharCode(((this.cnt)%13)+33);
	}

	this.fadeChar = function(){
		this.cnt++;
		if(this.cnt > 2000){this.splode = false; this.fade = false; this.cnt = 0;}	
		if(this.cnt%40 == 0){ this.a = ++this.a%3; }
		if(this.char == ''){ return ''; }
		if(this.a == 0){ return '\\'; }
		else if(this.a == 1){ return '-'; }
		else if(this.a == 2){ return '/'; }
	}

    this.getChar = function(x,y){ 
       if(x < 7){
       		if(y == this.y-1){
       			this.char = this.arr[x];
             	return !this.splode ? this.char : this.explodeChar();
       		}
       		else if(y == this.y){
       			this.char = this.arr[x+7];
             	return !this.splode ? this.char : this.explodeChar();
       		}
       		else if(y == this.y+1){
       			this.char = this.arr[x+14];
             	return !this.splode ? this.char : this.explodeChar();
       		}
       		else return '';
       }
       else return '';
    }
}