class World {

    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    character = new Character();

    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];

    clouds = [
        new Cloud()
    ];
    
    
    backgroundObjects = [
        new BackgroundObject('./img/5_background/layers/air.png', -canvas.width+1, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', -canvas.width+1, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', -canvas.width+1, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', -canvas.width+1, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/air.png',0 , 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 0, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 0, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 0, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/air.png',  canvas.width-1, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', canvas.width-1, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', canvas.width-1, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', canvas.width-1, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/air.png',  canvas.width*2-2, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', canvas.width*2-2, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', canvas.width*2-2, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', canvas.width*2-2, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/air.png',  canvas.width*3-3, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', canvas.width*3-3, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', canvas.width*3-3, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', canvas.width*3-3, 0, canvas.height, canvas.width)
    ];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);

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
        this.ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
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