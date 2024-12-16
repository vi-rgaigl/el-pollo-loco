class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x;
    y;
    width;
    height;

    
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img; 
        });
    }

    loadImage(path) {
        this.img = new Image();  
        this.img.src = path;  
    }

    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (error) {   
            console.log('Error while drawing image', error, this.img.src);
        }
    }

    drawRect(ctx) {
        if(this instanceof Character || this instanceof Chicken) { // || this instanceof Bottle || this instanceof Coin || this instanceof ThrowableObject || this instanceof Endboss
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}