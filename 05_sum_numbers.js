// Write a method that will take an array player scores for a series of games
// and return the name of the player with the highest total score.
// Test your solution:
// mocha 05_sum_numbers.js

function findWinner(players) {
    // set up winner variable as string
    let winner = ['', 0]

    // players is an array
    // iterate through players
    for (let player of players) {

        // ORIGINAL
        // let sum = (a, b) => a + b
        // // total scores of player
        // let totalScore = player.scores.reduce(sum)

        // ALTERNATE
        let totalScore = 0
        for (let score of player.scores) {
            totalScore += score
        }

        // // compare scores to score in 'winner'        
        if (totalScore > winner[1]) {
            // push current player to 'winner' if highest score
            winner[1] = totalScore
            winner[0] = player.name
        }
    }
    return winner[0]
}


var assert = require('assert');

class Player {
    constructor(name, scores) {
        this.name = name
        this.scores = scores
    }
}

// let players = []

describe('findWinner', function () {
    it('Should return the winner when winner is first in array', function () {
        players = [new Player('James', [50, 100, 85], new Player('Nathan', [55, 90, 86]))]
        assert.equal('James', findWinner(players))
    })
    it('Should return the winner when winner is second in array', function () {
        players = [new Player('Nathan', [50, 100, 85], new Player('James', [55, 90, 86]))]
        assert.equal('Nathan', findWinner(players))
    })
    it('Should return the first player when both players are tied', function () {
        players = [new Player('Nathan', [50, 100, 85], new Player('James', [50, 100, 85]))]
        assert.equal('Nathan', findWinner(players))
    })
})


// let array = [1, 2, 3, 4]
// let sum = (a, b) => {
//     return a + b
// }

// console.log(array.reduce(sum))