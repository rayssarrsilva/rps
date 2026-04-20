function getComputerChoice() {
    value = Math.floor(Math.random() * 3);
    
    if (value === 0) {
        value = "rock";
    } else if (value === 1) {
        value = "paper";
    } else {
        value = "scissors";
    }

    return value;
}

function getHumanChoice() {
    userChoice = prompt("Rock, Paper or Scissors? [type one]").toLowerCase();
    
    return userChoice;
}

let humanScore = 0;
let computerScore = 0;

function increment(humanComputer) {
    // expect the string human or computer
    if (humanComputer === "human") {
        return humanScore += 1;
    } else if (humanComputer === "computer"){
        return computerScore += 1;
    }
}

function playRound(computer, human) {
    if (computer === "rock" && human === "scissors" || computer === "paper" && human === "rock" || computer === "scissors" && human === "papel") {
        increment("computer");
        return console.log(`COMPUTER WON! ${computer} beats ${human}`);
    } else {
        increment("human");
        return console.log(`YOU WON! ${human} beats ${computer}`);
    }
}

function playGame(){
    for (let n = 1; n <= 5; n++) {
        playRound(getComputerChoice(), getHumanChoice());
    }

    if (humanScore > computerScore) {
        console.log(`you WON all the ${humanScore}`);
    } else {
        console.log(`you LOST all the ${computerScore}`);
    }
}

playGame();