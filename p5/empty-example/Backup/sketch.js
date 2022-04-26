function setup() {
  // put setup code here
  createCanvas(1920,1080);
}

function draw() {
  // put drawing code here
  background('#000000');
  fill("#add8e6");
  stroke("#299bc0");
  strokeWeight(5);
  textSize(100);
  textFont("Georgia");
  textStyle(ITALIC);
  textAlign(CENTER);
  text("Konban Do Do Do!", 900, 100);
  fill("#5a5a5a");
  stroke("#000000");
  ellipse(900, 500, 500, 300, 80, 100);
  fill("#000000");
  stroke("#000000");
  circle(750, 500, 90, 90);
  circle(1060, 500, 90, 90);
  fill("#FFFFFF");
  circle(765, 485, 50, 50);
  circle(1075, 485, 50, 50);
  circle(730, 520, 25, 25);
  circle(1040, 520, 25, 25);
  line(900, 580, 900, 650);
  noFill();
  ellipse(900, 550, 90, 50);
  fill("#5a5a5a");
  stroke("#5a5a5a");
  rect(855, 500, 90, 50);
  stroke("#000000");
  beginShape();
  vertex(685, 420);
  bezierVertex(650, 450, 600, 500, 500, 420);
  bezierVertex(500, 420, 450, 350, 710, 400);
  endShape();
  beginShape();
  vertex(1110, 420);
  bezierVertex(1310, 550, 1300, 400, 1310, 420);
  bezierVertex(1310, 420, 1200, 400, 1090, 400);
  endShape();
  fill("#FFFFFF");
}
