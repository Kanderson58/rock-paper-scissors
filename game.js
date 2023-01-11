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
        this.compareFightersComplex();
    }
    compareFightersClassic() {
        var human = this.human.chosenFighter;
        var comp = this.computer.chosenFighter;
        if(human === 1 && comp === 2) {
            this.computer.wins++
        } else if(human === 1 && comp === 3) {
            this.human.wins++
        }
        if(human === 2 && comp === 3) {
            this.computer.wins++
        } else if(human === 2 && comp === 1) {
            this.human.wins++
        }
        if(human === 3 && comp === 1) {
            this.computer.wins++
        } else if(human === 3 && comp === 2) {
            this.human.wins++
        }
        if(human === comp) {
            this.declareDraw();
        }
    }
    compareFightersComplex() {
        var human = this.human.chosenFighter;
        var comp = this.computer.chosenFighter;
        if(human === comp) {
            this.declareDraw();
        }
        if(human === 4 && (comp === 5 || comp === 8)) {
            this.computer.wins++
        } else if(human === 4 && (comp === 6 || comp === 7)) {
            this.human.wins++
        }
        if(human === 5 && (comp === 7 || comp === 8)) {
            this.computer.wins++
        } else if(human === 5 && (comp === 4 || comp === 6)) {
            this.human.wins++
        }
        if(human === 6 && (comp === 4 || comp === 5)) {
            this.computer.wins++
        } else if(human === 6 && (comp === 7 || comp === 8)) {
            this.human.wins++
        }
        if(human === 7 && (comp === 4 || comp === 6)) {
            this.computer.wins++
        } else if(human === 7 && (comp === 8 || comp === 5)) {
            this.human.wins++
        }
        if(human === 8 && (comp === 6 || comp === 7)) {
            this.computer.wins++
        } else if(human === 8 && (comp === 5 || comp === 4)) {
            this.human.wins++
        }
    }
    declareDraw() {
        console.log("draw")
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