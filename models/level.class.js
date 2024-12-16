class Level {
    coins;
    bottles;
    enemies;
    endboss;
    clouds;
    backgroundObjects;
    level_end_x = 2200;


    constructor(coins, bottles, enemies, endboss, clouds, backgroundObjects) {
        this.coins = coins;
        this.bottles = bottles;
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}