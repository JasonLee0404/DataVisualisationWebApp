//Demo guide: uncomment print(url) in weatherAsk function to show the actual api link
var slider;
var sliderValue;
var currentWeather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var input;
var apiKey = '&APPID=864561043ef208d17d553c87f0e86b67';
var unit = '&units=metric';
//var url = 'http://api.openweathermap.org/data/2.5/weather?q=Adelaide&APPID=864561043ef208d17d553c87f0e86b67&units=metric';

//this code doesnt work, what happen
function setup()
{
	createCanvas(1500,1100);
	//loadJSON(url,gotData);
	var button = select('#submit');
	button.mousePressed(weatherAsk);

	input = select('#city');

	slider = createSlider(1,12,6);
	slider.position(550,660);

}

function weatherAsk()
{
	var url = api + input.value() + apiKey + unit;
	print(url);
	loadJSON(url,gotData);
}

function gotData(data)
{
	currentWeather = data;

}