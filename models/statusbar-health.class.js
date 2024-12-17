/**
 * Class representing the status bar for health of the character.
 * @extends Statusbar
 */
class StatusbarHealth extends Statusbar {

    /**
     * Creates an instance of StatusbarHealth.
     */
    constructor() {
        super(10, 0, 180, 50, [
            './img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
            './img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
            './img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
            './img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
            './img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
            './img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png'
        ]);
        this.setValue(100);
    }
}