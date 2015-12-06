const ASSET_KEY = 'level_tiles';

export default class Platform extends Phaser.Sprite {

    constructor (game, x, y, group) {
        super(game, x, y, ASSET_KEY, 0);
        game.physics.arcade.enableBody(this);
        this.body.syncBounds = true;
        this.body.allowGravity = false;
        this.body.immovable = true;
        group.add(this);
    }
}
