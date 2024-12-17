class ThrowableObject extends MovableObject {

    throwBottle;

    throwing_sound = new Audio('./audio/throwing.mp3');
    break_sound = new Audio('./audio/break-bottle.mp3');

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

    constructor(x, y) {
        super().loadImages(this.IMAGES_ROTATE);
        this.loadImages(this.IMAGES_SPLASH);
        this.loadImage(this.IMAGES_ROTATE[0]);
        sounds.push(this.throwing_sound);
        sounds.push(this.break_sound);
        this.height = 60;
        this.width = 60;
        this.throw(x,y);
    }

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

    animateSplash() {
        this.speedY = 0;
        clearInterval(this.throwBottle);
        this.playAnimation(this.IMAGES_SPLASH);
    }

    playSound() {
        this.throwing_sound.play();
    }
    
    breakSound() {
        this.break_sound.play();
    }
}