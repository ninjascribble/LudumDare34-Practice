export default class TextButton extends Phaser.Graphics {
  constructor (game, options) {
    const { x, y, width, height, text, textStyle, callback, context } = options;

    super(game, x, y);
    this.game.add.existing(this);

    this.lineStyle(2, 0x00dd00, 1);
    this.beginFill(0x000000, 1);
    this.drawRect(0, 0, width, height);

    this.text = this.game.add.text(x + (this.width / 2), y + (this.height / 2), text, textStyle);
    this.text.anchor.setTo(0.5, 0.5);

    this.inputEnabled = true;
    this.events.onInputDown.add(callback, context);
    this.events.onInputOver.add(this._over, this);
    this.events.onInputOut.add(this._out, this);
  }

  _over (button) {
    button.lineStyle(2, 0x00dd00, 1);
    button.beginFill(0x009900, 1);
    button.drawRect(button.graphicsData[0].shape.x, button.graphicsData[0].shape.y, button.graphicsData[0].shape.width, button.graphicsData[0].shape.height);
    button.text.fill = '#000';
  }

  _out (button) {
    button.lineStyle(2, 0x00dd00, 1);
    button.beginFill(0x00000, 1);
    button.drawRect(button.graphicsData[0].shape.x, button.graphicsData[0].shape.y, button.graphicsData[0].shape.width, button.graphicsData[0].shape.height);
    button.text.fill = '#0d0';
  }
}
