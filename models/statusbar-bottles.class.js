class StatusbarBottles extends DrawableObject {

    count = 0;

    IMAGES_STAT_BOTTLES = [
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png'
    ];

    constructor() {
        super().loadImages(this.IMAGES_STAT_BOTTLES);
        this.loadImage(this.IMAGES_STAT_BOTTLES[0]);
        this.x = 10;
        this.y = 40;
        this.width = 180;
        this.height = 50;
        this.setCount(this.count);
    }

    setCount(count) {
        this.count = count;
        this.img = this.getImageFromCount();
    }

    getImageFromCount() {
        let path;
        switch (true) {
            case (this.count > 10):
                path = this.IMAGES_STAT_BOTTLES[5];
                break;
            case (this.count > 8):
                path = this.IMAGES_STAT_BOTTLES[4];
                break;
            case (this.count > 6):
                path = this.IMAGES_STAT_BOTTLES[3];
                break;
            case (this.count > 4):
                path = this.IMAGES_STAT_BOTTLES[2];
                break;
            case (this.count > 2):
                path = this.IMAGES_STAT_BOTTLES[1];
                break;
            default:
                path = this.IMAGES_STAT_BOTTLES[0];
        }
        return this.img = this.imageCache[path];
    }
}