var left = false;
var once = true;
const canvas = document.querySelector("#mario");
const context = canvas.getContext("2d");
const sprite = new Image();

sprite.src = "images/sheet.png";

//	this is only for mario in the entity object movement is defined there for ENTITIES not mario


// tracks time spent during two frames
class FrameTimer {
	constructor() {
		this.lastTick = (new Date()).getTime();
	}

	getSeconds() {
		let seconds = this.frameSpacing / 1000;

		if (isNaN(seconds)) {
			return 0;
		}

		return seconds
	}

	tick() {
		let currentTick = (new Date).getTime();
		this.frameSpacing = currentTick - this.lastTick;
		this.lastTick = currentTick;
	}

}

class Movement {
	constructor(pos, vel) {
		this.pressed = {
			left: false,
			right: false,
			top: false,
			jumping: false
		};

		this.currentFrame = 0;

		this.currentFrameL = 0;
		this.pos = pos;

		this.vel = vel;

		this.timer = new FrameTimer();
		this.timer.tick();

		this.frame = animations.stand.getSprite();


	}

	getFrame() {
		return this.frame;
	}

	updateVel(vel) {
		this.vel.y = vel;
		console.log(this.vel.y)
	}

	animations() {

		document.addEventListener("keydown", (event) => {
			switch (event.keyCode) {
				case 37:
					// LEFT
					this.pressed.left = true;
					break;
				case 38:
					// TOP
					this.pressed.top = true;
					console.log(this.vel.y)
					if (this.vel.y === 0) {
						console.log('called')
						this.pressed.jumping = true;
					} else {
						this.pressed.jumping = false;
					}
					break;
				case 39:
					// RIGHT
					this.pressed.right = true;
					break;
			}
		});

		document.addEventListener("keyup", (event) => {
			switch (event.keyCode) {
				case 37:
					// LEFT
					this.pressed.left = false;
					break;
				case 38:
					// TOP
					this.pressed.top = false;
					break;
				case 39:
					// RIGHT
					this.pressed.right = false;
					break;
			}
		});

		// this.frame = animations.stand.getSprite();
		// standing
		if (!this.pressed.right && !this.pressed.left && !this.pressed.jumping) {
			animations.stand.animate(this.timer.getSeconds());
			this.frame = animations.stand.getSprite();
		} else if (this.pressed.right && !this.pressed.jumping) {
			// running right
			animations.walkingRight.animate(this.timer.getSeconds());
			this.frame = animations.walkingRight.getSprite();
		} else if (this.pressed.jumping) {
			// jumping
			animations.jump.animate(this.timer.getSeconds());
			this.frame = animations.jump.getSprite();
		}

		if (this.pressed.top && this.pressed.jumping) {
			this.vel.y -= 20;
		}

		if (this.pressed.left) {
			this.vel.x -= 2;
		}

		if (this.pressed.right) {
			this.vel.x += 2;
		}


		// gravity
		this.vel.y += 0.9;
		this.pos.x += this.vel.x * 0.15;
		this.pos.y += this.vel.y * 0.15;
		// friction
		this.vel.x *= 0.9;
		this.vel.y *= 0.9;

		this.timer.tick();

		context.drawImage(sprite, this.frame.x, this.frame.y, this.frame.width, this.frame.height, this.pos.x, this.pos.y, this.frame.width, this.frame.height);
		// this makes it stand when the keys aren't pressed so mario
		// doesnt randomly stand
		// this is for when it is moving left
	// 	if (this.vel.y === 0 && !(this.isDown(37)) && left) {
	// 		if (grown) {
	// 			if (mush === false && once) {
	// 				if (animations.frame % 5 === 0) {
	// 					animations.currentState = animations.grownL[0];
	// 					setTimeout(function () {
	// 						animations.currentState = animations.grownL[1];
	// 						once = false;
	// 					}, 100);
	// 				}
	// 			} else if (!once) {
	// 				animations.currentState = animations.growStandL;
	// 			}
	// 		} else if (!grown) {
	// 			animations.currentState = animations.standingL;
	// 		}
	// 	} else if (this.vel.y === 0 && !(this.isDown(39)) && !left) {
	// 		if (grown) {
	// 			if (mush === false && once) {
	// 				if (animations.frame % 5 === 0) {
	// 					animations.currentState = animations.grown[0];
	// 					setTimeout(function () {
	// 						animations.currentState = animations.grown[1];
	// 						once = false;
	// 					}, 100);
	// 				}
	// 			} else if (!once) {
	// 				animations.currentState = animations.growStandR;
	// 			}
	// 		} else if (!grown) {
	// 			animations.currentState = animations.standing;
	// 		}
	// 	}


	// 	if (this.isDown(39)) {
	// 		left = false;
	// 		if (grown) {
	// 			if (this.vel.y < 0 || this.vel.y > 0) {
	// 				animations.currentState = animations.growJumpingR;
	// 				this.pos.x += this.vel.x;
	// 			} else if (this.vel.y === 0) {
	// 				this.pos.x += this.vel.x;
	// 				if (animations.frame % 5 === 0) {
	// 					animations.currentState = animations.growWalkingR[this.currentFrame];
	// 					this.currentFrame++;
	// 					if (this.currentFrame > 2) {
	// 						this.currentFrame = 0;
	// 					}
	// 				}
	// 			}
	// 		} else if (!grown) {
	// 			if (this.vel.y < 0 || this.vel.y > 0) {
	// 				animations.currentState = animations.jumping;
	// 				this.pos.x += this.vel.x;
	// 			} else if (this.vel.y === 0) {
	// 				this.pos.x += this.vel.x;
	// 				if (animations.frame % 5 === 0) {
	// 					animations.currentState = animations.walking[this.currentFrame];
	// 					this.currentFrame++;
	// 					if (this.currentFrame > 2) {
	// 						this.currentFrame = 0;
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}

