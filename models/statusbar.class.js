/**
 * Class representing a generic status bar.
 * @extends DrawableObject
 */
class Statusbar extends DrawableObject {
    value = 0;
    images = [];

    /**
     * Creates an instance of Statusbar.
     * @param {number} x - The x position of the status bar.
     * @param {number} y - The y position of the status bar.
     * @param {number} width - The width of the status bar.
     * @param {number} height - The height of the status bar.
     * @param {string[]} images - The array of image paths for the status bar.
     */
    constructor(x, y, width, height, images) {
        super().loadImages(images);
        this.loadImage(images[0]);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.images = images;
        this.setValue(this.value);
    }

    /**
     * Sets the value and updates the status bar image.
     * @param {number} value - The value to set.
     */
    setValue(value) {
        this.value = value;
        let path = this.images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Resolves the image index based on the value.
     * @returns {number} The index of the image to display.
     */
    resolveImageIndex() {
        if (this.value >= 10) {
            return 5;
        } else if (this.value >= 8) {
            return 4;
        } else if (this.value >= 6) {
            return 3;
        } else if (this.value >= 3) {
            return 2;
        } else if (this.value >= 1) {
            return 1;
        } else {
            return 0;
        }
    }

    /**
     * Draws the status bar and the value on the canvas.
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        super.draw(ctx);
        ctx.font = '20px zabras';
        ctx.fillStyle = 'white';
        ctx.fillText(this.value, this.x + this.width + 3, this.y + this.height / 2 + 17);
    }
}