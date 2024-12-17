/**
 * Class representing a cloud.
 * @extends MovableObject
 */
class Cloud extends MovableObject {
    width = 500;
    height = 300;
    y = 30;
  
    /**
     * Creates a cloud object.
     * @param {string} image - The path to the image of the cloud.
     * @param {number} x - The x-coordinate of the cloud.
     */
    constructor(image, x) {
        super().loadImage(image);
        this.x = x;

        this.animate();
    }

    /**
     * Animates the cloud.
     */
    animate() { 
        this.moveLeft();
    }
}