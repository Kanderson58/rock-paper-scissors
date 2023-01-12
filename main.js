// STOP!  Is what I'm doing data related or DOM related?  Is the data changing in this file?  Are you using methods - i.e. splice, push?  If YES, go to your classes!

// TODO
// setTimeout - event listener that fires the timeout on a click.  listener is set to images so whenever that image is clicked, a timeout starts.  During that time, another function runs that shows the fighters side by side and announces the win
// Add current winner so it can be interpolated into where it needs to go
// Add display for computer win, human win, and draw
// Event target clicked image and add hidden to every other image for in-play display
// Attach icon to winner - change icon?  Cabbage is kind of stupid

var currentGame = new Game;

var gameHeader = document.querySelector("#game-choice");
var classicGameOption = document.querySelector("#classic");
var complexGameOption = document.querySelector("#complex");
var classicGamePlay = document.querySelector(".classic-game-view");
var complexGamePlay = document.querySelector(".complex-game-view");
var compWins = document.querySelector("#compWins");
var humanWins = document.querySelector("#humanWins");
var gamePlay = document.querySelectorAll("#gameView");
var resetButton = document.querySelectorAll("#resetBtn")

classicGameOption.addEventListener("click", selectClassic);
complexGameOption.addEventListener("click", selectComplex);
for(var i = 0; i < gamePlay.length; i++) {
    gamePlay[i].addEventListener("click", selectFighter)
    gamePlay[i].addEventListener("click", function() {setTimeout(prepNextRound, 3000)})
}
for(var i = 0; i < resetButton.length; i++) {
    resetButton[i].addEventListener("click", showOptions)
}

function hide(element) {
    element.classList.add("hidden");
}

function show(element) {
    element.classList.remove("hidden");
}

function selectClassic() {
    currentGame.selectGameSetup("classic");
    showClassicGame();
}

function selectComplex() {
    currentGame.selectGameSetup("complex");
    showComplexGame();
}

function selectFighter(event) {
    currentGame.selectComputerFighter(event)
    showBattleMode()
}

function showBattleMode() {

}

function prepNextRound() {
    compWins.innerText = `Wins: ${currentGame.computer.wins}`
    humanWins.innerText = `Wins: ${currentGame.human.wins}`
}

function showClassicGame() {
    gameHeader.innerText ='Choose Your Fighter!'
    gameHeader.id = "fighter-choice"
    hide(classicGameOption);
    hide(complexGameOption);
    show(classicGamePlay);
}

function showComplexGame() {
    gameHeader.innerText ='Choose Your Fighter!'
    gameHeader.id = "fighter-choice"
    hide(classicGameOption);
    hide(complexGameOption);
    show(complexGamePlay);
}

function showOptions() {
    gameHeader.innerText ='Choose Your Game!'
    gameHeader.id = "game-choice"
    show(classicGameOption);
    show(complexGameOption);
    hide(classicGamePlay);
    hide(complexGamePlay);
}