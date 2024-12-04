let humanScore = 0,
    computerScore = 0;
const WINNING_SCORE = 5;

initializeGame(); 

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

function initializeGame() {
    const container = document.createElement("div");
    document.body.appendChild(container);
       
    const rock = createButton("Rock", "rock");
    const paper = createButton("Paper", "paper");
    const scissors = createButton("Scissors", "scissors");

    container.appendChild(rock);
    container.appendChild(paper);
    container.appendChild(scissors);

    const resultsDiv = document.createElement("div");
    resultsDiv.id = "results";
    resultsDiv.style.marginTop = "20px";
    container.appendChild(resultsDiv);

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const computerChoice = getComputerChoice();
            playRound(button.id, computerChoice);
        })
    });

                      
}

function createButton(text, id) {
    const button = document.createElement("button");
    button.textContent = text;
    button.id = id;
    return button;
}

function checkWinner() {
    const resultsDiv = document.getElementById("results");
    
    if (humanScore === WINNING_SCORE || computerScore === WINNING_SCORE) {
        const winnerText = document.createElement("p");
        winnerText.style.fontWeight = "bold";

        if (humanScore === WINNING_SCORE) {
            winnerText.textContent = "Congratulations! You reached 5 points and won the game.";
            winnerText.style.color = "green";
        } else {
            winnerText.textContent = "Game over! The computer reached 5 points and won the game.";
            winnerText.style.color = "red";
        }
    resultsDiv.appendChild(winnerText); 

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => (button.disabled = true));
    }   

    

    

}


function playRound(humanChoice, computerChoice) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.textContent = '';

    const choicesContainer = document.createElement("p");

    const humanChoiceText = document.createElement("span");
    humanChoiceText.textContent = `You chose: ${humanChoice}`;
    humanChoiceText.style.marginRight = "20px"; 
    choicesContainer.appendChild(humanChoiceText);

    const computerChoiceText = document.createElement("span");
    computerChoiceText.textContent = `Computer chose: ${computerChoice}`;
    choicesContainer.appendChild(computerChoiceText);

    resultsDiv.appendChild(choicesContainer);

    const resultText = document.createElement("p");

    if (humanChoice === computerChoice) {
        resultText.textContent = "It's a tie! Try again.";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
         resultText.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
         resultText.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

    resultsDiv.appendChild(resultText);

    const scoreText = document.createElement("p");
    scoreText.textContent = `You: ${humanScore}, computer: ${computerScore}`;
    resultsDiv.appendChild(scoreText);

    checkWinner();

    
}



    
    

            
    
            

      

    
        