// TODO
// Extend Player Class to Human & Giant classes
// Output, player stats and the commentary of the fight to browser using AJAX
// Prettify the page?
// Add web form to page to allow user to create their own player 

// **
// Needed for node.js to run server side

// let Player = requirejs(['./playerClass'])
// let Fight = requirejs(['./fightClass'])
// let Commentary = requirejs(['./commentary'])

// **



// Instantiate Players
bill = new Player('Bill', 200, 25)
ted = new Player('Ted', 200, 25)

// Instantiate FightCommentary
commentary = new Commentary()

document.getElementById('start').addEventListener('click', () => {
    // Instantiate Fight
    fight = new Fight(bill, ted, commentary)
})