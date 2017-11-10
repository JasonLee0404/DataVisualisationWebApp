//This is map.js, used to create a 2D map with P5.js, using API
//from MapBox
var mapimage;
var slider;
var button;
var xcord = -20;
var ycord = -20;
function preload()
{
	mapimage = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoiYTE3MDE3MjkiLCJhIjoiY2o3eTRzem9xNDJydDJ3cXJ4Y2d0eHBoeCJ9.BkKX2X6_3S-_4qgzPXdoow')
}

function setup()
{
	createCanvas(1024,512);
	image(mapimage,0,0);
	fill(20,250,120);
	slider = createSlider(0, 255, 127);
	button = createButton("Click here");
}

function draw()
{
	xcord = -20;
	ycord = -20;
	image(mapimage,0,0);
	ellipse(mouseX,mouseY,20,20);
	console.log("Hello World");
	ellipse(xcord,ycord,20,20);
}

function mousePressed()
{
	fill(250);
	xcord = 100;
	ycord = 100;
	//so it executes down here, but you have to use javascript syntax
	
}