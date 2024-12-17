class ChickenSmall extends MovableObject {
    y = 380;
    height = 55;
    width = 55;
    speedY = 10;
    offset = {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
    };
    IMAGES_WALKING = [
        './img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    IMAGES_DEAD = [
        './img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    sound_small_chicken_hit = new Audio('./audio/small-chicken.mp3');

    constructor() {
        super().loadImage('./img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        sounds.push(this.sound_small_chicken_hit);
        this.x = 700 + Math.random() * 2000;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }

    animate() {
        this.moveChicken();
    }

    moveChicken() {
        this.moveInterval = setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        this.animationInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 150);
    }

    chickenDead() {
        this.sound_small_chicken_hit.play();
        clearInterval(this.moveInterval);
        clearInterval(this.animationInterval);
        this.playAnimation(this.IMAGES_DEAD);
    }
}