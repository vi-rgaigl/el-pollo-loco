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
        let path = this.IMAGES_STAT_ENDBOSS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage >= 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }

    draw(ctx) {
        super.draw(ctx);
        ctx.font = '20px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(this.percentage, this.x + this.width , this.y + this.height / 2 + 10);
    }
}