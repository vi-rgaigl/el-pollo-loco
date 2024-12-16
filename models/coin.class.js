class Coin extends DrawableObject {

    collecting_sound = new Audio('./audio/coin.mp3');

    IMAGES_ROTATE = [
        './img/8_coin/coin_1.png',
        './img/8_coin/coin_2.png',
    ];

    constructor() {
        super().loadImages(this.IMAGES_ROTATE);
        this.loadImage(this.IMAGES_ROTATE[Math.floor(Math.random()*2)]);
        
        this.x = -600 + Math.random() *2700;
        this.y = 360;
        this.height = 70;
        this.width = 70;
    }

    playSound() {
        this.collecting_sound.play();
    }

}