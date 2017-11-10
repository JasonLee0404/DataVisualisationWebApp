var canvas;
var myThermo;
var button;
function Thermostat(maxTemp,minTemp,currentTemp){
	//position, this is used to check for clicks
	//you have to determine this
	this.x = 20;
	this.y = 20;
	this.maxTemp = maxTemp;
	this.minTemp = minTemp;
	this.currentTemp = currentTemp;

	this.display = function(){
		//position
		//style
		translate(width/2,height/2);		//you gotta fix it so that the scale
		strokeWeight(2);					//does not change
		push();
		fill(250,0,0);
		ellipse(20,20,60,60);
		fill(0,250,0);
		//total length rect
		rect(20/2,0-10,20,-maxTemp*10);
		//overlap rect
		fill(250,0,0);
		rect(20/2,0-9,20,-currentTemp*3);
		//displaying marks
		pop();
  		textSize(14);
  		text("currentTemp: "+this.currentTemp,40,-this.currentTemp*3); //-120 here is same as -120 in rect
  		text("maxTemp: "+this.maxTemp,40,-200); //-200 here is same as -200 in rect
  		text("minTemp: "+this.minTemp,40,-10); //this is same as 0-10 in rect
	}


	this.clicked = function(){
		
		var d = dist(mouseX, mouseY, this.x, this.y);
		print(d);
		print(this.x);
		print(this.y);
		ellipse(20,20,20,20);
		//this.x and this.y are 20, and counted from the original point of origin
		
	}
}

function setup()
{
	canvas = createCanvas(1200,600);
	background(200);
	myThermo = new Thermostat(20,10,20);
	myThermo.display();
	button = createButton("click here");
	button.mouseClicked(callback);

}

function callback()
{
	print("hello");
	myThermo.clicked();   //this is how you get the clicked function to work
}						  //every time you click a button


