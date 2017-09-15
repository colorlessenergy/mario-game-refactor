class Player {
  constructor (sprite, context, map) {

    this.sprite = sprite;
    this.context = context;
    this.map = map;

    this.vel = {x: 3.8, y: 0};

    this.pos = {x: 150, y: 0};
    this.entity = new Entity(194, 86, 32, 32, this.sprite, this.vel, this.pos, this.context, this.map);
    this.physics = new Physics(this.vel, this.pos, this.map);
  }

  update () {
    this.physics.gravity();
    this.physics.typeOfCollisions();
    this.entity.draw();
  }
}
