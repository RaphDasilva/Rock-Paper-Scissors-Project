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
let playerSelection = prompt("please Select your Choice", "ROCK");
let computerSelection = getComputerChoice();
let computerRound = 0;
let playerRound = 0;
let outPutMessage = "";

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        //outPutMessage = "tie";
    }
    else if(playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        playerRound++;
        //outPutMessage = "Player wins, Rock is stronger than Scissors";
    }
    else if(playerSelection === "PAPER" && computerSelection === "ROCK"){
        playerRound++;
        //outPutMessage = "YOU win !!, Paper is stronger than Rock";
    }
    else if(playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        playerRound++;
        //outPutMessage = "YOU Win !!, SCISSORS is Stronger than PAPER";
    }
   //computer check

   else if(computerSelection === "ROCK" && playerSelection === "SCISSORS"){
    computerRound++;
    //outPutMessage = "Computer wins, Rock is stronger than Scissors";
}
else if(computerSelection === "PAPER" && playerSelection === "ROCK"){
    computerRound++;
    //outPutMessage = "computer wins, Paper is stronger than Rock";
}
else if(computerSelection === "SCISSORS" && playerSelection === "PAPER"){
    computerRound++;
    outPutMessage = "computer wins, SCISSORS is Stronger than PAPER";
}

    
   // return outPutMessage;
  }

  
 