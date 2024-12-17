/**
 * Class representing the status bar for bottles.
 * @extends DrawableObject
 */
class StatusbarBottles extends DrawableObject {

    count = 0;

    IMAGES_STAT_BOTTLES = [
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png'
    ];

    /**
     * Creates an instance of StatusbarBottles.
     */
    constructor() {
        super().loadImages(this.IMAGES_STAT_BOTTLES);
        this.loadImage(this.IMAGES_STAT_BOTTLES[0]);
        this.x = 10;
        this.y = 40;
        this.width = 180;
        this.height = 50;
        this.setCount(this.count);
    }

    /**
     * Sets the count of bottles and updates the status bar image.
     * @param {number} count - The count of bottles.
     */
    setCount(count) {
        this.count = count;
        let path = this.IMAGES_STAT_BOTTLES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

     /**
     * Resolves the image index based on the count of bottles.
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
        ctx.fillText(this.count, this.x + this.width +3, this.y + this.height / 2 + 17);
    }
}