class Physics {
  constructor(vel, pos) {
    this.vel = vel;
    this.pos = pos
  }

  gravity() {
    this.vel.y += 0.6;
    this.pos.y += this.vel.y;
  }
}
