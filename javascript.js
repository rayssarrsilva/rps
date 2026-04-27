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
let tie = 1;

function increment(humanComputer) {
    // expect the string human or computer
    if (humanComputer === "human") {
        return humanScore += 1;
    } else if (humanComputer === "computer"){
        return computerScore += 1;
    } else if (humanComputer === "tie") {
        return tie += 1;
    }
}

const empate = document.querySelector(".empate");

function playRound(computer, human) {
    if (computer === "rock" && human === "scissors" || computer === "paper" && human === "rock" || computer === "scissors" && human === "papel") {
        increment("computer");
        console.log(`COMPUTER WON! ${computer} beats ${human}`);
        return "computer"
    } else if (human === "rock" && computer === "scissors" || human === "paper" && computer === "rock" || human === "scissors" && computer === "papel") {
        increment("human");
        console.log(`YOU WON! ${human} beats ${computer}`);
        return "human";
    } else {
        increment("tie");

        empate.textContent = "Empate";
        setTimeout ( () => {
            empate.textContent = "";
        }, 1000);
        
        console.log(`TIE between YOU and COMPUTER | ${human} = ${computer}`);
        return "tie";
    }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const score = document.querySelector(".score");

rock.addEventListener("click", () => {
    let resultRock = playRound(getComputerChoice(), "rock");
    score.textContent =`Score: ${humanScore} x ${computerScore}`;
});

paper.addEventListener("click", () => {
    let resultPaper = playRound(getComputerChoice(), "paper");
    score.textContent =`Score: ${humanScore} x ${computerScore}`;
});

scissors.addEventListener("click", () => {
    let resultScissors = playRound(getComputerChoice(), "scissors");
    score.textContent =`Score: ${humanScore} x ${computerScore}`;
});


score.textContent =`Score: ${humanScore} x ${computerScore}`;
