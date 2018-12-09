// **
// Needed for node.js to run server side

// module.exports =

// **

class Commentary {

    // Start fight
    startFight(challenger1, challenger2) {
        console.clear()
        console.log(`Two new challengers, ${challenger1}, and ${challenger2} enter the ring...`)
        console.log('Fighters. Take your positions!')
        console.log('LET\'S GET READY TO RUUUUUUMBLE!!!')
    }

    // Damage commentary
    damageComment(attacker, power, damage, critical) {
        // Miss comment
        if (damage == 0) {
            console.log(`${attacker} misses completely, inflicting 0 damage...`)
        }
        // Critical attack comment
        else if (critical) {
            console.log(`CRITICAL HIT!! ${attacker} delivers ${damage} damage.`)
        }
        // Weak hit inflicted if power is 33% or less than max.
        else if (damage < 0.33 * power) {
            console.log(`${attacker} delivers a weak hit of ${damage} damage.`)
        }
        // Powerful hit inflicted if power is 67% or more than max.
        else if (damage > 0.67 * power) {
            console.log(`${attacker} delivers a powerful hit of ${damage} damage!`)
        }
        // Normal attack if power is between 33-67% of max.
        else {
            console.log(`${attacker} delivers ${damage} damage.`)
        }
    }

    // Consecutive hits commentary
    consecutiveHitComment(defender, consecutiveHits, counter) {
        if (consecutiveHits % 3 == 0 && counter % 3 == 0) {
            console.log(`${defender} is getting absolutely pummelled!!`)
        } else if (consecutiveHits % 5 == 0 && counter % 5 == 0) {
            console.log('Well, this fight is completely one sided...')
        }
    }

    // Report defender status
    statusComment(defender, health) {
        console.log(health <= 0 ? `${defender} has 0 health remaining!` : `${defender} has ${health} health remaining.`)
        console.log('\n')
    }

    // Finish fight
    endFight(winner, loser) {
        // Output fight outcome
        console.log(`${loser} has been KO'd!`)
        console.log(`${winner} is the WINNER!!!`)
    }
}