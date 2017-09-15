class Entity {
  constructor(x, y, h, w, sprite, vel, pos, context, map) {
    this.x = x;
    this.y = y;
    this.h = h,
    this.w = w;
    this.sprite = sprite
    this.vel = vel;
    this.pos = pos;
    this.context = context;
    this.map = map;
  }

  draw () {
    var self = this;
    this.map.forEach(function (outer, outerIndex) {
      outer.forEach(function (inner, currentIndex) {
         if (inner === 8) {
          self.context.drawImage(
          self.sprite,
          194,
          86,
          32,
          32,
          currentIndex * 32,
          outerIndex * 32,
          32,
          32
        );
        }
      });
      })
    }
}
