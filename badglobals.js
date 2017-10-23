
/* models */

var bchars_a = ['@','','@',
				'','@','',
				'@','','@'];

var bchars_b = ['','{','',
				'{','{','{',
				'','{',''];

var bchars_c = ['','%','',
				'%','','',
				'','%',''];

var bchars_d = ['','[','[',
				'[','','',
				'','[','['];

var bchars_e = ['','<','>',
				'<','>','',
				'','<','>'];
/*
moveCb:
straight = 0, up = 1, down = 2, stop = 3, shup = 4, shdown = 5
*/

function globalmvCb(moves){
	this.mcnt++; 
	if(this.mcnt <= 0){return;}
	if(this.mcnt%16 === 0){this.mode++;}	
	for (var i = 0; i < moves.length; i++){
		if(this.mode === i){
			
        switch(moves[i]){
        	case 0: //straight
			this.x -= speed+this.spd;
        	break;
        	case 1: //up
			this.x -= speed+this.spd;
			if(this.mcnt%2 === 0){ this.y -= 2; }
        	break;
        	case 2: //down
			this.x -= speed+this.spd;
			if(this.mcnt%2 === 0){ this.y += 2; }
        	break;
        	case 3: //stop
        	//
        	break;
        	case 4: //shallow up
			this.x -= speed+this.spd;
			if(this.mcnt%3 === 0){ this.y -= 1; }
        	break;
        	case 5: //shallow down
			this.x -= speed+this.spd;
			if(this.mcnt%3 === 0){ this.y += 1; }
        	break;
        } 
			return;
		}
	}
	if(this.mode >= moves.length){
        switch(moves[moves.length-1]){
        	case 0:
			this.x -= speed+this.spd;
        	break;
        	case 1:
			this.x -= speed+this.spd;
			if(this.mcnt%2 === 0){ this.y -= 2; }
        	break;
        	case 2:
			this.x -= speed+this.spd;
			if(this.mcnt%2 === 0){ this.y += 2; }
        	break;
        	case 3:
        	//
        	break;
        	case 4:
			this.x -= speed+this.spd;
			if(this.mcnt%3 === 0){ this.y -= 1; }
        	break;
        	case 5:
			this.x -= speed+this.spd;
			if(this.mcnt%3 === 0){ this.y += 1; }
        	break;
        }
	}
}
