var snake;
var scl = 20;
var food;

function setup() {
  createCanvas(600, 600);
  snake = new snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var cols = (width/scl);
  var rows = (height/scl);

  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}


function draw() {
  background(51);
  snake.update();
  snake.show();

  fill(255, 0, 10);
  rect(food.x, food.y, scl, scl);
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


