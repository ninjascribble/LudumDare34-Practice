import GameState from './states/GameState';
import Menu from './states/Menu';
// import TextTools from '../../phaser-plugin-text-tools';

class Game extends Phaser.Game {
  constructor () {
    super(800, 600, Phaser.AUTO, 'content', null);

    this.state.add('GameState', GameState, false);
    this.state.add('Menu', Menu, false);
    this.state.start('Menu');
  }
}

new Game();
