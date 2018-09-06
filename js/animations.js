class SpriteSheet {
	constructor(data) {
		this.sprites = [];

		this.load(data);

	}

	load(data) {
		this.sprites = data.sprites;

	}

	getOffset(spriteName) {
		for (let i = 0; i < this.sprites.length; i++) {
			let sprite = this.sprites[i];

			if (sprite.name === spriteName) {
				return {
					x: sprite.x,
					y: (sprite.y || 0),
					width: sprite.width,
					height: sprite.height
				};

			}
		}

		return null;
	}
}

class Animate {
	constructor(data, sprites) {
		this.sprites = sprites;

		this.frames = [];
		this.frame = null;
		this.frameDuration = 0;

		this.frameIndex = 0;

		this.load(data);

	}

	load(data) {
		this.frames = data;

		this.frameDuration = data[0].time
	}

	animate(deltaTime) {
		// reduce time from duration to show a frame
		this.frameDuration -= deltaTime;

		// duration has passed
		if (this.frameDuration <= 0) {

			// change next frame or first
			this.frameIndex += 1;

			if (this.frameIndex == this.frames.length) {
				this.frameIndex = 0;
			}

			// update duration to new duration of sprite
			this.frameDuration = this.frames[this.frameIndex].time;

		}
	}

	getSprite() {
		return this.sprites.getOffset(this.frames[this.frameIndex].sprite);
	}
}



const marioSprites = new SpriteSheet({
	sprites: [
		{ name: 'stand', x: 38, y: 86, width: 24, height: 32 },
		{ name: 'walk_1', x: 68, y: 88, width: 24, height: 30 },
		{ name: 'walk_2', x: 98, y: 86, width: 22, height: 32 },
		{ name: 'walk_3', x: 126, y: 86, width: 30, height: 32 },
		{ name: 'jump', x: 194, y: 86, width: 32, height: 32 }
	]
});


const animations = {
	frame: 0,
	walkingRight: (function () {

		return new Animate(
		[
			{ sprite: 'stand', time: 0.2 },
			{ sprite: 'walk_1', time: 0.2 },
			{ sprite: 'walk_2', time: 0.2 },
			{ sprite: 'walk_3', time: 0.2 }
		], marioSprites)
	})(),

	stand: new Animate([
		{ sprite: 'stand', time: 0.2 },
		{ sprite: 'stand', time: 0.2 }
	], marioSprites),

	jump: new Animate([
		{ sprite: 'jump', time: 0.2 },
		{ sprite: 'jump', time: 0.2 }
	], marioSprites),

	standingL: {
		x: 446,
		y: 86,
		w: 24,
		h: 32
	},

	growStandL: {
		x: 476,
		y: 0,
		w: 32,
		h: 64
	},

	growStandR: {
		x: 0,
		y: 0,
		w: 32,
		h: 64
	},

	jumping: {
		x: 194,
		y: 86,
		w: 32,
		h: 32,
		name: "jumping"
	},

	jumpingL: {
		x: 282,
		y: 86,
		w: 32,
		h: 32
	},

	growJumpingR: {
		x: 222,
		y: 2,
		w: 32,
		h: 62
	},

	growJumpingL: {
		x: 254,
		y: 2,
		w: 32,
		h: 64
	},

	walking: undefined,

	walkDefined: function() {
		return [{
				x: 68,
				y: 88,
				w: 24,
				h: 32
			},

			{
				x: 98,
				y: 86,
				w: 22,
				h: 32
			},

			{
				x: 126,
				y: 86,
				w: 30,
				h: 32
			}
		]
	},

	walkingL: undefined,

	walkDefinedLeft: function() {
		return [{
				x: 352,
				y: 86,
				w: 30,
				h: 32
			},

			{
				x: 416,
				y: 88,
				w: 24,
				h: 32
			},

			{
				x: 388,
				y: 86,
				w: 22,
				h: 32
			}
		];
	},

	growWalkingR: undefined,

	growWalkingRDefined: function() {
		return [{
				x: 76,
				y: 4,
				w: 32,
				h: 64
			},

			{
				x: 116,
				y: 2,
				w: 28,
				h: 64
			},

			{
				x: 146,
				y: 0,
				w: 32,
				h: 64
			}
		];
	},

	growWalkingL: undefined,

	growWalkingLDefined: function() {
		return [{
				x: 400,
				y: 4,
				w: 32,
				h: 64
			},

			{
				x: 366,
				y: 2,
				w: 28,
				h: 64
			},

			{
				x: 330,
				y: 0,
				w: 32,
				h: 64
			}
		];
	},

	grown: undefined,

	growing: function() {
		return [{
				x: 0,
				y: 70,
				w: 32,
				h: 48
			},

			{
				x: 0,
				y: 0,
				w: 32,
				h: 64
			}]
	},

	grownL: undefined,

	growingL: function () {
		return [{
				x: 476,
				y: 70,
				w: 32,
				h: 48
			},

			{
				x: 476,
				y: 0,
				w: 32,
				h: 64
			}]

	},

	currentState: undefined
};


animations.grown = animations.growing();
animations.grownL = animations.growingL();
animations.growWalkingR = animations.growWalkingRDefined();
animations.growWalkingL = animations.growWalkingLDefined();
animations.walkingL = animations.walkDefinedLeft();
animations.walking = animations.walkDefined();
