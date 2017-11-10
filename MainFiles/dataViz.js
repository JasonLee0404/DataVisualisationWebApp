var data = [105, 212, 158, 31, 98, 54, 200, 40, 80];
var data2 = ['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sep'];
var canvas;

function setup()
{
  canvas = createCanvas(1200,600);
  background(200);
  var w = width/data.length;
  var h = random(50,200);
  for(var i=0; i<data.length; i++)
  {
    rect(20+i*30,500,20,-data[i]);
    text(data[i],20+i*30,500-data[i]-10);
    text(data2[i],20+i*30,500+20);
  }
}

//this is a good start, now what you have to do is find out the relationship
//20 = distance from left starting point
//30 = distance between bars
//500 = distance from up to down
//20 = width of the bar
//-data[i] = the direction and length at which the bar is drawn

