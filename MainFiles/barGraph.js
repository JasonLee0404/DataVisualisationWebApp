function setup() {

  var data = [105, 212, 158, 31, 98, 54];
  var width = 200, // canvas width and height
      height = 350,
      margin = 20,
      w = width - 2 * margin, // chart area width and height
      h = height - 2 * margin;
  
  var barWidth =  (h / data.length) * 0.8; // width of bar
  var barMargin = (h / data.length) * 0.2; // margin between two bars
  
  createCanvas(width, height);
  
  textSize(14);
  
  push();
  translate(margin, margin); // ignore margin area
  
  for(var i=0; i<data.length; i++) {
    push();
    fill('steelblue');
    noStroke();
    translate(0, i* (barWidth + barMargin)); // jump to the top right corner of the bar
    rect(0, 0, data[i], barWidth); // draw rect

    fill('#FFF');
    text(data[i], 5, barWidth/2 + 5); // write data

    pop();
  }
  
  pop();
}