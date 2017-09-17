class Movement {
  constructor (pos, vel) {
    this.down = {};

    this.pressed = {};

    this.currentFrame = 0;
<<<<<<< HEAD

    this.currentFrameL = 0;
=======
>>>>>>> master
    this.pos = pos;

    this.vel = vel;

  }

  animations() {
    var self = this;
    document.addEventListener("keydown", function(event) {
      self.down[event.keyCode] = true;
    });
    document.addEventListener("keyup", function(event) {
      delete self.down[event.keyCode];
      delete self.pressed[event.keyCode];
    });

<<<<<<< HEAD
    // this makes it stand when the keys aren't pressed so mario
    // doesnt randomly stand
    if (this.vel.y === 0 && !left && !(this.isDown(39))) {
      animations.currentState = animations.standing;
    } else if (this.vel.y === 0 && left && !(this.isDown(37))) {
=======
    if (this.vel.y === 0 && !(this.isDown(39))) {
>>>>>>> master
      animations.currentState = animations.standing;
    }

    if (this.isDown(39)) {
<<<<<<< HEAD
      left = false;
=======
>>>>>>> master
      if (this.vel.y < 0 || this.vel.y > 0) {
        animations.currentState = animations.jumping;
        this.pos.x += this.vel.x;
      } else if (this.vel.y === 0){
        this.pos.x += this.vel.x;
        if (animations.frame % 5 === 0) {
          animations.currentState = animations.walking[this.currentFrame];
          console.log(animations.walking);
          this.currentFrame++;
          if (this.currentFrame > 2) {
            this.currentFrame = 0;
          }
        }
      }
    }

<<<<<<< HEAD
    if (this.isDown(37)) {
      if (this.vel.y < 0 || this.vel.y > 0) {
        animations.currentState = animations.jumping;
        this.pos.x -= this.vel.x;
      } else if (this.vel.y === 0){
        this.pos.x -= this.vel.x;
        if (animations.frame % 5 === 0) {
          left = true;
          animations.currentState = animations.walking[this.currentFrameL];
          this.currentFrameL++;
          if (this.currentFrameL > 2) {
            this.currentFrameL = 0;
          }
        }
      }
    }

=======
>>>>>>> master
    if (this.isDown(38)) {
      if (this.vel.y === 0) {
        animations.currentState = animations.jumping;
        this.vel.y -= 12;
      }
    }
  }


  isDown(code) {
    return this.down[code];
  }

  isPressed(code) {
    if (this.pressed[code]) {
      return false
    } else if (this.down[code]) {
      this.down[code] = true;
    }

    return false;
  }
}
