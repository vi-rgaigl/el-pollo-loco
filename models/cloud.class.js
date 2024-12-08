class Cloud extends MovableObject {
    width = 500;
    height = 300;
    y = 30;
  

    constructor() {
        super().loadImage('./img/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 500;

        this.animate();
    }

    animate() {
        this.moveLeft();
    }



}