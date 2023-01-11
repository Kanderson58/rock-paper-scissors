### Rock Paper Scissors

# Required features:

1. Both players’ wins should be displayed.
2. Both players’ selected fighter icon should be displayed each round.
3. Winner (or Draw) should be announced each round.
4. A timeout is used after a completed round to reset the board.
5. The overall layout should be the same but you can choose different colors and icons if you want to get creative with your with your Rock Paper Scissors design!
6. This game is played by one user against a computer. The computer player should be an instantiation of Player and have the ability to make a random choice.
7. You’ll need to make two versions of Rock, Paper, Scissors - “classic” and some variation. The variation should include more than 3 options (the one in the video has 5). You can invent your own variation, or do some research on variations here. Make sure you communicate the rules to your user!

# Suggested Iterations

1. Plan out the HTML layout (colors and icons do not need to match, but overall layout should closely match the demo video)
2. Create the Player class
3. Create the Game class
4. Make game fully playable without the DOM (manually updating the Game data, etc, from your console) to force yourself to think data-model-first
5. Create central game board on the DOM
6. Connect Game data model to the DOM
7. Display the Player data in the sidebars
8. Automatically reset the game board to allow for a new game to be played after the previous game is won
9. Extension - Persist Player data using local storage (number of wins should persist across page refreshes)

## Avatar Game

Earth, Water, Fire, Air, Avatar

Avatar loses to Water, Earth
Avatar wins against Fire, Air

Earth loses to Fire, Air
Earths wins against Avatar, Water

Air loses to Fire, Avatar
Air wins against Earth, Water

Water loses to Earth, Air
Water wins against Avatar, Fire

Fire loses to Water, Avatar
Fire wins against Air, Earth

## KEYS

1 - rock
2 - paper
3 - scissors

4 - water
5 - earth
6 - avatar
7 - fire
8 - air

Classic:
1 beats 3
2 beats 1
3 beats 2

Complex:
4 wins against 6, 7
5 wins against 6, 4
7 wins against 8, 5
8 wins against 5, 4
6 wins against 7, 8