// TODO
// Extend Player Class to Human & Giant classes
// Output, player stats and the commentary of the fight to browser
// Prettify the page?
// Add web form to page to allow user to create their own player
// Update player via AJAX 

let Player = require('./playerClass')
let Fight = require('./fightClass')

// Instantiate Players
bill = new Player('Bill', 200, 25)
ted = new Player('Ted', 200, 25)

// Instantiate Fight
fight = new Fight(bill, ted)