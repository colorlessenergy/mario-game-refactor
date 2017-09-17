var mush = false;

class Physics {
  constructor(vel, pos, context, tile) {
    this.vel = vel;
    this.pos = pos
    this.tile = tile;
    this.context = context;
    this.mush = undefined;
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
        } else if(this.pos.y > entity.y) {
          this.pos.y = entity.y + 32;
        }


        if (entity.type === "brick") {
          console.log("touched brick");
        }

        if (entity.type === "mysteryblock") {
          mush = true;
        }



  }

  typeOfCollisions() {
    var self = this;
    wallArray.forEach(function (wall) {
      self.collision(wall)
    });

    bricks.forEach(function (brick) {
      self.collision(brick)
    });

    mysteryBlock.forEach(function (mysteryBlock) {
      self.collision(mysteryBlock)
    });
  }
}
