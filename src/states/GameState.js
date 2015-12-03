import Player from '../objects/Player';

export default class GameState extends Phaser.State {

  preload () {

      Phaser.game = this.game;

      this.game.load.spritesheet('Yakuza1', 'assets/CyberCity/$Yakuza1.png', 64, 64);
  }

  create () {

      let x = this.game.width / 2 - 32
      let y = this.game.height / 2 - 32

      this.player = new Player(this.game, x, y);
  }

  update () {

      this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && this.player.moveLeft();
      this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && this.player.moveRight();
      this.game.input.keyboard.isDown(Phaser.Keyboard.UP) && this.player.moveUp();
      this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN) && this.player.moveDown();
  }
}
