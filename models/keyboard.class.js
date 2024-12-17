/**
 * Class representing the keyboard input.
 */
class Keyboard {

    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;

    /**
     * Creates an instance of Keyboard and binds key and touch events.
     */
    constructor() {
        this.bindKeyEvents();
        this.bindTouchEvents();
    }

    /**
     * Binds key events for starting and ending key presses.
     */
    bindKeyEvents() {
        this.bindKeyStart();
        this.bindKeyEnd();
    }

    /**
     * Binds touch events for starting and ending touch inputs.
     */
    bindTouchEvents() {
        this.bindTouchStart();
        this.bindTouchEnd();
    }

    /**
     * Binds the start of key presses to update the keyboard state.
     */
    bindKeyStart() {
        window.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
                case 39:
                    keyboard.RIGHT = true;
                    break;
                case 37:
                    keyboard.LEFT = true;
                    break;
                case 38:
                    keyboard.UP = true;
                    break;
                case 40:
                    keyboard.DOWN = true;
                    break;
                case 32:
                    keyboard.SPACE = true;
                    break;
                case 68: // 'd' key
                    keyboard.D = true;
                    break;
            }
        });
    }

    /**
     * Binds the end of key presses to update the keyboard state.
     */
    bindKeyEnd() {
        window.addEventListener('keyup', (event) => {
            switch (event.keyCode) {
                case 39:
                    keyboard.RIGHT = false;
                    break;
                case 37:
                    keyboard.LEFT = false;
                    break;
                case 38:
                    keyboard.UP = false;
                    break;
                case 40:
                    keyboard.DOWN = false;
                    break;
                case 32:
                    keyboard.SPACE = false;
                    break;
                    case 68: // 'd' key
                    keyboard.D = false;
                    break;
            }
        });
    }

    /**
     * Binds the start of touch inputs to update the keyboard state.
     */
    bindTouchStart() {
        window.addEventListener("touchstart", (event) => {
            if (event.target.id == "btnRight") {
                event.preventDefault();
                keyboard.RIGHT = true;
            }
            if (event.target.id == "btnLeft") {
                event.preventDefault();
                keyboard.LEFT = true;
            }
            if (event.target.id == "btnJump") {
                event.preventDefault();
                keyboard.SPACE = true;
            }
            if (event.target.id == "btnThrow") {
                event.preventDefault();
                keyboard.D = true;
            }
        }, { passive: false });
    }

    /**
     * Binds the end of touch inputs to update the keyboard state.
     */
    bindTouchEnd() {
        window.addEventListener("touchend", (event) => {
            if (event.target.id == "btnRight") {
                event.preventDefault();
                keyboard.RIGHT = false;
            }
            if (event.target.id == "btnLeft") {
                event.preventDefault();
                keyboard.LEFT = false;
            }
            if (event.target.id == "btnJump") {
                event.preventDefault();
                keyboard.SPACE = false;
            }
            if (event.target.id == "btnThrow") {
                event.preventDefault();
                keyboard.D = false;
            }
        }, { passive: false });
    }
}