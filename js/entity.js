class Entity {
  constructor(data, sprite, vel, pos, context, enemy) {
    this.x = data.x;
    this.y = data.y;
    this.h = data.h,
    this.w = data.w;
    this.sprite = sprite;
    this.vel = vel;
    this.pos = pos;
    this.context = context;
    this.enemy = enemy;
  }

  draw () {
    if (left === true) {
      // this makes mario look left but it glitches
      // since mario is reall right i need to fix something in the collision
      this.context.save();
      this.context.scale(-1, 1);
      this.context.drawImage(
            this.sprite,
            this.x || 194,
            this.y || 86,
            this.w || 32,
            this.h || 32,
            this.pos.x * -1,
            this.pos.y,
            this.w || 32,
            this.h || 32
          );
          this.context.restore();

    } else {
      this.context.drawImage(
            this.sprite,
            this.x || 194,
            this.y || 86,
            this.w || 32,
            this.h || 32,
            this.pos.x,
            this.pos.y,
            this.w || 32,
            this.h || 32
          );
    }
  }

  enemyMovement() {

    this.context.drawImage(
          this.sprite,
          this.x || 194,
          this.y || 86,
          this.w || 32,
          this.h || 32,
          this.pos.x,
          this.pos.y,
          this.w || 32,
          this.h || 32
        );

    // to move the mushroom when it exists
    if (this.enemy === true) {
      this.pos.x += this.vel.x;
    }
  }
}
