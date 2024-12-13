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
        super().loadImage(this.CHICKEN_WALKING[0]);
        this.loadImages(this.CHICKEN_WALKING);

        this.x = 400 + Math.random() *1900;
        this.speed = 0.1 + Math.random() * 0.8;

        this.animate();
    }

    animate() { 
        this.moveLeft();
        setInterval(() => {
           this.playAnimation(this.CHICKEN_WALKING);
        }, 180);
    }
}