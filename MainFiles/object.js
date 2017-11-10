var circle = {
	x:120,
	y:200,
	diameter:50,
	display: function(){
		stroke(255);
		strokeWeight(4);
		noFill();
		ellipse(this.x,this.y,24,24);
	},

	move: function(){
		this.x = this.x + random(-1,1);
		this.y = this.y + random(-1,1);
	}
};

var r = 218;
var g = 160;
var b = 221;

function setup()
{
	createCanvas(600,400);
}

function draw()
{
	background(r,g,b);
	//ellipse
	//fill(250,200,200);
	//ellipse(circle.x,circle.y,circle.diameter,circle.diameter);
	circle.display();
	circle.move();
	//circle.x = circle.x + 1;
}