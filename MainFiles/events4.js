//if you place an object inside a draw loop, it will automatically
//draws it
var canvas;
var color;
var drawRect = false;

var myBarGraph;
function setup()
{
	canvas = createCanvas(1200,600);
	background(200);
	background(100,100,100);
	color = 100;

}

function draw()
{
	background(100,100,100);
	fill(color);
	ellipse(40,40,60,60);
	canvas.mouseOver(changeColor); //have events in draw loop always
	if(drawRect == true)
	{
		myBarGraph = new barGraph([100,20,35]);
		rect(140,140,60,60);	
	}
}

function changeColor()
{
	color = 250;
	drawRect = true;
}



function barGraph(data){

	this.w = width/data.length;
	this.h = random(50,200);

	for(var i=0; i<data.length; i++)
	{
		rect(20 + 30*i, 500, 20, -data[i]);
	}
}
