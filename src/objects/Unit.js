const barks = [
  'I\'m a unit!',
  'Hi there!',
  'This is a fun game!',
  'I don\'t know what to do!'
];

export default class Unit extends Phaser.Sprite {
  constructor (game, x, y, initialValues) {
    super(game, x, y, '', 0);

    this.experience = 0;
    this.name = 'unit!';
    this.brains = initialValues.brains;
    this.brawn = initialValues.brawn;
    this.focus = initialValues.focus;
    this.charm = initialValues.charm;
    this.fortune = initialValues.fortune;
  }

  speak () {
    const barkIndex = Math.floor(Math.random() * barks.length);
  }
}
