/**
 * Class representing a bottle object.
 * @extends DrawableObject
 */
class Bottle extends DrawableObject {

    offset = {
        top: 10,
        bottom: 10,
        left: 15,
        right: 10,
    };
    isExploded = false;

    collecting_sound = new Audio('./audio/bottle_blob.mp3');
    

    IMAGES_BOTTLE = [
        './img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        './img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];

    /**
     * Creates a bottle object.
     */
    constructor() {
        super().loadImages(this.IMAGES_BOTTLE);
        this.loadImage(this.IMAGES_BOTTLE[Math.floor(Math.random()*2)]);
        sounds.push(this.collecting_sound);  
        this.x = -600 + Math.random() *2700;
        this.y = 370;
        this.height = 60;
        this.width = 60;
    }

    /**
     * Plays the collecting sound.
     */
    playCollectSound() {
        this.collecting_sound.play();
    }
}