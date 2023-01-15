// STOP!  Is what I'm doing data related or DOM related?  Is the page changing in this file?  Are you using innerHTML, innerText, or display hidden?  If YES, go to main!

class Game {
    constructor() {
        this.human = new Player('cabbage merchant', '🥬');
        this.computer = new Player('avatar state', '☯️');
        this.fighters = [];
        this.selectedGame;
        this.draw = true;
        this.currentWin = '';
        this.cometPosition = 0;
    }
    selectGameSetup(type){
        this.selectedGame = type;
        if(this.selectedGame === 'classic') {
            this.fighters = [0, 1, 2];
        } else {
            this.fighters = [3, 4, 5, 6, 7];
        }
    }
    selectComputerFighter() {
        if(this.selectedGame === 'classic') {
            this.compareFightersClassic();
        } else {
            this.compareFightersComplex();
        }
    }
    compareFightersClassic() {
        var human = this.human.chosenFighter;
        var comp = this.computer.chosenFighter;
        this.draw = false;
        if(human === 0 && comp === 1) {
            this.computer.wins++;
            this.currentWin = 'Computer';
        } else if(human === 0 && comp === 2) {
            this.human.wins++;
            this.currentWin = 'Person';
        }
        if(human === 1 && comp === 2) {
            this.computer.wins++;
            this.currentWin = 'Computer';
        } else if(human === 1 && comp === 0) {
            this.human.wins++;
            this.currentWin = 'Person';
        }
        if(human === 2 && comp === 0) {
            this.computer.wins++;
            this.currentWin = 'Computer';
        } else if(human === 2 && comp === 1) {
            this.human.wins++;
            this.currentWin = 'Person';
        }
        if(human === comp) {
            this.declareDraw();
        }
    }
    compareFightersComplex() {
        var human = this.human.chosenFighter;
        var comp = this.computer.chosenFighter;
        this.draw = false;
        if(human === 3 && (comp === 4 || comp === 7)) {
            this.computer.wins++;
            this.currentWin = 'Computer';
        } else if(human === 3 && (comp === 5 || comp === 6)) {
            this.human.wins++;
            this.currentWin = 'Person';
        }
        if(human === 4 && (comp === 6 || comp === 7)) {
            this.computer.wins++;
            this.currentWin = 'Computer';
        } else if(human === 4 && (comp === 3 || comp === 5)) {
            this.human.wins++;
            this.currentWin = 'Person';
        }
        if(human === 5 && (comp === 3 || comp === 4)) {
            this.computer.wins++;
            this.currentWin = 'Computer';
        } else if(human === 5 && (comp === 6 || comp === 7)) {
            this.human.wins++;
            this.currentWin = 'Person';
        }
        if(human === 6 && (comp === 3 || comp === 5)) {
            this.computer.wins++;
            this.currentWin = 'Computer';
        } else if(human === 6 && (comp === 7 || comp === 4)) {
            this.human.wins++;
            this.currentWin = 'Person';
        }
        if(human === 7 && (comp === 5 || comp === 6)) {
            this.computer.wins++;
            this.currentWin = 'Computer';
        } else if(human === 7 && (comp === 4 || comp === 3)) {
            this.human.wins++;
            this.currentWin = 'Person';
        }
        if(human === comp) {
            this.declareDraw();
        }
    }
    declareDraw() {
        this.currentWin = 'Draw';
    }
    moveComet() {
        if(currentGame.currentWin === 'Person') {
            this.cometPosition += 80
        } else if(currentGame.currentWin === 'Computer'){
            this.cometPosition -= 80;
        }
    }
}