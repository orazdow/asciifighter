
class Scene{
	constructor(){

	this.art =
"         _____ _______________________________________________________       \n\
        / /- |/  ___// ___/| || | --  / __/| / __/| || |_  __/  _/|   \\      \n\
       / / - |\\ \\__ / /    | || | -- / /_| || |   | || | | | | |_ | |\\ \\     \n\
      / /  | | \\__ \\\\ \\    | || | - / ____/|| |   | -  | | | | __|| |_| |    \n\
     / /   | | ___\\ \\\\ \\__ | || |  / /   | || |_|\\| || | | | | |_ |    /     \n\
    / /    |_|/_____/ \\___\\| || | / /    |_| \\___/| || | | |  \\__\\| |\\ \\     \n\
   / /      -  ----    ---  -  - /-/      -   ---  -  -  | |   -- | | \\_\\    \n\
   ---------  -------  ---- -- ---- ---  --- ----- -----  \\|-- --- -- ---    \n\
   --------------------------------------------------------------------------";

	this.artArr = this.parseStr(this.art);

	this.yoffs = 50;
	this.xoffs = -15;
	this.yf = [0,0,0,0,0,0,0,0,0];
	this.n = -15;
	this.nn = 0;
	}

	parseStr(str){
		let arr = str.split('\n');
		arr.forEach((el, i)=>{
			arr[i] = el.split('');
		});
		return arr;
	}

	anim(){
		if(this.yoffs > 14){
			this.yoffs--;
		}else{
			this.nn++;
			this.spread(this.n++);
		}
	}

	spread(n){
		for(let i = 0; i < 4; i++){
			if( n > i*5)
				this.yf[i]-=((4-i)+1);
		}
		for(let i = 0; i <= 4; i++){
				if( n+18 > (4+(4-i))*5)
			this.yf[i+4]+=((i+2));
		}		
	}

	getChar(x,y){
		return this.getArt(x,y);
	}

	blinds(x,y,l1,l2,n){
		if(y <= l1-n){
			return '&';
		}
		else if(y > l2+n){
			return '&';
		}else{
			return '';
		}	
	}

	getArt(x,y){

		if(y === (0+this.yoffs)){
			return this.artArr[0][(x+this.xoffs)+this.yf[0]];
		}
		else if(y === (1+this.yoffs)){
			return this.artArr[1][(x+this.xoffs)+this.yf[1]];
		}		
		else if(y === (2+this.yoffs)){
			return this.artArr[2][(x+this.xoffs)+this.yf[2]];
		}
		else if(y === (3+this.yoffs)){
			return this.artArr[3][(x+this.xoffs)+this.yf[3]];
		}		
		else if(y === (4+this.yoffs)){
			return this.artArr[4][(x+this.xoffs)+this.yf[4]];
		}
		else if(y === (5+this.yoffs)){
			return this.artArr[5][(x+this.xoffs)+this.yf[5]];
		}		
		else if(y === (6+this.yoffs)){
			return this.artArr[6][(x+this.xoffs)+this.yf[6]];
		}
		else if(y === (7+this.yoffs)){
			return this.artArr[7][(x+this.xoffs)+this.yf[7]];
		}		
		else if(y === (8+this.yoffs)){
			return this.artArr[8][(x+this.xoffs)+this.yf[8]];
		}
		else{
			return this.blinds(x,y,this.yoffs,this.yoffs+8,this.nn)
		}
	}
}

