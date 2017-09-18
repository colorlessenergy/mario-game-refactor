var animations = {
  frame: 0,

  standing: {
    x: 38,
    y: 86,
    w: 24,
    h: 32,
    name: "standing"
  },

  standingL: {
    x: 446,
    y: 86,
    w: 24,
    h: 32
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

  walking: undefined,

  walkDefined: function (main) {
    return [
      {
        x: 68,
        y: 88,
        w: 24,
        h: 30
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

  walkDefinedLeft: function () {
    return [
      {
        x: 352,
        y: 86,
        w: 30,
        h: 32
      },

      {
        x: 416,
        y: 88,
        w: 24,
        h: 30
      },

      {
        x: 388,
        y: 86,
        w: 22,
        h: 32
      }
    ];
  },

  currentState: undefined
};

animations.walkingL = animations.walkDefinedLeft(this.pos);
animations.walking = animations.walkDefined(this.pos);
