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

//Sets up controls for snake
function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0,-1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0,1);
  } else if (keyCode === RIGHT_ARROW){
    snake.dir(1,0)
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1,0)
  }
}


