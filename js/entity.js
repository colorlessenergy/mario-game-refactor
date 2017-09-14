class Entity {
  constructor(x, y, h, w, sprite, vel, pos, context) {
    this.x = x;
    this.y = y;
    this.h = h,
    this.w = w;
    this.sprite = sprite
    this.vel = vel;
    this.pos = pos
    this.context = context;
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
}
