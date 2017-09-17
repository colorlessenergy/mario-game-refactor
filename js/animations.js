var left = false;

var animations = {
  frame: 0,

  standing: {
    x: 38,
    y: 86,
    w: 24,
    h: 32,
    name: "standing"
  },

  jumping: {
    x: 194,
    y: 86,
    w: 32,
    h: 32,
    name: "jumping"
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

  currentState: undefined
}
