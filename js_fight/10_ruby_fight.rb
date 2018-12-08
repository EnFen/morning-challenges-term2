# The Company has two directors who are passionately disagreeing, they want to fight it out. Being the fantastic human you are, you propose creating a virtual fight to minimise physical harm.
# You need to create a simple fighting game, where two opponents will fight until one of them loses.

# Hints: start by creating a Player class (the instance variables could be name, health and power).
# You’ll need a few methods, consider one that keeps track of whether a player is alive, another one that calculates the impact of hits (decreases the opponents heath by the the amount of the other players power). And a third that outputs the players information.

# You’ll then need to make a fight method that uses a loop to make the players hit one another until  the is alive method returns false for one of them. When the loop is finished (which would mean one of the players has lost), show the players output.

# Then create two Player objects (create a random value for each player’s health and power, make is so that the maximum health value for a player is 200, and the maximum power value is 25) and call the fight method.

class Player
    attr_reader :name

    @@counter = 0
    

    def initialize(name, health, power)
        @name = name.capitalize
        @health = health
        @power = power
        @consecutive_hits = 0         

    end

    # Boolean check to see if health is > 0
    def is_alive?
        if @health > 0
            return true
        else
            return false
        end

    end

    
    # Deducts the amount of damaged received during an attack from the players current health
    def received_damage(hit)
        @health -= hit

        if @consecutive_hits != @@counter
            @consecutive_hits = 0
            @@counter = 0
        end

        @@counter += 1
        
        @consecutive_hits += 1
        
        if @consecutive_hits % 3 == 0 && @@counter % 3 == 0
            puts "#{@name} is getting absolutely pummelled!!"
            puts ""
        elsif @consecutive_hits % 5 == 0 && @@counter % 5 == 0
            puts "This fight is completely one sided..."
            puts ""
        end

        

    end

    # Returns a random amount of damage to be inflicted between 0 and the players maximum power. 
    def hit 
        
        # Determine and output the result of the damage inflicted
        damage = rand(0..@power)

        # Determine a critical hit
        critical_hit_chance = rand(5)
        if damage != 0 && critical_hit_chance == 4
            critical = true
            damage *= 2
        end

        if damage == 0
            puts "#{@name} misses completely, doing #{damage} damage."
        elsif critical
            puts "CRITICAL HIT!! #{@name} delivers #{damage} damage."
        elsif damage < 0.33 * @power
            puts "#{@name} delivers a weak hit of #{damage} damage."
        elsif damage > 0.67 * @power
            puts "#{@name} delivers a powerful hit of #{damage} damage!"
        else
            puts "#{@name} does #{damage} damage."
        end

        puts ""

        return damage

    end

    # Reports the players current health
    def player_info
        if @health <= 0
            puts "#{@name} has 0 health remaining!"
            puts ""
        else            
            puts "#{@name} has #{@health} health remaining."
            puts ""
            
        end

    end

end

class Fight
    def initialize(player_1, player_2)
        @player_1 = player_1
        @player_2 = player_2

        # Start fight
        system 'clear'
        puts "Two new challengers, #{@player_1.name}, and #{player_2.name} enter the ring..."
        puts ""
        puts "Fighters. Take your positions!"
        puts ""
        puts "LETS GET READY TO RUUUUUMBLE!!!"
        puts ""
        sleep(2)

        fight
    end

    # Player 1 attack method
    def player_1_attack
        system 'clear'
        @player_2.received_damage(@player_1.hit)
        @player_2.player_info
        sleep(2)
    end

    # Player 2 attack method
    def player_2_attack
        system 'clear'
        @player_1.received_damage(@player_2.hit)
        @player_1.player_info
        sleep(2)
    end

    # Actual fight; loops through random attacks from each player
    def fight
        while 
            player_turn = rand(2)
            if player_turn == 1
                player_1_attack
                break unless @player_2.is_alive?
            else
                player_2_attack
                break unless @player_1.is_alive?
            end

        end

        # Outcome of fight
        if @player_1.is_alive?
            puts "#{@player_2.name} has been KO'd!"
            puts "#{@player_1.name} is the WINNER!!!"
        else
            puts "#{@player_1.name} has been KO'd!"
            puts "#{@player_2.name} is the WINNER!!!"
        end

    end

end

# Initiate players
bill = Player.new('Bill', 200, 25)
ted = Player.new('Ted', 200, 25)

# Fight
fight = Fight.new(bill, ted)



# def fight
#     # Initiate players
#     bill = Player.new('Bill', 200, 25)
#     ted = Player.new('Ted', 200, 25)

#     # Start fight
#     puts "Bill and Ted enter the ring..."
#     puts "LETS GET READY TO RUUUUUMBLE!!!"
#     puts ""
#     sleep(2)

#     while        
#         # bill hits ted
#         ted.received_damage(bill.hit)
#         # report ted status; break if ted dead
#         ted.player_info
#         sleep(2)
#         break unless ted.is_alive?                

#         #ted hits bill
#         bill.received_damage(ted.hit)
#         #report bill status; break if bill dead
#         bill.player_info
#         sleep(2)
#         break unless bill.is_alive?
        
#     end

#     # Outcome of fight
#     if bill.is_alive?
#         puts "Ted has been KO'd!"
#         puts "Bill is the WINNER!!!"
#     else
#         puts "Bill has been KO'd!"
#         puts "Ted is the WINNER!!!"
#     end

# end

# puts fight
