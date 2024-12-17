/**
 * Class representing the status bar for coins.
 * @extends Statusbar
 */
class StatusbarCoins extends Statusbar {

    /**
     * Creates an instance of StatusbarCoins.
     */
    constructor() {
        super(10, 80, 180, 50, [
            './img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
            './img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
            './img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
            './img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
            './img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
            './img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'
        ]);
        this.setValue(0);
    }
}