var mouseWasClicked = false;
var canvas;
var button;

function setup()
{
	canvas = createCanvas(1400,612);
	background(200);
	button = createButton("click me");
	button.position(40,40);
}

function draw()
{
	background(200);
	fill(250);
	strokeWeight(3);
	ellipse(mouseX,mouseY,20,20);
	if(mouseWasClicked == true)
	{
		//the event
		print("hello");
		ellipse(width/2,height/2,40,40); //this is how you get something get drawn
		//mouseWasClicked = false;		//when you click the mouse
	}									//all you gotta do is get the event		
}										//to be longer
										//if you have the mouseWasClicked = false
function mouseClicked()					//then the event will only happen whenever you
{										//click it
	mouseWasClicked = true;
}