/**
 * Represents the game world.
 */
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
    lastThrowTime = 0;
    break_sound = new Audio('./audio/break-bottle.mp3');
    throwing_sound = new Audio('./audio/throwing.mp3');

    /**
     * Creates an instance of World.
     * @param {HTMLCanvasElement} canvas - The canvas element to draw on.
     * @param {Keyboard} keyboard - The keyboard input handler.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        sounds.push(this.throwing_sound);
        sounds.push(this.break_sound);   
        this.run();
        
    }

    /**
     * Sets the world for the character.
     */
    setWorld() {
        this.character.setWorld(this);
    }

    /**
     * Runs the game loop, checking for collisions and throwable objects.
     */
    run() {
        setInterval(() => {
           this.checkCollisions();
           this.checkThrowObjects();
           this.checkCollisionThrowableObj()
        }, 1000 / 20);
    }

    /**
     * Checks for collisions between the character and other objects.
     */
    checkCollisions() {
        this.collisionChicken();
        this.collisionEndboss();
        this.collisionCoin();
        this.collisionBottle();
    }

    /**
     * Checks for collisions between throwable objects and other objects.
     */
    checkCollisionThrowableObj() {
        this.checkBottleCollideWithEnemy();
        this.checkBottleCollideWithEndboss();
        this.checkBottleCollideWithGround();
    }

    /**
     * Checks if any throwable bottle collides with an enemy.
     * If a collision is detected, the bottle explodes, plays the splash animation and sound,
     * and the enemy is marked as dead.
     */
    checkBottleCollideWithEnemy() {
        this.throwableObjects.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {
                if (bottle.isColliding(enemy) && !bottle.isExploded) {
                    bottle.isExploded = true;
                    bottle.animateSplash();
                    this.break_sound.play();
                    setTimeout(() => {
                        this.throwableObjects.splice(bottle, 1);
                    }, 80);
                    enemy.chickenDead();
                    this.deleteEnemy(enemy);
                }
            });
        });
    }

    /**
     * Checks if any throwable bottle collides with the end boss.
     * If a collision is detected, the bottle explodes, plays the splash animation and sound,
     * and the end boss is hit.
     */
    checkBottleCollideWithEndboss() {
        this.throwableObjects.forEach((bottle) => {
            if (bottle.isColliding(this.endboss) && !bottle.isExploded) {
                bottle.isExploded = true;
                bottle.animateSplash(bottle);
                this.break_sound.play();
                this.endboss.hitBoss();
                this.statusbar_endboss.setValue(this.endboss.energy);
                setTimeout(() => {
                    this.throwableObjects.splice(bottle, 1);
                }, 80);
            }
        });
    }

    /**
     * Checks if any throwable bottle collides with the ground.
     * If a collision is detected, the bottle explodes, plays the splash animation and sound,
     * and is removed after a delay.
     */
    checkBottleCollideWithGround() {
        this.throwableObjects.forEach(bottle => {
            if (bottle.y > 300) {
                bottle.animateSplash();
                this.break_sound.play();
                setTimeout(() => {
                    this.throwableObjects.splice(bottle, 1);
                }, 500);
            }
        });
    }


    /**
     * Checks for collisions between the character and chickens.
     * If a collision is detected, the chicken is marked as dead and removed if the character is above ground,
     * otherwise the character is hit and loses energy.
     */
    collisionChicken() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                if (this.character.isAboveGround() && this.character.speedY <= 0) {
                    enemy.chickenDead();
                    this.deleteEnemy(enemy);
                    this.character.jump();
                }
                else if (!enemy.isDead) {
                    this.character.hit();
                    this.statusbar_health.setValue(this.character.energy);
                }
            }
        });
    }

    /**
     * Checks for collisions between the character and the end boss.
     * If a collision is detected, the character is hit and loses energy.
     */
    collisionEndboss() {
        if (this.character.isColliding(this.endboss)) {
            this.character.hit();
            this.statusbar_health.setValue(this.character.energy);
        }
    }

    /**
     * Deletes an enemy from the level after a delay.
     * @param {Object} enemy - The enemy to delete.
     */
    deleteEnemy(enemy) {
        setTimeout(() => {
            let index = this.level.enemies.indexOf(enemy);
            this.level.enemies.splice(index, 1);
        }, 1500);
    }

    /**
     * Checks for collisions between the character and coins.
     * If a collision is detected, the coin is collected, a sound is played, and the coin count is updated.
     * If the coin count reaches 10, the character's health is restored and the coin count is reset.
     */
    collisionCoin() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(index, 1);
                coin.playSound();
                this.statusbar_coins.setValue(this.statusbar_coins.value + 1);
                if (this.statusbar_coins.count == 10) {
                    this.statusbar_health.setValue(100);
                    this.statusbar_coins.setValue(0);
                }
            }
        });
    }

    /**
     * Checks for collisions between the character and bottles.
     * If a collision is detected, the bottle is collected, a sound is played, and the bottle count is updated.
     */
    collisionBottle() {
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.level.bottles.splice(index, 1);
                bottle.playCollectSound();
                this.statusbar_bottles.setValue(this.statusbar_bottles.value + 1);
            }
        });
    }

    /**
     * Checks if throwable objects are thrown.
     */
    checkThrowObjects() {
        let currentTime = new Date().getTime();
        if (this.canThrowObject(currentTime)) {
            this.throwObject();
            this.lastThrowTime = currentTime;
        }
    }

    /**
     * Determines if an object can be thrown.
     * @param {number} currentTime - The current time in milliseconds.
     * @returns {boolean} True if an object can be thrown, false otherwise.
     */
    canThrowObject(currentTime) {
        return this.keyboard.D && this.statusbar_bottles.value > 0 && (currentTime - this.lastThrowTime) > 500;
    }

    /**
     * Handles the logic for throwing an object.
     */
    throwObject() {
        let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 60);
        this.throwableObjects.push(bottle);
        this.statusbar_bottles.setValue(this.statusbar_bottles.value - 1);
        this.throwing_sound.play();
    }
    
    /**
     * Draws the game world by adding all objects to the map.
     * The camera follows the character.
     * The draw function is called asynchronously as often as the graphics card allows.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);

        //fixed objects
        this.ctx.translate(-this.camera_x, 0);   
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

    /**
     * Adds level objects (coins, bottles, character, endboss, enemies, and throwable objects) to the map.
     */
    addLevelObjects() {
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addToMap(this.character);
        this.addToMap(this.endboss);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
    }

    /**
     * Adds status bars (health, coins, bottles, and boss health) to the map.
     */
    addLevelBars() {
        this.addToMap(this.statusbar_health);
        this.addToMap(this.statusbar_coins);
        this.addToMap(this.statusbar_bottles);
        this.addBossHealthBar();
    }

    /**
     * Adds the boss health bar to the map if the character has made first contact with the endboss.
     */
    addBossHealthBar() {
        if (this.character.x >= 1900) {
            this.endboss.firstContact = true;
        }
        if (this.endboss.firstContact == true) {
            this.addToMap(this.statusbar_endboss);
        }
    }

    /**
     * Adds multiple objects to the map.
     * @param {Object[]} objs - Array of objects to add to the map.
     */
    addObjectsToMap(objs) {
        objs.forEach(obj => {
            this.addToMap(obj);
        });
    }

    /**
     * Adds a single object to the map.
     * @param {Object} obj - The object to add to the map.
     */
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

    /**
     * Flips the image of an object horizontally.
     * @param {Object} obj - The object whose image to flip.
     */
    imageFlip(obj) {
        this.ctx.save();
        this.ctx.translate(obj.width, 0);
        this.ctx.scale(-1, 1);
        obj.x = obj.x * -1;
    }

    /**
     * Restores the image of an object to its original orientation after flipping.
     * @param {Object} obj - The object whose image to restore.
     */
    imageFlipBack(obj) {
        obj.x = obj.x * -1;
        this.ctx.restore();
    }
}