//this file is dedicated to creating a humidity visualisation

var data = 17;
var data2 = 30;
var data3 = 9;
var canvas;
//-------------------------preload function & variables

var currentWeather;
var historicalWeather;
var img;
function preload()
{
	//if you put "header" here, it will skip the first row
	//currentWeather = loadJSON("");
	img = loadImage("Raining.jpg");
	historicalWeather = loadTable("data.csv","csv");
	currentWeather = loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Adelaide&APPID=864561043ef208d17d553c87f0e86b67&units=metric');
}

function setup()
{
	canvas = createCanvas(1200,600);
  	background(200);
  	//noFill();
  	noStroke();
  	fill(0,0,250);
  	arc(width/2, height/2, 240, 240, 0, PI, PIE);
  	//triangle, now all you gotta do is adjusting the coordinates
  	triangle(width/2-120,height/2,width/2,height/2-240,width/2+120,height/2);
  	//240 left is how wide
  	//240 right is how tall
  	//x and y are position
  	textStyle(BOLD);
  	textSize(40);
  	fill(0);
  	text(currentWeather.main.humidity+"%",width/2-40,height/2-20);
}

//now it is good, all you gotta do is fine out the relationship to the variables