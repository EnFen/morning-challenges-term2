/*
You helped Neo almost get out of the matrix with matrix_addition but
Cypher was one step ahead of you. In order to get past Cypher's trap and
save Neo you need to write a new function.

Write a function similar to the matrix_addition challenge but instead
of addition, write one for multiplication.

Check your solution by running mocha 14_multiply_matrices

Example:
function matrixMultiplication([[1,2,3],[4,5,6]], [[7,8],[9,10],[11,12]])
=> [[58, 64], [139,154]]

Hint:
Try drawing the function out first if the arrays are a little confusing.
*/

function multiplyMatrices(matrixOne, matrixTwo) {
    if (matrixOne.map((a) => a.length == matrixTwo.length).includes(false)) return null
    result = []
    matrixOne.map((x) => {
        vector = []
        for (let a = 0; a < matrixOne.length; a++) {
            vector.push(x.map((i, j) => i * matrixTwo[j][a]).reduce((f, g) => f + g))
        }
        result.push(vector)
    })
    return result

    // let result = []
    // for (let row of matrixTwo) {
    //     if (row.length != matrixOne.length) return null
    // }
    // for (let row of matrixOne) {
    //     if (row.length != matrixTwo.length) return null
    //     let vector = []
    //     for (let i in matrixTwo[0]) {
    //         for (let j in row) {
    //             vector[i] = vector[i] + (matrixOne[matrixOne.indexOf(row)][j] * matrixTwo[j][i]) || (matrixOne[matrixOne.indexOf(row)][j] * matrixTwo[j][i])
    //         }
    //     }
    //     result.push(vector)
    // }
    // return result
}


const assert = require('assert');

describe('Matrix multiplication', function () {
    it('Should return the multipilcation of a matrix', function () {
        assert.deepEqual([
            [58, 64],
            [139, 154]
        ], multiplyMatrices([
            [1, 2, 3],
            [4, 5, 6]
        ], [
            [7, 8],
            [9, 10],
            [11, 12]
        ]))
        assert.deepEqual([
            [84, 90, 96],
            [201, 216, 231],
            [318, 342, 366]
        ], multiplyMatrices([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ], [
            [10, 11, 12],
            [13, 14, 15],
            [16, 17, 18]
        ]))
    })
    it('Should return null if the matrix cannot be multiplied', function () {
        assert.deepEqual(null, multiplyMatrices([
            [8, 12, 5],
            [40, 21, 8, 17]
        ], [
            [3, 2, 1, 6],
            [7, 4, 1, 9]
        ]))
        assert.deepEqual(null, multiplyMatrices([
            [8, 12, 5],
            [40, 21, 8]
        ], [
            [3, 2, 1],
            [7, 4, 1]
        ]))
    })
})