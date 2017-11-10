//you should write the functions for objects in a seperate files

function Bubble(x,y){
	this.x = x;
	this.y = y;
	this.col = color(255,100);

	this.display = function(){
		stroke(255);
		fill(this.col);
		ellipse(this.x,this.y,48,48);
	}
	//this is something you create by yourself, not part of p5
	this.clicked = function(){
		this.col = color(255,0,200);
	}
}

function mousePressed(){
	//do something to every single bubble
	//when mousePressed is activate, I want to activate clicked function
	//of every bubble

}


/*checking to see which one have you been clicking on?

var d = dist(mouseX,mouseY,this.x,this.y);
if(d < 24) //the radius: 48/2
{
	this.col = color(255,0,200);
}*/

//essentially, what you are trying to do is at the moment
//a click happens, you wanna check the mouseX and mouseY to see
//if it is inside a certain area
