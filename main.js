var currentGame = new Game;

var gameHeader = document.getElementById('gameHeader');
var classicGameOption = document.getElementById('classic');
var complexGameOption = document.getElementById('complex');
var imagesComplex = document.querySelector('.images-complex');
var imagesClassic = document.querySelector('.images-classic')
var classicResults = document.getElementById('classicPlay');
var complexResults = document.getElementById('complexPlay');
var compWins = document.getElementById('compWins');
var humanWins = document.getElementById('humanWins');
var gamePlay = document.querySelectorAll('#imageBlock');
var resetButton = document.getElementById('resetBtn');
var sozinComet = document.getElementById('sozinComet');
var sozinCaption = document.getElementById('sozinCaption');
var cometOutcome = document.getElementById('cometOutcome');
var totalResetButton = document.getElementById('fullReset');

classicGameOption.addEventListener('click', selectClassic);
complexGameOption.addEventListener('click', selectComplex);
for(var i = 0; i < gamePlay.length; i++) {
    gamePlay[i].addEventListener('click', selectFighter);
    gamePlay[i].addEventListener('click', function() {setTimeout(prepNextRound, 2000)});
}
resetButton.addEventListener('click', showOptions);
totalResetButton.addEventListener('click', resetFullGame);

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
    hide(resetButton);
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
    var humanFig = document.getElementById('humanFig');
    var compFig = document.getElementById('compFig');
    if(currentGame.currentWin === 'Person')
     {
        currentGame.moveComet();
        positionComet();
        show(humanFig);
        showWinCount();
    } else if(currentGame.currentWin === 'Computer')
    {
        currentGame.moveComet();
        positionComet();
        show(compFig);
        showWinCount();
    }
}

function positionComet() {
    if(currentGame.cometPosition <= 240 && currentGame.cometPosition >= -240) {
        sozinComet.style['object-position'] = `${currentGame.cometPosition}px`;
    }
    encouragePlayer();
}

function encouragePlayer() {
    var gamesLeft = 3 - (currentGame.human.wins - currentGame.computer.wins);
    if(gamesLeft > 0 && gamesLeft < 6 && currentGame.currentWin) {
        sozinCaption.innerText = `You can do it! ${gamesLeft} more to go!`;
    } else if(gamesLeft > 0 && gamesLeft < 6 && !currentGame.currentWin) {
        sozinCaption.innerText = 'Win 3 games to save the nations!';
    } else if(gamesLeft === 6) {
        sozinCaption.innerText = 'Oh no...';
    } else if(gamesLeft === 0) {
        sozinCaption.innerText = 'Hooray!';
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
    if(currentGame.cometPosition === 240 || currentGame.cometPosition === -240) {
        displayNationsFate();
        return;
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
    sozinCaption.innerText = '';
    if(currentGame.cometPosition === 240) {
        gameHeader.innerText = 'You saved the Nations!!';
    } else if(currentGame.cometPosition === -240) {
        gameHeader.innerText = 'You failed the Nations...';
    }
}

function resetFullGame() {
    currentGame = new Game;
    gameHeader.innerText = 'Choose Your Game!';
    sozinComet.style['object-position'] = '0px';
    sozinCaption.innerText = 'Uh oh! Sozin\'s comet is on the way!  Win games to save the nations!';
    humanWins.innerText = 'Wins: 0';
    compWins.innerText = 'Wins: 0';
    show(classicGameOption);
    show(complexGameOption);
    hide(imagesClassic);
    hide(imagesComplex);
    hide(resetButton);
    hide(totalResetButton);
}

function showClassicGame() {
    encouragePlayer();
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
    encouragePlayer();
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