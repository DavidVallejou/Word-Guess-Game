//Create an array and the score
var wordPlace = ["daytona", "miami", "keywest", "tampa"];
var hangWin = 0;
var hangLoss = 0;
var wrongLetter = [];
var guessesLeft = 10;
var underScores = [];
var userGuesses = [];
var currentWord;
var currentLetterIndex = 0;

//function 
function startGame(){
}
//Key test
document.onkeyup = function(e) {
    var userguess = String.fromCharCode(e.keyCode).toLowerCase();
    
    console.log("user guessed: " + userguess);

   
    //"miami".includes("a") -> true
    //"miami".includes("f") -> false

    if (currentWord.includes(userguess)) {
        // example: if currentWord is "miami", and user guessed "i"
        // getIndices("miami", "i") -> [1, 4]
        
        var indices = getIndices(currentWord, userguess);

      
     //loop
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

//Update Browser 
function updateScreen() {
   underScores[currentWord.indices(keyword)] = keyword;
   document.getElementById("hangUnd").innerHTML = underScores.join('');
   document.getElementById("hangWord").innerHTML = userGuesses;
   
   var underScores = document.getElementById("hangUnd")

            if (word[i] < -1)

                guessesLeft.innerHTML = "loses point";

            }

            document.getElementById("getUnd").innerHTML = "underScores";

            for (var i = 0; i <guessesLeft.length;) {

                currentWord.innerHTML - "The answer!";

    updateScreen();
  


}


startGame();