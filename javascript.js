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

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const output = document.querySelector('.output');
const container = document.querySelector('.container');
const outcome = document.createElement('div');
output.append(outcome);
const playerScor = document.querySelector('.player-score');
const computerscor = document.querySelector('.computer-score');




let computerScore = 0;
let playerScore = 0;


function playRound(playerSelection, computerSelection) {
    
    
    if(playerSelection === "ROCK" && computerSelection === "SCISSORS"){
       const p = document.createElement('p');
       p.innerText =  ` You wins, Rock is stronger than Scissors. Score: ${playerScore} to ${computerScore} `;
       output.appendChild(p);
        playerScore++;
        
        
    }
    else if(playerSelection === "PAPER" && computerSelection === "ROCK"){
        playerScore++;
        const p = document.createElement('p');
        p.innerText =  `YOU win !!, Paper is stronger than Rock..Score: ${playerScore} to ${computerScore}`;
        output.appendChild(p);
        
    }
    else if(playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        const p = document.createElement('p');
        p.innerText = `YOU Win !!, SCISSORS is Stronger than PAPER .Score: ${playerScore} to ${computerScore}`;
        output.appendChild(p);
        playerScore++;
    }
   //computer check

   else if(computerSelection === "ROCK" && playerSelection === "SCISSORS"){
    computerScore++;
    const p = document.createElement('p');
    p.innerText = `Computer wins, Rock is stronger than Scissors.Score: ${playerScore} to ${computerScore}`;
    output.appendChild(p);
    
}
else if(computerSelection === "PAPER" && playerSelection === "ROCK"){
    computerScore++;
    const p = document.createElement('p');
    p.innerText = `computer wins, Paper is stronger than Rock..Score: ${playerScore} to ${computerScore}`;
    output.appendChild(p);
    
}
else if(computerSelection === "SCISSORS" && playerSelection === "PAPER"){
    computerScore++;
    const p = document.createElement('p');
    p.innerText = `computer wins, SCISSORS is Stronger than PAPER..Score: ${playerScore} to ${computerScore}`;
    output.appendChild(p);
    
}
else { 
    const p = document.createElement('p');
    p.innerText = `That was a draw. Score: ${playerScore} to ${computerScore}`;
    output.append(p);

}

    }

function displayScore(playerScore,computerScore){
    playerScor.innerText = `Player Score: ${playerScore}`;
    computerscor.innerText = `Computer Score: ${computerScore}`;
}

function checkWinner(playerScore,computerScore){
    if(playerScore === 5){
        const h3 = document.createElement('h3')
        h3.classList.add('player-win');
        h3.innerText = `You win, ${playerScore} to ${computerScore}`;
        outcome.appendChild(h3);

    }
    else if(computerScore === 5){
        const h3 = document.createElement('h3')
        h3.classList.add('computer-win');
        h3.innerText = `computer win,try again, ${playerScore} to ${computerScore}`;
        outcome.appendChild(h3);
    }
}






    rockButton.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = 'ROCK';
        playRound(playerSelection, computerSelection);
        displayScore(playerScore,computerScore)
        checkWinner(playerScore,computerScore)
    })

    paperButton.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = 'PAPER';
        playRound(playerSelection, computerSelection);
        displayScore(playerScore,computerScore)
        checkWinner(playerScore,computerScore)
    })

    scissorsButton.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = 'SCISSORS';
        playRound(playerSelection, computerSelection);
        displayScore(playerScore,computerScore)
        checkWinner(playerScore,computerScore)
    })

    /*function game(){
        for(let i = 0; i < 5; i++){
            playerSelection = document.querySelector(`button[${class}]`) //prompt("Make a choice: Scissors, Paper, Rock");
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

    game();*/

 