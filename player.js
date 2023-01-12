// STOP!  Is what I'm doing data related or DOM related?  Is the page changing in this file?  Are you using innerHTML, innerText, or display hidden?  If YES, go to main!

class Player {
    constructor() {
       this.name;
       this.token;
       this.wins = 0;
       this.chosenFighter; 
    }
    takeTurn(chosenImg) {
        if((currentGame.selectedGame === "classic" || currentGame.selectedGame === "complex") && this.name === "cabbage merchant") {
            // this.token = "🥬"
            this.chosenFighter = parseInt(chosenImg);
        } else if(currentGame.selectedGame === "classic" && this.name === "avatar state") {
            // this.token = "☯️"
            this.getRandomFighter();
        } else if(currentGame.selectedGame === "complex" && this.name === "avatar state") {
            // this.token = "☯️"
            this.getRandomFighter();
        }
    }
    getRandomFighter() {
        this.chosenFighter = currentGame.fighters[Math.floor(Math.random() * currentGame.fighters.length)];
    }
}