//declared variables
var shake;
let side = 0;

function setup() {
  // put setup code here
  createCanvas(1920,1080);
  shake = false;
  angleMode(DEGREES);
}

function draw() {
  // put drawing code here
  background(mouseX/4, mouseY/4, 50);
  //shake screen code switch
  if(shake==true){
    translate(random(-6,6), random(-6,6));
  }
  //start of background of stars
  fill("#25F5F0");
  stroke("#000000");
  circle(random(0, 1920), random(0, 1080), random(1, 20));
  fill("#F0ED50");
  stroke("#FFFFFF");
  strokeWeight(5);
  textSize(100);
  textFont("Georgia");
  textStyle(ITALIC);
  textAlign(CENTER);
  text("Konban Do Do Do!", 900, 100);//japanese sheep greeting
  //Start of Image of Sheep
  fill("#5a5a5a");
  stroke("#000000");
  rect(810, 750, 80, 80);//start of feet of Sheep
  rect(730, 750, 80, 80);
  rect(910, 750, 80, 80);
  rect(990, 750, 80, 80);
  arc(770, 820, 80, 80, 0, 180);
  arc(850, 820, 80, 80, 0, 180);
  arc(950, 820, 80, 80, 0, 180);
  arc(1030, 820, 80, 80, 0, 180);
  fill("#FFFFFF");
  stroke("#000000");
  line(770, 860, 770, 830);
  line(850, 860, 850, 830);
  line(950, 860, 950, 830);
  line(1030, 860, 1030, 830);
  ellipse(900, 550, 700, 500, 80, 100);//start of body of sheep
  fill("#5a5a5a");
  stroke("#000000");
  ellipse(900, 500, 500, 300, 80, 100);//head of sheep
  fill("#000000");
  stroke("#000000");
  circle(750, 500, 90, 90);//eyes of Sheep
  circle(1060, 500, 90, 90);
  fill("#FFFFFF");
  circle(765, 485, 50, 50);
  circle(1075, 485, 50, 50);
  circle(730, 520, 25, 25);
  circle(1040, 520, 25, 25);
  line(900, 580, 900, 650);//mouth of sheep
  noFill();
  ellipse(900, 550, 90, 50);
  fill("#5a5a5a");
  stroke("#5a5a5a");
  rect(855, 500, 90, 50);
  stroke("#000000");
  beginShape();//ears of sheep
  vertex(685, 420);
  bezierVertex(650, 450, 600, 500, 500, 420);
  bezierVertex(500, 420, 450, 350, 710, 400);
  endShape();
  beginShape();
  vertex(1110, 420);
  bezierVertex(1310, 550, 1300, 400, 1310, 420);
  bezierVertex(1310, 420, 1200, 400, 1090, 400);
  endShape();
  fill("#FA1C3A");
  noStroke();
  //start of expanding star
  beginShape();
  vertex(mouseX-10-side, mouseY+10+side);
  vertex(mouseX, mouseY+35+side);
  vertex(mouseX+10+side, mouseY+10+side);
  vertex(mouseX+35+side, mouseY);
  vertex(mouseX+10+side, mouseY-8-side);
  vertex(mouseX, mouseY-35-side);
  vertex(mouseX-10-side, mouseY-8-side);
  vertex(mouseX-35-side, mouseY);
  endShape();
}
//change size of cursor and shake the screen
function mousePressed(){
  side = side + 5;
  if(side==50){
    side=10
  }
  if(shake==true){
    shake=false;
  }else{
    shake=true;
  }
}
