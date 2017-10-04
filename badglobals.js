
/*
straight 
straight_down 
straight_down_up 
straight_down_up_down 
straight_down_stop_straight 
straight_down_stop_up 
straight_down_stop_shallowdown 
straight_down_down_up 
straight_stop_down 
straight_stop_down_up 
straight_stop_down_stop_up 
straight_stop_down_up_stop_up 
straight_down_up_stop_up 
straight_down_up_stop_down 
down 
down_up 
down_shallowdown 
shallowdown_down 
down_down_up 
down_up_down 
down_stop_up 
down_down_stop_up 
down_up_stop_shallowdown 
down_stop_up_down 
down_straight_up 
down_straight_up_stop_up 
*/

/* models */

var bchars_a = ['@','n','@',
				'n','@','n',
				'@','n','@'];

var bchars_b = ['n','{','n',
				'{','{','{',
				'n','{','n'];

var bchars_c = ['n','%','n',
				'%','n','n',
				'n','%','n'];

// not using for now
// hard coded preset funcs faster.....

// ['straight', 'down', 'stop', 'up']

/*
function globalmvCb(moves){
	this.mcnt++; 
	if(this.mcnt <= 0){return;}
	if(this.mcnt%16 === 0){this.mode++;}
	for (var i = 0; i < moves.length; i++){
		if(this.mode === i){
			move[moves[i]](this);
			return;
		}
	}
	if(this.mode >= moves.length){
		move[moves[moves.length-1]](this);
	}
}

var move = {
	'straight' : function(t){
		t.x -= speed+t.spd;
	},
	'down' : function(t){
		t.x -= speed+t.spd;
		if(t.mcnt%2 == 0){ t.y += t.ycoef; }
	},
	'up' : function(t){
		t.x -= speed+t.spd;
		if(t.mcnt%2 == 0){ t.y -= t.ycoef; }
	},
	'stop' : function(t){

	},
	'shallowup' : function(t){
		t.x -= speed+t.spd;
		if(t.mcnt%3 == 0){ t.y -= 0.5*t.ycoef; }
	},
	'shallowdown' : function(t){
		t.x -= speed+t.spd;
		if(t.mcnt%3 == 0){ t.y += 0.5*t.ycoef; }
	},
};
*/


/* move routines */

function straight(){
	this.mcnt++;
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}
}


function straight_down(){
	this.mcnt++;
	this.x -= speed+this.spd
	if(this.mcnt%16 == 0){this.mode++;}
	if(this.mode > 0){
		if(this.mcnt%2 ==0){ this.y += this.ycoef }
	}
}

function straight_down_up(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}
	if(this.mode == 1){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode > 1){
		if(this.mcnt%2 == 0){ this.y -= this.ycoef; }
	}	
}

function straight_down_stop_straight(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}
	if(this.mode == 1){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode == 2){
		this.x +=speed+this.spd;
	}	
}

function straight_down_up_down(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}
	if(this.mode == 1){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode == 2){
		if(this.mcnt%2 == 0){ this.y -= this.ycoef; }
	}else if(this.mode > 2){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}		
}

function straight_down_stop_up(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}
	if(this.mode == 1){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode == 2){
		this.x +=speed+this.spd;
	}else if(this.mode > 2){
		if(this.mcnt%2 == 0){ this.y -= this.ycoef; }
	}		
}

function straight_stop_down(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}
	if(this.mode == 1){
		this.x +=speed+this.spd;
	}else if(this.mode > 1){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}
}

function straight_stop_down_up(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}
	if(this.mode == 1){
		this.x +=speed+this.spd;
	}else if(this.mode == 2){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode > 2){
		if(this.mcnt%2 == 0){ this.y -= this.ycoef; }
	}
}

function straight_down_stop_shallowdown(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}
	if(this.mode == 1){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode == 2){
		this.x +=speed+this.spd;		
	}else if(this.mode > 2){
		if(this.mcnt%2 == 0){ this.y += 0.5*this.ycoef; }
	}	
}

function straight_down_up_stop_up(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}	
	if(this.mode == 1){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode == 2){
		if(this.mcnt%2 == 0){ this.y -= this.ycoef; }
	}else if(this.mode == 3){
		this.x += speed+this.spd;
	}else if(this.mode > 3){
		if(this.mcnt%2 == 0){ this.y -= this.ycoef; }
	}
}

