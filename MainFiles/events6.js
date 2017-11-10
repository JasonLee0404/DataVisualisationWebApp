//now you can create the mouseOver effect by yourself


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
function draw() //draw only runs over and over again in your canvas
{
	background(100,100,100);
	fill(r,g,b);
	myTarget = new target(120,120,60,60);
	var d = dist(mouseX,mouseY,myTarget.x,myTarget.y);
	if(d < myTarget.height)
	{
		r = 250; //if you put your mouse inside the circle, color change
		g = 0;
		b = 0;
		drawsomething = true;
	}			  
	else
	{
		r = 0; //if you put your mouse ouside the circle
	}
	
	if(drawsomething == true)
	{
		text("hello",20,20);
		ellipse(40,400,60,60);
		drawsomething == false;
	}
	else // if drawsomething != true 
	{
		background(100,100,100);
		fill(r,g,b);
		myTarget = new target(120,120,60,60);
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