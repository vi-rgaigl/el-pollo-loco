/**
 * Class representing a small chicken.
 * @extends MovableObject
 */
class ChickenSmall extends MovableObject {
    y = 380;
    height = 55;
    width = 55;
    speedY = 10;
    isDead = false;
    offset = {
        top: 2,
        bottom: 2,
        left: 2,
        right: 2,
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

    /**
     * Creates a small chicken.
     */
    constructor() {
        super().loadImage('./img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        sounds.push(this.sound_small_chicken_hit);
        this.x = 700 + Math.random() * 2000;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }

    /**
     * Animates the small chicken.
     */
    animate() {
        this.moveChicken();
    }

    /**
     * Moves the small chicken.
     */
    moveChicken() {
        this.moveInterval = setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        this.animationInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 150);
    }

    /**
    * Handles the death of the chicken by playing the hit sound, 
     * clearing movement and animation intervals, and playing the dead animation.
    */
    chickenDead() {
        this.isDead = true;
        this.sound_small_chicken_hit.play();
        clearInterval(this.moveInterval);
        clearInterval(this.animationInterval);
        this.playAnimation(this.IMAGES_DEAD);
    }
}