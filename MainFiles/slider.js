var bgcolor;
var canvas;
var slider;

function setup()
{
	canvas = createCanvas(1200,600);
	bgcolor = color(200);
	slider = createSlider(1,12,6);
	slider.position(20,70);
	
}

function draw()
{
	background(200);
	print(slider.value());
	rect(40,40,slider.value()*20,slider.value()*40); //this is how you set up your time chart
	//test timeline

	if(slider.value()<6)   //this is how you can create animation
	{					   //draw a different image with the same background()
		rect(width/2,height/2,slider.value()*20,slider.value()*20)
	}
	else
	{
		background(200);
		rect(width/2 + 500,height/2,slider.value()*20,slider.value()*20)
	}
}