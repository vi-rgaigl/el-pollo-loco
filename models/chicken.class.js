class Chicken extends MovableObject {

    height = 60;
    width = 60;
    y = 370;

    CHICKEN_WALKING = [
        './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];


    constructor() {
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.CHICKEN_WALKING);

        this.x = 200 + Math.random() * 500;
        this.speed = 0.1 + Math.random() * 0.5;

        this.animate();
    }

    animate() { 
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.CHICKEN_WALKING.length;
            let path = this.CHICKEN_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 180);
    }
}