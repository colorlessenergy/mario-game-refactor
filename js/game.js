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
    this.player = new Player(sprite, context)


    this.update();

  }


  update () {
    context.clearRect(0, 0, canvas.width, canvas.height);

    window.requestAnimationFrame(this.update.bind(this));

    this.backgrounds.update();
    this.player.update();
  }
}

new Game();
