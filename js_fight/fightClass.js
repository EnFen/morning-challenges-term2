let Player = require('./playerClass')

module.exports = class Fight {

    // Initialise Fight class
    constructor(player1, player2, output) {
        this.player1 = player1
        this.player2 = player2
        this.output = output

        // Start fight
        console.clear()
        console.log(`Two new challengers, ${player1.name}, and ${player2.name} enter the ring...`)
        console.log('Fighters. Take your positions!')
        console.log('LET\'S GET READY TO RUUUUUUMBLE!!!')

        // Call fight method
        setTimeout(this.progress.bind(this), 2000)
    }

    // Define encounter
    encounter(attacker, defender) {
        // Determine attack strength
        let damage = attacker.attack
        let criticalHit = attacker.criticalHit

        // If critical hit, double attack power
        if (damage != 0 && criticalHit) {
            damage *= 2
        }
        // Damage comment
        if (damage == 0) {
            console.log(`${attacker.name} misses completely, inflicting 0 damage...`)
        } else if (criticalHit) {
            console.log(`CRITICAL HIT!! ${attacker.name} delivers ${damage} damage.`)
        } else if (damage < 0.33 * attacker.power) {
            console.log(`${attacker.name} delivers a weak hit of ${damage} damage.`)
        } else if (damage > 0.67 * attacker.power) {
            console.log(`${attacker.name} delivers a powerful hit of ${damage} damage!`)
        } else {
            console.log(`${attacker.name} delivers ${damage} damage.`)
        }

        // Deliver attack to defender
        defender.receivesDamage(damage)


        // Determine number of consecutive hits to defender
        if (defender.consecutiveHits != Player.getCounter) {
            attacker.consecutiveHits = 0
            defender.consecutiveHits = 0
            Player.resetCounter
        }

        Player.counterUp
        defender.consecutiveHits++

        // Consecutive hits commentary
        if (defender.consecutiveHits % 3 == 0 && Player.getCounter % 3 == 0) {
            console.log(`${defender.name} is getting absolutely pummelled!!`)
        } else if (defender.consecutiveHits % 5 == 0 && Player.getCounter % 5 == 0) {
            console.log('Well, this fight is completely one sided...')
        }

        // Report defender status
        if (defender.health <= 0) {
            console.log(`${defender.name} has 0 health remaining!`)
        } else {
            console.log(`${defender.name} has ${defender.health} health remaining.`)
        }


        console.log('\n')
    }

    progress() {
        // continue randomised encounters until one player's health reaches 0
        while (this.player1.isAlive && this.player2.isAlive) {
            // Randomise player turn => returns either 1 or 0
            let playerTurn = Math.floor(Math.random() * 2)

            // Resolve encounter
            let [attacker, defender] = playerTurn == 1 ? [this.player1, this.player2] : [this.player2, this.player1]

            this.encounter(attacker, defender)
        }
        // When either players health has reached 0, finish fight
        this.fightOutcome
    }

    // Finish fight
    get fightOutcome() {
        // define winner
        let [winner, loser] = this.player1.isAlive ? [this.player1.name, this.player2.name] : [this.player2.name, this.player1.name]

        // Output fight outcome
        console.log(`${loser} has been KO'd!`)
        console.log(`${winner} is the WINNER!!!`)
    }
}