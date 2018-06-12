//This tracks the number of wins by the player
var currentWinsTotal = 0

//I think this is meant to be "var randomCountry"
var currentCountryGuess

//This will track the letters guessed in each game
var previouslyGuessedLetter = []

//Set number of guesses for each game. Will decrease with each letter being guessed
var remainingGuessesTotal = 10

//The possible countries within the game
var arrayOfCountries = ["America", "Canada", "Scotland", "Ireland", "Italy", "France", "Russia", "China", "Japan", "England", "Mexico", "Venezuela", "Argentina"]

// Randomly chooses a country from the array of Countries. Guessing this correct is the objective of the game.
var randomCountry = arrayOfCountries[Math.floor(Math.random() * arrayOfCountries.length)];
console.log(randomCountry)



document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userGuess = event.key;

    previouslyGuessedLetter.push(userGuess);
    console.log(previouslyGuessedLetter)

    if (userGuess)
    remainingGuessesTotal = remainingGuessesTotal - 1;
    console.log(remainingGuessesTotal)

}






/* BAD CODE

var countryLength = randomCountry.length

function repeatStringNumTimes(string, times) {
    var repeatedString = "";
    while (times > 0) {
      repeatedString += string;
      times--;
    }
    return repeatedString;
  }
  repeatStringNumTimes("abc", 3);






function repeatStringNumTimes(str, num) {
    return str;
  }
console.log(repeatStringNumTimes("_", countryLength))

//console.log(randomCountry.length * 'Bob');

//document.getElementById('currentWord').innerHTML = (randomCountry.length) * "_"


for (var l = 0; l < randomCountry.length;  l++) {
    document.getElementById('currentWord').innerHTML = "_"
}
*/

