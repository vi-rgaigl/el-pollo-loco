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

    /**
     * Plays the animation by cycling through the provided images.
     * @param {string[]} images - Array of image paths for the animation.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Moves the object to the right.
     */
    moveRight() {
        this.x += this.speed;         
    }

    /**
     * Moves the object to the left.
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Makes the object jump by setting its vertical speed.
     */
    jump() {
        this.speedY = 30;
    }

    /**
     * Applies gravity to the object, making it fall down.
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     * Checks if the object is above the ground.
     * @returns {boolean} True if the object is above the ground, false otherwise.
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 180;
        }
    }

    /**
     * Checks if the object is colliding with another object.
     * @param {Object} obj - The object to check collision with.
     * @returns {boolean} True if the objects are colliding, false otherwise.
     */
    isColliding(obj) {
        return this.x + this.width - this.offset.right > obj.x + obj.offset.left &&  
        this.y + this.height - this.offset.bottom > obj.y + obj.offset.top && 
        this.x + this.offset.left < obj.x + obj.width - obj.offset.right && 
        this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom;
    }
    
    /**
     * Reduces the object's energy by 2 when hit.
     */
    hit() {
        this.energy -= 2;
        if(this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Reduces the boss's energy by 20 when hit.
     */
    hitBoss() {
        this.energy -= 20;
        if(this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Recovers the object's energy by 20.
     */
    recoverEnergy() {
        let energyRegen = 20;
        let newEnergy = this.energy + energyRegen;
        if(newEnergy >= 100) {
            this.energy = 100;
        } else {
            this.energy += 20;
        }
    }

    /**
     * Checks if the object is hurt.
     * @returns {boolean} True if the object was hit within the last second, false otherwise.
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    /**
     * Checks if the object is dead.
     * @returns {boolean} True if the object's energy is 0, false otherwise.
     */
    isDead() {
        return this.energy == 0;
    }
}