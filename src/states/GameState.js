import Player from '../objects/Player';
import Ground from '../objects/Ground';
import Platform from '../objects/Platform';

const SCALE = 1;
const GRAVITY = 1200;
const LEVEL_01 = [
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, Platform, Platform, Platform, Platform, null, null, Platform, Platform, Platform, Platform, Platform, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, Ground, Ground, null],
    [Ground, Ground, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, Ground, Ground, Ground, Ground, Ground, Ground, Ground],
    [Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground, Ground]
];

export default class GameState extends Phaser.State {

  preload () {
      Phaser.game = this.game;
      this.game.load.spritesheet('player_01', 'assets/player_01.png', 9, 12);
      this.game.load.spritesheet('level_tiles', 'assets/level_tiles.png', 8, 8);
  }

  create () {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.gravity.y = GRAVITY;
      this.level = this.game.add.group(this.game.world, 'level');
      this.level.scale.setTo(6, 6);

      LEVEL_01.forEach((row, ri) => {
        row.forEach((obj, ci) => {
            if (typeof obj === 'function') {
                new obj(this.game, ci * 8, ri * 8, this.level);
            }
        });
      });

      this.player = new Player(this.game, 8, 4, this.game.world);
      this.player.scale.setTo(6, 6);
      this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_PLATFORMER);
  }

  update () {
      this.game.physics.arcade.collide(this.player, this.level);

      if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
          this.player.jump();
      }

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

  render() {

    //   this.game.world.forEach((child) => {
    //       this.game.debug.body(child, 'rgba(255, 0, 0, .6)');
    //   });
      //
    //   this.level.forEach((child) => {
    //       this.game.debug.body(child, 'rgba(0, 127, 255, .6)');
    //   });
  }
}
