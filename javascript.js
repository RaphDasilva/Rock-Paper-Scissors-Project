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

let computerScore = 0;
let playerScore = 0;


function playRound(playerSelection, computerSelection) {
    
    
    if(playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        playerScore++;
        return ` You wins, Rock is stronger than Scissors. Score: ${playerScore} to ${computerScore} `;
        
    }
    else if(playerSelection === "PAPER" && computerSelection === "ROCK"){
        playerScore++;
        return `YOU win !!, Paper is stronger than Rock..Score: ${playerScore} to ${computerScore}`;
        
    }
    else if(playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        playerScore++;
        return `YOU Win !!, SCISSORS is Stronger than PAPER .Score: ${playerScore} to ${computerScore}`;
        
    }
   //computer check

   else if(computerSelection === "ROCK" && playerSelection === "SCISSORS"){
    computerScore++;
    return Computer `wins, Rock is stronger than Scissors.Score: ${playerScore} to ${computerScore}`;
    
}
else if(computerSelection === "PAPER" && playerSelection === "ROCK"){
    computerScore++;
    return `computer wins, Paper is stronger than Rock..Score: ${playerScore} to ${computerScore}`;
    
}
else if(computerSelection === "SCISSORS" && playerSelection === "PAPER"){
    computerScore++;
    return computer `wins, SCISSORS is Stronger than PAPER..Score: ${playerScore} to ${computerScore}`;
    
}
else { 
    return `That was a draw. Score: ${playerScore} to ${computerScore}`
}

    }

    function game(){
        for(let i = 0; i < 5; i++){
            playerSelection = prompt("Make a choice: Scissors, Paper, Rock");
            playerSelection = playerSelection.toUpperCase();
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
        }
     if(playerScore > computerScore){
        console.log("You win");
       }
       else if(computerScore > playerScore){
        console.log("Computer win");
       }   else console.log("You tied");
    }

    game();

 