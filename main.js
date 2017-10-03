
var art_1 = [' ',' ',' ', '.' , '`', '/', '^', '*' ,'e', '0'];
var display = document.getElementById('disp');
var bkgd = art_1;
var a = 0;
var str = ""; 
var terrainSpeed = 0.1;
var speed = 1;

var goup = false, godown = false;
var shoot = false;
var shootType = 1;  // 0 == beam, 1 == bullets
var movebads = false;
var badShoot = false;

var screenW = 100;
var screenH = 50;
var bulletchar = '$';
const ship = new Ship();

var bullets = [];
var bads = [];

// var rec = false;
// var perf = [];
// var average = 0;
// function avg(arr){
// 	return arr.reduce((a,b)=>{
// 		return a + b;
// 	}) / arr.length;
// }

bads.push(new Bad());

window.setInterval(function(){ drawAscii(bkgd, display); }, 50);


document.addEventListener('keydown', function(event) {
    if(event.keyCode == 32) { //space
        shoot = true;
    }
    if(event.keyCode == 16) { //shift
    	shootType = (shootType+1)%2;
    }
    if(event.keyCode == 38) { //up
       goup = true;
       godown = false;
    }
    else if(event.keyCode == 40) { //down
       godown = true;
       goup = false;
    }
    if(event.keyCode == 37) { //left
    	speed = 0;
    	ship.setSpeed(0);
    	terrainSpeed = 0.06;
    }
    else if(event.keyCode == 39) { //right
    	speed = 2;
    	ship.setSpeed(2);
    	terrainSpeed = 0.15;
    }
    if(event.keyCode == 65) { //a
       badShoot = true;
    }
    if(event.keyCode == 90){ //z
       movebads = true;
    }
    if(event.keyCode == 81){ //q
    	bads = [];
    	bads.push(new Bad());
    }
    if(event.keyCode == 87){ //w
       /////////////
       rec = !rec;
    }
    if(event.keyCode == 83){ //s
    	badShoot = !badShoot;
    }
    if(event.keyCode == 69){ //e
    	average = avg(perf);
    	console.log(average);
    }
});

document.addEventListener('keyup', function(event) {
    if(event.keyCode == 32) {
       shoot = false;
   }
    else if(event.keyCode == 38) {
       goup = false;
      
    }
    else if(event.keyCode == 40) {
        godown = false;
    }
    else if(event.keyCode == 37) {
    	speed = 1;
    	ship.setSpeed(1);
    	terrainSpeed = 0.1;
    }
    else if(event.keyCode == 39) {
    	speed = 1;
    	ship.setSpeed(1);
    	terrainSpeed = 0.1;
    }
    if(event.keyCode == 65) { 
       badShoot = false;
    }
    if(event.keyCode == 90){
       movebads = false;
    }
});

function noNaN(x){
	if( isNaN(x) ){ 
		return 0;
	}else{
		return x;
	}
}

function moveShip(){
	if(goup){
		ship.moveUp();
	}else if(godown){
		ship.moveDown();
	}
}

function moveBullets(){
	for (var i = bullets.length-1; i >= 0; i--) {
		
		bullets[i].move(); 
        
        if(bullets[i].toright){ //badsplode
			for (var j = 0; j < bads.length; j++) {
				if( bullets[i].x >= bads[j].x && bullets[i].x < bads[j].x+3){
					if( bullets[i].y >= bads[j].y-1 && bullets[i].y <= bads[j].y+1 ){
						bads[j].explode(); bullets[i].remove = true;
					}
				}
			}
		}else{  //shipsplode
			if(bullets[i].x <= ship.x)
				if(bullets[i].y >= ship.y-1 && bullets[i].y <= ship.y+1){
					ship.explode(); bullets[i].remove = true;
				}
		}

		if (bullets[i].remove || bullets[i].offScreen() || bullets[i].rmv){
			bullets.splice(i, 1);
		}
	}
}

function laser(){
	if(shootType == 0)
	for (var i = 0; i < bads.length; i++) {
		if( bads[i].y+1 >= ship.y && bads[i].y-1 <= ship.y ){
			bads[i].explode();
		}
	}

}

function checkBullets(x, y) {
    for (var i = 0; i < bullets.length; i++) {
	  if( bullets[i].check(x,y) ){ 
	  	return bullets[i].char; 
	  } 
	}
	return 0;
}

function checkShips(x, y) {
   var rtn = 'n';
  for (var i = bads.length-1; i >= 0; i--) {
  		if( (rtn = bads[i].getChar(x,y)) != 'n'){
  			return rtn;
  		}
	}
  return rtn;
}

function moveBads(){
	for(var i = 0; i < bads.length; i++){
		  	if(movebads)
  			bads[i].move();

  		if( bads[i].x <= ship.x+1 && bads[i].x+3 > 0)
		if( bads[i].y+1 >= ship.y-1 && bads[i].y-1 <= ship.y+1){
			ship.explode();
		}
	}
}

function bads_shoot(){
	for (var i = 0; i < bads.length; i++) {
		bads[i].shoot();
	}
}


function drawAscii(arr, disp){

	str = ""; 
	var c = 'n';
	a += terrainSpeed;
	moveShip();
	moveBads();
	moveBullets();
	if(badShoot){ bads_shoot(); } // <<<<< will need to be replaced
	if(shoot){if(shootType == 1){ ship.shoot(); }else{ laser(); }}
	
	for(var y = 0; y < 50; y++) { 
		 for(var x = 0; x < 100; x++) {
       // let t1 = performance.now();
	        if((c = ship.getChar(x,y)) != 'n'){
	        	str += c;
	        }
	        else if((c = checkShips(x,y)) != 'n'){
	        	str += c;
	        }
	  		else if((c = checkBullets(x,y))){
	 			str += c
			}
			else if (shoot && shootType == 0 && y == ship.y && x > 4){ 
				str += '-';
			}
	        else{
	   	    str += arr[Math.round((noise.perlin2(a+x/60, y/30)+1)*0.5*arr.length)]; 
	   	    }
	   	    // if(rec)
	   	    // perf.push(performance.now()-t1);
	 	 }
	   str += '\n';
	  }
 	 disp.innerHTML = str;
}



