class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.chosenFighter; 
  }
  takeTurn(chosenImg) {
    if (this.name === 'cabbage merchant') {
      this.chosenFighter = parseInt(chosenImg);
    } else if (currentGame.selectedGame === 'classic' && this.name === 'avatar state') {
      this.getRandomFighter(0, 3);
    } else if (currentGame.selectedGame === 'complex' && this.name === 'avatar state') {
      this.getRandomFighter(3, 8);
    }
  }
  getRandomFighter(min, max) {
    this.chosenFighter = currentGame.fighters[Math.floor(Math.random() * (max - min))];
  }
}