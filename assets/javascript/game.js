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

/*
var arrayOfCountries = {
  "America": 7,
  "Canada": 6, 
  "Scotland": 8, 
  "Ireland": 7, 
  "Italy": 5, 
  "France": 6, 
  "Russia": 6, 
  "China": 5, 
  "Japan": 5, 
  "England": 7, 
  "Mexico": 6, 
  "Venezuela": 9, 
  "Argentina": 9
}
*/

// Randomly chooses a country from the array of Countries. Guessing this correct is the objective of the game.
var randomCountry = arrayOfCountries[Math.floor(Math.random() * arrayOfCountries.length)];
console.log("Random Country: " + randomCountry)

//For measuring the length of characters in each country
var lengthOfCountry = 0

//Place holder array for front end code
var countryLengthArray = []

//Builds the array for countryLengthArray
for (var y = 0, dude = randomCountry.length; y < dude; y++) {
  countryLengthArray.push(randomCountry[y])
}

//This just verifies countryLengthArray works correctly
console.log(countryLengthArray)

//This loop measures the length of characters in each country
for (var z = 0, len = randomCountry.length; z < len; z++) {
  lengthOfCountry = lengthOfCountry + 1;
}

//This just prints the length of characters in each country for verification 
console.log("Length of Country " + lengthOfCountry)
console.log("-----------------------")


var dashesArray = []

for (var a = 0, bob = randomCountry.length; a < bob; a++) {
  dashesArray.push("_")
}
//console.log("Dashes: " + "[" + dashesArray + "]")

for (var b = 0, fred = randomCountry.length; b < fred; b++) {
  // var dynamicsDashArray = Thought I needed a container to store the updated values for dashesArray
  document.getElementById('currentWord').innerHTML += " " + dashesArray[b];
}



//For index.html -> ID=currentWord
//var emptyLetter = "<p>_</p>";

//Dont hurt yourself thinking
//var numberOfDashes = '<p>_</p>' * lengthOfCountry;
//console.log("Dashes " + numberOfDashes)

/* Bologna
countryLengthArray.foreach; {
  document.getElementById('currentWord').innerHTML = '<p>_</p>' ;
}
//console.log("country length is " + countryLengthArray.length)
*/


/* - I'm a horrible human being
//This should insert place holders in HTML for which country to guess
foreach (x in countryLengthArray); {
  document.getElementById('currentWord').innerHTML = emptyLetter
}
*/


document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    console.log("UserGuess: " + userGuess);

    
    //Updating array for previousGuessesLetters with userGuess
    function addPreviousGuesses(banana) {
      previouslyGuessedLetter.push(banana);
    }
    addPreviousGuesses(userGuess);
    console.log("Letters guessed: " + previouslyGuessedLetter);
    /* - At some point fix this ///////////////
    if (previouslyGuessedLetter.length === 0) {
      previouslyGuessedLetter.push(userGuess);
    }
    else {
      for (d = 0; d < previouslyGuessedLetter.length; d++) {
        if (previouslyGuessedLetter[d] !== "'" + userGuess + "'") {
          previouslyGuessedLetter.push(userGuess);
        }
    }}
    *///////////////////////////////////////////


    //Does the User's Guess match a letter in the randomCountry?
    //If the user is guessing correct, display the updated letters, if not then -1 remaining guesses
    for (c = 0; c < randomCountry.length; c++) {
        if (userGuess.toLocaleLowerCase() === randomCountry[c].toLocaleLowerCase()) {
          //dashesArray[c] = userGuess;
          dashesArray[c] = userGuess;
          document.getElementById('currentWord').innerHTML = dashesArray;
          // This works // document.getElementById('currentWord').innerHTML = dashesArray;
          console.log("Dynamic Array: " + dashesArray)
        }
        if (userGuess.toLocaleLowerCase() !== randomCountry[c].toLocaleLowerCase()){
          //Finish writing this - opposite from userGuess being correct
          //This subtraction will not work EVER - must fix
          remainingGuessesTotal = remainingGuessesTotal -1;
        }
        console.log("Remaining Guesses: " + remainingGuessesTotal);
    }

    //Determine if player has won
    //I'd rather do something like: dashesArray = randomCountry?
    for (e = 0; e < randomCountry.length; e++) {
      if (dashesArray[e] !== "_");{
        document.getElementById('currentWord').innerHTML += " " + dashesArray[b];
        alert("Winner");
      }
    }
      






    
/*
    for (i = 0; i < previouslyGuessedLetter.length; i++) {
      if (userGuess === previouslyGuessedLetter[i]) {
        
      }
      else {
        previouslyGuessedLetter.push(userGuess);
        
      }
    }
    remainingGuessesTotal = remainingGuessesTotal - 1;
    //console.log("Remaining Guesses: " + remainingGuessesTotal)
    */
    console.log("-----------------------")
}








/* BAD CODE



/* I am forsaken
     previouslyGuessedLetter.foreach(); {
      if (!userGuess){
        previouslyGuessedLetter.push(userGuess);
      }
    }
    */

    /* - Pretty much NO
    for (var d = 0; d < randomCountry.length; d++) {
      if (userGuess !== previouslyGuessedLetter) {
        previouslyGuessedLetter.push(userGuess);
      }
    }
    */

/* - ugh
console.log("Country Length Array " + countryLengthArray)


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



/* - Just so bad yo!
for (z = 0; z < randomCountry.length; z++) {
  foreach (randomCountry.charAt(z)); {
    lengthOfCountry = lengthOfCountry + 1;
  }
}
console.log("Length of Country " + lengthOfCountry)
*/


