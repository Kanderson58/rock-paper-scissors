// STOP!  Is what I'm doing data related or DOM related?  Is the page changing in this file?  Are you using innerHTML, innerText, or display hidden?  If YES, go to main!

class Player {
    constructor() {
       this.name;
       this.token; // icon by the name
       this.wins = 0;
       this.chosenFighter; 
    }
    takeTurn(event) {
        if((currentGame.selectedGame === "classic" || currentGame.selectedGame === "complex") && this.name === "cabbage merchant") {
            this.chosenFighter = parseInt(event.target.id);
        } else if(currentGame.selectedGame === "classic" && this.name === "avatar state") {
            this.getRandomFighter();
        } else if(currentGame.selectedGame === "complex" && this.name === "avatar state") {
            this.getRandomFighter();
        }
    }
    getRandomFighter() {
        this.chosenFighter = currentGame.fighters[Math.floor(Math.random() * currentGame.fighters.length)];
    }
}