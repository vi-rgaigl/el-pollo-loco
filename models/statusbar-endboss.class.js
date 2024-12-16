class StatusbarEndboss extends DrawableObject {

    percentage = 100;

    IMAGES_STAT_ENDBOSS = [
        './img/7_statusbars/2_statusbar_endboss/blue/blue0.png',
        './img/7_statusbars/2_statusbar_endboss/blue/blue20.png',
        './img/7_statusbars/2_statusbar_endboss/blue/blue40.png',
        './img/7_statusbars/2_statusbar_endboss/blue/blue60.png',
        './img/7_statusbars/2_statusbar_endboss/blue/blue80.png',
        './img/7_statusbars/2_statusbar_endboss/blue/blue100.png'
    ];

    constructor() { 
        super().loadImages(this.IMAGES_STAT_ENDBOSS);
        this.loadImage(this.IMAGES_STAT_ENDBOSS[5]);
        this.x = 10;
        this.y = 125;
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
                path = this.IMAGES_STAT_ENDBOSS[5];
                break;
            case (this.percentage > 80):
                path = this.IMAGES_STAT_ENDBOSS[4];
                break;
            case (this.percentage > 60):
                path = this.IMAGES_STAT_ENDBOSS[3];
                break;
            case (this.percentage > 40):
                path = this.IMAGES_STAT_ENDBOSS[2];
                break;
            case (this.percentage > 20):
                path = this.IMAGES_STAT_ENDBOSS[1];
                break;
            default:
                path = this.IMAGES_STAT_ENDBOSS[0];
        }
        return this.img = this.imageCache[path];
    }
}