

function draw()
{
	background(0);
	//icons

	image(img1, width/2 + 200, 250, img1.width/4, img1.height/4);
	image(img2, width/2 + 200, 400, img2.width/4, img2.height/4);
	image(img3, width/2 + 200, 100, img3.width/4, img3.height/4);
	if(currentWeather)
	{
		push();
		fill(0,100,250);
		noStroke();
		textStyle(BOLD);
		textSize(30);
		var humidity = currentWeather.main.humidity; // API is only called when button clicked
		var pressure = currentWeather.main.pressure;
		var windspeed = currentWeather.wind.speed;
		text(humidity+"%",width/2 + 420,150);
		text(windspeed+"km/h",width/2 + 420,320);
		text(pressure+"mB",width/2 + 420,500);
		pop();
	}


	//-------------
	stroke(0,200,250);
	strokeWeight(1);
	//stroke(100);
	//thermostat
	if(currentWeather)
	{
		var maxTemp = currentWeather.main.temp_max;
		var minTemp = currentWeather.main.temp_min;
		var currentTemp = currentWeather.main.temp;
		myThermo = new Thermostat(maxTemp,minTemp,currentTemp);
		myThermo.display();
		//this is why it is red, the code goes into this stream	  	
		//fill(250,0,0); //you gotta adjust the color and make sure that you keep track of the style
		//you also gotta hit submit for it to display something
		//ellipse(100,100,temp,temp)
		//ellipse(300,100,humidity,humidity);
	}


	//trendline
	var xAxis = [];
    var height = [];
    var rainfall = [];
    var sunshine = [];
    var cloudy = [];
    var clear = [];
    var humidityArray = [];
    var windspeedArray = [];
    //populate xAxis
	  for(var i=1;i< historicalWeather.getRowCount();i++)
	  {
	    xAxis[i] = (historicalWeather.getString(i,0));
	    //print(xAxis[i]);
	  }


	  //populate height
	  for(var i=1;i< historicalWeather.getRowCount();i++)
	  {
	    height[i] = (historicalWeather.getString(i,1)*8); //scale it up to make chart better
	    //print(height[i]);
	  }


	  //populate rainfall
	  for(var i=1;i< historicalWeather.getRowCount();i++)
	  {
	    rainfall[i] = (historicalWeather.getString(i,3)); //scale it up to make chart better
	    //print(rainfall[i]);
	  }

	   //populate clear
	  for(var i=1;i< historicalWeather.getRowCount();i++)
	  {
	    clear[i] = (historicalWeather.getString(i,4)); //scale it up to make chart better
	    //print(clear[i]);
	  }

	  //populate cloudy
	  for(var i=1;i< historicalWeather.getRowCount();i++)
	  {
	    cloudy[i] = (historicalWeather.getString(i,5)); //scale it up to make chart better
	    //print(cloudy[i]);
	  }

	  //populate sunshine
	  for(var i=1;i< historicalWeather.getRowCount();i++)
	  {
	    sunshine[i] = (historicalWeather.getString(i,6)); //scale it up to make chart better
	    //print(sunshine[i]);
	  }

	   //populate windspeed
	  for(var i=1;i< historicalWeather.getRowCount();i++)
	  {
	    windspeedArray[i] = (historicalWeather.getString(i,7)); //scale it up to make chart better
	    //print(sunshine[i]);
	  }



	  //populate humidity
	  for(var i=1;i< historicalWeather.getRowCount();i++)
	  {
	    humidityArray[i] = (historicalWeather.getString(i,8)); //scale it up to make chart better
	    //print(sunshine[i]);
	  }

	 //---------
	 var myTrendLine = new trendLine(height,xAxis);

	 //--------- objects for more interactivity

  	var myTarget = []; //an array of objects
  	var d; //a distance variable
  	var flag = false; // a flag for drawing

  	  for(var i=1; i<xAxis.length; i++)
	  {
	    myTarget[i] = new target(10+i*40,500-height[i],20,20);
	    d = dist(mouseX,mouseY,myTarget[i].x,myTarget[i].y);
	    flag = d < myTarget[i].width;
	    //logic
	    if(flag == true)
	    {
	      //text("hello",20,20); // this is where pop up box comes in
	      push();
	      noStroke();
	      fill(50,205,50);
	      text("Mean rainfall: "+rainfall[i]+" mm",20,50);
	      text("Mean number of clear days: "+clear[i]+" days",20,70);
	      text("Mean number of cloudy days: "+cloudy[i]+" days",20,90);
	      text("Mean number of sunshine hours: "+sunshine[i]+" hours",20,110);
	      pop();
	    }

	  }


	  //diffGraph
	  sliderValue = slider.value();
	  print("slidervalue: "+sliderValue);
	  print("humidityArray: "+humidityArray[5]);
	  var margin = 240;
	  //max temperature
	  var myDiffGraph = new diffGraph(currentTemp,height[sliderValue]/8,350,900);
	  //only temperature has to be divided by 8
	  //wind speed
	  var myDiffGraph = new diffGraph(windspeed,windspeedArray[sliderValue],350+80+margin,900);
	  //humidity
	  var myDiffGraph = new diffGraph(humidity,humidityArray[sliderValue],350+80*2+margin*2,900);

	  //labels for diffgraph
	  push();
	  textSize(20);
	  noStroke();
	  fill(0,0,255);
	  textStyle(BOLD);
	  text("Comparing differences between current weather and historical weather", 300,580);
	  text("Month (in numbers): " ,width/2-230,650);
	  text(sliderValue,width/2-160,680);
	  pop();


		
	  //parameters
	  push();	
	  textSize(15);
	  noStroke();
	  fill(50,205,50);
	  textStyle(BOLD);
	  text("Max temperature" ,width/2-505,900);
	  text("Windspeed" ,width/2-150,900);
	  text("Humidity" ,width/2+190,900);
	  pop();

	  //sketch name
	  push();
	  textSize(30);
	  noStroke();
	  fill(50,205,50);
	  textStyle(BOLD);
	  text("Weather Dynamic Visualisation",width/2-300,30);
	  pop();

}


