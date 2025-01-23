// alert("amazon.com");

// for testing (add cart)
let variable1 = 0;


// for project cartQuantity
let cartQuantity = 0;


//for project rock, paper, scissors
function finalGame(playerMove) {

    const randomNumber = Math.random();
    let computerMove = '';
    let result = '';


    if(randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else if(randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
    };

    rockArgue = 'Rock';
    paperArgue = 'Paper';
    scissorsArgue = 'Scissors';


    if(playerMove === computerMove) {
        result = 'Tie'
    } else if(
        (playerMove === 'Rock' && computerMove === 'Scissors') ||
        (playerMove === 'Paper' && computerMove === 'Rock') ||
        (playerMove === 'Scissors' && computerMove === 'Paper')
    ) {
        result = 'You win';
    } else {
        result = 'You lose';
    };


    alert(`${playerMove}. computer move: ${computerMove}. ${result}`);


}