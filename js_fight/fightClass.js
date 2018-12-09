module.exports = class Fight {
    // Initialise Fight class
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2

        // Start fight
        console.clear()
        console.log(`Two new challengers, ${player1.name}, and ${player2.name} enter the ring...`)
        console.log('Fighters. Take your positions!')
        console.log('LET\'S GET READY TO RUUUUUUMBLE!!!')

        // Call fight method
        setTimeout(this.fight.bind(this), 2000)
    }
    // Define encounter
    encounter(attacker, defender) {
        defender.receivesDamage(attacker.attack)
        defender.status
        console.log('\n')
    }

    fight() {
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