class Movement {
  constructor (pos, vel) {
    this.down = {};

    this.pressed = {};

    this.currentFrame = 0;
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

    if (this.vel.y === 0 && !(this.isDown(39))) {
      animations.currentState = animations.standing;
    }

    if (this.isDown(39)) {
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
