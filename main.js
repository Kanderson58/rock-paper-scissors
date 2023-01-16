var currentGame = new Game;

var gameHeader = document.getElementById('gameHeader');
var classicGameOption = document.getElementById('classic');
var complexGameOption = document.getElementById('complex');
var fighterDisplay = document.getElementById('imageBlock')
var results = document.getElementById('play');
var compWins = document.getElementById('compWins');
var humanWins = document.getElementById('humanWins');
var gamePlay = document.querySelectorAll('#imageBlock');
var resetButton = document.getElementById('resetBtn');
var sozinComet = document.getElementById('sozinComet');
var sozinCaption = document.getElementById('sozinCaption');
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
    displayGame();
}

function selectComplex() {
    currentGame.selectGameSetup('complex');
    displayGame();
}

function displayGame() {
    encouragePlayer();
    gameHeader.innerText = 'Choose Your Fighter!';
    results.innerHTML = '';
    fighterDisplay.innerHTML = '';
    for(var i = 0; i < currentGame.fighters.length; i++) {
        fighterDisplay.innerHTML += `${imageCodes[currentGame.fighters[i]]}`;
    }
    hide(results);
    show(fighterDisplay);
    show(resetButton);
    hide(classicGameOption);
    hide(complexGameOption);
    hide(totalResetButton);
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
    hide(fighterDisplay);
    show(results);
    addTokens(results);
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
    if(currentGame.gamesLeft > 0 && currentGame.gamesLeft < 6 && currentGame.currentWin) {
        sozinCaption.innerText = `You can do it! ${currentGame.gamesLeft} more to go!`;
    } else if(currentGame.gamesLeft > 0 && currentGame.gamesLeft < 6 && !currentGame.currentWin) {
        sozinCaption.innerText = 'Win 3 games to save the nations!';
    } else if(currentGame.gamesLeft === 6) {
        sozinCaption.innerText = 'Oh no...';
    } else if(currentGame.gamesLeft === 0) {
        sozinCaption.innerText = 'Hooray!';
    }
}

function showWinCount() {
    if(currentGame.currentWin === 'Computer') {
    hide(compWins);
    void compWins.offsetWidth;
    show(compWins);
    compWins.innerText = `Wins: ${currentGame.computer.wins}`;
    } else {
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
    displayGame()
}

function displayNationsFate() {
    hide(results);
    hide(fighterDisplay);
    hide(resetButton);
    show(totalResetButton);
    sozinCaption.innerText = '';
    if(currentGame.cometPosition === 240) {
        gameHeader.innerText = 'You saved the Nations!!';
    } else if(currentGame.cometPosition === -240) {
        gameHeader.innerText = 'You failed the Nations...';
    }
}

function showOptions() {
    gameHeader.innerText = 'Choose Your Game!';
    show(classicGameOption);
    show(complexGameOption);
    hide(fighterDisplay);
    hide(resetButton);
    hide(totalResetButton);
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
    hide(fighterDisplay);
    hide(resetButton);
    hide(totalResetButton);
    results.innerHTML = '';
    fighterDisplay.innerHTML = '';
}