var left = false;
var once = true;

class Movement {
	constructor(pos, vel) {
		this.down = {};

		this.pressed = {};

		this.currentFrame = 0;

		this.currentFrameL = 0;
		this.pos = pos;

		this.vel = vel;

	}

	animations() {
		var self = this;
		document.addEventListener("keydown", function(event) {
			self.down[event.keyCode] = true;
		});
		document.addEventListener("keyup", function(event) {
			delete self.down[event.keyCode];
			delete self.pressed[event.keyCode];
		});

		// this makes it stand when the keys aren't pressed so mario
		// doesnt randomly stand
		// this is for when it is moving left
		if (this.vel.y === 0 && !(this.isDown(37)) && left) {
			if (grown) {
				if (mush === false && once) {
					if (animations.frame % 5 === 0) {
						animations.currentState = animations.grownL[0];
						setTimeout(function () {
							animations.currentState = animations.grownL[1];
							once = false;
						}, 100);
					}
				} else if (!once) {
					animations.currentState = animations.growStandL;
				}
			} else if (!grown) {
				animations.currentState = animations.standingL;
			}
		} else if (this.vel.y === 0 && !(this.isDown(39)) && !left) {
			if (grown) {
				if (mush === false && once) {
					if (animations.frame % 5 === 0) {
						animations.currentState = animations.grown[0];
						setTimeout(function () {
							animations.currentState = animations.grown[1];
							once = false;
						}, 100);
					}
				} else if (!once) {
					animations.currentState = animations.growStandR;
				}
			} else if (!grown) {
				animations.currentState = animations.standing;
			}
		}


		if (this.isDown(39)) {
			left = false;
			if (grown) {
				if (this.vel.y < 0 || this.vel.y > 0) {
					animations.currentState = animations.growJumpingR;
					this.pos.x += this.vel.x;
				} else if (this.vel.y === 0) {
					this.pos.x += this.vel.x;
					if (animations.frame % 5 === 0) {
						animations.currentState = animations.growWalkingR[this.currentFrame];
						this.currentFrame++;
						if (this.currentFrame > 2) {
							this.currentFrame = 0;
						}
					}
				}
			} else if (!grown) {
				if (this.vel.y < 0 || this.vel.y > 0) {
					animations.currentState = animations.jumping;
					this.pos.x += this.vel.x;
				} else if (this.vel.y === 0) {
					this.pos.x += this.vel.x;
					if (animations.frame % 5 === 0) {
						animations.currentState = animations.walking[this.currentFrame];
						this.currentFrame++;
						if (this.currentFrame > 2) {
							this.currentFrame = 0;
						}
					}
				}
			}
		}

		if (this.isDown(37)) {
			left = true;
			if (grown) {
				if (this.vel.y < 0 || this.vel.y > 0) {
					animations.currentState = animations.growJumpingL;
					this.pos.x -= this.vel.x;
				} else if (this.vel.y === 0) {
					this.pos.x -= this.vel.x;
					if (animations.frame % 5 === 0) {
						animations.currentState = animations.growWalkingL[this.currentFrameL];
						this.currentFrameL++;
						if (this.currentFrameL > 2) {
							this.currentFrameL = 0;
						}
					}
				}
			} else if (!grown) {
				if (this.vel.y < 0 || this.vel.y > 0) {
					animations.currentState = animations.jumpingL;
					this.pos.x -= this.vel.x;
				} else if (this.vel.y === 0) {
					this.pos.x -= this.vel.x;
					if (animations.frame % 5 === 0) {
						animations.currentState = animations.walkingL[this.currentFrameL];
						this.currentFrameL++;
						if (this.currentFrameL > 2) {
							this.currentFrameL = 0;
						}
					}
				}
			}
		}

		if (this.isDown(38)) {
			if (left) {
				if (grown) {
					if (this.vel.y === 0) {
						animations.currentState = animations.growJumpingL;
						this.vel.y -= 12;
					}
				} else if (!grown) {
					if (this.vel.y === 0) {
						animations.currentState = animations.jumpingL;
						this.vel.y -= 12;
					}
				}
			} else if (!left) {
				if (grown) {
					if (this.vel.y === 0) {
						animations.currentState = animations.growJumpingR;
						this.vel.y -= 12;
					}
				} else if (!grown) {
					if (this.vel.y === 0) {
						animations.currentState = animations.jumping;
						this.vel.y -= 12;
					}
				}
			}
		}
	}


	isDown(code) {
		return this.down[code];
	}

	isPressed(code) {
		if (this.pressed[code]) {
			return false
		} else if (this.down[code]) {
			this.down[code] = true;
		}

		return false;
	}
}
