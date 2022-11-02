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

/*const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');*/
const buttons = document.querySelectorAll('button');
const output = document.querySelector('.output');
const container = document.querySelector('.container');
const outcome = document.createElement('div');
outcome.classList.add('outcome')
output.append(outcome);
const playerScor = document.querySelector('.player-score');
const computerscor = document.querySelector('.computer-score');




let computerScore = 0;
let playerScore = 0;
let result = "";


function playRound(playerSelection, computerSelection) {
    
    
    if(playerSelection === "ROCK" && computerSelection === "SCISSORS"){
       result =  ` You wins, Rock is stronger than Scissors. Score: ${playerScore} to ${computerScore} `;
       playerScore++;
       
        
        
    }
    else if(playerSelection === "PAPER" && computerSelection === "ROCK"){
        playerScore++;
        result =  `YOU win !!, Paper is stronger than Rock..Score: ${playerScore} to ${computerScore}`;
        
        
    }
    else if(playerSelection === "SCISSORS" && computerSelection === "PAPER"){
       
       result = `YOU Win !!, SCISSORS is Stronger than PAPER .Score: ${playerScore} to ${computerScore}`;
        playerScore++;
    }
   //computer check

   else if(computerSelection === "ROCK" && playerSelection === "SCISSORS"){
    computerScore++;
    result = `Computer wins, Rock is stronger than Scissors.Score: ${playerScore} to ${computerScore}`;
    
    
}
else if(computerSelection === "PAPER" && playerSelection === "ROCK"){
    computerScore++;
   result = `computer wins, Paper is stronger than Rock..Score: ${playerScore} to ${computerScore}`;
    
    
}
else if(computerSelection === "SCISSORS" && playerSelection === "PAPER"){
    computerScore++;
    result = `computer wins, SCISSORS is Stronger than PAPER..Score: ${playerScore} to ${computerScore}`;
    
    
}
else { 
    const p = document.createElement('p');
    result = `That was a draw. Score: ${playerScore} to ${computerScore}`;
    

}


   const p = document.createElement('p');
   p.innerText = result;
   output.append(p);
    }

   


function displayScore(playerScore,computerScore){
    playerScor.innerText = `${playerScore}`;
    computerscor.innerText = `${computerScore}`;
}

function checkWinner(playerScore,computerScore){
    if(playerScore === 5){
        const h3 = document.createElement('h3')
        h3.classList.add('player-win');
        h3.innerText = `You win, ${playerScore} to ${computerScore} (Refresh page to play again)`;
        outcome.appendChild(h3);

    }
    else if(computerScore === 5){
        const h3 = document.createElement('h3')
        h3.classList.add('computer-win');
        h3.innerText = `computer win,try again, ${playerScore} to ${computerScore}(Refresh page to play again)`;
        outcome.appendChild(h3);
    }
}

    function stopPlay(playerScore,computerScore){
        if(playerScore === 5 || computerScore === 5){
        buttons.forEach(button => {
            button.disabled = true;
        })
        }
    }
    


    buttons.forEach(button =>{
        button.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = `${button.className.toUpperCase()}`;
        playRound(playerSelection, computerSelection);
        displayScore(playerScore,computerScore);
        checkWinner(playerScore,computerScore);
        stopPlay(playerScore,computerScore)
        })
    })

    

 