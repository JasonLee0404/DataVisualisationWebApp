//load data

var historicalWeather;

function preload()
{
	//if you put "header" here, it will skip the first row
	//currentWeather = loadJSON("");
	img = loadImage("Raining.jpg");
	historicalWeather = loadTable("data.csv","csv");
}


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

function setup()
{

	//so now all you have to do is pass in an array of object
	//var data = [105, 212, 158, 31, 98, 54, 200, 140, 20];
	canvas = createCanvas(1200,600);
  	background(200);
  	//var myBarGraph = new barGraph(data);
  	for (var r = 0; r < historicalWeather.getRowCount(); r++){
    //for (var c = 0; c < historicalWeather.getColumnCount(); c++) {
      //4 is y, 1 is x, 0 is included
      print(historicalWeather.getString(0,1));// this is the coordinate of the info slot 

    }

    var height = [];
   	var xAxis = [];
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
    var myBarGraph = new barGraph(height,xAxis);


}