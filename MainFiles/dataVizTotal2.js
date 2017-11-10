//TARGET
function target(x,y,width,height)
{
  push();

  //translate(20,20); //with the target, if you translate, you gotta fix the x,y in draw
  this.x = x;
  this.y = y;
  this.width = width;

  this.height = height;

  ellipse(this.x,this.y,this.width,this.height);
  pop();
}
var historicalWeather;
var myTarget;

//TRENDLINE
//you have to take into account the translate() of thermostat
function trendLine(data,data2) //200 is baseline y 
{
  push();
  fill(0,0,255);
  strokeWeight(2);
  //translate(20,20);
  //adding labels
  push();
  //yAxis
  line(10+1*40-20,500,10+1*40-20,200);
  //xAxis
  line(10+1*40-20,500,530,500);
  strokeWeight(1);
  stroke(100); //gridlines color
  line(10+1*40-20,450,530,450);
  line(10+1*40-20,400,530,400);
  line(10+1*40-20,350,530,350);
  line(10+1*40-20,300,530,300);
  line(10+1*40-20,250,530,250);
  
  textStyle(BOLD);

  text("Max Temperature (C)",10+1*40-20,180);
  textSize(20);
  //name of the chart
  text("Historical Weather Data - Adelaide",150,160);
  pop();
  //---------------------------------
  for(var i=1; i<data.length; i++)
  {
    push();
    fill(50,205,50);
    ellipse(10+i*40,500-data[i],5,5); 
    //you must use an ellipse, you cannot create an object in here because
    //it cannot catch up
    strokeWeight(3);
    line(10+i*40,500-data[i],10+(i+1)*40,500-data[i+1]);
    
    textStyle(BOLD);
    textSize(16);
    noStroke();
    text(data[i]/8,-1+i*40,500-data[i]-30);// /8 to get the original data,-1 is the baseline
                            
    text(data2[i],10+i*40,500+20);
   	pop();
  }
  //i has to start from 1 because 0 is the slots with name, not data  

  pop();


}

//BAR GRAPH-----------------------------------------

function barGraph(data,data2){

  this.w = width/data.length;
  this.h = random(50,200);
  push();
  fill(150,50,0); //this is how you adjust color just for that object
  for(var i=1; i<data.length; i++)
  {
    rect(20 + 40*i, 500, 20, -data[i]);
  }                     

  pop();

  //2 seperate loops to seperate the style of the bars and the numbers

  push();
  textStyle(BOLD);
  for(var i=1; i<data2.length; i++) //i has to start from 1
  {
    text(data2[i],20 + 40*i,520);
    text(data[i]/8,20 + 40*i,500-data[i]-20); //500 is the mark at which the chart
    //is drawn
    //you gotta /8 to make the values come back to normal
  }
  pop();
}





