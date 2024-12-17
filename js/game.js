let canvas;
let world;
let keyboard = new Keyboard();
let sounds = [];
let isMuted = false;
background_sound = new Audio('./audio/game.mp3');
win_sound = new Audio('./audio/mexico.mp3');
lose_sound = new Audio('./audio/game-over.mp3');
background_sound.loop = true;
background_sound.volume = 0.1;

/**
 * starts the game
 * shows and hides nedded screens
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
    this.background_sound.play();
    sounds.push(background_sound);
    sounds.push(win_sound);
    sounds.push(lose_sound);
}

/**
 * create a new world
 */
function initGame() {
    canvas = document.getElementById('canvas');
    canvas.classList.remove('d-none');
    world = new World(canvas, keyboard);
}

/**
 * shows lose screen and resets the world
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
 * shows win screen and resets the world
 */
function winGame() {
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('iconBar').classList.add('d-none');
    document.getElementById('mobileHud').classList.add('d-none');
    document.getElementById('winScreen').classList.remove('d-none');
    for (let i = 1; i < 99999; i++) window.clearInterval(i);
    this.background_sound.pause();
    this.win_sound.play();
}

/**
 * stops the game and shows the start screen
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
 * shows the game on fullscreen of the display
 */
function fullScreen() {
    canvas.requestFullscreen();
}

/**
 * show the game info box with controls and advises
 */
function showGameInfos() {
    document.getElementById('howToPlay').classList.remove('d-none');
}

/**
 * hide the game info box with controls and advises
 */
function hideGameInfos() {
    document.getElementById('howToPlay').classList.add('d-none');
}

/**
 * check if the game is muted
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
 * turns the game sound off
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
 * turns the game sound on
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
 * checks if the window resize
 */
window.addEventListener('resize', checkMobileDevice)

/**
 * Checks whether a touch device is being used 
 * If so displays the mobile input devices
 */
function checkMobileDevice() {
    let canvas = document.getElementById('canvas');
    if (window.matchMedia("(any-pointer: coarse)").matches && !canvas.classList.contains('d-none')) {
        document.getElementById('mobileHud').classList.remove('d-none');
    } else {
        document.getElementById('mobileHud').classList.add('d-none');
    }
}



