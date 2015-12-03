const ASSET_KEY = 'Yakuza1';

export default class Player extends Phaser.Sprite {

    constructor (game, x, y) {

        super(game, x, y, ASSET_KEY, 1);

        this.game.add.existing(this);
        this.animations.add('walk_down',  [1, 2, 1, 0],    8, true);
        this.animations.add('walk_left',  [4, 5, 4, 3],    6, true);
        this.animations.add('walk_right', [7, 8, 7, 6],    6, true);
        this.animations.add('walk_up',    [10, 9, 10, 11], 8, true);
    }

    moveDown () {
        this.animations.play('walk_down');
    }

    moveLeft () {
        this.animations.play('walk_left');
    }

    moveRight () {
        this.animations.play('walk_right');
    }

    moveUp () {
        this.animations.play('walk_up');
    }
}
