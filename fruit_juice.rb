# In this challenge we mix some tasty fruit juice.
# We can add some components with certain amounts.
# Sometimes we pour out a bit of our juice. 
# Then we want to find out, which concentrations our fruit juice has.
# The jug has a limited capacity, set at time of creation. It should not be possible
# to add more juice to the jug than it's capacity.

# Example:

# You take an empty jug for your juice, which has a maximum capacity
# Whenever the jug is empty, the concentrations are always 0
# Now you add 200 ml of apple juice
# And then you add 200 ml of banana juice
# Now the concentration of apple juice is 0.5 (50%)
# Then you pour out 200 ml
# The concentration of apple juice is still 50%
# Then you add 200 ml of apple juice again
# Now the concentration of apple juice is 0.75, while the concentration of banana juice
# is only 0.25 (300 ml apple juice + 100 ml banana juice)

# Complete the functions in order to provide this functionality.

class Jug
    def initialize(capacity)
        @capacity = capacity
        @juices = {}
        @total = 0.0
    end

    def add(amount, type)
        capacity_remaining = @capacity - @total
        amount = capacity_remaining if amount > capacity_remaining

        @juices[type] = amount.to_f
        @total += amount.to_f
    end

    def pour(amount)
        for type, volume in @juices do
            @juices[type] = volume - (getConcentration(type) * amount)
        end
        @total -= amount
    end

    def getTotalAmount
        @total = @capacity if @total > @capacity
        @total
    end

    def getConcentration(type)
        @juices[type] ? @juices[type] / @total : 0
    end
end
