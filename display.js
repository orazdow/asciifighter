
class Display{

	constructor(ship){

		this.ships = 3;
		this.bombs = 3;
		this.shield = 10;
		this.laser = 10;
		this.weapon = 0;
        this.updateStr();
        this.scene = new Scene();
        this.scenemode = 0;
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
		if(y < screenH-2){
			return null;
		}
		else if(y < screenH-1){
			return x < 78 ? this.arr[x-32] : null;
		}else{
		   return x > 30 ?  x < 85 ? this.arr[x+24] : null : null;
		}


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

	updateStr(){ //110 43 / 45
        this.str = `/ ships: ${this.shipStr()} bombs: ${this.bombStr()} gun: ${this.weaponStr(shootType)} \\
        / shield: ${this.shieldStr()} laser: ${this.laserStr()} hp: ||| \\`;
        this.arr = this.str.split('');		
	}

//  / ships: ^^^   bombs:    gun:  +  -- [<>] \
// / shield: -------- laser: --------  hp: ||| \

	// updateStr(){
 //        this.str = `/ ships: ${this.shipStr()} bombs: ${this.bombStr()} shield: ${this.shieldStr()} laser: ${this.laserStr()} gun: ${this.weaponStr(shootType)}\\`;
 //        this.arr = this.str.split('');		
	// }

	// updateStr(){

	// }

	weaponStr(t){
	if(t === 0)
	  return "[+] --  <> ";
	if(t === 1)
	  return " + [--] <> ";
	if(t === 2)
	  return " +  -- [<>]";
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
			case 10:
			return "----------";
			case 9:
			return "--------- ";
			case 8:
			return "--------  ";
			case 7:
			return "-------   ";
			case 6:
			return "------    ";
			case 5:
			return "-----     ";
			case 4:
			return "----      ";
			case 3:
			return "---       ";
			case 2:
			return "--        ";
			case 1:
			return "-         ";		
			case 0:
			return "          ";
		}
	}
	laserStr(){
		switch(this.laser){
			case 10:
			return "----------";
			case 9:
			return "--------- ";
			case 8:
			return "--------  ";
			case 7:
			return "-------   ";
			case 6:
			return "------    ";
			case 5:
			return "-----     ";
			case 4:
			return "----      ";
			case 3:
			return "---       ";
			case 2:
			return "--        ";
			case 1:
			return "-         ";		
			case 0:
			return "          ";
		}
	}

}