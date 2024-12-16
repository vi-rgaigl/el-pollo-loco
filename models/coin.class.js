class Coin extends DrawableObject {

    IMAGES_ROTATE = [
        './img/8_coin/coin_1.png',
        './img/8_coin/coin_2.png',
    ];

    constructor() {
        super().loadImages(this.IMAGES_ROTATE);
        this.loadImage(this.IMAGES_ROTATE[Math.floor(Math.random()*2)]);
        
        this.x = -700 + Math.random() *2700;
        this.y = 360;
        this.height = 70;
        this.width = 70;
    }

}