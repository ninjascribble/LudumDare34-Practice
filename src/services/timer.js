import messenger from './messenger';

let currentTime = 0;
let multiplier = 1;
let paused = false;
let game = {};

let stateChanged = 'timer:stateChanged';

function init (theGame) {
  game = theGame;
  game.time.events.loop(0, tick, this).timer.start();

  messenger.register(stateChanged);
}

function pause () {
  paused = true;
  messenger.dispatch(stateChanged);
}

function resume () {
  paused = false;
  messenger.dispatch(stateChanged);
}

function setMultiplier (value) {
  multiplier = value;
  messenger.dispatch(stateChanged);
}

function tick () {
  if (!paused) {
    currentTime += multiplier * game.time.elapsed;
  }
}

export default {
  get paused () {
    return paused;
  },
  get multiplier () {
    return multiplier;
  },
  get currentTime () {
    return currentTime;
  },
  init,
  setMultiplier,
  pause,
  resume
};
