import Player from '../objects/Player';
import Ground from '../objects/Ground';
import Platform from '../objects/Platform';

const SCALE = 6;
const LEVEL_01 = [
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, Platform, Platform, Platform, Platform, null, null, Platform, Platform, Platform, Platform, Platform, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [Ground, Ground, null, null, null, null, null, null, null, null, null, null, Ground, Ground, null, null, null, Ground, Ground, Ground, Ground, Ground, Ground, Ground],
    [Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground]
];

export default class GameState extends Phaser.State {

  preload () {
      Phaser.game = this.game;
      this.game.load.spritesheet('player_01', 'assets/player_01.png', 9, 12);
      this.game.load.spritesheet('level_tiles', 'assets/level_tiles.png', 8, 8);
  }

  create () {
      this.game.world.scale.setTo(SCALE, SCALE);
      LEVEL_01.forEach((row, ri) => {
        row.forEach((obj, ci) => {
            if (typeof obj === 'function') {
                new obj(this.game, ci * 8, ri * 8, this.game.world);
            }
        });
      });
      this.player = new Player(this.game, 8, 48, this.game.world);
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
