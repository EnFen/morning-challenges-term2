// **
// Needed for node.js to run server side

// module.exports =
// let Player = require('./playerClass')

// **/

class Fight {

    // Initialise Fight class
    constructor(player1, player2, output) {
        this.player1 = player1
        this.player2 = player2
        this.output = output

        // Start fight commentary
        this.output.startFight(player1.name, player2.name)

        // Call fight run method
        setTimeout(this.fightRun.bind(this), 2000)
    }

    // Define encounter
    encounter(attacker, defender) {
        // Determine attack strength
        let [damage, criticalHit] = attacker.attack

        // If critical hit, double attack power
        damage = (damage != 0 && criticalHit) ? damage *= 2 : damage

        // Deliver attack to defender
        defender.receivesDamage(damage)

        // Resolve number of consecutive hits to defender
        if (defender.consecutiveHits != Player.getCounter) {
            attacker.consecutiveHits = 0
            defender.consecutiveHits = 0
            Player.resetCounter
        }
        Player.counterUp
        defender.consecutiveHits++

        // Damage commentary
        this.output.damageComment(attacker.name, attacker.power, damage, criticalHit)

        // Consecutive hits commentary
        this.output.consecutiveHitComment(defender.name, defender.consecutiveHits, Player.getCounter)

        // Status commentary
        this.output.statusComment(defender.name, defender.health)

    }

    fightRun() {
        // continue randomised encounters until one player's health reaches 0
        while (this.player1.isAlive && this.player2.isAlive) {

            // Randomise player turn => returns either 1 or 0
            let playerTurn = Math.floor(Math.random() * 2)

            // Resolve encounter
            let [attacker, defender] = playerTurn == 1 ? [this.player1, this.player2] : [this.player2, this.player1]

            this.encounter(attacker, defender)
        }

        // Define winner
        let [winner, loser] = this.player1.isAlive ? [this.player1.name, this.player2.name] : [this.player2.name, this.player1.name]

        // End fight commentary
        this.output.endFight(winner, loser)
    }
}