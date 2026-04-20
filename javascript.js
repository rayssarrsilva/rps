function getComputerChoice() {
    value = Math.floor(Math.random() * 3);
    
    if (value === 0) {
        value = "Rock";
    } else if (value === 1) {
        value = "Paper";
    } else {
        value = "Scissors";
    }
    
    return value;
}

console.log(getComputerChoice());