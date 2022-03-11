function computerPlay() {
    // gets computer's selection
    let min = Math.ceil(1);
    let max = Math.floor(3);
    let randPlay = Math.floor(Math.random() * (max - min + 1) + min);

    switch(randPlay) {
        case 1 :
            return "rock";
            break;
        case 2 :
            return "paper";
            break;
        case 3 :
            return "scissors";
            break;
        default :
            return "something went wrong";
    }
}

function playRound (playerSelection, computerSelection) {
    //determines who wins match (not entire game)
    let player = playerSelection;
    let computer = computerSelection;

    //1 = win, 0 = tie, -1 = lose, 3 = you did something wrong
    if (player === "rock" && computer === "paper") {
        return -1;
    } else if (player === "rock" && computer === "scissors") {
        return 1;
    } else if (player === "rock" && computer === "rock") {
        return 0;
    } else if (player === "paper" && computer === "paper") {
        return 0;
    } else if (player === "paper" && computer === "scissors") {
        return -1;
    } else if (player === "paper" && computer === "rock") {
        return 1;
    } else if (player === "scissors" && computer === "paper") {
        return 1;
    } else if (player === "scissors" && computer === "scissors") {
        return 0;
    } else if (player === "scissors" && computer === "rock") {
        return -1;
    } else {
        return 3;
    }
}

function game() {
    //plays full, 5 round game
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = "";
    let computerSelection = "";
    let resultOfGame = 0;
    let point = 1;

    for (let i = 0; i < 5; i++) {
        playerSelection = window.prompt("Rock, Paper, or Scissors? (enter one): ");
        playerSelection.toLowerCase();
        computerSelection = computerPlay();

        resultOfGame = playRound(playerSelection, computerSelection);

        if (resultOfGame === -1) {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
            computerScore += point;
        } else if (resultOfGame === 0) {
            console.log("It's a tie!")
        } else if (resultOfGame === 1) {
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
            playerScore += point;
        } else {
            console.log("Something went wrong");
            i--;
        }

        console.log(`Current Score: Player ${playerScore}, Computer ${computerScore}`);
    }
    
    console.log(`Final Score: Player: ${playerScore}, Computer: ${computerScore}`);
    
    if (playerScore > computerScore) {
        console.log("Player Wins! Congrats!");
    } else if (playerScore < computerScore) {
        console.log("Computer Wins! Better luck next time.");
    } else {
        console.log("It's a tie!");
    }

    
}