function straight_down_up_stop_down(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}	
	if(this.mode == 1){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode == 2){
		if(this.mcnt%2 == 0){ this.y -= this.ycoef; }
	}else if(this.mode == 3){
		this.x += speed+this.spd;
	}else if(this.mode > 3){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}
}


function straight_down_down_up(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}	
	if(this.mode == 1){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode == 2){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode > 2){
		if(this.mcnt%2 == 0){ this.y -= this.ycoef; }
	}	
}

function straight_stop_down_stop_up(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}
	if(this.mode == 1){
		this.x +=speed+this.spd;
	}else if(this.mode == 2){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode == 3){
		this.x +=speed+this.spd;
	}else if(this.mode > 3){
		if(this.mcnt%2 == 0){ this.y -= this.ycoef; }
	}	
}

function straight_stop_down_up_stop_up(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}
	if(this.mode == 1){
		this.x +=speed+this.spd;
	}else if(this.mode == 2){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode == 3){
		if(this.mcnt%2 == 0){ this.y -= this.ycoef; }
	}else if(this.mode == 4){
		this.x +=speed+this.spd;
	}else if(this.mode > 4){
		if(this.mcnt%2 == 0){ this.y -= this.ycoef; }
	}
}

function down(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd
	if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	if(this.mcnt%16 == 0){this.mode++;}
}

function down_up(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}
    if(this.mode == 0){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else{
	if(this.mcnt%2 == 0){ this.y -= this.ycoef; }		
	}
}

function down_up_down(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}
	if(this.mode == 0){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode == 1){
		if(this.mcnt%2 == 0){ this.y -= this.ycoef; }
	}else if(this.mode > 1){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }		
	}
}

function down_shallowdown(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}
   	if(this.mode == 0){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode == 1){
		if(this.mcnt%2 == 0){ this.y += 0.5*this.ycoef; }		
	}else if(this.mode > 1){
		if(this.mcnt%3 == 0){ this.y += 0.5*this.ycoef; }		
	}
}

function shallowdown_down(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}
   	if(this.mode == 0){
		if(this.mcnt%3 == 0){ this.y += 0.5*this.ycoef; }			
	}else{
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }		
	}
}

function down_down_up(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}
	if(this.mode == 0){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode == 1){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else{
		if(this.mcnt%2 == 0){ this.y -= this.ycoef; }
	}
}


function down_down_stop_up(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}
	if(this.mode == 0){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode == 1){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode == 2){
		this.x += speed+this.spd;
	}else{
		if(this.mcnt%2 == 0){ this.y -= this.ycoef; }
	}	
}

function down_up_stop_shallowdown(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}
	if(this.mode == 0){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode == 1){
		if(this.mcnt%2 == 0){ this.y -= this.ycoef; }
	}else if(this.mode == 2){
		this.x += speed+this.spd;
	}else{
		if(this.mcnt%2 == 0){ this.y += 0.5*this.ycoef; }
	}		
}

function down_stop_up_down(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}
	if(this.mode == 0){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode == 1){
		this.x += speed+this.spd;
	}else if(this.mode == 2){
		if(this.mcnt%2 == 0){ this.y -= this.ycoef; }
	}else{
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }	
	}	
}

function down_straight_up(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}
	if(this.mode == 0){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode == 1){
		
	}else{
		if(this.mcnt%2 == 0){ this.y -= this.ycoef; }
	}		
}

function down_straight_up_stop_up(){
	this.mcnt++; if(this.mcnt <= 0){return;}
	this.x -= speed+this.spd;
	if(this.mcnt%16 == 0){this.mode++;}
	if(this.mode == 0){
		if(this.mcnt%2 == 0){ this.y += this.ycoef; }
	}else if(this.mode == 1){
		
	}else if(this.mode == 2){
		if(this.mcnt%2 == 0){ this.y -= this.ycoef; }
	}else if(this.mode == 3){
		this.x += speed+this.spd;
	}else{
		if(this.mcnt%2 == 0){ this.y -= this.ycoef; }
	}		
}

/* shoot routines */

// function shoot1(){
// 	bullets.push(createBullet(this.x-1, this.y, 'left'));
// }

// function shoot_9(){
// 	if(this.mcnt%9 == 0){
// 		bullets.push(createBullet(this.x-1, this.y, 'left'));
// 	}
// }

// function shoot_15_4(){
// 	if(this.mode == 1 || this.mode == 3)
// 	if(this.mcnt%20 < 1){
// 		bullets.push(createBullet(this.x-1, this.y, 'left'));		
// 	}
// }
