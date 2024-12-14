class World {

    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    
    statusbar_health = new StatusbarHealth();
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

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0);
        //fixed objects
        this.addToMap(this.statusbar_health);
        this.ctx.translate(this.camera_x, 0);
        
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.enemies);
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
    
    run() {
        setInterval(() => {
           this.checkCollision();
           this.checkThrowObjects();
        }, 200);
    }


    checkCollision() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusbar_health.setPercentage(this.character.energy);
            }
        });
    }

    checkThrowObjects() {
        if(this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 50);
            this.throwableObjects.push(bottle);
        }
    }
}