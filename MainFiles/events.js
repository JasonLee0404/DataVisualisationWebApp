//because you keep drawing background over and over again, so you cant see 
//the image
//if you want interactions not using animation, best way is to not use draw at all
//you dont even need to have mousePressed or mouseOver, if there is nothing you wanna do
//you can also tie draw and setup as a callback
//it is up to you to define what does it mean to reset a sketch
//you can define resetSketch, and call it again in setup() so that you can get away
//with events
//whatever code you use a lot, you write a seperate function for it
//write a diagram for events
//you should create objects, and have only activate so that it runs

//so what you can do is, have seperate function and sketches to handle different events
//now you gotta figure out the relationship between draw and that
//discriminate different events. mouseClicked() is totally different from mousePressed()
var canvas;
var button;
//run once at the start
function setup()
{
	canvas = createCanvas(1400,612);
	background(204);
	button = createButton("click me");
	button.position(40,40);
	button.mousePressed(change);
	button.mouseClicked(change2);
	//button.mouseReleased(unchange)
}
//run over and over again
function draw()
{
	
}
//run once everytime the mouse is pressed

function change()
{
	ellipse(width/2,height/2,40,40);	
}

function change2()
{
	fill(100,200,50);
	ellipse(width/2,height/2,140,140);
}
