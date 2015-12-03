import TextButton from '../controls/TextButton';
import style from '../services/style';

export default class Menu extends Phaser.State {

  create () {

      let w = 120
      let h = 50
      let x = this.game.width / 2 - w / 2
      let y = this.game.height / 2 - h / 2
      let textButton = new TextButton(this.game, {
          text: 'Sandbox',
          callback: () => { this.game.state.start('GameState'); },
          x: x,
          y: y,
          width: w,
          height: h,
          textStyle: style.text()
      });

      this.game.add.existing(textButton);
  }
}
