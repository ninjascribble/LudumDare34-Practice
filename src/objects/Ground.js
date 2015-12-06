const ASSET_KEY = 'level_tiles';

export default class Ground extends Phaser.Sprite {

    constructor (game, x, y, group) {
        super(game, x, y, ASSET_KEY, 2);
        group.add(this);
    }
}
