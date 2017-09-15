var animations = {
  frame: 0,

  standing: {
    x: 38,
    y: 86,
    w: 24,
    h: 32
  },

  jumping: {
    x: 194,
    y: 86,
    w: 32,
    h: 32
  },

  walking: undefined,

  walkDefined: function (main) {
    return [
      {
        sourceX: 68,
        sourceY: 88,
        sourceWidth: 24,
        sourceHeight: 30,
        desX: main.x,
        desY: main.y,
        desWidth: 24,
        desHeight: 30
      },

      {
        sourceX: 98,
        sourceY: 86,
        sourceWidth: 22,
        sourceHeight: 32,
        desX: main.x,
        desY: main.y,
        desWidth: 22,
        desHeight: 32
      },

      {
        sourceX: 126,
        sourceY: 86,
        sourceWidth: 30,
        sourceHeight: 32,
        desX: main.x,
        desY: main.y,
        desWidth: 30,
        desHeight: 32
      }
    ]
  },

  currentState: undefined
}
