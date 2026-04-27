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
    } else if (human === "rock" && computer === "scissors" || human === "paper" && computer === "rock" || human === "scissors" && computer === "papel") {
        increment("human");
        return console.log(`YOU WON! ${human} beats ${computer}`);
    } else {
        increment("human");
        increment("computer");
        return console.log(`TIE between YOU and COMPUTER | ${human} = ${computer}`)
    }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const score = document.querySelector(".score");

rock.addEventListener("click", () => {
    playRound(getComputerChoice(), "rock");
});
paper.addEventListener("click", () => {
    playRound(getComputerChoice(), "paper");
});

scissors.addEventListener("click", () => {
    playRound(getComputerChoice(), "scissors");
});

function outputWinner(){
    if (humanScore === 5){
        return true;
    } else if (computerScore === 5) {
        return false;
    }
}

