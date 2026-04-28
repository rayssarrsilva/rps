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
let tie = 0;

function playRound(computer, human) {
    if (computerScore === 5){
        ganhador.textContent = "You LOST";
    } else if (humanScore === 5) {
        ganhador.textContent = "You WON";
    } else {
        if (computer === "rock" && human === "scissors" || computer === "paper" && human === "rock" || computer === "scissors" && human === "papel") {
            console.log(`Lost this round [${computer} beats ${human}]`);
            computerScore += 1;

            return "computer"
        } else if (human === "rock" && computer === "scissors" || human === "paper" && computer === "rock" || human === "scissors" && computer === "papel") {
            console.log(`Won this round [${human} beats ${computer}]`);
            humanScore += 1;

            return "human";
        } else {
            if (computerScore !== 5 || humanScore != 5) { // Stop couting if some of the players in the score reach 5 points
                console.log(`Tie between You and Computer [${human} = ${computer}]`);
                tie += 1;
                return "tie";
            }
        }
    }

}


// Score + buttons
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const score = document.querySelector(".score");
const empate = document.querySelector(".empate")
const ganhador = document.querySelector(".ganhador");

rock.addEventListener("click", () => {
    let resultRock = playRound(getComputerChoice(), "rock");
    score.textContent =`Score: ${humanScore} x ${computerScore} | Empates: ${tie}`;
    
    if (computerScore === 5){
    ganhador.textContent = "You LOST";
    } else if (humanScore === 5) {
    ganhador.textContent = "You WON";}

});

paper.addEventListener("click", () => {
    let resultPaper = playRound(getComputerChoice(), "paper");
    score.textContent =`Score: ${humanScore} x ${computerScore} | Empates: ${tie}`;
    
    if (computerScore === 5){
    ganhador.textContent = "You LOST";
    } else if (humanScore === 5) {
    ganhador.textContent = "You WON";}

});

scissors.addEventListener("click", () => {
    let resultScissors = playRound(getComputerChoice(), "scissors");
    score.textContent =`Score: ${humanScore} x ${computerScore} | Empates: ${tie}`;

    if (computerScore === 5){
    ganhador.textContent = "You LOST";
    } else if (humanScore === 5) {
    ganhador.textContent = "You WON";}

});


score.textContent =`Score: ${humanScore} x ${computerScore} | Empates: ${tie}`;

// Score design
score.setAttribute("style", "font-size: 35px; text-align: center; padding-top: 70px;")