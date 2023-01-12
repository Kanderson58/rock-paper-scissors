// STOP!  Is what I'm doing data related or DOM related?  Is the data changing in this file?  Are you using methods - i.e. splice, push?  If YES, go to your classes!

// TODO
// setTimeout - event listener that fires the timeout on a click.  listener is set to images so whenever that image is clicked, a timeout starts.  During that time, another function runs that shows the fighters side by side and announces the win
// Add current winner so it can be interpolated into where it needs to go
// Add display for computer win, human win, and draw
// Event target clicked image and add hidden to every other image for in-play display
// Attach icon to winner - change icon?  Cabbage is kind of stupid

var currentGame = new Game;
var imageCodes = ['filler', '<img src="./assets/happy-rocks.png" alt="rock" class="fighter" id="1">', '<img src="./assets/happy-paper.png" alt="paper" class="fighter" id="2">', '<img src="./assets/happy-scissors.png" alt="scissors" class="fighter" id="3">', '<img src="./assets/water.png" alt="water" class="fighter" id="4">', '<img src="./assets/earth.png" alt="earth" class="fighter" id="5">', '<img src="./assets/avatar.png" alt="avatar" class="fighter" id="6">', '<img src="./assets/fire.png" alt="fire" class="fighter" id="7">', '<img src="./assets/air.png" alt="air" class="fighter" id="8">']

var gameHeader = document.querySelector("#gameHeader");
var classicGameOption = document.querySelector("#classic");
var complexGameOption = document.querySelector("#complex");
var classicGamePlay = document.querySelector(".classic-game-view");
var complexGamePlay = document.querySelector(".complex-game-view");
var fighters = document.querySelectorAll(".fighter");
var imagesComplex = document.querySelector(".images-complex");
var imagesClassic = document.querySelector(".images-classic")
var classicResults = document.querySelector("#classicPlay")
var complexResults = document.querySelector("#complexPlay")
var compWins = document.querySelector("#compWins");
var humanWins = document.querySelector("#humanWins");
var gamePlay = document.querySelectorAll("#gameView");
var resetButton = document.querySelectorAll("#resetBtn")

classicGameOption.addEventListener("click", selectClassic);
complexGameOption.addEventListener("click", selectComplex);
for(var i = 0; i < gamePlay.length; i++) {
    gamePlay[i].addEventListener("click", selectFighter)
    // gamePlay[i].addEventListener("click", showBattleMode)
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
    if(currentGame.currentWin === "Person" || currentGame.currentWin === "Computer") {
        gameHeader.innerText = `${currentGame.currentWin} has won!`
    } else {
        gameHeader.innerText ='It\'s a draw!'
    }
    var compFighter = imageCodes[currentGame.computer.chosenFighter]
    var humanFighter = imageCodes[currentGame.human.chosenFighter]
    if(currentGame.selectedGame === "classic") {
        hide(imagesClassic)
        show(classicResults)
        classicResults.innerHTML = `${humanFighter} ${compFighter}`
    } else {
        hide(imagesComplex)
        show(complexResults)
        complexResults.innerHTML = `${humanFighter} ${compFighter}`
    }
}

function prepNextRound() {
    if(currentGame.selectedGame === "classic") {
        show(imagesClassic)
        hide(classicResults)
    } else {
        show(imagesComplex)
        hide(complexResults)
    }
    gameHeader.innerText ='Choose Your Fighter!'
    compWins.innerText = `Wins: ${currentGame.computer.wins}`
    humanWins.innerText = `Wins: ${currentGame.human.wins}`
    for(var i = 0; i < fighters.length; i++) {
        show(fighters[i])
    }
}

function showClassicGame() {
    gameHeader.innerText ='Choose Your Fighter!'
    hide(classicGameOption);
    hide(complexGameOption);
    show(classicGamePlay);
}

function showComplexGame() {
    gameHeader.innerText ='Choose Your Fighter!'
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