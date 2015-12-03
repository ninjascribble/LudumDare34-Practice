import TextButton from './TextButton';
import style from '../services/style';

export default class Modal {
  constructor (game, defaults) {
    this.game = game;
    this.buttons = [];
    this.group = this.game.add.group();
    this.defaults = defaults;

    this._buildModal();
  }

  addButton (options) {
    this.buttons.push(options);
  }

  show (options) {
    const merged = Object.assign({}, this.defaults, options);
    const {width, height, lightDismiss, callback, context, buttons, text} = merged;
    const padding = 30;
    const x = Math.floor((this.game.width - width) / 2);
    const y = Math.floor((this.game.height - height) / 2);

    this.callback = callback;
    this.callbackContext = context;
    this.gameText.wordWrapWidth = width - (padding * 2);
    this.gameText.x = x + padding;
    this.gameText.y = y + padding;
    this.gameText.text = text;
    this.graphics.beginFill(0x000000, 1);
    this.graphics.drawRect(x, y, width, height);
    this.graphics.endFill();

    while (this.buttons.length) {
      const button = this.buttons.pop();
      this.group.removeChild(button);
      button.text.destroy();
      delete button.text;
      button.destroy();
    }

    this.buttons.length = 0;

    if (buttons && buttons.length) {
      buttons.forEach((button) => {
        const buttonWidth = 75;
        const buttonHeight = 30;
        const textButton = new TextButton(this.game, {
          text: button.text,
          callback: button.callback,
          context: button.context,
          x: x + width - padding - buttonWidth,
          y: y + height - padding - buttonHeight,
          width: buttonWidth,
          height: buttonHeight,
          textStyle: style.text()
        });

        this.buttons.push(textButton);
        this.group.add(textButton);
        this.group.add(textButton.text);
      });
    }

    if (lightDismiss) {
      this.clickEater.events.onInputDown.add(this._dismiss, this, 2);
    } else {
      this.clickEater.events.onInputDown.remove(this._dismiss, this);
    }

    this.game.world.bringToTop(this.group);
    this.group.visible = true;
  }

  hide () {
    this.group.visible = false;
    if (this.callback) {
      this.callback.call(this.callbackContext || {});
    };
  }

  _buildModal () {
    this.graphics = this.game.add.graphics();
    this.clickEater = this.game.add.sprite(0, 0, new Phaser.RenderTexture(this.game, ''));

    this.clickEater.inputEnabled = true;
    this.clickEater.width = this.game.width;
    this.clickEater.height = this.game.height;
    this.clickEater.input.priorityID = 0;

    this.graphics.beginFill(0xffffff, 0.30);
    this.graphics.drawRect(0, 0, this.game.width, this.game.height);
    this.graphics.lineStyle(3, 0x00dd00, 1);

    this.gameText = this.game.add.text(0, 0, '', style.text());

    this.group.add(this.clickEater);
    this.group.add(this.graphics);
    this.group.add(this.gameText);

    this.group.visible = false;
  }

  _dismiss (e, pointer) {
    this.hide();
  }
}
