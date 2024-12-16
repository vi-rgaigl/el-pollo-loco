class ThrowableObject extends MovableObject {

    throwing_sound = new Audio('./audio/throwing.mp3');

    IMAGES_ROTATE = [
        './img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    constructor(x, y) {
        super().loadImages(this.IMAGES_ROTATE);
        this.loadImage(this.IMAGES_ROTATE[0]);
        this.height = 60;
        this.width = 60;
        this.throw(x,y);
    }

    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 8;      
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
            this.playAnimation(this.IMAGES_ROTATE);
        }, 25);
    }

    playSound() {
        this.throwing_sound.play();
    }
}