// JavaScript Code for Psychic Game

// Define the letters in the alphabet that the computer can choose from.
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Set initial global vars
var wins = 0;
var losses = 0;
var guessesLeft = 7;
// this will be an array that will hold the letters the user guesses in each round
var picksSoFar = [];
// This is what the letter that the user picks by pressing a key
var userPick = null;
// The computer will pick a letter and store it
var letterToGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
console.log("Wins: " + wins + "Losses" + losses + "GuessesLeft:" + guessesLeft + "Picks so far" + picksSoFar + "Computer picked" + letterToGuess);

// Look for events
document.onkeyup = function(event) {

    // When a key is pressed, it records it and stores it to userPick
    var userPick = String.fromCharCode(event.keyCode).toLowerCase();

    /*This will add the users pick to the picksSoFar array only if it wasn't picked already. It will also make sure that the characters picked can only be from the alphabet.*/
    if (picksSoFar.indexOf(userPick) < 0 && alphabetLetters.indexOf(userPick) >= 0) {
        picksSoFar[picksSoFar.length] = userPick;
        // If its a new letter thats incorrect, then decrease guessesLeft by 1
        guessesLeft--;
    }

    /*If letterToGuess is the same as userPick then record it was a win and reset the picksLeft to 7, empty the picksSoFar array, and have the computer pick a new letter.*/
    if (letterToGuess == userPick) {
        wins++;
        console.log("you win");
        guessesLeft = 7;
        picksSoFar = [];
        letterToGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
        console.log("Wins: " + wins + "Losses" + losses + "GuessesLeft:" + guessesLeft + "Picks so far" + picksSoFar + "Computer picked" + letterToGuess);
    }

    /*If the guessesLeft reaches 0 the record it as a loss. Reset picksLeft to 7, empty picksSoFar array, and have the computer pick another letter*/
    if (guessesLeft == 0) {
        losses++;
        console.log("you lost");
        guessesLeft = 7;
        picksSoFar = [];
        letterToGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
        console.log("Wins: " + wins + "Losses" + losses + "GuessesLeft:" + guessesLeft + "Picks so far" + picksSoFar + "Computer picked" + letterToGuess);
    }

    // Showing progress on HTML
    var html = "<p><h1>Psychic Game</h1></p>" + "<p><h4>Guess what letter I'm thinking of...</h4></p>" + "<p><h4>WINS: " + wins + "</h4></p>" + "<p><h4>LOSSES: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your picks so far: " + picksSoFar + "</h4></p>";
    // Insert html into the game ID
    document.querySelector("#game").innerHTML = html;

}
