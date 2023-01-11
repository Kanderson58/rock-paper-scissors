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
        if(this.human.chosenFighter === this.computer.chosenFighter) {
            this.declareDraw();
        }
        // console.log(this.computer.wins)
        // console.log(this.human.wins)
    }
    compareFightersComplex() {
        if(this.human.chosenFighter === this.computer.chosenFighter) {
            this.declareDraw();
        }

        if(this.human.chosenFighter === 4 && (this.computer.chosenFighter === 5 || this.computer.chosenFighter === 8)) {
            console.log("log1")
            this.computer.wins++
        } else if(this.human.chosenFighter === 4 && (this.computer.chosenFighter === 6 || this.computer.chosenFighter === 7)) {
            console.log("log2")
            this.human.wins++
        }

        if(this.human.chosenFighter === 5 && (this.computer.chosenFighter === 7 || this.computer.chosenFighter === 8)) {
            console.log("log3")
            this.computer.wins++
        } else if(this.human.chosenFighter === 5 && (this.computer.chosenFighter === 4 || this.computer.chosenFighter === 6)) {
            console.log("log4")
            this.human.wins++
        }

        if(this.human.chosenFighter === 6 && (this.computer.chosenFighter === 4 || this.computer.chosenFighter === 5)) {
            console.log("log5")
            this.computer.wins++
        } else if(this.human.chosenFighter === 6 && (this.computer.chosenFighter === 7 || this.computer.chosenFighter === 8)) {
            console.log("log6")
            this.human.wins++
        }

        if(this.human.chosenFighter === 7 && (this.computer.chosenFighter === 4 || this.computer.chosenFighter === 6)) {
            console.log("log7")
            this.computer.wins++
        } else if(this.human.chosenFighter === 7 && (this.computer.chosenFighter === 8 || this.computer.chosenFighter === 5)) {
            console.log("log8")
            this.human.wins++
        }

        if(this.human.chosenFighter === 8 && (this.computer.chosenFighter === 6 || this.computer.chosenFighter === 7)) {
            console.log("log9")
            this.computer.wins++
        } else if(this.human.chosenFighter === 8 && (this.computer.chosenFighter === 5 || this.computer.chosenFighter === 4)) {
            console.log("log10")
            this.human.wins++
        }
        console.log(this.computer.chosenFighter)
        console.log(this.human.chosenFighter)
        console.log(this.computer.wins)
        console.log(this.human.wins)
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