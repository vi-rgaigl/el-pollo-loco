class World {

    ctx;
    canvas;
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
        new BackgroundObject('./img/5_background/layers/air.png', 0, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 0, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 0, 0, canvas.height, canvas.width),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 0, 0, canvas.height, canvas.width)
    ];

    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);

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
        this.ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
    }
}