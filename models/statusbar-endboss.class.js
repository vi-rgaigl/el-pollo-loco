/**
 * Class representing the status bar for health of Endboss.
 * @extends Statusbar
 */
class StatusbarEndboss extends Statusbar {
    
    /**
     * Creates an instance of StatusbarEndboss.
     */
    constructor() { 
        super(10, 125, 180, 50, [
            './img/7_statusbars/2_statusbar_endboss/blue/blue0.png',
            './img/7_statusbars/2_statusbar_endboss/blue/blue20.png',
            './img/7_statusbars/2_statusbar_endboss/blue/blue40.png',
            './img/7_statusbars/2_statusbar_endboss/blue/blue60.png',
            './img/7_statusbars/2_statusbar_endboss/blue/blue80.png',
            './img/7_statusbars/2_statusbar_endboss/blue/blue100.png'
        ]);
        this.setValue(100);
    }
}