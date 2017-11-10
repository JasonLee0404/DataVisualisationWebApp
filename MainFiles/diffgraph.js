var current = [20,120,40,120,129,233,355];
var historical = [130,30,120,30,123,121,333];
var canvas;
var slider;
var sliderValue;
function diffGraph(a,b,baselineX,baselineY)
{

	//you actually don't need to add minus sign into it
	this.baselineX = baselineX;
	this.baselineY = baselineY;
	//set the line


	this.diff = b-a; //we set the one we want to compare to as the divisor

	for(var i=1; i<2; i++)
	{
		if(this.diff>0)
		{
			push();
			fill(0,0,100);
			rect(baselineX + 20*i, this.baselineY, 20, this.diff*1.5);
			pop();
		}
		else if(this.diff < 0)
		{
			push();
			fill(0,0,250);
			rect(baselineX + 20*i, this.baselineY, 20, this.diff*1.5);
			//print(a-b);	
			pop();
		}
		
	}
}

function setup()
{
	canvas = createCanvas(1200,600);
	slider = createSlider(1,12,6);
	slider.position(40,90);


}

function draw()
{
	background(200);
	sliderValue = slider.value(); //you have to put it here for it to update it self
	//print(sliderValue);
	//feed data in
	for(var i=0; i<current.length; i++)
	{
		if(sliderValue == i+1)
		{
			var myDiffGraph = new diffGraph(current[i],historical[i],20+30*i,200);	
		}
	}
		

	
	
}

//you gotta draw the base line by yourself cause this is not a whole set of graphs
//these are just bars
//so how we can use this diffgraph object is that we can compare 2 isolated parameters
//of the dataset, or we can compare many data at once