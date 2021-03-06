# Create a RomanNumerals class that can convert a roman numeral to and
# from an integer value. It should follow the API demonstrated in the examples below.
# Multiple roman numeral values will be tested for each helper method.
#
# Modern Roman numerals are written by expressing each digit separately,
# starting with the left most digit and skipping any digit with a value of zero.
# In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC.
# 2008 is written as 2000=MM, 8=VIII; or MMVIII.
# 1666 uses each Roman symbol in descending order: MDCLXVI.
#
# Examples
#   RomanNumerals.to_roman(1000) # should return 'M'
#   RomanNumerals.from_roman('M') # should return 1000
#
# Help
#   Symbol	Value
#   I	    1
#   V	    5
#   X	    10
#   L	    50
#   C	    100
#   D	    500
#   M	    1000
#
class RomanNumerals
    ROMAN_NUMBERS = {
    1000 => "M",  
     900 => "CM",  
     500 => "D",  
     400 => "CD",
     100 => "C",  
      90 => "XC",  
      50 => "L",  
      40 => "XL",  
      10 => "X",  
        9 => "IX",  
        5 => "V",  
        4 => "IV",  
        1 => "I",  
  }

    def self.fromRoman(string)
        numeral = 0
        ROMAN_NUMBERS.each do |value, letter| 
            while string.start_with?(letter)
                numeral += value
                string.delete_prefix!(letter)
            end
        end
        return numeral
    end

    def self.toRoman(number)
        roman = ""
        ROMAN_NUMBERS.each do |value, letter|
            roman << letter * (number / value)
            number = number % value
        end
        return roman
    end
end
