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

  //makes snake move
  this.update = function() {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
  }

  //draws snake  on canvas
  this.show = function() {
    fill(255);
    rect(this.x, this.y, 10, 10);
  }

}