// TODO
// Extend Player Class to Human & Giant classes
// Output, player stats and the commentary of the fight to browser using AJAX
// Prettify the page?
// Add web form to page to allow user to create their own player 

let Player = require('./playerClass')
let Fight = require('./fightClass')
let Commentary = require('./commentary')

// Instantiate Players
bill = new Player('Bill', 200, 25)
ted = new Player('Ted', 200, 25)

// Instantiate FightCommentary
commentary = new Commentary()

// Instantiate Fight
fight = new Fight(bill, ted, commentary)