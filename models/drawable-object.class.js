/**
 * Class representing a drawable object.
 */
class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    width = 150;
    height = 100;

    /**
     * Loads multiple images into the image cache.
     * @param {string[]} arr - Array of image paths.
     */    
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img; 
        });
    }

    /**
     * Loads a single image.
     * @param {string} path - The path to the image.
     */
    loadImage(path) {
        this.img = new Image();  
        this.img.src = path;  
    }

    /**
     * Draws the image on the canvas.
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (error) {   
            console.log('Error while drawing image', error, this.img.src);
        }
    }

    /**
     * Draws a frame around the object for debugging purposes.
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof ChickenSmall
            || this instanceof Endboss || this instanceof Bottle
            || this instanceof Coin) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'blue';
            ctx.rect(
                this.x + this.offset.left,
                this.y + this.offset.top,
                this.width - this.offset.right - this.offset.left,
                this.height - this.offset.bottom - this.offset.top
            );
            ctx.stroke();
        }
    }
}