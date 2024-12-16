class MovableObject extends DrawableObject {
   
    speed = 0.15;
    speedY = 0;
    acceleration = 2.7;
    otherDirection = false;
    energy = 100;
    lastHit = 0;

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;         
    }

    moveLeft(bool) {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 30;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 180;
        }
    }

    isColliding(obj) {
        return this.x + this.width > obj.x &&
        this.y + this.height > obj.y &&
        this.x < obj.x + obj.width &&
        this.y < obj.y + obj.height;
    }

    isCollidingFromAbove(obj) {
        if (!(obj instanceof Chicken)) {
            return false;
        }
        let isCollidingAbove = this.y + this.height <= obj.y + obj.height / 2 &&
                                 this.y + this.height > obj.y &&
                                 this.x + this.width > obj.x &&
                                 this.x < obj.x + obj.width;
        if (isCollidingAbove) {
            // console.log('colliding from above');
        }
        return isCollidingAbove;
    }
    
    hit() {
        this.energy -= 2;
        if(this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    
    }

    noHit() {
        this.energy += 5;
        if(this.energy >= 100) {
            this.energy = 100;
        } else {
            this.lastHit = new Date().getTime();
        }  
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; //Differenz in ms
        timePassed = timePassed / 1000; //umrechnen in Sekunden
        if(timePassed < 1) {
            return true;
        } else {
            return false;
        }
    }

    isDead() {
        return this.energy === 0;
    }
}