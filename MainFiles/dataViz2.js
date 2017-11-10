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


/*function setup()
{
  canvas = createCanvas(1200,600);
  background(200);
  translate(width/2,height/2);
  strokeWeight(2);
  push();
  fill(250,0,0);
  ellipse(20,20,60,60);
  fill(0,250,0);
  //total length rect
  rect(20/2,0-10,20,-200); //this 200 is the max temperature, 0-10 is the mean temperature
  //overlap rect
  fill(250,0,0);
  rect(20/2,0-9,20,-120); //this 120 is the temperature currently
  //displaying marks
  pop();
  textSize(14);
  text(data,40,-120); //-120 here is same as -120 in rect
  text(data2,40,-200); //-200 here is same as -200 in rect
  text(data3,40,-10); //this is same as 0-10 in rect
 
}*/

function setup()
{
  var currentTemp = currentWeather.main.temp;
  var maxTemp = currentWeather.main.temp_max;
  var minTemp = currentWeather.main.temp_min;

  canvas = createCanvas(1200,600);
  background(200);
  translate(width/2,height/2);
  strokeWeight(2);
  push();
  fill(250,0,0);
  ellipse(20,20,60,60);
  fill(0,250,0);
  //total length rect
  rect(20/2,0-10,20,-maxTemp*10); //this 200 is the max temperature, 0-10 is the mean temperature
  //overlap rect
  fill(250,0,0);
  rect(20/2,0-9,20,-currentTemp*3); //this 120 is the temperature currently
  //displaying marks
  pop();
  textSize(14);
  text("currentTemp: "+currentTemp,40,-currentTemp*3); //-120 here is same as -120 in rect
  text("maxTemp: "+maxTemp,40,-200); //-200 here is same as -200 in rect
  text("minTemp: "+minTemp,40,-10); //this is same as 0-10 in rect
 
}

function draw()
{
	text(currentWeather.main.temp,120,120);
}



//ellipse will always stay the same
//but the parameters in the rec will change
//20/2 is the position where the rect start
//0-9 is the position the rect get drawn
//20 is the width of the bar
//-200 is total length
//we would have to draw an overlap rect depending on the temperature

//you have to find the way to draw currentTemp, max temp, mean temp at the exact scale