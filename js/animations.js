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
    h: 64
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

  growWalkingR: undefined,

  growWalkingRDefined: function () {
    return [
      {
        x: 76,
        y: 4,
        w: 32,
        h: 60
      },

      {
        x: 116,
        y: 2,
        w: 28,
        h: 62
      },

      {
        x: 146,
        y: 0,
        w: 32,
        h: 64
      }
    ];
  },

  currentState: undefined
};

animations.growWalkingR = animations.growWalkingRDefined();
animations.walkingL = animations.walkDefinedLeft();
animations.walking = animations.walkDefined();
