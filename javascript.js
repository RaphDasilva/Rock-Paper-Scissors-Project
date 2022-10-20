function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() * 3);
    switch(randomChoice){
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'        
    }
}
let playerSelection = "";
let computerSelection = getComputerChoice();
let computerRound = 0;
let playerRound = 0;
let outPutMessage = "";

function playRound(playerSelection, computerSelection) {
    
    
    if(playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        playerRound++;
        return "Player wins, Rock is stronger than Scissors";
        
    }
    else if(playerSelection === "PAPER" && computerSelection === "ROCK"){
        playerRound++;
        return "YOU win !!, Paper is stronger than Rock";
        
    }
    else if(playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        playerRound++;
        return "YOU Win !!, SCISSORS is Stronger than PAPER";
        
    }
   //computer check

   else if(computerSelection === "ROCK" && playerSelection === "SCISSORS"){
    computerRound++;
    return "Computer wins, Rock is stronger than Scissors";
    
}
else if(computerSelection === "PAPER" && playerSelection === "ROCK"){
    computerRound++;
    return "computer wins, Paper is stronger than Rock";
    
}
else if(computerSelection === "SCISSORS" && playerSelection === "PAPER"){
    computerRound++;
    return "computer wins, SCISSORS is Stronger than PAPER";
    
}
else{
    return "That was a draw."
}

    }

    

 