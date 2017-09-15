class Player {
  constructor (sprite, context) {

    this.sprite = sprite;
    this.context = context;

    this.vel = {x: 3.8, y: 0};

    this.pos = {x: 150, y: 0};
    this.entity = new Entity(194, 86, 32, 32, this.sprite, this.vel, this.pos, this.context);
    this.physics = new Physics(this.vel, this.pos);
  }

  update () {
    this.physics.gravity();
    this.physics.typeOfCollisions();
    this.entity.draw();
  }
}
