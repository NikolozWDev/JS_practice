// alert("amazon.com");

// for testing (add cart)
let variable1 = 0;
function addCart() {
    variable1 = variable1 + 1;
    console.log(`times: ${variable1}`);
};





// for project cartQuantity
let cartQuantity = JSON.parse(localStorage.getItem('quantity')) || 0;

function updateCart(amount) {

    if(cartQuantity + amount > 10) {
        console.log(`you can't order ${amount}, becouse maximum is 10`);
    } else if(cartQuantity + amount < 0) {
        console.log(`you can't decrease by ${Math.abs(amount)}, becouse minimum is 0`);
    } else if(cartQuantity += amount) {
        console.log(`order updated by ${cartQuantity}`);
    };
    localStorage.setItem('quantity', JSON.stringify(cartQuantity));
};

function resetCart () {
    cartQuantity = 0;
    console.log(`card reset. ${cartQuantity}`);
    localStorage.removeItem('quantity');
    if(cartQuantity === null) {
        cartQuantity = 0;
    };
};

function showCart() {
    console.log(`your cart quantity is: ${cartQuantity}`);
};










//for project rock, paper, scissors


// const score = {
//     wins: 0,
//     losses: 0,
//     ties: 0,
// };


let score = JSON.parse(localStorage.getItem('score'));



function resetScoreFunction() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
};
if(score === null) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0,
    };
};



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


    if(playerMove === computerMove) {
        result = 'Tie'
        score.ties = score.ties + 1;
    } else if(
        (playerMove === 'Rock' && computerMove === 'Scissors') ||
        (playerMove === 'Paper' && computerMove === 'Rock') ||
        (playerMove === 'Scissors' && computerMove === 'Paper')
    ) {
        result = 'You win';
        score.wins = score.wins + 1;
    } else {
        result = 'You lose';
        score.losses = score.losses + 1;
    };


    localStorage.setItem('score', JSON.stringify(score));

    alert(`${playerMove}. computer move: ${computerMove}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`);


};







// for randomisation amount project name park

let resultPark;
let parkOpen;

function randomisation() {

    let operationSo1 = Math.random() * 100;
let ageF1 = Math.round(operationSo1);


let operationSo2 = Math.random() * 10;
let ageF2 = Math.round(operationSo2);

if(ageF2 >= 0 && ageF2 < 5) {
    parkOpen = true;
} else if(ageF2 >= 5 && ageF2 < 10) {
    parkOpen = false;
};

let parkOpenWord;
let parkOpenWordHelper;
if(parkOpen === true) {
    parkOpenWord = 'park is open now.';
    parkOpenWordHelper = 'so you can enter.';
    if( (ageF1 < 21 || ageF1 > 65) && parkOpen ) {
        parkOpenWordHelper = 'but you can not enter';
    };
} else if(parkOpen === false) {
    parkOpenWord = 'park is closed now.';
    parkOpenWordHelper = 'so you can not enter';
};


if( (ageF1 >= 21 && ageF1 <= 65) && parkOpen ) {
    resultPark = `you are ${ageF1} years old. so you can join park. ${parkOpenWord} ${parkOpenWordHelper}`;
} else if( (ageF1 < 21 || ageF1 > 65) && parkOpen ) {
    resultPark = `you are ${ageF1} years old. so you can't join park. ${parkOpenWord} ${parkOpenWordHelper}`;
} else {
    resultPark = `You are ${ageF1} years old. so you can join park. ${parkOpenWord} ${parkOpenWordHelper}`;
};

alert(resultPark);

};





// Heads and Tails logic project


let scoreF1 = JSON.parse(localStorage.getItem('scoreF1'));


function scoreReset() {
    scoreF1.wins = 0;
    scoreF1.losses = 0;
    localStorage.removeItem('local');
};
if(scoreReset === null) {
    scoreF1.wins = 0;
    scoreF1.losses = 0;
}


function hTLogic(userMove) {

    let randomMath = Math.random();
    let pcMove;
    let resultPro;

    
    if(randomMath > 0 && randomMath <= 1 / 2) {
        pcMove = 'Heads';
    } else if(randomMath > 1 / 2 && randomMath <= 1) {
        pcMove = 'Tails';
    };


    if(pcMove === userMove) {
        resultPro = 'You win'
        scoreF1.wins = scoreF1.wins + 1;
    } else if(
        (userMove === 'Heads' && pcMove === 'Tails') ||
        (userMove === 'Tails' && pcMove === 'Heads')
    ) {
        resultPro = 'You lose';
        scoreF1.losses = scoreF1.losses + 1;
    };


    localStorage.setItem('scoreF1', JSON.stringify(scoreF1));


    alert(`You choose ${userMove}. computer choose ${pcMove}. ${resultPro}
Wins: ${scoreF1.wins}, Losses: ${scoreF1.losses}`);


};