/*
Neo is stuck in the matrix and you need to help get him out. In order to
help him you will need to write a function which will take the values 
of two different matrices and return their sum total.

Check your solution by running mocha 13_matrix_addition

Examples:
function matrixAddition ([1,2,3,4], [2,3,4,5]) => [3,5,7,9]

function matrixAddition ([[1,2,3,4], [2,4,6,8]], [[1,2,3,4], [2,4,6,8]])    
                          => [[2,4,6,8], [4,8,12,16]]

Hint:
It may help to write out the array beforehand if the examples are confusing.

*/
// the important part of this *ridiculous* solution in the map of a map, which is a convenient way to iterate through multidimensional arrays. Note that the first argument in the map function refers to the iterated value, and the second argument is the iterated index for the value
// function matrixAddition(matrixOne, matrixTwo) {
//     if (Array.isArray(matrixOne[0])) return matrixOne.reduce(a => a.length) % 2 == 0 && matrixTwo.reduce(a => a.length) % 2 == 0 ? matrixOne.map((x, y) => x.map((a, b) => a + matrixTwo[y][b])) : null
//     return matrixOne.length !== matrixTwo.length ? null : matrixOne.map((a, b) => a + matrixTwo[b])
// }


function matrixAddition(matrixOne, matrixTwo) {
    if (matrixOne.length !== matrixTwo.length) return null
    let result = []
    for (i in matrixOne) {
        if (matrixOne[i].length != matrixTwo[i].length) return null
        matrixOne[i].length === undefined ? result.push(matrixOne[i] + matrixTwo[i]) : result.push(matrixOne[i].map((a, b) => a + matrixTwo[i][b]))
    }
    return result
}

const assert = require('assert');

describe('Matrix addition', function () {
    it('Should return the sum of one dimensional matrix', function () {
        assert.deepEqual([2, 4, 5, 7], matrixAddition([1, 3, 4, 3], [1, 1, 1, 4]))
        assert.deepEqual([10, 4, 50, 31, 17], matrixAddition([5, 0, 40, 29, 10], [5, 4, 10, 2, 7]))
        assert.deepEqual([10, 4, 50, 31, 17], matrixAddition([5, 0, 40, 29, 10], [5, 4, 10, 2, 7]))
    })
    it('Should return the sum of multidimensional matrix', function () {
        assert.deepEqual([
            [2, 4, 6, 8],
            [10, 12, 14, 16]
        ], matrixAddition([
            [1, 2, 3, 4],
            [5, 6, 7, 8]
        ], [
            [1, 2, 3, 4],
            [5, 6, 7, 8]
        ]))
    })
    it('Should return null if the sum of the matrix cannot be added', function () {
        assert.deepEqual(null, matrixAddition([4, 2, 1, 7], [2, 3, 5]))
        assert.deepEqual(null, matrixAddition([8, 12, 5], [40, 21, 8, 17]))
        assert.deepEqual(null, matrixAddition([
            [8, 12, 5],
            [40, 21, 8, 17]
        ], [
            [3, 2, 1, 6],
            [7, 4, 1, 9]
        ]))
    })
})