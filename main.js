// STOP!  Is what I'm doing data related or DOM related?  Is the data changing in this file?  Are you using methods - i.e. splice, push?  If YES, go to your classes!

// change query selects to get element by ID

var currentGame = new Game;
var cometPosition = 0;

var gameHeader = document.querySelector('#gameHeader');
var classicGameOption = document.querySelector('#classic');
var complexGameOption = document.querySelector('#complex');
var imagesComplex = document.querySelector('.images-complex');
var imagesClassic = document.querySelector('.images-classic')
var classicResults = document.querySelector('#classicPlay');
var complexResults = document.querySelector('#complexPlay');
var compWins = document.querySelector('#compWins');
var humanWins = document.querySelector('#humanWins');
var gamePlay = document.querySelectorAll('#imageBlock');
var resetButton = document.querySelector('#resetBtn');
var sozinComet = document.querySelector('#sozinComet');
var sozinCaption = document.querySelector('#sozinCaption');
var cometOutcome = document.querySelector('#cometOutcome');
var totalResetButton = document.querySelector('#fullReset');

classicGameOption.addEventListener('click', selectClassic);
complexGameOption.addEventListener('click', selectComplex);
for(var i = 0; i < gamePlay.length; i++) {
    gamePlay[i].addEventListener('click', selectFighter);
    gamePlay[i].addEventListener('click', function() {setTimeout(prepNextRound, 1500)});
}
resetButton.addEventListener('click', showOptions)
totalResetButton.addEventListener('click', resetFullGame)

function hide(element) {
    element.classList.add('hidden');
}

function show(element) {
    element.classList.remove('hidden');
}

function selectClassic() {
    currentGame.selectGameSetup('classic');
    showClassicGame();
}

function selectComplex() {
    currentGame.selectGameSetup('complex');
    showComplexGame();
}

function selectFighter(event) {
    currentGame.human.takeTurn(event.target.id);
    currentGame.computer.takeTurn();
    currentGame.selectComputerFighter();
    showBattleMode();
}

function showBattleMode() {
    hide(resetButton)
    if(currentGame.currentWin === 'Person' || currentGame.currentWin === 'Computer') {
        gameHeader.innerText = `${currentGame.currentWin} has won!`;
    } else {
        gameHeader.innerText ='It\'s a draw!';
    }
    if(currentGame.selectedGame === 'classic') {
        hide(imagesClassic);
        show(classicResults);
        addTokens(classicResults);
    } else {
        hide(imagesComplex);
        show(complexResults);
        addTokens(complexResults);
    }
}

function addTokens(results) {
    var compFighter = imageCodes[currentGame.computer.chosenFighter];
    var humanFighter = imageCodes[currentGame.human.chosenFighter];
    results.innerHTML = `<figure>${humanFighter}<figcaption id="humanFig" class="hidden">${currentGame.human.token}</figcaption></figure><figure>${compFighter}<figcaption id="compFig" class="hidden">${currentGame.computer.token}</figcaption></figure>`;
    showWinToken();
}

function showWinToken() {
    var humanFig = document.querySelector('#humanFig');
    var compFig = document.querySelector('#compFig');
    if(currentGame.currentWin === 'Person')
    //  && cometPosition < 240 && cometPosition > -240) 
     {
        cometPosition += 80
        // sozinComet.style['object-position'] = `${cometPosition}px`
        positionComet();
        console.log(cometPosition);
        show(humanFig);
        showWinCount();
    } else if(currentGame.currentWin === 'Computer')
    //  && cometPosition < 240 && cometPosition > -240) 
    {
        cometPosition -= 80;
        // sozinComet.style['object-position'] = `${cometPosition}px`
        positionComet()
        console.log(cometPosition)
        show(compFig);
        showWinCount();
    }
}

function positionComet() {
    if(cometPosition <= 240 && cometPosition >= -240) {
        sozinComet.style['object-position'] = `${cometPosition}px`
    }
}

function showWinCount() {
    if(currentGame.currentWin === 'Computer') {
    hide(compWins);
    void compWins.offsetWidth;
    show(compWins);
    compWins.innerText = `Wins: ${currentGame.computer.wins}`;
    } else if(currentGame.currentWin === 'Person') {
    hide(humanWins);
    void humanWins.offsetWidth;
    show(humanWins);
    humanWins.innerText = `Wins: ${currentGame.human.wins}`;
    } 
}

function prepNextRound() {
    if(cometPosition === 240 || cometPosition === -240) {
        displayNationsFate();
        return
    }
    show(resetButton)
    if(currentGame.selectedGame === 'classic') {
        showClassicGame();
    } else {
        showComplexGame();
    }
}

function displayNationsFate() {
    hide(classicResults);
    hide(complexResults);
    hide(imagesClassic);
    hide(imagesComplex);
    hide(resetButton);
    show(totalResetButton);
    if(cometPosition === 240) {
        gameHeader.innerText = 'You saved the Nations!!';
    } else if(cometPosition === -240) {
        gameHeader.innerText = 'You failed the Nations...';
    }
}

function resetFullGame() {
    window.location.reload()
}

function showClassicGame() {
    sozinCaption.innerText = ''
    gameHeader.innerText = 'Choose Your Fighter!';
    classicResults.innerHTML = '';
    imagesClassic.innerHTML = '';
    imagesClassic.innerHTML += `${imageCodes[0]}${imageCodes[1]}${imageCodes[2]}`;
    hide(classicResults);
    show(imagesClassic);
    show(resetButton);
    hide(classicGameOption);
    hide(complexGameOption);
    hide(totalResetButton);
}

function showComplexGame() {
    sozinCaption.innerText = ''
    gameHeader.innerText = 'Choose Your Fighter!';
    complexResults.innerHTML = '';
    imagesComplex.innerHTML = '';
    imagesComplex.innerHTML += `${imageCodes[3]}${imageCodes[4]}${imageCodes[5]}${imageCodes[6]}${imageCodes[7]}`;
    hide(complexResults);
    show(imagesComplex);
    show(resetButton);
    hide(classicGameOption);
    hide(complexGameOption);
    hide(totalResetButton);
}

function showOptions() {
    gameHeader.innerText = 'Choose Your Game!';
    show(classicGameOption);
    show(complexGameOption);
    hide(imagesClassic);
    hide(imagesComplex);
    hide(resetButton);
    hide(totalResetButton);
}