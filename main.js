// STOP!  Is what I'm doing data related or DOM related?  Is the data changing in this file?  Are you using methods - i.e. splice, push?  If YES, go to your classes!

var currentGame = new Game;

var gameHeader = document.querySelector("#game-choice");
var fighterHeader = document.querySelector("#fighter-choice");
var drawHeader = document.querySelector("#draw");
var humanWinHeader = document.querySelector("#human-win");
var compWinHeader = document.querySelector("#comp-win");
var classicGameOption = document.querySelector("#classic");
var complexGameOption = document.querySelector("#complex");
var classicGamePlay = document.querySelector("#classicView");
var complexGamePlay = document.querySelector("#complexView");

classicGameOption.addEventListener("click", selectClassic);
complexGameOption.addEventListener("click", selectComplex);
classicGamePlay.addEventListener("click", function() {currentGame.selectComputerFighter(event)})
complexGamePlay.addEventListener("click", function() {currentGame.selectComputerFighter(event)})

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

// function playGame(e) {
//     console.log(e.target)
//     currentGame.human.takeTurn(e)
//     currentGame.computer.takeTurn()
// }