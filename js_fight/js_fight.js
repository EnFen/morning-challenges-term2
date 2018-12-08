// Create Player Class
// Create fight method/class
// Extend Player Class to Human & Giant classes
// Output, player stats and the commentary of the fight to browser
// Prettify the page?
// Add web form to page to allow user to create their own player
// Update player via AJAX 

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

    // Initilise class
    constructor(name, health, power) {
        this.name = name
        this.health = health
        this.power = power
        this.consecutiveHits = 0
        Player.resetCounter
    }

    // Check to see if player health < 0, returns boolean
    get isAlive() {
        if (this.health > 0) {
            return true
        }
        return false
    }

    // Handles damage that the player receives when attacked
    receivesDamage(hit) {
        // Deducts damage received from players current health
        this.health -= hit

        // Resolves consecutive hits received to the player
        if (this.consecutiveHits != Player.getCounter) {
            this.consecutiveHits = 0
            Player.resetCounter
        }

        Player.counterUp
        this.consecutiveHits++

        //Output commentary
        if (this.consecutiveHits % 3 == 0 && Player.getCounter % 3 == 0) {
            console.log(`${this.name} is getting absolutely pummelled!!`)
        } else if (this.consecutiveHits % 5 == 0 && Player.getCounter % 5 == 0) {
            console.log('Well, this fight is completely one sided...')
        }
    }

    // Handles damage dealt by the player
    get attack() {
        // Determine the amount of damage inflicted
        let damage = Math.floor(Math.random() * this.power)

        // Randomly applies a 20% chance of dealing a critical hit which doubles the attack strength
        function isCritical() {
            let critRoll = Math.random()
            if (critRoll > 0.8) {
                return true
            } else {
                return false
            }
        }

        let criticalHit = isCritical()

        if (damage != 0 && criticalHit) {
            damage *= 2
        }

        // Output commentary
        if (damage == 0) {
            console.log(`${this.name} misses completely, inflicting 0 damage...`)
        } else if (criticalHit) {
            console.log(`CRITICAL HIT!! ${this.name} delivers ${damage} damage.`)
        } else if (damage < 0.33 * this.power) {
            console.log(`${this.name} delivers a weak hit of ${damage} damage.`)
        } else if (damage > 0.67 * this.power) {
            console.log(`${this.name} delivers a powerful hit of ${damage} damage!`)
        } else {
            console.log(`${this.name} delivers ${damage} damage.`)
        }

        return damage
    }

    // Reports the players current status
    get status() {
        if (this.health <= 0) {
            console.log(`${this.name} has 0 health remaining!`)
        } else {
            console.log(`${this.name} has ${this.health} health remaining.`)
        }
    }

}



player = new Player("Bill", 200, 50)

console.log(player.isAlive)
player.receivesDamage(20)
player.receivesDamage(20)
player.receivesDamage(20)
player.receivesDamage(20)
setTimeout(() => player.status, 3000)
player.attack
console.log(Player.getCounter)