function setup() {
  createCanvas(400, 400);
  background(220);

  setTimeout(makeRedSquare, 2000);
}

function makeRedSquare() {
  noStroke();
  fill(20,20,100);
  triangle(90,100,55,20,20,100)
}

function draw() {

}