import Unit from '../objects/Unit';
let game;

function init (currentGame) {
  game = currentGame;
}

function spawn () {
  return new Unit(game, 400, 300);
}

export default {
  init,
  spawn
};
