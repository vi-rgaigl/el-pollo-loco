/**
 * Class representing a throwable object.
 * @extends MovableObject
 */
class ThrowableObject extends MovableObject {

    throwBottle;



    IMAGES_ROTATE = [
        './img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    IMAGES_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    /**
     * Creates an instance of ThrowableObject.
     * @param {number} x - The initial x-coordinate of the throwable object.
     * @param {number} y - The initial y-coordinate of the throwable object.
     */
    constructor(x, y) {
        super().loadImages(this.IMAGES_ROTATE);
        this.loadImages(this.IMAGES_SPLASH);
        this.loadImage(this.IMAGES_ROTATE[0]);
   
        this.height = 60;
        this.width = 60;
        this.throw(x,y);
    }

    /**
     * Throws the object by setting its initial position and applying a throw animation.
     * @param {number} x - The initial x-coordinate of the throwable object.
     * @param {number} y - The initial y-coordinate of the throwable object.
     */
    throw(x, y) {
        this.x = x ;
        this.y = y;
        this.speedY = 10;      
        this.applyGravity();
        this.throwBottle = setInterval(() => {
            this.x += 15;
            this.playAnimation(this.IMAGES_ROTATE);
        }, 25);
    }

    /**
     * Animates the splash effect when the throwable object hits the ground.
     */
    animateSplash() {
        this.speedY = 0;
        clearInterval(this.throwBottle);
        this.playAnimation(this.IMAGES_SPLASH);
    }

    
    // /**
    //  * Plays the throwing sound.
    //  */
    // playThrowSound() {
    //     this.throwing_sound.play();
    // }
    
    // /**
    //  * Plays the break sound
    //  */
    // playBreakSound() {
    //     this.break_sound.play();
    // }
}