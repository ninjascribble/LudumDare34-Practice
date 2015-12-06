const ASSET_KEY = 'player_01';

export default class Player extends Phaser.Sprite {

    constructor (game, x, y) {
        super(game, x, y, ASSET_KEY, 1);
        this.anchor.setTo(.4, 1);
        this.animations.add('idle',  [0, 1],    5, true);
        this.animations.add('walk',  [3, 4, 5], 6, true);
        this.idle();
    }

    idle () {
        this.animations.play('idle');
    }

    moveLeft () {
        this.scale.x = -1;
        this.animations.play('walk');
    }

    moveRight () {
        this.scale.x = 1;
        this.animations.play('walk');
    }
}
