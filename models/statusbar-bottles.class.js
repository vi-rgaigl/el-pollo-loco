/**
 * Class representing the status bar for bottles.
 * @extends Statusbar
 */
class StatusbarBottles extends Statusbar {

    /**
     * Creates an instance of StatusbarBottles.
     */
    constructor() {
        super(10, 40, 180, 50, [
            './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
            './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
            './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
            './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
            './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
            './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png'
        ]);
        this.setValue(0);
    }
}