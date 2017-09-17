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

  enemyMovement() {
    if (this.enemy === true) {
      this.pos.x += this.vel.x;
    }
  }
}
