var mush = false;

class Physics {
  constructor(vel, pos, context, tile, data) {
    this.data = data;

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
    if (left == false) {
      if (this.pos.x < entity.x + entity.w && this.pos.x + this.data.w > entity.x &&
          this.pos.y < entity.y + entity.h && this.data.h + this.pos.y > entity.y) {
            this.handleCollision(entity)
          }
    } else if (left) {
      if (this.pos.x - this.data.w < entity.x + entity.w && this.pos.x - this.data.w > entity.x &&
          this.pos.y < entity.y + entity.h && this.data.h + this.pos.y > entity.y) {
            this.handleCollision(entity)
          }
    }
  }

  handleCollision(entity) {
    if (left == false) {
      if (this.pos.y < entity.y && (this.pos.x + 32) > entity.x + 10 &&
          this.pos.x < (entity.x + entity.w) - 10 && this.vel.y >= 0) {
            this.pos.y = entity.y - 32;
            this.vel.y = 0;
          } else if(this.pos.y > entity.y) {
            this.pos.y = entity.y + 32;
          }
    } else if (left) {
      if (this.pos.y < entity.y && (this.pos.x - this.data.w) > entity.x + 10 &&
          this.pos.x < (entity.x + entity.w) + 34 && this.vel.y >= 0) {
            this.pos.y = entity.y - this.data.h;
            this.vel.y = 0;
          } else if(this.pos.y > entity.y) {
            this.pos.y = entity.y + this.data.h;
          }
    }

    if (entity.type === "mysteryblock") {
      mush = true;
    }


        if (entity.type === "brick") {

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
