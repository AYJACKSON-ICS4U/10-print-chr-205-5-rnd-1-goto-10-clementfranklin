let x = 0;
let y = 0;
let spacing = 50;

function setup() {
	createCanvas(400,400);
	background(0,255,245);
}
function draw() {
	stroke(0);
	
	if(random(1)<0.5){
		line(x,y,x+spacing,y+spacing);
	}else{
			line(x, y + spacing, x + spacing, y);

	}
	x = x + spacing;
	if(x > width){
		x=0;
		y=y+spacing;
	}
}
