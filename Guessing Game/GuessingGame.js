var secret = Math.floor(Math.random() * 10) + 1; 

var startBtn = document.getElementById("startButton"); 

startBtn.onclick = guessNumber;  
function guessNumber(){ 
    var guess = parseInt(prompt("Please guess a number between 1 and 10.")); 
    checkAnswer(guess); 
}  
function checkAnswer(guess){     
    if(guess != secret){         
        if(guess > secret){             
            alert("Incorrect! Your guess is too high.");             
            guessNumber();         
        }else if(guess < secret){             
            alert("Incorrect! Your guess is too low.");             
            guessNumber();         
        }else{             
            alert("Invalid input!");             
            guessNumber();         
        }     
    }else{         
        alert("Correct!");     
    } 
}