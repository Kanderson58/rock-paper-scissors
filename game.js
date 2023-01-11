// STOP!  Is what I'm doing data related or DOM related?  Is the page changing in this file?  Are you using innerHTML, innerText, or display hidden?  If YES, go to main!

class Game {
    constructor() {
        this.human = new Player
        this.computer = new Player
        this.selectedGame;
    }
    selectHumanFighter(event) {
        this.human.chosenFighter = parseInt(event.target.id);
    }
    selectClassicComputerFighter(event) {
        this.selectedGame = "classic";
        this.computer.chosenFighter = Math.ceil(Math.random() * 3)
        this.selectHumanFighter(event);
        this.compareFightersClassic()
    }
    selectComplexComputerFighter(event) {
        this.selectedGame = "complex";
        var newRoll = Math.floor(Math.random() * 9)
        if(newRoll >= 4) {
            this.computer.chosenFighter = newRoll;
        } else {
            this.selectComplexComputerFighter;
        }
        this.selectHumanFighter(event);
    }
    compareFightersClassic() {
        if(this.human.chosenFighter === this.computer.chosenFighter) {
            this.declareDraw();
        }
        if(this.human.chosenFighter === 1 && this.computer.chosenFighter === 2) {
            this.computer.wins++
        } else if(this.human.chosenFighter === 1 && this.computer.chosenFighter === 3) {
            this.human.wins++
        }
        if(this.human.chosenFighter === 2 && this.computer.chosenFighter === 3) {
            this.computer.wins++
        } else if(this.human.chosenFighter === 2 && this.computer.chosenFighter === 1) {
            this.human.wins++
        }
        if(this.human.chosenFighter === 3 && this.computer.chosenFighter === 1) {
            this.computer.wins++
        } else if(this.human.chosenFighter === 3 && this.computer.chosenFighter === 2) {
            this.human.wins++
        }
    }
    declareDraw() {
        console.log("draw")
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