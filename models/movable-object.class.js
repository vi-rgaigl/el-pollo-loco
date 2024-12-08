class MovableObject {
    img;
    imageCache = {};
    speed = 0.15;

    loadImage(path) {
        this.img = new Image();  
        this.img.src = path;  
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img; 
        });
    }

    moveRight() {
        setInterval(() => {
            this.x += speed;
        }, 1000 / 60);
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}