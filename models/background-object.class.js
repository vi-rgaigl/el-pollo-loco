/**
 * Class representing a background object that can be moved.
 * @extends MovableObject
 */
class BackgroundObject extends MovableObject {

    /**
     * Creates a background object.
     * @param {string} imagePath - The path to the image of the background object.
     * @param {number} x - The x-coordinate of the background object.
     * @param {number} y - The y-coordinate of the background object.
     * @param {number} height - The height of the background object.
     * @param {number} width - The width of the background object.
     */
    constructor(imagePath, x, y, height, width) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
}