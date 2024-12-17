/**
 * Class representing a level in the game.
 */
class Level {
    coins;
    bottles;
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2200;

    /**
     * Creates an instance of Level.
     * @param {Coin[]} coins - Array of coin objects.
     * @param {Bottle[]} bottles - Array of bottle objects.
     * @param {Enemy[]} enemies - Array of enemy objects (Chicken and Small Chicken).
     * @param {Cloud[]} clouds - Array of cloud objects.
     * @param {BackgroundObject[]} backgroundObjects - Array of background objects.
     */
    constructor(coins, bottles, enemies, clouds, backgroundObjects) {
        this.coins = coins;
        this.bottles = bottles;
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}