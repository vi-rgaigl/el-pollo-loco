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
    endboss = new Endboss();
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
           this.checkCollisions();
           this.checkThrowObjects();
           this.checkCollisionThrowableObj()
        }, 200);
    }

    checkCollisions() {
        this.collisionChicken();
        this.collisionEndboss();
        this.collisionCoin();
        this.collisionBottle();
    }

    checkCollisionThrowableObj() {
        this.checkBottleCollideWithEnemy();
        this.checkBottleCollideWithEndboss();
        this.checkBottleCollideWithGround();
    }

    checkBottleCollideWithEnemy() {
        this.throwableObjects.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {
                if (bottle.isColliding(enemy) && !bottle.isExploded) {
                    bottle.isExploded = true;
                    bottle.animateSplash();
                    bottle.breakSound();
                    setTimeout(() => {
                        this.throwableObjects.splice(bottle, 1);
                    }, 80);
                    enemy.chickenDead();
                    this.deleteEnemy(enemy);
                }
            });
        });
    }

    checkBottleCollideWithEndboss() {
        this.throwableObjects.forEach((bottle) => {
            if (bottle.isColliding(this.endboss) && !bottle.isExploded) {
                bottle.isExploded = true;
                bottle.animateSplash(bottle);
                bottle.breakSound();
                this.endboss.hit();
                this.statusbar_endboss.setPercentage(this.endboss.energy);
                setTimeout(() => {
                    this.throwableObjects.splice(bottle, 1);
                }, 80);
            }
        });
    }

    checkBottleCollideWithGround() {
        this.throwableObjects.forEach(bottle => {
            if (bottle.y > 274) {
                bottle.animateSplash();
                bottle.breakSound();
                setTimeout(() => {
                    this.throwableObjects.splice(bottle, 1);
                }, 500);
            }
        });
    }


    collisionChicken() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                if (this.character.isAboveGround() && this.character.speedY <= 0) {
                    enemy.chickenDead();
                    this.deleteEnemy(enemy);
                    this.character.jump();
                }
                else {
                    this.character.hit();
                    this.statusbar_health.setPercentage(this.character.energy);
                }
            }
        });
    }

    collisionEndboss() {
        if (this.character.isColliding(this.endboss)) {
            this.character.hit();
            this.statusbar_health.setPercentage(this.character.energy);
        }
    }

    deleteEnemy(enemy) {
        setTimeout(() => {
            let index = this.level.enemies.indexOf(enemy);
            this.level.enemies.splice(index, 1);
        }, 1500);
    }

    collisionCoin() {
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
    }

    collisionBottle() {
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.level.bottles.splice(index, 1);
                bottle.playSound();
                this.statusbar_bottles.setCount(this.statusbar_bottles.count + 1);
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

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0);
        //fixed objects
        this.addLevelBars();

        this.ctx.translate(this.camera_x, 0);
        
        this.addLevelObjects();

        this.ctx.translate(-this.camera_x, 0);

        //Draw-Funktion wird asynchron so oft wiederholt, was die Grafikkarte hergibt. ca 24 mal pro Secunde
        //innerhalb von requestAnimationFrame funktioniert this nicht, als an Variable self übergeben
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addLevelObjects() {
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addToMap(this.character);
        this.addToMap(this.endboss);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
    }

    addLevelBars() {
        this.addToMap(this.statusbar_health);
        this.addToMap(this.statusbar_coins);
        this.addToMap(this.statusbar_bottles);
        this.addBossHealthBar();
    }


    addBossHealthBar() {
        if (this.character.x >= 2000) {
            this.endboss.firstContact = true;
        }
        if (this.endboss.firstContact == true) {
            this.addToMap(this.statusbar_endboss);
        }
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
        // obj.drawFrame(this.ctx);
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
}