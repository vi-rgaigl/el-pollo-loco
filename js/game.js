let canvas;
let world;
let keyboard = new Keyboard();
let sounds = [];
let isMuted = false;
background_sound = new Audio('./audio/game.mp3');
lose_sound = new Audio('./audio/game-over.mp3');
background_sound.loop = true;
background_sound.volume = 0.1;

/**
 * Starts the game by initializing the level, game, and sounds.
 * Hides the start, win, and lose screens and shows the game HUD.
 */
function startGame() {
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('winScreen').classList.add('d-none');
    document.getElementById('loseScreen').classList.add('d-none');
    document.getElementById('iconBar').classList.remove('d-none');
    document.getElementById('mobileHud').classList.remove('d-none')
    
    initLevel();
    initGame();
    checkIsMuted();
    checkMobileDevice();
    this.soundPause();
    this.background_sound.play();
    sounds.push(background_sound);
    sounds.push(lose_sound);
}

/**
 * Initializes the game by setting up the canvas and world.
 */
function initGame() {
    canvas = document.getElementById('canvas');
    canvas.classList.remove('d-none');
    world = new World(canvas, keyboard);
}

/**
 * Ends the game by hiding the canvas and HUD, showing the lose screen,
 * clearing all intervals, pausing the background sound, and playing the lose sound.
 */
function loseGame() {
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('iconBar').classList.add('d-none');
    document.getElementById('mobileHud').classList.add('d-none');
    document.getElementById('loseScreen').classList.remove('d-none');
    for (let i = 1; i < 99999; i++) window.clearInterval(i);
    this.background_sound.pause();
    this.lose_sound.play();
}

/**
 * Ends the game by hiding the canvas and HUD, showing the win screen,
 * clearing all intervals, and pausing the background sound.
 */
function winGame() {
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('iconBar').classList.add('d-none');
    document.getElementById('mobileHud').classList.add('d-none');
    document.getElementById('winScreen').classList.remove('d-none');
    for (let i = 1; i < 99999; i++) window.clearInterval(i);
    this.background_sound.pause();
}

/**
 * Returns to the main menu by hiding the canvas and HUD, showing the start screen,
 * clearing all intervals, and pausing the background sound.
 */
function backToMenu() {
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('iconBar').classList.add('d-none');
    document.getElementById('mobileHud').classList.add('d-none');
    document.getElementById('startScreen').classList.remove('d-none');
    for (let i = 1; i < 99999; i++) window.clearInterval(i);
    this.background_sound.pause();
}

/**
 * Enables full screen mode for the canvas.
 */
function fullScreen() {
    canvas.requestFullscreen();
}

/**
 * Displays the game information section.
 */
function showGameInfos() {
    document.getElementById('howToPlay').classList.remove('d-none');
}

/**
 * Hides the game information section.
 */
function hideGameInfos() {
    document.getElementById('howToPlay').classList.add('d-none');
}

/**
 * Checks if the game is muted and updates the mute status of all sounds accordingly.
 */
function checkIsMuted() {
    if (isMuted == true) {
        sounds.forEach(sound => {
            sound.muted = true;
        });
    } else if (isMuted == false) {
        sounds.forEach(sound => {
            sound.muted = false;
        });
    }
}

/**
 * Mutes all sounds and updates the UI to reflect the sound off state.
 */
function soundOff() {
    isMuted = true;
    document.getElementById('soundOn').classList.add('d-none');
    document.getElementById('soundOff').classList.remove('d-none');
    sounds.forEach(sound => {
        sound.muted = true;
    });
}

/**
 * Unmutes all sounds and updates the UI to reflect the sound on state.
 */
function soundOn() {
    isMuted = false;
    document.getElementById('soundOff').classList.add('d-none');
    document.getElementById('soundOn').classList.remove('d-none');
    sounds.forEach(sound => {
        sound.muted = false;
    })
}

/**
 * Pauses all sounds.
 */
function soundPause() {
    sounds.forEach(sound => {
        sound.pause();
    });
}

/**
 * Checks if the device is a mobile device and updates the HUD visibility accordingly.
 */
window.addEventListener('resize', checkMobileDevice)

/**
 * Checks if the device is a mobile device and updates the HUD visibility accordingly.
 */
function checkMobileDevice() {
    let canvas = document.getElementById('canvas');
    if (window.matchMedia("(any-pointer: coarse)").matches && !canvas.classList.contains('d-none')) {
        document.getElementById('mobileHud').classList.remove('d-none');
    } else {
        document.getElementById('mobileHud').classList.add('d-none');
    }
}



