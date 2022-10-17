function getComputerChoice(arr){
    const randomChoice = Math.floor(Math.random() * arr.length);
    const computerChoice = arr[randomChoice];
    return computerChoice;
}

