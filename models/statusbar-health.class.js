class StatusbarHealth extends DrawableObject {

    percentage = 100;

    IMAGES = [
        './img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        './img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png'
    ];

    constructor() {
        super().loadImages(this.IMAGES);
        this.loadImage(this.IMAGES[0]);
        this.x = 10;
        this.y = 0;
        this.width = 180;
        this.height = 50;
        this.setPercentage(this.percentage);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        this.img = this.getImageFromPercentage();
    }

    getImageFromPercentage() {
        let path;
        switch (true) {
            case (this.percentage == 100):
                path = this.IMAGES[5];
                break;
            case (this.percentage > 80):
                path = this.IMAGES[4];
                break;
            case (this.percentage > 60):
                path = this.IMAGES[3];
                break;
            case (this.percentage > 40):
                path = this.IMAGES[2];
                break;
            case (this.percentage > 20):
                path = this.IMAGES[1];
                break;
            default:
                path = this.IMAGES[0];
        }
        return this.img = this.imageCache[path];
    }
}