function Thermostat(maxTemp,minTemp,currentTemp){
	//position, this is used to check for clicks
	//you have to determine this
	this.x = 20;
	this.y = 20;
	this.maxTemp = maxTemp;
	this.minTemp = minTemp;
	this.currentTemp = currentTemp;

	this.display = function(){
		//position
		//style
		translate(width/2,height/2);		//you gotta fix it so that the scale
		strokeWeight(2);					//does not change
		push();
		fill(250,0,0);
		ellipse(20,20,60,60);
		fill(0,250,0);
		//total length rect
		rect(20/2,0-10,20,-maxTemp*10);
		//overlap rect
		fill(250,0,0);
		rect(20/2,0-9,20,-currentTemp*3);
		//displaying marks
		pop();
  		textSize(14);
  		text("currentTemp: "+this.currentTemp,40,-this.currentTemp*3); //-120 here is same as -120 in rect
  		text("maxTemp: "+this.maxTemp,40,-200); //-200 here is same as -200 in rect
  		text("minTemp: "+this.minTemp,40,-10); //this is same as 0-10 in rect
	}


	this.clicked = function(){
		
		var d = dist(mouseX, mouseY, this.x, this.y);
		print(d);
		print(this.x);
		print(this.y);
		//this.x and this.y are 20, and counted from the original point of origin
		if(d < 120)
		{
			text("Hello",400,400);
		}
	}
}

//load data
var currentWeather;
var historicalWeather;
var img;
var mouseWasClicked = false;
var maxTemp;
var minTemp;
var currentTemp;
var myThermo;
var myCity = 'Adelaide'; //this is how you change an API call
var URL = 'http://api.openweathermap.org/data/2.5/weather?q='+myCity+'&APPID=864561043ef208d17d553c87f0e86b67&units=metric';
//create input in here to get the data about API calls
var input;
var button;
function preload()
{
	//if you put "header" here, it will skip the first row
	//currentWeather = loadJSON("");
	input = createInput();
	img = loadImage("Raining.jpg");
	historicalWeather = loadTable("data.csv","csv");
	currentWeather = loadJSON(URL);
	print(URL);
}




function setup()
{	
	maxTemp = currentWeather.main.temp_max;
	minTemp = currentWeather.main.temp_min;
	currentTemp = currentWeather.main.temp;
	myThermo = new Thermostat(maxTemp,minTemp,currentTemp);
  	canvas = createCanvas(1200,600);
  	background(200);
  	//for checking clicks
  	ellipse(60,60,120,120);
  	input = createInput();
  	input.position(40,220);
  	button = createButton('go');
  	button.position(input.x + input.width, input.y);
  	button.mousePressed(APIInput);
  	myThermo.display();
  	

}

function draw()
{
	
}

function APIInput()
{
	myCity = input.value();
	print(myCity);
	var URL = 'http://api.openweathermap.org/data/2.5/weather?q='+myCity+'&APPID=864561043ef208d17d553c87f0e86b67&units=metric';
	print(URL);
	currentWeather = loadJSON(URL);
}

