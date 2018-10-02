var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  // smooth();
  angleMode(DEGREES);
  frameRate(30);
  noCursor();
  noFill();
}

var a;

var movx;
var movy;

function draw() {

background(22, 42, 62);
stroke(255);
strokeWeight(2);
ellipse(mouseX, mouseY, 25);

for (a=0; a<360; a=a+12){
  // movx = cos(a*frameCount);
  // movy = sin(a*frameCount);
 line(mouseX+cos(a + frameCount)*20,mouseY+sin(a + frameCount)*20, mouseX+cos(a + frameCount)*50,mouseY+sin(a + frameCount)*50);

 bezier(mouseX, mouseY, cos(frameCount)*50,sin(frameCount)*50, cos(frameCount)*50,sin(frameCount)*50, 0,0 )
 bezier(mouseX, mouseY, cos(frameCount)*50,sin(frameCount)*50, cos(frameCount)*50,sin(frameCount)*50, sin(frameCount)*width,0 )
 bezier(mouseX, mouseY, cos(frameCount)*50,sin(frameCount)*50, cos(frameCount)*50,sin(frameCount)*50, 0,sin(frameCount)*height )
 bezier(mouseX, mouseY, cos(frameCount)*50,sin(frameCount)*50, cos(frameCount)*50,sin(frameCount)*50, width, sin(frameCount)*height )
}
}
