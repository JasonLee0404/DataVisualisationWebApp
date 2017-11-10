var data = [105, 212, 158, 31, 98, 54, 200, 40, 20];
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
    fill(250,20,0);
    ellipse(20+i*40,500-data[i],5,5);
    strokeWeight(3);
    line(20+i*40,500-data[i],20+(i+1)*40,500-data[i+1]);
    push();
    textStyle(BOLD);
    textSize(16);
    text(data[i],15+i*40,500-data[i]-30);
    pop();
    text(data2[i],20+i*40,500+20);
  }
}