# You have been hired to keep track of the score at baseball games.
# Unfortunately you tend to be rather absent minded because most nights,
# you stay up late playing video games and coding. Let's create a program
# that will keep track of the score for us.
#
# We'll need to create a constructor ScoreCard that has two public functions:
# addEntry and getScore.
#
# addEntry - Takes in the result of an at-bat. This result can be single,
# double, triple, homerun, or out.
#
# getScore - Returns the score in the format Home: [HOME_SCORE] Away: [AWAY_SCORE]
#
# To keep things simple, base runners will advance the amount of bases equal to that of
# the batter's hit (i.e. if the batter hits a double, each base-runner will advance two bases).
#
# A few important baseball rules:
#
# 1. The Away team bats first.
# 2. There are three outs in an inning.
# 3. After three outs the opposing team hits.
# 4. The hits single, double, triple and homerun correspond to the batter reaching bases first, second, third and home respectively.
# 5. Base runners start at home and then cycle through the bases first, second, third and home.
# 6. Runners score for their team after they reach home.
#
# For more information on baseball visit here: http://en.wikipedia.org/wiki/Baseball
#
class Baseball
    HITS = {'homerun' => 4, 'triple' => 3, 'double' => 2, 'single' => 1, 'out' => 0}

    def initialize
        @score = {home: 0, away: 0}

        # set innings starting values
        @bases = [0,0,0]  
        @out = 0

        # away team starts; teams identified by @score.keys
        @team_index = 1
        @team_at_bat = @score.keys[@team_index]
              
    end

    def addEntry(entry)
        batters_hit = HITS[entry]
        
        # increment 'outs' if no result from bat
        if batters_hit == 0
            @out += 1

            # when outs reach 3, toggle teams and start new innings 
            if @out == 3
                @team_at_bat = @score.keys[@team_index ^= 1]
                @bases = [0,0,0]
                @out = 0                
            end

        # for all other results, bases are taken, and scores counted
        else

            # batter takes a base...
            @bases.unshift(1)
            # bases 'behind' player are left empty
            (batters_hit - 1).times{@bases.unshift(0)}

            # players that have passed 'home' are scored
            @score.select { |team, score| 
                @score[team] += @bases.pop(batters_hit).sum if team == @team_at_bat
            }
        end

    end

    def to_s
        "Home: #{@score[:home]} Away: #{@score[:away]}"
    end
end

