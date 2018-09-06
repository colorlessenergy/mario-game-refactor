class Entity {
	constructor(sprite, vel, pos, context, enemy) {
		this.sprite = sprite;
		this.vel = vel;
		this.pos = pos;
		this.context = context;
		this.enemy = enemy;
		this.frame;

		this.goombaSprites = new SpriteSheet({
			sprites: [
				{ name: 'walk_1', x: 0, y: 374, width: 32, height: 32 },
				{ name: 'walk_2', x: 38, y: 374, width: 32, height: 32 },
			]
		});

		this.goombaAnimate = new Animate(
			[
				{ sprite: 'walk_1', time: 0.2 },
				{ sprite: 'walk_2', time: 0.2 }
			], this.goombaSprites);


		this.timer = new FrameTimer();
		this.timer.tick();

		new Physics(this.vel, this.pos, this.context, this.sprite, {w: 32, h: 32}, "goomba")
	}

	draw() {
		if (this.enemy == "goomba") {
			this.goombaAnimate.animate(this.timer.getSeconds());
			this.frame = this.goombaAnimate.getSprite();
		}
		this.context.drawImage(
			this.sprite,
			this.frame.x,
			this.frame.y,
			this.frame.width,
			this.frame.height,
			this.pos.x,
			this.pos.y,
			this.frame.width,
			this.frame.height
		);


		this.enemyMovement();
	}

	enemyMovement() {

		// gravity
		this.vel.y += 0.9;
		this.pos.x -= this.vel.x * 0.15;
		this.pos.y += this.vel.y * 0.15;
		// friction
		this.vel.y *= 0.9;

		if (this.pos.y > 192) {
			this.pos.y = 192;
		}

		this.timer.tick();
	}
}
