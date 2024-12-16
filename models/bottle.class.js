class Bottle extends DrawableObject {

    IMAGES_BOTTLE = [
        './img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        './img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];

    constructor() {
        super().loadImages(this.IMAGES_BOTTLE);
        this.loadImage(this.IMAGES_BOTTLE[Math.floor(Math.random()*2)]);
        
        this.x = -700 + Math.random() *2700;
        this.y = 370;
        this.height = 60;
        this.width = 60;
    }

}