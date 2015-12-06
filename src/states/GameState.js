import Player from '../objects/Player';

const SCALE = 6;

export default class GameState extends Phaser.State {

  preload () {
      Phaser.game = this.game;
      this.game.load.spritesheet('player_01', 'assets/player_01.png', 9, 12);
      this.game.load.spritesheet('level_tiles', 'assets/level_tiles.png', 8, 8);
  }

  create () {
      this.world = this.game.add.group();
      this.world.scale.setTo(SCALE, SCALE);
      this.world.x = 0;
      this.world.y = 0;

      this.player = new Player(this.game, 0, 12);

      this.world.add(this.player);
  }

  update () {
      if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
          this.player.moveRight();
      }
      else if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
          this.player.moveLeft();
      }
      else {
          this.player.idle();
      }
  }
}
