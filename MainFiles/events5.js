var canvas;   //you need to distinguish things that happens
var color;   //inside and outside of your canvas
var myTarget;    //does mouseOver works for elements that
var nameP;		 //are not HTML/DOM elements
var display = false;
function setup()
{
	canvas = createCanvas(1200,600);
	nameP = createP('hello');
	nameP.position(20,20);  //you can move around the html elements
}

function draw() //draw only runs over and over again in your canvas
{
	background(100,100,100);
	myTarget = new target(120,120,60,60);
	
	nameP.mouseOver(displayRect);
	if(display == true)
	{
		rect(160,160,50,50);
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

function displayRect()
{
	display = true;
}

//Instead of using mouseOver, you can just use dist + mouseX and mouseY to manually 
//check for the distance and implement the logic behind mouseOver
