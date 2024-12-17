/**
 * Class representing a coin object.
 * @extends DrawableObject
 */
class Coin extends DrawableObject {

    offset = {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
    };

    collecting_sound = new Audio('./audio/coin.mp3');

    IMAGES_ROTATE = [
        './img/8_coin/coin_1.png',
        './img/8_coin/coin_2.png',
    ];

    /**
     * Creates a coin object.
     */
    constructor() {
        super().loadImages(this.IMAGES_ROTATE);
        this.loadImage(this.IMAGES_ROTATE[Math.floor(Math.random()*2)]);
        sounds.push(this.collecting_sound);
        this.x = -600 + Math.random() *2700;
        this.y = 360 + Math.random() * -200;
        this.height = 70;
        this.width = 70;
    }

    /**
     * Plays the collecting sound.
     */
    playSound() {
        this.collecting_sound.play();
    }

}