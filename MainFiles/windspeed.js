var canvas;
var img1;
var img2;
var img3;
var img4;
function setup()
{
	canvas = createCanvas(1200,600);
	img1 = loadImage("wind.png");
	img2 = loadImage("pressure.png");
}

function draw()
{
	background(0);
	arc(width/2, height/2, 40, 40, 0, PI, PIE);
	fill(0,250,0);
	image(img1, 0, 20, img1.width/4, img1.height/4);
	image(img2, 0, height/2, img2.width/4, img2.height/4);
}