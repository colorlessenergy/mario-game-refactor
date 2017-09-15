class Movement {
  constructor (pos, vel, currentState, frame) {
    this.down = {};

    this.pressed = {};

    this.currentState = currentState;
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



    if (this.isDown(39)) {
      this.pos.x += this.vel.x;
      if (animations.frame % 5 === 0) {
        animations.currentState = animations.walking[this.currentFrame];
        this.currentFrame++;
        if (this.currentFrame > 2) {
          this.currentFrame = 0;
        }
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
