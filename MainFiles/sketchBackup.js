//type http-server to serve
//node js make you restart whenever you change source code
//installing nodemon, still doesnt know how to restart nodejs server?
//everytime you make changes, command + shift + R and reload it
//things to display: max temperature month, min temperature month, 
//mean daily sunshine, mean number of clear day/31 %, mean number of cloudy days %
//relative humidity
//day: max temp, min temp, rainfal, hottest day so far, average, coldest day so far

var table;
var canvas;
var button;
var button2;
var tableArray;	//each tableArray is a row
function preload()
{
	//if you put "header" here, it will skip the first row
	table = loadTable("data.csv","csv");
}
//setup() is used for static element
function setup()
{
	//circle to use for checking
	//ellipse(40,40,40,40);
	//canvas
	canvas = createCanvas(1400,612);
	
	//buttons
	button = createButton("Click here");
	button2 = createButton("Click here2");
	button.position(20,20);
	button2.position(20,40);
	//slider
	slider = createSlider(0, 255, 127);
	slider.position(20,60);
	//test
	reloadStyle();
	
	//dealing with data
	var tableArray = table.getArray();
	for (var i = 0; i < tableArray.length; i++)
		print(tableArray[i]);
    	print(tableArray[0][1]);
	
	
}

//draw is for dynamic elements
function draw()
{
	background(204);
	//App name
	displayAppName();
	displayMouse();

}
//function to get the mouse
function displayMouse()
{
	fill(250);
	strokeWeight(3);
	ellipse(mouseX,mouseY,10,10);
}
//function to reset the old style for text
function reloadStyle()
{
	textSize(20);
	textStyle(NORMAL);
}
//function to display app name
function displayAppName()
{
	textStyle(BOLD);
	textSize(44);
	fill(0);
	text("The WeatherRec", width/2-300,50);
}