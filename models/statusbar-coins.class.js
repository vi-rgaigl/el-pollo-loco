class StatusbarCoins extends DrawableObject {

    count = 0;

    IMAGES_STAT_COINS = [
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'
    ];

    constructor() {
        super().loadImages(this.IMAGES_STAT_COINS);
        this.loadImage(this.IMAGES_STAT_COINS[0]);
        this.x = 10;
        this.y = 80;
        this.width = 180;
        this.height = 50;
        this.setCount(this.count);
    }

    setCount(count) {
        this.count = count;
        this.img = this.getImageFromCount();
    }

    getImageFromCount() {
        let path;
        switch (true) {
            case (this.count > 10):
                path = this.IMAGES_STAT_COINS[5];
                break;
            case (this.count > 8):
                path = this.IMAGES_STAT_COINS[4];
                break;
            case (this.count > 6):
                path = this.IMAGES_STAT_COINS[3];
                break;
            case (this.count > 4):
                path = this.IMAGES_STAT_COINS[2];
                break;
            case (this.count > 2):
                path = this.IMAGES_STAT_COINS[1];
                break;
            default:
                path = this.IMAGES_STAT_COINS[0];
        }
        return this.img = this.imageCache[path];
    }
}