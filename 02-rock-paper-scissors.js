//user choice
function getUserChoice(){
    const userChoice = prompt("Do you choose rock, paper or scissors?");
    //validating user input 
    if (userChoice && (userChoice.toLowerCase() === "rock" || userChoice.toLowerCase() === "paper" || userChoice.toLowerCase() === "scissors")) {
        return userChoice.toLowerCase();
    } else {
        alert("Invalid choice! Please choose rock, paper, or scissors.");
        return getUserChoice(); // loop if input if invalid
    }
}

//generate computer choice 
function getComputerChoice(){
    //get the 3 random choices between 0,1 and 2.
    const computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

//compare choices
function compareChoices(userChoice, computerChoice){
    if(userChoice === computerChoice){
        return "The result is a tie!";
    }else if(computerChoice === "rock" && userChoice === "scissors"){
        return "Computer wins!";
    }else if(computerChoice === "paper" && userChoice === "rock"){
        return "Computer wins!";
    }else if(computerChoice === "scissors" && userChoice === "paper"){
        return "Computer wins!";
    }else{
        return "You win!";
    }
}

//main game function
function playGame(){
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    const result = compareChoices(userChoice, computerChoice);
    
    //display result in alert box
    alert("You chose: " + userChoice + "\nComputer chose: " + computerChoice + "\n" + result);
}

//function start the game
playGame();