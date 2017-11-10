var canvas;   //you need to distinguish things that happens
var r = 0;   //inside and outside of your canvas
var g = 0;
var b = 0;
var myTarget;    //does mouseOver works for elements that
var nameP;		 //are not HTML/DOM elements
var display = false;
var drawsomething = false;
function setup()
{
	canvas = createCanvas(1200,600);

}

//now you can create the mouseOver effect by yourself
function draw() {
	clear(); // Make sure we clear the previous frame before drawing anything new
  	background(100,100,100);
	fill(r,g,b);
	myTarget = new target(120,120,20,20);
	var d = dist(mouseX,mouseY,myTarget.x,myTarget.y);

	var drawSomething = d < myTarget.height;
	if (drawSomething) {
		r = 250;
		g = 0;
		b = 0;

		text("hello",20,20);
		ellipse(40,400,60,60);
		rect(20,20,20,20);
	}
	else {
		r = 0;
	}
}

function target(x,y,width,height)
{
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	ellipse(this.x,this.y,this.width,this.height);
}