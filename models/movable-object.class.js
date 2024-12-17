class MovableObject extends DrawableObject {
   
    speed = 0.15;
    speedY = 0;
    acceleration = 2.7;
    otherDirection = false;
    energy = 100;
    lastHit = 0;

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    };

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;         
    }

    moveLeft() {
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
    
    hit() {
        this.energy -= 2;
        if(this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    hitBoss() {
        this.energy -= 20;
        if(this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    recoverEnergy() {
        let energyRegen = 20;
        let newEnergy = this.energy + energyRegen;
        if(newEnergy >= 100) {
            this.energy = 100;
        } else {
            this.energy += 20;
        }
  
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }
}