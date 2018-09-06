class Player {
	constructor(sprite, context, left) {
		this.sprite = sprite;
		this.spriteLeft = left;
		this.context = context;

		this.vel = {
			x: 0,
			y: 0
		};

		this.pos = {
			x: 150,
			y: 150,
		};


		this.physics = new Physics(this.vel, this.pos, this.context, this.sprite, animations.stand.getSprite(), "mario");
	}

	update() {
		this.physics.typeOfCollisions();

	}

}
