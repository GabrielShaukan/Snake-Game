//Snake object

function snake(x, y, xSpeed, ySpeed) {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;
  this.total= 0;
  this.tail = [];

  //changes snake direction
  this.dir = function(x,y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }

  //snake eats food
  this.eat = function(pos) {
    if (dist(this.x, this.y, food.x,food.y) < 2) {
      this.total++;
      console.log(this.total);
      return true;
    } else {
      return false;
    }

  }

  //makes snake move
  this.update = function() {

    this.tail[this.total -1] = createVector(this.x, this.y);

    for(var i = 0; i < this.total-1; i++) {
      this.tail[i] = this.tail[i+1];
    }

    this.x = this.x + this.xSpeed * scl;
    this.y = this.y + this.ySpeed * scl;

    this.x = constrain(this.x, 0, width - (scl+1));
    this.y = constrain(this.y, 0, height- (scl+1));
  }

  //draws snake  on canvas
  this.show = function() {
    fill(255);

    for (var i = 0; i < this.total; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }

    rect(this.x, this.y, scl, scl);
  }

}
