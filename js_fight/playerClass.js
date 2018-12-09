// module.exports =

class Player {

    // Define class level properties and methods
    static get resetCounter() {
        Player.counter = 0
    }

    static get counterUp() {
        Player.counter++
    }

    static get getCounter() {
        return Player.counter
    }

    // Initilise Player class
    constructor(name, health, power) {
        this.name = name
        this.health = health
        this.power = power
        this.consecutiveHits = 0
        Player.resetCounter
    }

    // Check to see if player health < 0, returns boolean
    get isAlive() {
        return this.health > 0 ? true : false
    }

    // Handles damage that the player receives when attacked
    receivesDamage(hit) {
        // Deducts damage received from players current health
        this.health -= hit
    }

    // Randomly applies a 20% chance of player dealing a critical hit when attacking
    get criticalHit() {
        return Math.random() > 0.8 ? true : false
    }

    // Determines the amount of damage inflictedby the player, and whether the attack was critical
    get attack() {
        return [Math.floor(Math.random() * (this.power + 1)), this.criticalHit]
    }
}