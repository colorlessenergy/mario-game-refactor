var mush = false;
var mushroom;
var grown = false;

class Physics {
  constructor(vel, pos, context, tile, data, entity) {
    this.data = data;
    this.entity = entity;
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
    if (this.entity === "mush") {
    if (this.pos.x < entity.x + entity.w && this.pos.x + this.data.w > entity.x &&
        this.pos.y < entity.y + entity.h && this.data.h + this.pos.y > entity.y) {
          this.handleCollision(entity)
        }
      } else if (this.entity === "mario") {
        if (this.pos.x < entity.x + entity.w && this.pos.x + animations.currentState.w > entity.x &&
            this.pos.y < entity.y + entity.h && animations.currentState.h + this.pos.y > entity.y) {
              this.handleCollision(entity)
            }
      }
  }

  handleCollision(entity) {

    if (this.entity === "mush") {
      if (this.pos.y < entity.y && (this.pos.x + this.data.w) > entity.x + 10 &&
          this.pos.x < (entity.x + entity.w) - 10 && this.vel.y >= 0) {
            this.pos.y = entity.y - this.data.h;
            this.vel.y = 0;
          } else if(this.pos.y > entity.y) {
            this.pos.y = entity.y + this.data.h;
          }

        }else if (this.entity === "mario") {
          console.log("called");
  if (this.pos.y < entity.y && (this.pos.x + animations.currentState.w) > entity.x + 10 &&
      this.pos.x < (entity.x + entity.w) - 10 && this.vel.y >= 0) {
        this.pos.y = entity.y - animations.currentState.h;
        this.vel.y = 0;
      } else if(this.pos.y > entity.y) {
        this.pos.y = entity.y + animations.currentState.h;
      }
}


    if (entity.type === "mysteryblock") {
      if (mush !== true) {
        mush = true;
      }
    }

    if (entity.type === "mushroom") {
      grown = true;

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

    if (mushroom) {
      this.collision(mushroom)
    }
  }
}
