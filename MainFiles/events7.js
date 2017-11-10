//this file demonstrate how to use mouseOver event to create tooltips
var rectX,rectY;
var circleX,circleY;
var rectSize = 90;
var circleSize = 93;

var rectColor;
var circleColor;
var baseColor;
var rectOver = false;
var circleOver = false;

function setup()
{
	createCanvas(640,360);
	background(200);
	rectColor = color(0);
	circleColor = color(255);
	baseColor = color(102);
	circleX = width/2 + circleSize/2 + 10;
	circleY = height/2;
	rectX = width/2 - rectSize - 10;
	rectY = height/2 - rectSize/2;
	ellipseMode(CENTER);
}

function draw()
{
	//a function that update the canvas, based on mouseX and mouseY
	update(mouseX,mouseY);

	noStroke();

	if(rectOver == true)
	{
		background(rectColor);
	}
	else if(circleOver == true)
	{
		background(baseColor);      //so this is how you create toolbox events
		fill(250,0,0);
		text("humidity: 20",20,20);
		rect(50,50,40,40);
	}
	else
	{
		background(baseColor);
	}


	//the square
	stroke(255);
	fill(rectColor);
	rect(rectX,rectY,rectSize,rectSize);

	//the ellipse
	stroke(0);
	fill(circleColor);
	ellipse(circleX,circleY,circleSize,circleSize);

}

//so this update function updates the status of mouseX and mouseY after every
//draw iterate
function update(x,y)
{
	if( mouseOverCircle(circleX,circleY,circleSize) == true)
	{
		circleOver = true;
		rectOver = false;
	}
	else if( mouseOverRect(rectX,rectY,rectSize,rectSize) == true)
	{
		rectOver = true;
		circleOver = false;
	}
	else //not in either circle or rect
	{
		circleOver = false;
		rectOver = false
	}
}

function mouseOverRect(x,y,width,height)
{
	if(mouseX >= x && mouseX <= x+width && mouseY >= y && mouseY <= y+height)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function mouseOverCircle(x,y,diameter)
{
	var disX = x - mouseX; //the problems lie here
	var disY = y - mouseY; //but why dist doesntwork 

	if(sqrt(sq(disX) + sq(disY)) < diameter/2)
	{
		return true;
	}
	else
	{
		return false;
	}
}