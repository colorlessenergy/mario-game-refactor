class Physics {
  constructor(vel, pos) {
    this.vel = vel;
    this.pos = pos
  }

  gravity() {
    this.vel.y += 0.6;
    this.pos.y += this.vel.y;

  }

  collision(entity) {
    if (this.pos.x < entity.x + entity.w && this.pos.x + 32 > entity.x &&
        this.pos.y < entity.y + entity.h && 32 + this.pos.y > entity.y) {
          this.handleCollision(entity)
        }
  }

  handleCollision(entity) {
    if (this.pos.y < entity.y && (this.pos.x + 32) > entity.x + 10 &&
        this.pos.x < (entity.x + entity.w) - 10 && this.vel.y >= 0) {
          this.pos.y = entity.y - 32;
          this.vel.y = 0;
        }
  }

  typeOfCollisions() {
    var self = this;
    wallArray.forEach(function (wall) {
      self.collision(wall)
    });
  }
}
