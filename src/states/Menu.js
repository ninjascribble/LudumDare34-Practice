import TextButton from '../controls/TextButton';
import style from '../services/style';

export default class Menu extends Phaser.State {

  create () {
      global.pixel = {
          scale: 6,
          canvas: null,
          context: null,
          width: 0,
          height: 0
      };

      console.log(game.height, pixel.scale, game.height * pixel.scale)
      console.log(game.width, pixel.scale, game.width * pixel.scale)

      // Scaling the canvas up
      // See: http://www.photonstorm.com/phaser/pixel-perfect-scaling-a-phaser-game
      game.canvas.style['display'] = 'none';
      pixel.canvas = Phaser.Canvas.create('', game.width * pixel.scale, game.height * pixel.scale);
      pixel.context = pixel.canvas.getContext('2d');
      Phaser.Canvas.addToDOM(pixel.canvas);
      Phaser.Canvas.setSmoothingEnabled(pixel.context, false);
      pixel.width = pixel.canvas.width;
      pixel.height = pixel.canvas.height;

      this.game.state.start('GameState');
  }

  render () {
      pixel.context.drawImage(game.canvas, 0, 0, game.width, game.height, 0, 0, pixel.width, pixel.height);
  }
}
