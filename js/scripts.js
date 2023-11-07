const form = document.querySelector("form")
let finalAnswer = document.getElementById("final-result");

form.onsubmit = function(e){
    e.preventDefault();

    const userInputValue = document.getElementById("userInput").value;
    
    let userOutput = " ";

if (userInputValue === "Rock" || userInputValue === "Paper"){
    userOutput = "you won!!! The Computer picked Scissors"
} else if (userInputValue === "Paper" || userInputValue === "Scissors"){
    userOutput = "you won!!! The Computer picked Rock"
} else if (userInputValue === "Rock" || userInputValue === "Scissors"){
    userOutput = "you won!!! The Computer picked Paper"
} else{
    userOutput = "Maybe in the next round"
}

const userInputValueResult = document.getElementById("userInput").value = null;
console.log(userOutput);
finalAnswer.innerText = userInputValueResult;
}

