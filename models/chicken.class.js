/**
 * Class Chicken representing a chicken object.
 * @extends MovableObject
 */
class Chicken extends MovableObject {

    height = 60;
    width = 60;
    y = 370;
    isDead;
    sound_chicken_hit = new Audio('./audio/hit-chicken.mp3');

    CHICKEN_WALKING = [
        './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    CHICKEN_DEAD = [
        './img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        './img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    /**
     * Creates a chicken object.
     */
    constructor() {
        super().loadImage(this.CHICKEN_WALKING[0]);
        this.loadImages(this.CHICKEN_WALKING);
        this.loadImages(this.CHICKEN_DEAD);
        sounds.push(this.sound_chicken_hit);
        this.x = 700 + Math.random() *1900;
        this.speed = 0.1 + Math.random() * 0.8;

        this.animate();
    }

    /**
     * Moves the chicken to the left.
     */
    animate() {     
        this.moveInterval = setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        this.animationInterval = setInterval(() => {
           this.playAnimation(this.CHICKEN_WALKING);
        }, 180);
    }

    /**
    * Handles the death of the chicken by playing the hit sound, 
     * clearing movement and animation intervals, and playing the dead animation.
    */
    chickenDead() {
        this.sound_chicken_hit.play();
        clearInterval(this.moveInterval);
        clearInterval(this.animationInterval);
        this.playAnimation(this.CHICKEN_DEAD);
    }
}