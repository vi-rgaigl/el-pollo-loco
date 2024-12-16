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
        let path = this.IMAGES_STAT_COINS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.count >= 10) {
            return 5;
        } else if (this.count >= 8) {
            return 4;
        } else if (this.count >= 6) {
            return 3;
        } else if (this.count >= 3) {
            return 2;
        } else if (this.count >= 1) {
            return 1;
        } else {
            return 0;
        }
    }

    draw(ctx) {
        super.draw(ctx);
        ctx.font = '20px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(this.count, this.x + this.width , this.y + this.height / 2 + 17);
    }
}