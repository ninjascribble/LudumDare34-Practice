export default class GameLog extends Phaser.Text {
  constructor (game) {
    super(game, 350, 50, '', { font: '14px NewWiz', fill: '#00d000', align: 'left' });

    this.game.add.existing(this);
    this.game.time.events.add(250, this.initText, this);
  }

  initText () {
    this.text = 'Log\n';
  }

  log (text) {
    this.text += text + '\n';
  }
}
