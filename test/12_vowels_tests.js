let {
    vowels
} = require('../12_vowels')

var assert = require('assert');

describe('vowels', function () {
    context('Should return all valid vowels from a string', function () {
        it('Should return an array of the vowels "e", "u", "i", "o", "o" from the string "The quick brown fox"', function () {
            assert.deepEqual(vowels("The quick brown fox"), ["e", "u", "i", "o", "o"]);
        })
        it('Should return an array of the vowels "e", "o", "o" from the string "Hello World"', function () {
            assert.deepEqual(vowels("Hello World"), ["e", "o", "o"]);
        })
    })
    context('Should return all uppercase and lowercase vowels', function () {
        it('Should return "A", "e", "E" from the string "cAse tEst"', function () {
            assert.deepEqual(vowels("cAse tEst"), ["A", "e", "E"])
        })
    })
})