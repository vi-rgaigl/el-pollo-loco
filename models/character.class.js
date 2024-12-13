class Character extends MovableObject {
    height = 250;
    width =  120;
    x = 60;
    y = 180;
    speed = 2.8;

    IMAGES_WALKING = [
        './img/2_character_pepe/2_walk/W-21.png',
        './img/2_character_pepe/2_walk/W-22.png',
        './img/2_character_pepe/2_walk/W-23.png',
        './img/2_character_pepe/2_walk/W-24.png',
        './img/2_character_pepe/2_walk/W-25.png',
        './img/2_character_pepe/2_walk/W-26.png'
    ];

    walking_sound = new Audio('./audio/walking.mp3');


    constructor() {
        super().loadImage('./img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.walking_sound.playbackRate = 1.5; // Set the playback rate to 1.5x speed
        // this.animate();
    }

    setWorld(world) {
        this.world = world;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                if (this.walking_sound.paused) {
                    this.walking_sound.play();
                }
                this.otherDirection = false;
            } else if (this.world.keyboard.LEFT && this.x > -610) {
                this.x -= this.speed;
                if (this.walking_sound.paused) {
                    this.walking_sound.play();
                }
                this.otherDirection = true;
            } else {
                this.walking_sound.pause();
                this.walking_sound.currentTime = 0;
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);


        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 100);
    
    }

    jump() {
        console.log('Jumping');
    }
}