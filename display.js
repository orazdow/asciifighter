
class Display{

	constructor(ship){

		this.ships = 3;
		this.bombs = 3;
		this.shield = 5;
		this.laser = 5;
		this.weapon = 0;
        this.updateStr();
        this.scene = new Scene();
        this.scenemode = true;
        this.cnt = 0;
        //this.animate = true;


	}

	// getChar(x,y){
	// 	if(this.animate){
	// 			let c = this.scene.getChar(x,y);
	// 			if(y < screenH-1 ){
	// 				return c;
	// 			}
	// 			let c2 = (this.scenemode) ? null : this.arr[x-20]
	// 			return c || c2;
	// 	}
	// 	if(y < screenH-1){
	// 		return null;
	// 	}
	// 	else{
	// 		return this.arr[x-20];
	// 	}
	// }

	getChar(x,y){
		if(this.scenemode){
			return this.scene.getChar(x,y);
		}
		if(y < screenH-1){
			return null;
		}
		else{
			return this.arr[x-20];
		}
		// if(y < screenH-2){

		// }else{
		// 	if(y === screenH-2){

		// 	}
		// 	if(y === screenH-1){
				
		// 	}
		// }
	}

	anim(){
		if(this.scenemode){
			this.scene.anim();
			this.cnt++;  //<should be this.scene.timeout	
		}
		if(this.cnt > 110){ //<should be this.scene.timeout
			this.scenemode = false;
			//start level now...
		}
		// if(this.cnt > 130){
		// 	this.animate = false;
		// }
	}

	updateStr(){
        this.str = `/ ships: ${this.shipStr()} bombs: ${this.bombStr()} shield: ${this.shieldStr()} laser: ${this.laserStr()} gun: ${this.weaponStr(shootType)}\\`;
        this.arr = this.str.split('');		
	}

	// updateStr(){

	// }

	weaponStr(t){
	if(t === 0)
	  return "+ ";
	if(t === 1)
	  return "--";
	if(t === 2)
	  return "* ";
	}
	shipStr(){
		switch(this.ships){
			case 5:
			return "^^^^^";
			case 4:
			return "^^^^ ";
			case 3:
			return "^^^  ";
			case 2:
			return "^^   ";
			case 1:
			return "^    ";		
			case 0:
			return "     ";
		}
	}
	bombStr(){
		switch(this.bombs){
			case 5:
			return "*****";
			case 4:
			return "**** ";
			case 3:
			return "***  ";
			case 2:
			return "**   ";
			case 1:
			return "*    ";		
			case 0:
			return "     ";
		}
	}
	shieldStr(){
		switch(this.shield){
			case 5:
			return "-----";
			case 4:
			return "---- ";
			case 3:
			return "---  ";
			case 2:
			return "--   ";
			case 1:
			return "-    ";		
			case 0:
			return "     ";
		}
	}
	laserStr(){
		switch(this.laser){
			case 5:
			return "-----";
			case 4:
			return "---- ";
			case 3:
			return "---  ";
			case 2:
			return "--   ";
			case 1:
			return "-    ";		
			case 0:
			return "     ";
		}
	}

}