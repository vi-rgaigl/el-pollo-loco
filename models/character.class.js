class Character extends MovableObject {
    height = 250;
    width =  120;
    x = 60;
    y = 60;
    speed = 2.8;

    IMAGES_WALKING = [
        './img/2_character_pepe/2_walk/W-21.png',
        './img/2_character_pepe/2_walk/W-22.png',
        './img/2_character_pepe/2_walk/W-23.png',
        './img/2_character_pepe/2_walk/W-24.png',
        './img/2_character_pepe/2_walk/W-25.png',
        './img/2_character_pepe/2_walk/W-26.png'
    ];

    IMIGES_JUMPING = [
        './img/2_character_pepe/3_jump/J-31.png',
        './img/2_character_pepe/3_jump/J-32.png',
        './img/2_character_pepe/3_jump/J-33.png',
        './img/2_character_pepe/3_jump/J-34.png',
        './img/2_character_pepe/3_jump/J-35.png',
        './img/2_character_pepe/3_jump/J-36.png',
        './img/2_character_pepe/3_jump/J-37.png',
        './img/2_character_pepe/3_jump/J-38.png',
        './img/2_character_pepe/3_jump/J-39.png'
    ];

    walking_sound = new Audio('./audio/walking.mp3');
    jump_sound = new Audio('./audio/jumping.mp3');


    constructor() {
        super().loadImage('./img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMIGES_JUMPING);
        this.walking_sound.playbackRate = 1.5; // Set the playback rate to 1.5x speed
        this.applyGravity();
    }

    setWorld(world) {
        this.world = world;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                if (this.walking_sound.paused) {
                    this.walking_sound.play();
                }
            } else if (this.world.keyboard.LEFT && this.x > -610) {
                this.moveLeft();
                this.otherDirection = true;
                if (this.walking_sound.paused) {
                    this.walking_sound.play();
                }
            } else {
                this.walking_sound.pause();
                this.walking_sound.currentTime = 0;
            }

            if(this.world.keyboard.SPACE || this.world.keyboard.UP && !this.isAboveGround()) {
                this.jump();
                this.jump_sound.play();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);


        setInterval(() => {
            if(this.isAboveGround()) {
                this.playAnimation(this.IMIGES_JUMPING);
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 100);
    
    }
}