let goombaDead = false;
let goombaOffScreen = false;

class Entity {
	constructor(data, sprite, vel, pos, context, enemy, goomba) {
		this.x = data.x;
		this.y = data.y;
		this.h = data.h,
		this.w = data.w;
		this.sprite = sprite;
		this.vel = vel;
		this.pos = pos;
		this.context = context;
		this.enemy = enemy;
		this.goomba = goomba;
		this.tick = 0;
		this.currentAnimation = 0;
		this.speedFall = 0;
		this.goombaAnimation = [
			{
				x: 2,
				y: 374
			},
			{
				x: 38,
				y: 374
			},
			{
				x: 76,
				y: 390
			}
		];
	}

	draw() {
		this.context.drawImage(
			this.sprite,
			this.x,
			this.y,
			this.w,
			this.h,
			this.pos.x,
			this.pos.y,
			this.w,
			this.h
		);
	}

	enemyMovement() {
		this.tick++;
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


		// to move the mushroom when it exists
		if (this.enemy === true) {
			this.pos.x += this.vel.x;
			mushroom = {
				x: this.pos.x,
				y: this.pos.y,
				h: 32,
				w: 32,
				type: "mushroom"
			};
		}

		if (this.goomba === "goomba" && goombaDead !== true) {
			this.pos.x -= this.vel.x;

			if (this.tick % 5 === 0) {
				this.x = this.goombaAnimation[this.currentAnimation].x;
				this.y = this.goombaAnimation[this.currentAnimation].y;
				
				this.currentAnimation++;				
				

				if (this.currentAnimation > 1) {
					this.currentAnimation = 0;
				}
				
			}
			goomba = {
				x: this.pos.x,
				y: this.pos.y,
				h: 32,
				w: 32,
				type: "goomba",
			};
		} else if (goombaDead == true && this.goomba === "goomba") {
			this.x = this.goombaAnimation[2].x;
			goomba = false;			

			console.log(this.pos.y, canvas.height)
			if (this.pos.y < canvas.height) {
				this.speedFall += 0.5;
				console.log(this.speedFall)
				this.pos.y += this.speedFall;				
			} else if (this.pos.y >= canvas.height) {
				goombaDead = false;
				goombaOffScreen = true;
			}
		}
	}
}
