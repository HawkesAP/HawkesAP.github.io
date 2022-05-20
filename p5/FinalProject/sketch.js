function setup() {
  // put setup code here
  var canvas = createCanvas(600,900);
  canvas.parent('japanese-flag');
  background('#000000');
}

function draw() {
  // put drawing code here
  fill('#FFFFFF');
  rect(0,250, 900, 400);
  fill('#bc002d');
  circle(300,450, 300);
}
