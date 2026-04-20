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
        return console.log(`COMPUTER WON! ${getComputerChoice()} beats ${getHumanChoice()}`);
    } else {
        increment("human");
        return console.log(`YOU WON! ${getHumanChoice()} beats ${getComputerChoice()}`);
    }
}

playRound();
console.log(humanScore);
console.log(computerScore);