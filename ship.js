
function Ship(){

	this.y = 10;
	this.x = 4;
	this.splode = false;
	this.fade = false;
	this.cnt = 0;
	this.a = 0;
	this.char = 'n';
	
	this.chars = ['<','#','#','#','n','n','n',
 				  'n','#','#','#','#','>','n',
 				  '<','#','#','#','n','n','n'];

	this.chars_fast = ['<','<','#','#','#','n','n',
 			    	   'n','n','#','#','#','#','>',
 			    	   '<','<','#','#','#','n','n'];

	this.chars_slow = ['#','#','#','n','n','n','n',
 		    		   '#','#','#','#','>','n','n',
 			       	   '#','#','#','n','n','n','n',];

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

    this.moveUp = function(){
    	this.y--;
    }

    this.moveDown = function(){
    	this.y++;
    }

	this.shoot = function() {
		if(shootType == 1){
		  bullets.push( createBullet(this.x, this.y, 'right') );
		}
	}

	this.explode = function(){
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
	    if(this.char == 'n'){ return 'n'; }
	    return String.fromCharCode(((this.cnt)%13)+33);
	}

	this.fadeChar = function(){
		this.cnt++;
		if(this.cnt > 2000){this.splode = false; this.fade = false; this.cnt = 0;}	
		if(this.cnt%40 == 0){ this.a = ++this.a%3; }
		if(this.char == 'n'){ return 'n'; }
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
       		else return 'n';
       }
       else return 'n';
    }
}