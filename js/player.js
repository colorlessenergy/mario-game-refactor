var goombaProp = [{
	x: 38,
	y: 374,
	w: 32,
	h: 32
	},
	{
		x: 1.2,
		y: 0
	},
	{
		x: 400,
		y: 128 - 32
	}
];

class Player {
	constructor(sprite, context, tile, left) {
		var self = this;
		this.sprite = sprite;
		this.spriteLeft = left;
		this.context = context;

		this.tile = tile,

			this.vel = {
				x: 4.0,
				y: 0
			};

		this.pos = {
			x: 150,
			y: 0,
		};

		this.mushProp = [{
				x: 825,
				y: 264,
				w: 32,
				h: 32
			},
			{
				x: 1.2,
				y: 0
			},
			{
				x: 288,
				y: 128 - 32
			}
		];

		animations.currentState = animations.jumping;

		this.physics = new Physics(this.vel, this.pos, this.context, this.sprite, undefined, "mario");
		this.movement = new Movement(this.pos, this.vel);


		this.mushphy = new Physics(this.mushProp[1], this.mushProp[2], this.context, this.tile, this.mushProp[0], "mush");
		this.mush = new Entity(this.mushProp[0], this.tile, this.mushProp[1], this.mushProp[2], this.context, true);

		this.goombaPhy = new Physics(goombaProp[1], goombaProp[2], this.context, this.sprite, goombaProp[0], "goomba")
		this.goomba = new Entity(goombaProp[0], this.sprite, goombaProp[1], goombaProp[2], this.context, false, "goomba");
	}

	update() {
		animations.frame++;
		if (left) {
			this.entity = new Entity(animations.currentState, this.spriteLeft, this.vel, this.pos, this.context);
		} else if (!left) {
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
		if (goomba) {
			this.goombaPhy.gravity();
			this.goombaPhy.typeOfCollisions();
			this.goomba.enemyMovement();
		}
	}

}
