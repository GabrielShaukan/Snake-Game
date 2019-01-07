var snake;
var scl = 20;
var food;
hihi


function setup() {
  createCanvas(600, 600).position((windowWidth - width)/2, (windowHeight - height)/2);
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

function mousePressed() {
  snake.total++
}

function draw() {
  background(51);
  snake.update();
  snake.death();
  snake.show();


  if (snake.eat(food)) {
    pickLocation()
    select('#score').html("Score: " + (snake.total-1));
  }

  fill(255, 0, 10);
  rect(food.x, food.y, scl, scl);
}

//Sets up controls for snake
function keyPressed() {
  if (keyCode === UP_ARROW && snake.ySpeed !== 1) {
    snake.dir(0,-1);
  } else if (keyCode === DOWN_ARROW && snake.ySpeed !== -1) {
    snake.dir(0,1);
  } else if (keyCode === RIGHT_ARROW && snake.xSpeed !== -1){
    snake.dir(1,0)
  } else if (keyCode === LEFT_ARROW && snake.xSpeed !== 1) {
    snake.dir(-1,0)
  }
}


