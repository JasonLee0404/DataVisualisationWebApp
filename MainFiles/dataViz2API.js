var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var input;
var apiKey = '&APPID=864561043ef208d17d553c87f0e86b67';
var unit = '&units=metric';
//var url = 'http://api.openweathermap.org/data/2.5/weather?q=Adelaide&APPID=864561043ef208d17d553c87f0e86b67&units=metric';

//this code doesnt work, what happen
function setup()
{
	createCanvas(400,200);
	//loadJSON(url,gotData);
	var button = select('#submit');
	button.mousePressed(weatherAsk);

	input = select('#city');

}

function weatherAsk()
{
	var url = api + input.value() + apiKey + unit;
	loadJSON(url,gotData);
}

function gotData(data)
{
	weather = data;

}

function draw()
{
	background(200);
	if(weather)
	{
		var temp = weather.main.temp;
		var humidity = weather.main.humidity;
		fill(250,0,0); //you gotta adjust the color and make sure that you keep track of the style
		//you also gotta hit submit for it to display something
		ellipse(100,100,temp,temp)
		ellipse(300,100,humidity,humidity);
	}
}