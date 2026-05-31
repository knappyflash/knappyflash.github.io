let x = 200;
let y = 200;
let vx = 3;  // velocity (speed) in x direction
let vy = 2;  // velocity (speed) in y direction
let radius = 20;
let pageWidth = window.innerWidth;
let pageHeight = window.innerHeight;

function setup() {
  let canvas = createCanvas(window.innerWidth - 20, window.innerHeight - 20);
  canvas.parent("page");
  background(0);
}

function draw() {
  background(0);

  // draw the ball
  ellipse(x, y, radius * 2, radius * 2);

  // move the ball
  x += vx;
  y += vy;

  // bounce off walls
  if (x > width - radius || x < radius) {
    vx *= -1;
  }

  if (y > height - radius || y < radius) {
    vy *= -1;
  }
}
