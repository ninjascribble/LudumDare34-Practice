const ASSET_KEY = 'level_tiles';

export default class Platform extends Phaser.Sprite {

    constructor (game, x, y, group) {
        super(game, x, y, ASSET_KEY, 0);
        group.add(this);
    }
}
