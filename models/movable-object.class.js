class MovableObject extends DrawableObject {
   
    speed = 0.15;
    speedY = 0;
    acceleration = 2.7;
    otherDirection = false;
    energy = 100;
    lastHit = 0;


    drawRect(ctx) {
        if(this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

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
        return this.y < 180;
    }

    isColliding(obj) {
        return this.x + this.width > obj.x &&
            this.y + this.height > obj.y &&
            this.x < obj.x &&
            this.y < obj.y;
    }
    
    hit () {
        this.energy -= 5;
        if(this.energy <= 0) {
            this.energy = 0;
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