class Player {
  constructor (sprite, context, tile, left) {
    var self = this;
    this.sprite = sprite;
    this.spriteLeft = left;
    this.context = context;

    this.tile = tile,

    this.vel = {x: 4.0, y: 0};

    this.pos = {x: 150, y: 0};

    this.mushProp = [{x: 825, y: 264, w: 32, h: 32},
      {x: 1.2, y: 0},
      {x: 288, y: 128 - 32}
    ];



    animations.currentState = animations.jumping;

    this.physics = new Physics(this.vel, this.pos, this.context, this.sprite, animations.currentState, "mario");
    this.movement = new Movement(this.pos, this.vel);


    this.mushphy = new Physics(this.mushProp[1], this.mushProp[2], this.context, this.tile, this.mushProp[0])
    this.mush = new Entity(this.mushProp[0], this.tile, this.mushProp[1], this.mushProp[2], this.context, true);

  }

  update () {
    animations.frame++;
    if (left) {
      this.entity = new Entity(animations.currentState, this.spriteLeft, this.vel, this.pos, this.context);
    } else if (!left || grown){
      this.entity = new Entity(animations.currentState, this.sprite, this.vel, this.pos, this.context);
    }
    this.movement.animations();
    this.physics.gravity();
    this.physics.typeOfCollisions();
    this.entity.draw();
    if (mush) {
      this.mushphy.gravity();
      this.mushphy.typeOfCollisions();
      this.mush.enemyMovement();
    }
  }

}
