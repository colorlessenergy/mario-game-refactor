const canvas = document.querySelector("#mario");
const context = canvas.getContext("2d");

// loading sprite sheet

const sprite = new Image();
const spriteLeft = new Image();
const tile = new Image();

tile.src = "images/tile.png";
spriteLeft.src = "images/sheetleft.png"
sprite.src = "images/sheet.png";

canvas.width = 480;
canvas.height = 288;


class Game {
  constructor () {
    var self = this;
    this.backgrounds = new background(canvas, context, sprite, tile);
    this.player = new Player(sprite, context, tile, spriteLeft)


    this.update();

  }


  update () {
    context.setTransform(1,0,0,1,0,0);//reset the transform matrix as it is cumulative
    context.clearRect(0, 0, canvas.width, canvas.height);//clear the viewport AFTER the matrix is reset

   //Clamp the camera position to the world bounds while centering the camera around the player
   var camX = this.clamp(-this.player.pos.x + canvas.width / 2, 0, 1000 - canvas.width, true);
   var camY = this.clamp(-this.player.pos.y + canvas.height/2, 0, 0, false);

    context.translate( camX, camY );

    window.requestAnimationFrame(this.update.bind(this));

    this.backgrounds.update();
    this.player.update();
  }
  clamp(value, min, max, x)  {
    if((value * -1) < min && x) return min;
    else if (value < min && !x) return min;
    else if(value > max) return max;
    return value;
  }
}

new Game();
