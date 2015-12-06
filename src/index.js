import GameState from './states/GameState';
import Menu from './states/Menu';

const TILE_W = 8;
const TILE_H = 8;
const VIEW_W = 16;
const VIEW_H = 9;
const SCALE = 6;

class Game extends Phaser.Game {
  constructor () {
    let w = TILE_W * VIEW_W * SCALE;
    let h = TILE_H * VIEW_H * SCALE;

    super(w, h, Phaser.AUTO, 'content', null, false, false);
    this.state.add('GameState', GameState, false);
    this.state.add('Menu', Menu, false);
    this.state.start('GameState');
  }
}

new Game();
