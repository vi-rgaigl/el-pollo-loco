/**
 * Class representing the status bar for coins.
 * @extends DrawableObject
 */
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

    /**
     * Creates an instance of StatusbarCoins.
     */
    constructor() {
        super().loadImages(this.IMAGES_STAT_COINS);
        this.loadImage(this.IMAGES_STAT_COINS[0]);
        this.x = 10;
        this.y = 80;
        this.width = 180;
        this.height = 50;
        this.setCount(this.count);
    }

    /**
     * Sets the count of coins and updates the status bar image.
     * @param {number} count - The count of coins.
     */
    setCount(count) {
        this.count = count;
        let path = this.IMAGES_STAT_COINS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Resolves the image index based on the count of coins.
     * @returns {number} The index of the image to display.
     */
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

    /**
     * Draws the status bar and the count of bottles on the canvas.
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        super.draw(ctx);
        ctx.font = '20px zabras';
        ctx.fillStyle = 'white';
        ctx.fillText(this.count, this.x + this.width + 3, this.y + this.height / 2 + 17);
    }
}