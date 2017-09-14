const canvas = document.querySelector("#mario");
const context = canvas.getContext("2d");

// loading sprite sheet

const sprite = new Image();
const tile = new Image();

tile.src = "images/tile.png";
sprite.src = "images/sheet.png";

canvas.width = 480;
canvas.height = 288;

class Game {
  constructor () {
    var self = this;
    this.backgrounds = new background(canvas, context, sprite, tile);

    tile.addEventListener("load", function () {
      self.backgrounds.update();
    })
  }

  update () {
    self.backgrounds.update()
  }
}

new Game()
