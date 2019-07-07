//Create an array and the score
var wordPlace = ["daytona", "miami", "keywest", "tampa"];
var wins = 0;
var loss = 0;
var tied = 0;
var wrongLetter = [];
var guessesLeft = 12;
var underScores = [];
var userGuesses = [];
var randWord;

//Key test
document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).toLowerCase();
}

//Create randomization 

randWord = wordPlace[Math.floor(Math.random()*wordPlace.length)];

for(var i = 0; i <wordPlace.length; i++)
{
    underScores.push('_');
}
