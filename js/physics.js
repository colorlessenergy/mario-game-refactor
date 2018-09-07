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

		this.movement = new Movement(this.pos, this.vel);
	}

	collision(entity) {
		if (this.entity) {
			if (this.pos.x < entity.x + entity.w &&
					this.pos.x + this.data.width > entity.x &&
					this.pos.y < entity.y + entity.h &&
					this.pos.y + this.data.height > entity.y) {
					this.handleCollision(entity)
			}
		}
	}

	updateFrame(frame) {
		this.frame = frame;
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

			if (entity.x > this.pos.x && entity.y <= this.pos.y) {
				console.log('left side of block')
				// if touches left of a block
				this.pos.x -= 2;
			}

			if (entity.x < this.pos.x && entity.y <= this.pos.y) {
				console.log('right side of block')
				this.pos.x += 2;
			}

			this.vel.y = this.movement.getVel();


			// if it is inside the block and
			// if (this.pos.y < entity.y + entity.h && this.pos.x + this.data.width < entity.x) {
			if (this.pos.y > entity.y) {
				// under the block
				this.pos.y = entity.y + this.data.height;
				console.log('under the block');
			}else if (this.pos.y > entity.y - 32) {
				this.pos.y = entity.y - this.data.height;
				this.vel.y = 0;
				this.movement.updateVel(this.vel.y);

				console.log('called on top of a block')
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
			if (this.pos.y < entity.y) {
				goombaDead = true;
			} else {
				// resets mario to the beginning of the map and set goomba to the end
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

		this.movement.animations();

		this.updateFrame(this.movement.getFrame());


		if (mushroom && mush) {
			this.collision(mushroom)
		}

		if (goomba) {
			this.collision(goomba)
		}
	}
}
