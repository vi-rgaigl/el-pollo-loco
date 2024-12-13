class Cloud extends MovableObject {
    width = 500;
    height = 300;
    y = 30;
  

    constructor(image, x) {
        super().loadImage(image);
        this.x = x;

        this.animate();
    }

       animate() { 
        this.moveLeft();
    }



}