class World {

    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    
    statusbar_health = new StatusbarHealth();
    statusbar_endboss = new StatusbarEndboss();
    statusbar_bottles = new StatusbarBottles();
    statusbar_coins = new StatusbarCoins();
    character = new Character();
    level = level1;
    throwableObjects = [new ThrowableObject()];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();
        
    }

    setWorld() {
        this.character.setWorld(this);
    }

    run() {
        setInterval(() => {
           this.checkCollision();
           this.checkThrowObjects();
           this.checkCollisionFromAbove();
        }, 200);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0);
        //fixed objects
        this.addToMap(this.statusbar_health);
        this.addToMap(this.statusbar_coins);
        this.addToMap(this.statusbar_bottles);
        this.addToMap(this.statusbar_endboss);
        this.ctx.translate(this.camera_x, 0);
        
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);

        //Draw-Funktion wird asynchron so oft wiederholt, was die Grafikkarte hergibt. ca 24 mal pro Secunde
        //innerhalb von requestAnimationFrame funktioniert this nicht, als an Variable self übergeben
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objs) {
        objs.forEach(obj => {
            this.addToMap(obj);
        });
    }

    addToMap(obj) {
        if(obj.otherDirection) {
            this.imageFlip(obj);
        } 
        obj.draw(this.ctx);
        obj.drawRect(this.ctx);
        if(obj.otherDirection) {
            this.imageFlipBack(obj);
        }
    }

    imageFlip(obj) {
        this.ctx.save();
        this.ctx.translate(obj.width, 0);
        this.ctx.scale(-1, 1);
        obj.x = obj.x * -1;
    }

    imageFlipBack(obj) {
        obj.x = obj.x * -1;
        this.ctx.restore();
    }

    checkCollision() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusbar_health.setPercentage(this.character.energy);
            }
        });
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(index, 1);
                coin.playSound();
                this.statusbar_coins.setCount(this.statusbar_coins.count + 1);
                if (this.statusbar_coins.count == 10) {
                    this.statusbar_health.setPercentage(100);
                    this.statusbar_coins.setCount(0);
                }
            }
        });
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.level.bottles.splice(index, 1);
                bottle.playSound();
                this.statusbar_bottles.setCount(this.statusbar_bottles.count + 1);
            }
        });
    }

    checkCollisionFromAbove() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isCollidingFromAbove(enemy) && enemy instanceof Chicken) {
                enemy.chickenDead();
                this.character.noHit();
                setTimeout(() => {
                    this.level.enemies.splice(index, 1);
                }, 3000);       
            }
        });
    }

    checkThrowObjects() {
        if(this.keyboard.D && this.statusbar_bottles.count > 0) {
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 50);
            this.throwableObjects.push(bottle);
            this.statusbar_bottles.setCount(this.statusbar_bottles.count - 1);
            bottle.playSound();             
        }
    }
}