	// 	if (this.isDown(37)) {
	// 		left = true;
	// 		if (grown) {
	// 			if (this.vel.y < 0 || this.vel.y > 0) {
	// 				animations.currentState = animations.growJumpingL;
	// 				this.pos.x -= this.vel.x;
	// 			} else if (this.vel.y === 0) {
	// 				this.pos.x -= this.vel.x;
	// 				if (animations.frame % 5 === 0) {
	// 					animations.currentState = animations.growWalkingL[this.currentFrameL];
	// 					this.currentFrameL++;
	// 					if (this.currentFrameL > 2) {
	// 						this.currentFrameL = 0;
	// 					}
	// 				}
	// 			}
	// 		} else if (!grown) {
	// 			if (this.vel.y < 0 || this.vel.y > 0) {
	// 				animations.currentState = animations.jumpingL;
	// 				this.pos.x -= this.vel.x;
	// 			} else if (this.vel.y === 0) {
	// 				this.pos.x -= this.vel.x;
	// 				if (animations.frame % 5 === 0) {
	// 					animations.currentState = animations.walkingL[this.currentFrameL];
	// 					this.currentFrameL++;
	// 					if (this.currentFrameL > 2) {
	// 						this.currentFrameL = 0;
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}

	// 	if (this.isDown(38)) {
	// 		if (left) {
	// 			if (grown) {
	// 				if (this.vel.y === 0) {
	// 					animations.currentState = animations.growJumpingL;
	// 					this.vel.y -= 12;
	// 				}
	// 			} else if (!grown) {
	// 				if (this.vel.y === 0) {
	// 					animations.currentState = animations.jumpingL;
	// 					this.vel.y -= 12;
	// 				}
	// 			}
	// 		} else if (!left) {
	// 			if (grown) {
	// 				if (this.vel.y === 0) {
	// 					animations.currentState = animations.growJumpingR;
	// 					this.vel.y -= 12;
	// 				}
	// 			} else if (!grown) {
	// 				if (this.vel.y === 0) {
	// 					animations.currentState = animations.jumping;
	// 					this.vel.y -= 12;
	// 				}
	// 			}
	// 		}
	// 	}
	}
}