function diffGraph(a,b,baselineX,baselineY)
{

	//you actually don't need to add minus sign into it
	this.baselineX = baselineX;
	this.baselineY = baselineY;
	//set the line


	this.diff = b-a; //we set the one we want to compare to as the divisor
	//print("b: "+b);
	
	this.diff2 = (b-a)/b;
	this.diff3 = int(this.diff2*100);
	print("a: "+a);
	print("b: "+b);
	print("diff2: "+this.diff2);
	for(var i=1; i<2; i++)
	{
		if(this.diff>0)
		{
			push();
			fill(34,139,34);
			noStroke();
			rect(baselineX + 20*i, this.baselineY, 80, this.diff*5);


			push();
			fill(50,205,50);
			textSize(20);
			noStroke();
			text(-this.diff3+"%",baselineX + 20*i+90, this.baselineY-10);
			pop()
			pop();
		}
		else if(this.diff < 0)
		{
			push();
			fill(34,139,34);
			noStroke();
			rect(baselineX + 20*i, this.baselineY, 80, this.diff*5);


			push();
			fill(50,205,50);
			textSize(20);
			noStroke();
			text(-this.diff3+"%",baselineX + 20*i+90, this.baselineY-10);
			pop()
			//print(a-b);	
			pop();
		}
		else if(this.diff == 0)
		{
			push();
			fill(50,205,50);
			textSize(20);
			noStroke();
			text(-this.diff3+"%",baselineX + 20*i+90, this.baselineY-10);
			pop()
		}
		
	}

}










function Thermostat(maxTemp,minTemp,currentTemp){
	//position, this is used to check for clicks
	//you have to determine this
	this.x = width/2;
	this.y = 350;
	this.maxTemp = maxTemp;
	this.minTemp = minTemp;
	this.currentTemp = currentTemp;

	this.display = function(){
		//position
		//style
				//you gotta fix it so that the scale

		push(); 

		strokeWeight(2);					//does not change
									//all you gotta do now is fix the translate()
		translate(width/2,300); //this is your position
		fill(34,139,34);
		ellipse(20,120,60,60);
		fill(50,205,50); //color for ellipse and back rect
		//total length rect
		rect(20/2,90,20,-200);
		//overlap rect
		fill(34,139,34);
		rect(20/2,90,20,-(this.currentTemp*200)/this.maxTemp);
		//displaying marks
		
  		textSize(14);
  		textStyle(BOLD);
  		noStroke();
  		fill(0,0,255); //color for thermo labels
  		text("currentTemp: "+this.currentTemp,40,-(this.currentTemp*100)/this.maxTemp+15); //-120 here is same as -120 in rect
  		text("maxTemp: "+this.maxTemp,40,-100); //-200 here is same as -200 in rect
  		text("minTemp: "+this.minTemp,40,90); //this is same as 0-10 in rect
  		pop();


  		//name of the chart
  		push();
  		fill(0,0,255);
  		noStroke();
  		textSize(20);
  		textStyle(BOLD);
  		text("Current Weather Data",width/2-60,160);
  		pop();
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


//icons

var img1;
var img2;
var img3;
var img4;

function preload()
{
  //if you put "header" here, it will skip the first row
  //currentWeather = loadJSON("");
  img1 = loadImage("wind.png");
  img2 = loadImage("pressure.png");
  img3 = loadImage("humidity.png");
  historicalWeather = loadTable("data.csv","csv");
}



