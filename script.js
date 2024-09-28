let humanScore = 0,
    computerScore = 0;

playGame(); 

function getComputerChoice() {
    let random = Math.random();

    if (random < (1/3)) {
        return "rock";
    }
    else if(random < (2/3)) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("rock paper or scissors?");
    
    if (choice === null) {
        console.log("Game canceled by user");
        return null;
    }

    choice = choice.toLowerCase();
    
    if(choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    }
    else {
        console.log("Invalid choice! Please choose rock, paper or scissors.");
    }
    
}
function playRound(humanChoice, computerChoice) {
        
    if(humanChoice === computerChoice) {
        console.log("It's a tie! Please try again.");
        return "tie";
    }
    else if(humanChoice === "rock") {
        if(computerChoice === "scissors") {
            console.log("You win! Rock beats scissors.");
            humanScore++;
        }
        else if(computerChoice === "paper") {
            console.log("You lose! Paper beats rock.");
            computerScore++;
        }    
    }
    else if(humanChoice === "paper") {
        if(computerChoice === "rock") {
            console.log("You win! Paper beats rock.")
            humanScore++;
        }
        else if(computerChoice === "scissors") {
            console.log("You lose! Scissors beats paper.");
            computerScore++;
        }
    }
    else if(humanChoice === "scissors") {
        if(computerChoice === "paper") {
            console.log("You win! Scissors beats paper.");
            humanScore++;
        }
        else if(computerChoice === "rock") {
            console.log("You lose! Rock beats scissors.");
            computerScore++;
        }
    }
}
function playGame() {
    
    while(true) {
        const humanSelection = getHumanChoice();
            
        if (humanSelection === null) {
            break;
        }
            
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
            
        if (result === "tie") {
            continue;
        }
        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
            
        if (humanScore == 5 || computerScore == 5) {
            if (humanScore > computerScore) {
                console.log("Congratulations, You won the game!");
            }
            else {
                console.log("Sorry, You lost the game.");
            }
                break;
        }
    }  
}
    
        