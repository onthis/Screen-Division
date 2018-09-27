var height
var width

function setup() {
	height = 600;
	width = 500;
	createCanvas(height,width);

  // put setup code here
}

function draw() {
	if (mouseY <= (height/3) && mouseX <= (width/2)){
		background(0,0,255);
	}

	if (mouseY > (height/3) && mouseX <= (width/2)){
		background(0,255,0);
	}

	if (mouseX > (width/2) && mouseX < (width-100)){
		background(255,0,0);
	}

	if (mouseX > (width-100)){
		background(200,100,0);
	}

	if (mouseX == (width-100)){
		background(0);
	}
  // put drawing code here
}