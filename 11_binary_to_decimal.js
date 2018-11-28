/*
Write a method to convert a binary number to a decimal.

Examples:
    binaryToDecimal(1000) => 8
    binaryToDecimal(1011) => 11
    binaryToDecimal(1100) => 12

Your solution should not use parseInt

Test: mocha 11_binary_to_decimal

*/

function binaryToDecimal(binaryNumber) {
    // return binaryNumber.toString().match(/[2-9]/) ? null : binaryNumber.toString().split("").reverse().map((a, b) => a * (2 ** b)).reduce((x, y) => x + y)
    // if (binaryNumber.toString().match(/[2-9]/)) return null
    // let bin = binaryNumber.toString().split("").reverse()
    // return bin.map((a, b) => a * (2 ** b)).reduce((x, y) => x + y)

    let result = 0
    let bin = binaryNumber.toString().split("")
    for (let i = (bin.length - 1); i >= 0; i--) {
        if (bin[i] == 0 || bin[i] == 1) {
            result += (2 ** i) * bin[i]
        } else {
            return null
        }
    }
    return result
}

let assert = require('assert')

describe('Binary to decimal', function () {
    it('Should convert a binary to its decimal value', function () {
        assert.equal((9), binaryToDecimal(1001))
        assert.equal((15), binaryToDecimal(1111))
        assert.equal((31), binaryToDecimal(11111))
    })
    it('Should return a null if the binary has a number other than 0 or 1', function () {
        assert.equal((null), binaryToDecimal(1002))
        assert.equal((null), binaryToDecimal(1220))
    })
})