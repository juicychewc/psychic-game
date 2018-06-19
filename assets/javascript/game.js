var allChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userWins = 0;
var computerWins = 0;
var remainingGuess = 10;
var keyPress;
var letterGuess;
var computerPick;

var guessedLetters = [];


//This is everything that occurs when keys are pressed
document.onkeyup = function (guess) {
    keyPress = guess.key;
    letterGuess = keyPress.toLowerCase();

    //This prevents invalid inputs and duplicates
    if ((allChoices.indexOf(letterGuess) != -1) && (guessedLetters.indexOf(letterGuess)) === -1) {

        //This builds the array of guesses and writes to the screen
        guessedLetters.push(letterGuess);
        remainingGuesses();
        document.getElementById("guessremain").textContent = remainingGuess;
        document.getElementById("alreadyUsedLetters").textContent = guessedLetters.join(", ");

        //This is the check for conditional for winning
        if (letterGuess === computerPick) {
            userWins = userWins + 1;
            endRound();
        }

        //This is the check for conditional for losing
        if ((remainingGuess === 0) && (letterGuess != computerPick)) {
            computerWins = computerWins + 1;
            endRound();
        }

    }

}

function startGame() {
    //These start on the page and disappear once the game starts
    document.getElementById("taunt").textContent = "";
    document.getElementById("instructions").textContent = "";
    document.getElementById("gamestart").remove();
    endRound();
}

//This sets the number of remaining guesses
function remainingGuesses() {
    remainingGuess = 10 - guessedLetters.length;
}

//This resets the round when there is a win or a loss
function endRound() {
    remainingGuess = 10;
    guessedLetters = [];
    document.getElementById("yourscore").textContent = userWins;
    document.getElementById("compscore").textContent = computerWins;
    computerPick = allChoices[Math.floor(Math.random() * allChoices.length)];
}