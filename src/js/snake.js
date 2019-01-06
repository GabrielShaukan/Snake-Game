//Snake object

function snake(x, y, xSpeed, ySpeed) {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;

  //changes snake direction
  this.dir = function(x,y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }

  //snake eats food
  this.eat = function(pos) {
    if (snake.x === food.x && snake.y === food.y) {
      return true;
    } else {
      return false;
    }

  }

  //makes snake move
  this.update = function() {
    this.x = this.x + this.xSpeed * scl;
    this.y = this.y + this.ySpeed * scl;

    this.x = constrain(this.x, 0, width - (scl+1));
    this.y = constrain(this.y, 0, height- (scl+1));
  }

  //draws snake  on canvas
  this.show = function() {
    fill(255);
    rect(this.x, this.y, scl, scl);
  }

}
