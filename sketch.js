let i=0;
function setup(){
	createCanvas(1000,600);
	frameRate(2);
}
function draw(){
	background(51);
	draw_dots();
	draw_hour();
	draw_minutes();
}

function draw_dots(){
	if(i == 0){
	fill(200,100,50);
	rect(475,275,25,25);
	rect(475,325,25,25);
	i=1;
}else{
	i=0;
}
}

function draw_hour(){
	let h = hour();
	let x = Math.floor(h/10);
	draw_number(x,-125);
	draw_number(h%10,0);
}

function draw_minutes(){
	let m = minute();
	let x = Math.floor(m/10);
	draw_number(x,200);
	draw_number(m%10,325);
}

function draw_number(number, offset){
	switch(number){
		case 0:
		rect(350+offset,225,50,25); //a
		rect(400+offset,250,25,50); //b
		rect(400+offset,325,25,50); //c
		rect(350+offset,375,50,25); //d
		rect(325+offset,325,25,50); //e
		rect(325+offset,250,25,50); //f
			break;
		case 1:
		rect(400+offset,250,25,50); //b
		rect(400+offset,325,25,50); //c
			break;
		case 2:
		rect(350+offset,225,50,25); //a
		rect(400+offset,250,25,50); //b
		rect(350+offset,375,50,25); //d
		rect(325+offset,325,25,50); //e
		rect(350+offset,300,50,25); //g
			break;
		case 3:
		rect(350+offset,225,50,25); //a
		rect(400+offset,250,25,50); //b
		rect(400+offset,325,25,50); //c
		rect(350+offset,375,50,25); //d
		rect(350+offset,300,50,25); //g
				break;
		case 4:
		rect(400+offset,250,25,50); //b
		rect(400+offset,325,25,50); //c
		rect(325+offset,250,25,50); //f
		rect(350+offset,300,50,25); //g
				break;
		case 5:
		rect(350+offset,225,50,25); //a
		rect(400+offset,325,25,50); //c
		rect(350+offset,375,50,25); //d
		rect(325+offset,250,25,50); //f
		rect(350+offset,300,50,25); //g
				break;
		case 6:
		rect(350+offset,225,50,25); //a
		rect(400+offset,325,25,50); //c
		rect(350+offset,375,50,25); //d
		rect(325+offset,325,25,50); //e
		rect(325+offset,250,25,50); //f
		rect(350+offset,300,50,25); //g
				break;
		case 7:
		rect(350+offset,225,50,25); //a
		rect(400+offset,250,25,50); //b
		rect(400+offset,325,25,50); //c
				break;
		case 8:
		rect(350+offset,225,50,25); //a
		rect(400+offset,250,25,50); //b
		rect(400+offset,325,25,50); //c
		rect(350+offset,375,50,25); //d
		rect(325+offset,325,25,50); //e
		rect(325+offset,250,25,50); //f
		rect(350+offset,300,50,25); //g
				break;
		case 9:
		rect(350+offset,225,50,25); //a
		rect(400+offset,250,25,50); //b
		rect(400+offset,325,25,50); //c
		rect(325+offset,250,25,50); //f
		rect(350+offset,300,50,25); //g
				break;
	 }
}
