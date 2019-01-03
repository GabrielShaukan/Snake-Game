var snake;

function setup() {
  createCanvas(600, 600);
  snake = new snake();

}

function draw() {
  background(51);
  snake.update();
  snake.show();
}

function keyPressed() {
}


