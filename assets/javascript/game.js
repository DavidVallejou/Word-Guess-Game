//Create an array and the score
var wordPlace = ["daytona", "miami", "keywest", "tampa"];
var wins = 0;
var loss = 0;
var tied = 0;
var wrongLetter = [];
var guessesLeft = 12;
var underScores = [];
var userGuesses = [];
var currentWord;
var currentLetterIndex = 0;

//Key test
document.onkeyup = function(e) {
    var userguess = String.fromCharCode(e.keyCode).toLowerCase();
    
    console.log("user guessed: " + userguess);

    // var test = getIndices("hello", "o");
    //"miami".includes("a") -> true
    //"miami".includes("f") -> false

    if (currentWord.includes(userguess)) {
        // example: if currentWord is "miami", and user guessed "i"
        // getIndices("miami", "i") -> [1, 4]
        // indices = [1, 4]
        var indices = getIndices(currentWord, userguess);

        // example: arr = ["a", "b"]
        // arr[1] = "d" -> ["a", "d"]
        // arr[0] = 1 -> [1, "d"]
        // arr[0] -> 1
        // arr[1] -> "d"

        // loop through indices
        // example: indices = [1, 4]
        // userguess = "i"
        // underScores = [ "_", "_", "_", "_", "_" ]
        // indices[0] -> 1
        // indices[1] -> 4
        // indices[2] -> error
        // indices length = 2
        // start at i = 0
        // i < 2 -> true
        // index = indices[i] -> index = 1
        // underScores[index] = userguess -> [ "_", "i", "_", "_", "_" ]
        // set i = 1
        // i < 2 -> true
        // index = indices[i] -> index = 4
        // underScores[index] = userguess -> [ "_", "i", "_", "_", "i" ]
        // set i = 2
        // i < 2 -> false
        // exit loop

        for (var i = 0; i < indices.length; i++) {
            var index = indices[i];
            underScores[index] = userguess;
        }

        console.log("user guessed correctly");
        console.log("indices are: " + indices);
        console.log("underscores: " + underScores);
        
        // update underscores array to include correct letter
    } else {
        guessesLeft--;
        console.log("user guessed incorrectly");
    }

    userGuesses.push(userguess);
}

//Create randomization 

currentWord = wordPlace[Math.floor(Math.random()*wordPlace.length)];
console.log(currentWord);

for(var i = 0; i < currentWord.length; i++)
{
    underScores.push('_');
}

function getIndices(word, letter) {
    var result = [];

    for (var i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            result.push(i);
        }
    }
    
    return result;
}
