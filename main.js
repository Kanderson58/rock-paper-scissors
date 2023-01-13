// STOP!  Is what I'm doing data related or DOM related?  Is the data changing in this file?  Are you using methods - i.e. splice, push?  If YES, go to your classes!

// TODO
// move image codes to own file

var currentGame = new Game;

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
var gamePlay = document.querySelectorAll("#imageBlock");
var resetButton = document.querySelector("#resetBtn");

classicGameOption.addEventListener("click", selectClassic);
complexGameOption.addEventListener("click", selectComplex);
for(var i = 0; i < gamePlay.length; i++) {
    gamePlay[i].addEventListener("click", selectFighter)
    gamePlay[i].addEventListener("click", function() {setTimeout(prepNextRound, 1500)})
}
resetButton.addEventListener("click", showOptions)

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
    currentGame.human.takeTurn(event.target.id)
    currentGame.computer.takeTurn()
    currentGame.selectComputerFighter()
    showBattleMode()
}

function showBattleMode() {
    hide(resetButton)
    if(currentGame.currentWin === "Person" || currentGame.currentWin === "Computer") {
        gameHeader.innerText = `${currentGame.currentWin} has won!`
    } else {
        gameHeader.innerText ='It\'s a draw!'
    }
    if(currentGame.selectedGame === "classic") {
        hide(imagesClassic)
        show(classicResults)
        addTokens(classicResults)
    } else {
        hide(imagesComplex)
        show(complexResults)
        addTokens(complexResults)
    }
}

function addTokens(results) {
    var compFighter = imageCodes[currentGame.computer.chosenFighter]
    var humanFighter = imageCodes[currentGame.human.chosenFighter]
    results.innerHTML = `<figure>${humanFighter}<figcaption id="humanFig" class="hidden">${currentGame.human.token}</figcaption></figure><figure>${compFighter}<figcaption id="compFig" class="hidden">${currentGame.computer.token}</figcaption></figure>`
    showWinToken()
}

function showWinToken() {
    var humanFig = document.querySelector("#humanFig")
    var compFig = document.querySelector("#compFig")
    if(currentGame.currentWin === "Person") {
        show(humanFig)
        showWinCount()
    } else if(currentGame.currentWin === "Computer") {
        show(compFig)
        showWinCount()
    }
}

function showWinCount() {
    if(currentGame.currentWin === "Computer") {
    hide(compWins)
    void compWins.offsetWidth;
    show(compWins)
    compWins.innerText = `Wins: ${currentGame.computer.wins}`
    } else if(currentGame.currentWin === "Person") {
    hide(humanWins)
    void humanWins.offsetWidth;
    show(humanWins)
    humanWins.innerText = `Wins: ${currentGame.human.wins}`
    } 
}

function prepNextRound() {
    show(resetButton)
    if(currentGame.selectedGame === "classic") {
        showClassicGame()
    } else {
        showComplexGame()
    }
}

function showClassicGame() {
    gameHeader.innerText = 'Choose Your Fighter!'
    classicResults.innerHTML = ''
    hide(classicResults)
    show(imagesClassic)
    show(resetButton);
    hide(classicGameOption);
    hide(complexGameOption);
    show(classicGamePlay);
}

function showComplexGame() {
    gameHeader.innerText = 'Choose Your Fighter!'
    complexResults.innerHTML = ''
    hide(complexResults)
    show(imagesComplex)
    show(resetButton);
    hide(classicGameOption);
    hide(complexGameOption);
    show(complexGamePlay);
}

function showOptions() {
    gameHeader.innerText = 'Choose Your Game!'
    gameHeader.id = "game-choice"
    show(classicGameOption);
    show(complexGameOption);
    hide(classicGamePlay);
    hide(complexGamePlay);
    hide(resetButton);
}