let canvas;
let world;
let keyboard = new Keyboard();
let sounds = [];
let isMuted = false;
// background_sound = new Audio('audio/background.mp3');
// win_sound = new Audio('audio/win.mp3');
// lose_sound = new Audio('audio/lose.mp3');
// background_sound.loop = true;
// background_sound.volume = 0.1;

function init() { 
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    
}

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