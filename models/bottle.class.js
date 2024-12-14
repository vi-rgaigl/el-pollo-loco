class Bottle extends DrawableObject {

    IMAGES_ROTATE = [
        './img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        './img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];

    constructor() {
        super().loadImages(this.IMAGES_ROTATE);
        this.loadImage(this.IMAGES_ROTATE[Math.floor(Math.random()*2)]);
        
        this.x = 300 + Math.random() *1900;
        this.y = 370;
        this.height = 60;
        this.width = 60;
    }

}