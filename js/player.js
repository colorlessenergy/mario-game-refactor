class Player {
  constructor (sprite, context) {
    var self = this;
    this.sprite = sprite;
    this.context = context;

    this.vel = {x: 3.8, y: 0};

    this.pos = {x: 150, y: 0};
    this.physics = new Physics(this.vel, this.pos);
    this.movement = new Movement(this.pos, this.vel);

    animations.walking = animations.walkDefined(this.pos);

    animations.currentState = animations.jumping;

  }

  update () {
    animations.frame++;
    this.entity = new Entity(animations.currentState, this.sprite, this.vel, this.pos, this.context);
    console.log(animations.currentState);
    this.movement.animations();
    this.physics.gravity();
    this.physics.typeOfCollisions();
    this.entity.draw();
  }

}
