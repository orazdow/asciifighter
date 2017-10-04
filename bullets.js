
function createBullet(_x, _y, _routine, _spd) {
	var tr = false;

	if(_routine == 'right'){
		tr = true;
	}

	var Bullet = {
	   x : _x,
	   y : _y,
	   cnt : 0,
	   toright : tr,
	   spd : _spd,
	   routine : _routine, 
	   remove : false, 
	   char : '$',

	   move : function(){
	   		switch (Bullet.routine){
	   			case 'left':
		   			Bullet.x -= Bullet.spd;
	   			break;

	   			case 'right':
		   			Bullet.x += Bullet.spd;
	   			break;

	   			case 'dup':
					Bullet.cnt++;
					Bullet.x -= Bullet.spd;
					if(Bullet.cnt % 3 === 0)
						Bullet.y -= 2;  
	   			break;

				case 'ddown':
					Bullet.cnt++;
					Bullet.x -= Bullet.spd;
					if(Bullet.cnt % 3 === 0)
						Bullet.y += 2;  
	   			break;

	   			case 'split':
			        Bullet.cnt++;
			        Bullet.x -= Bullet.spd;
			        if(Bullet.cnt === 10 ){
			          Bullet.split(); 
			        }
	   			break;

	   			case 'bomb':
	   				Bullet.cnt++;
	   				Bullet.x += 2;
	   				if(Bullet.cnt === 20){
	   					createBomb(Bullet.x, Bullet.y);
	   					Bullet.remove = true;
	   				}
	   			break;

	   			case 'dup2':
					//Bullet.cnt++;
					Bullet.x -= Bullet.spd;
					//if(Bullet.cnt % 3 == 0)
						Bullet.y -= 2;  
	   			break;

				case 'ddown2':
					//Bullet.cnt++;
					Bullet.x -= Bullet.spd;
					//if(Bullet.cnt % 3 == 0)
						Bullet.y += 2;  
	   			break;
	   		}
	   },
	   offScreen : function(){
	      if(Bullet.x > screenW || Bullet.x < 0){
	        return true;
	      }
	      else if(Bullet.y > screenH || Bullet.y < 0){
	        return true;
	      }
	      else{ return false; }
	   },
	   check : function (x, y) {
	     if(x === Bullet.x && y === Bullet.y){
	      return true;
	    } else {return false;}
	   },
	   split : function () { 
	    bullets.push(createBullet(Bullet.x+3, Bullet.y, 'dup'));
	    bullets.push(createBullet(Bullet.x+3, Bullet.y, 'ddown'));
	   }

	};

		return Bullet;
}