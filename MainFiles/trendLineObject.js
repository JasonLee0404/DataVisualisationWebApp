//var data = [105, 212, 158, 31, 98, 54, 200, 40, 120];
//var data2 = ['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sep'];
var canvas;
var historicalWeather;
var myTarget;


function trendLine(data,data2)
{

  for(var i=1; i<data.length; i++)
  {
    fill(250,20,0);
    ellipse(20+i*40,500-data[i],5,5);
    //you must use an ellipse, you cannot create an object in here because
    //it cannot catch up
    strokeWeight(3);
    line(20+i*40,500-data[i],20+(i+1)*40,500-data[i+1]);
    push();
    textStyle(BOLD);
    textSize(16);
    text(data[i]/8,15+i*40,500-data[i]-30);// /8 to get the original data
    pop();                            
    text(data2[i],20+i*40,500+20);
  }
  //i has to start from 1 because 0 is the slots with name, not data  



}


function preload()
{
  //if you put "header" here, it will skip the first row
  //currentWeather = loadJSON("");
  img = loadImage("Raining.jpg");
  historicalWeather = loadTable("data.csv","csv");
}


function setup()
{
  canvas = createCanvas(1200,600);
  

 
}

function draw()
{
  //-----------------------------------------------------------------
  background(200);
  //var w = width/data.length;
  //var h = random(50,200);

  
  var xAxis = [];
  var height = [];
  var rainfall = [];
  var sunshine = [];
  var cloudy = [];
  var clear = [];
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

 

 

  //this is max temp only, we can develop on min temp and other things
  var myTrendLine = new trendLine(height,xAxis);
  //----------------------------------------------------------------

  //create objects for more interactivity
  var myTarget = []; //an array of objects
  var d; //a distance variable
  var flag = false; // a flag for drawing
  for(var i=1; i<xAxis.length; i++)
  {
    myTarget[i] = new target(20+i*40,500-height[i],20,20);
    d = dist(mouseX,mouseY,myTarget[i].x,myTarget[i].y);
    flag = d < myTarget[i].width;
    //logic
    if(flag == true)
    {
      //text("hello",20,20); // this is where pop up box comes in

      text("Mean rainfall: "+rainfall[i]+" mm (1887-2017)",20,50);
      text("Mean number of clear days: "+clear[i]+" days (1955-1977)",20,70);
      text("Mean number of cloudy days: "+cloudy[i]+" days (1955-1977)",20,90);
      text("Mean number of sunshine hours: "+sunshine[i]+" hours (1955-1977)",20,110);
    }

  }


}

function target(x,y,width,height)
{
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  ellipse(this.x,this.y,this.width,this.height);
}