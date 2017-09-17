const wallArray = [];
const bricks = [];
const mysteryBlock = [];


class background {
  constructor (canvas, context, sprite, tile) {
    this.canvas = canvas;
    this.context = context;
    this.sprite = sprite;
    this.tile = tile;

    this.map = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
  }

  draw () {
    // using self to use outer this context which is the parent

    var self = this;
    this.map.forEach(function (outer, outerIndex) {
      outer.forEach(function (inner, currentIndex) {
        if (inner === 1) {
          self.context.fillStyle = "cyan";
          self.context.fillRect(currentIndex * 32, outerIndex * 32, 32, 32)
        } else if (inner === 0) {
          context.drawImage(
            tile,
            0,
            0,
            32,
            32,
            currentIndex * 32,
            outerIndex * 32,
            32,
            32
          );
          wallArray.push({
            x: currentIndex * 32,
            y: outerIndex * 32,
            h: 32,
            w: 32
          });
        } else if (inner === 2) {
          self.context.drawImage(
            self.tile,
            33,
            0,
            32,
            32,
            currentIndex * 32,
            outerIndex * 32,
            32,
            32
          );
          bricks.push({
            x: currentIndex * 32,
            y: outerIndex * 32,
            h: 32,
            w: 32,
            type: "brick"
          })
        } else if (inner === 3) {
          self.context.drawImage(
          self.tile,
          759,
          0,
          32,
          32,
          currentIndex * 32,
          outerIndex * 32,
          32,
          32
        );
        mysteryBlock.push({
          x: currentIndex * 32,
          y: outerIndex * 32,
          h: 32,
          w: 32,
          type: "mysteryblock"
        })
        }
      });
    });
  };

  update() {
    this.draw();
  }
}
