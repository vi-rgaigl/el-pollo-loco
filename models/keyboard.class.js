class Keyboard {

    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;

    constructor() {
        this.bindKeyEvents();
        this.bindTouchEvents();
    }

    bindKeyEvents() {
        this.bindKeyStart();
        this.bindKeyEnd();
    }

    bindTouchEvents() {
        this.bindTouchStart();
        this.bindTouchEnd();
    }

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

    bindTouchStart() {
        window.addEventListener("touchstart", (event) => {
            if (event.target.id == "btnRight") {
                keyboard.RIGHT = true;
            }
            if (event.target.id == "btnLeft") {
                keyboard.LEFT = true;
            }
            if (event.target.id == "btnJump") {
                keyboard.SPACE = true;
            }
            if (event.target.id == "btnThrow") {
                keyboard.D = true;
            }
        });
    }

    bindTouchEnd() {
        window.addEventListener("touchend", (event) => {
            if (event.target.id == "btnRight") {
                keyboard.RIGHT = false;
            }
            if (event.target.id == "btnLeft") {
                keyboard.LEFT = false;
            }
            if (event.target.id == "btnJump") {
                keyboard.SPACE = false;
            }
            if (event.target.id == "btnThrow") {
                keyboard.D = false;
            }
        });
    }
}