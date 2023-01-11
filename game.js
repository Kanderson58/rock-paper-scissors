// STOP!  Is what I'm doing data related or DOM related?  Is the page changing in this file?  Are you using innerHTML, innerText, or display hidden?  If YES, go to main!

class Game {
    constructor() {
        this.human = new Player
        this.computer = new Player
        // A way to keep track of the data for the game board
        this.selectedGame;
        // check game conditions, including draw
        // reset the board
    }
    selectGame() {
        // event.target to see which div was clicked
        // MAIN: change views
        // this.selectedGame = string of classic or complex
    }
    selectHumanFighter() {
        // event.target, checks class to find number to identify fighter
        // assigns this.human.chosenFighter = that number
    }
    selectComputerFighter() {
        // if this.selectedGame === classic, random number between 1-3
        // assign this.human.chosenFighter
        // if this.selectedGame === complex, random number between 4-8
        // assign this.computer.chosenFighter
    }
    compareFightersClassic() {
        // this.human.chosenFighter
        // this.computer.chosenFighter
        // if strictly equal, return a draw (MAIN)
        // conditionals dependent on human choice
            // if 1 is chosen && this.computer.chosenFighter === 2, computer wins, else human wins
            // if 2 is chosen && this.computer.chosenFighter === 3, computer wins, else human wins
            // if 3 is chosen && this.computer.chosenFighter === 1, computer wins, else human wins
    }
    compareFightersComplex() {
        // much worse conditional block
        // don't forget the draw
        // conditionals dependent on human choice
            // if 4 is chosen && this.computer.chosenFighter === 6 || === 7, human wins, else computer wins
            // if 5 is chosen && this.computer.chosenFighter === 6 || === 4, human wins, else computer wins
            // if 6 is chosen && this.computer.chosenFighter === 7 || === 8, human wins, else computer wins
            // if 7 is chosen && this.computer.chosenFighter === 8 || === 5, human wins, else computer wins
            // if 8 is chosen && this.computer.chosenFighter === 5 || === 4, human wins, else computer wins
    }
    declareHumanWinner() {
        // this.human.wins ++
        // MAIN: wins <p> should always be displaying current array of this.human.wins
    }
    declareComputerWinner() {
        // this.computer.wins ++
        // MAIN: wins <p> should always be displaying current array of this.computer.wins
    }
}