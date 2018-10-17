class Array
  def square
    # create your square method here
    map {|number| number**2}
  end

  def cube
    map {|number| number**3}
  end

  # sum is a built in array method
  # def sum
  #   sum = 0
  #   each { |number| sum += number }
  #   sum
  # end

  def average
    sum / length
  end

  def even
    # select { |number| number if number % 2 == 0}
    # select { |number| number.even?}
    select(&:even?)
  end

  def odd
    # select { |number| number if number % 2 != 0}
    select(&:odd?)
  end  

  # now fill in the rest
end