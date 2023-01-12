// STOP!  Is what I'm doing data related or DOM related?  Is the data changing in this file?  Are you using methods - i.e. splice, push?  If YES, go to your classes!

// TODO
// move image codes to own file
// why is the reset causing the icon not to show up for complex?  complex win icon doesn't work when going back and forth between game views - BUT only after the other view is selected
// does chosenImg need to be passed in so many things?

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
var gamePlay = document.querySelectorAll("#imageBlock");
var resetButton = document.querySelector("#resetBtn");

classicGameOption.addEventListener("click", selectClassic);
complexGameOption.addEventListener("click", selectComplex);
for(var i = 0; i < gamePlay.length; i++) {
    gamePlay[i].addEventListener("click", selectFighter)
    gamePlay[i].addEventListener("click", function() {setTimeout(prepNextRound, 1500)})
        // add this in after you figure out the icon bug
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
    // currentGame.human.chosenFighter = parseInt(event.target.id)
    // would this work???  would take out logic from takeTurn method??? add this in after you figure out icon bug
    currentGame.selectComputerFighter(event.target.id)
    showBattleMode()
}

function showBattleMode() {
    if(currentGame.currentWin === "Person" || currentGame.currentWin === "Computer") {
        gameHeader.innerText = `${currentGame.currentWin} has won!`
    } else {
        gameHeader.innerText ='It\'s a draw!'
    }
    if(currentGame.selectedGame === "classic") {
        hide(imagesClassic)
        show(classicResults)
        addTokens(classicResults)
        // showWinToken()
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
    var humanFig = document.querySelector("#humanFig")
    var compFig = document.querySelector("#compFig")
    console.log(humanFig)
    console.log(compFig)
    showWinToken()
}

function showWinToken() {
    var humanFig = document.querySelector("#humanFig")
    var compFig = document.querySelector("#compFig")
    if(currentGame.currentWin === "Person") {
        // console.log(humanFig)
        humanFig.classList.remove("hidden")
        // console.log(humanFig)
    } else if(currentGame.currentWin === "Computer") {
        // console.log(compFig)
        compFig.classList.remove("hidden")
        // console.log(humanFig)
    }
}

function prepNextRound() {
    if(currentGame.selectedGame === "classic") {
        showClassicGame()
    } else {
        showComplexGame()
    }
    compWins.innerText = `Wins: ${currentGame.computer.wins}`
    humanWins.innerText = `Wins: ${currentGame.human.wins}`
}

function showClassicGame() {
    // var humanFig = document.querySelector("#humanFig")
    // var compFig = document.querySelector("#compFig")
    gameHeader.innerText = 'Choose Your Fighter!'
    // humanFig.classList.add("hidden")
    // compFig.classList.add("hidden")
    classicResults.innerHTML = ''
    hide(classicResults)
    show(imagesClassic)
    show(resetButton);
    hide(classicGameOption);
    hide(complexGameOption);
    show(classicGamePlay);
}

function showComplexGame() {
    // var humanFig = document.querySelector("#humanFig")
    // var compFig = document.querySelector("#compFig")
    gameHeader.innerText = 'Choose Your Fighter!'
    // humanFig.classList.add("hidden")
    // compFig.classList.add("hidden")
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