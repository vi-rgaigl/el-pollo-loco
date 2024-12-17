/**
 * Class representing the status bar for health of Endboss.
 * @extends DrawableObject
 */
class StatusbarEndboss extends DrawableObject {

    percentage = 100;

    IMAGES_STAT_ENDBOSS = [
        './img/7_statusbars/2_statusbar_endboss/blue/blue0.png',
        './img/7_statusbars/2_statusbar_endboss/blue/blue20.png',
        './img/7_statusbars/2_statusbar_endboss/blue/blue40.png',
        './img/7_statusbars/2_statusbar_endboss/blue/blue60.png',
        './img/7_statusbars/2_statusbar_endboss/blue/blue80.png',
        './img/7_statusbars/2_statusbar_endboss/blue/blue100.png'
    ];

    /**
     * Creates an instance of StatusbarEndboss.
     */
    constructor() { 
        super().loadImages(this.IMAGES_STAT_ENDBOSS);
        this.loadImage(this.IMAGES_STAT_ENDBOSS[5]);
        this.x = 10;
        this.y = 125;
        this.width = 180;
        this.height = 50;
        this.setPercentage(this.percentage);
    }

    /**
     * Sets the percantage of health and updates the status bar image.
     * @param {number} count - The percantage of Endboss.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_STAT_ENDBOSS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Resolves the image index based on the percentage of Endboss.
     * @returns {number} The index of the image to display.
     */
    resolveImageIndex() {
        if (this.percentage >= 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
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
        ctx.fillText(this.percentage, this.x + this.width + 3, this.y + this.height / 2 + 10);
    }
}