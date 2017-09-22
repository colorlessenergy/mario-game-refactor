var mush = false;
var mushroom;
var grown = false;
var goomba = true;
class Physics {
	constructor(vel, pos, context, tile, data, entity) {
		this.data = data;
		this.entity = entity;
		this.vel = vel;
		this.pos = pos
		this.tile = tile;
		this.context = context;
		this.mush = undefined;
	}

	gravity() {
		this.vel.y += 0.6;
		this.pos.y += this.vel.y;

	}

	collision(entity) {
		if (this.entity === "mush" || this.entity === "goomba") {
			if (this.pos.x < entity.x + entity.w && this.pos.x + this.data.w > entity.x &&
				this.pos.y < entity.y + entity.h && this.data.h + this.pos.y > entity.y) {
				this.handleCollision(entity)
			}
		} else if (this.entity === "mario") {
			if (this.pos.x < entity.x + entity.w && this.pos.x + animations.currentState.w > entity.x &&
				this.pos.y < entity.y + entity.h && animations.currentState.h + this.pos.y > entity.y) {
				this.handleCollision(entity)
			}
		}
	}

	handleCollision(entity) {

		if (this.entity === "goomba") {
			if (this.pos.y < entity.y && (this.pos.x + this.data.w) > entity.x + 10 &&
				this.pos.x < (entity.x + entity.w) - 10 && this.vel.y >= 0) {
				this.pos.y = entity.y - this.data.h;
				this.vel.y = 0;
			}
		} else if (this.entity === "mush") {
			if (this.pos.y < entity.y && (this.pos.x + this.data.w) > entity.x + 10 &&
				this.pos.x < (entity.x + entity.w) - 10 && this.vel.y >= 0) {
				this.pos.y = entity.y - this.data.h;
				this.vel.y = 0;
			} else if (this.pos.y > entity.y) {
				this.pos.y = entity.y + this.data.h;
			}

		} else if (this.entity === "mario") {
			if (this.pos.y < entity.y && (this.pos.x + animations.currentState.w) > entity.x + 10 &&
				this.pos.x < (entity.x + entity.w) - 10 && this.vel.y >= 0) {
				this.pos.y = entity.y - animations.currentState.h;
				this.vel.y = 0;
			} else if (this.pos.y > entity.y) {
				this.pos.y = entity.y + animations.currentState.h;
			} else if (entity.x > this.pos.x && entity.y <= this.pos.y) {
				this.pos.x -= 1;
			}
		}


		if (entity.type === "mysteryblock") {
			if (mush !== true && grown === false) {
				mush = true;
			}
		}

		if (entity.type === "mushroom" && this.entity === "mario") {
			console.log("touched mushroom");
			grown = true;
			mush = false;
		}

		if (entity.type === "goomba" && this.entity === "mario") {
			console.log(this.pos.y, entity.y);
			if (this.pos.y < entity.y) {
				goomba = false;
			} else {
				console.log("called");
				this.pos.x = 0;
				goombaProp[2].x = 400;
			}
		}

	}

	typeOfCollisions() {
		var self = this;
		wallArray.forEach(function(wall) {
			self.collision(wall)
		});

		bricks.forEach(function(brick) {
			self.collision(brick)
		});

		mysteryBlock.forEach(function(mysteryBlock) {
			self.collision(mysteryBlock)
		});

		if (mushroom && mush) {
			this.collision(mushroom)
		}

		if (goomba) {
			this.collision(goomba)
		}
	}
}
