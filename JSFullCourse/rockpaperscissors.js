


document.querySelector('#rockbutton').addEventListener('click', () => {
    rpsGame('Rock');
});
document.querySelector('#paperbutton').addEventListener('click', () => {
    rpsGame('Paper');
});
document.querySelector('#scissorsbutton').addEventListener('click', () => {
    rpsGame('Scissors');
});
document.querySelector('#resetbutton').addEventListener('click', () => {
    rpsGameReset();
});
document.querySelector('#autoplayp').addEventListener('click', () => {
    autoPlay();
});

document.body.addEventListener('keydown', (event) => {
    if(event.key === '1') {
        rpsGame('Rock');
    } else if(event.key === '2') {
        rpsGame('Paper');
    } else if(event.key === '3') {
        rpsGame('Scissors');
    };
});






document.querySelector('#closebarx').addEventListener('click', () => {
    document.querySelector('#primarybar').classList.add('primarybarjs')
    document.querySelector('#openbarx').innerHTML = '>';
})
document.querySelector('#openbarx').addEventListener('click', () => {
    document.querySelector('#primarybar').classList.remove('primarybarjs')
    document.querySelector('#openbarx').innerHTML = '';
})

let rpsGameResults = JSON.parse(localStorage.getItem('rpsGame')) || {
    rpsGameWins: 0,
    rpsGameLosses: 0,
    rpsGameTies: 0,
};



function updateScore() {
    document.querySelector('#gameScore').innerHTML = `Wins: ${rpsGameResults.rpsGameWins}. Losses: ${rpsGameResults.rpsGameLosses}. Ties: ${rpsGameResults.rpsGameTies}.`;
};

updateScore();



function rpsGameReset() {
    rpsGameResults.rpsGameWins = 0;
    rpsGameResults.rpsGameLosses = 0;
    rpsGameResults.rpsGameTies = 0;
    localStorage.removeItem('rpsGame');
    updateScore();
    document.querySelector('#gameResult').innerHTML = 'Reseted';
    document.querySelector('')
};
if(rpsGameReset === null) {
    rpsGameResults.rpsGameWins = 0;
    rpsGameResults.rpsGameLosses = 0;
    rpsGameResults.rpsGameTies = 0;
}


let intervalId = null;

function autoPlay() {
 
    if(!intervalId) {
        intervalId = setInterval(function() {
        let randomrps = Math.random();
        let randomclientMove = Math.random();
        let robotMove;
        if(randomrps > 0 && randomrps <= 1 / 3) {
            robotMove = 'Rock';
        } else if(randomrps > 1 / 3 && randomrps <= 2 / 3) {
            robotMove = 'Paper';
        } else if(randomrps > 2 / 3 && randomrps <= 1) {
            robotMove = 'Scissors';
        };


        if(randomclientMove > 0 && randomclientMove <= 1 / 3) {
            clientMove = 'Rock';
        } else if(randomclientMove > 1 / 3 && randomclientMove <= 2 / 3) {
            clientMove = 'Paper';
        } else if(randomclientMove > 2 / 3 && randomclientMove <= 1) {
            clientMove = 'Scissors';
        };

        document.querySelector('#autoplayp').innerHTML = `Stop play`;

        rpsGame(clientMove);

    },
     500);

    } else {
        clearInterval(intervalId);
        intervalId = null;
        document.querySelector('#autoplayp').innerHTML = `Auto play`;
    };
    
};



function rpsGame(clientMove) {

    let randomrps = Math.random();
    let robotMove;
    let final;

    document.querySelector('#gameScore').classList.add('gamescoresjs');


    function rpsGameResult() {
        document.querySelector('#gameResult').innerHTML = final;
    };

    function rpsGameMoves() {
        document.querySelector('#moves').innerHTML = `You
                <img class="gametool1" src="../JSFullCourse/rockpaperscissors-assets/${clientMove}-emoji.png">
                <img class="gametool1" src="../JSFullCourse/rockpaperscissors-assets/${robotMove}-emoji.png">
                Computer`;
    };


    if(randomrps > 0 && randomrps <= 1 / 3) {
        robotMove = 'Rock';
    } else if(randomrps > 1 / 3 && randomrps <= 2 / 3) {
        robotMove = 'Paper';
    } else if(randomrps > 2 / 3 && randomrps <= 1) {
        robotMove = 'Scissors';
    };


    if(robotMove === clientMove) {
        final = 'Tie';
        rpsGameResults.rpsGameTies = rpsGameResults.rpsGameTies + 1;
    } else if(
        (clientMove === 'Rock' && robotMove === 'Scissors') ||
        (clientMove === 'Scissors' && robotMove === 'Paper') ||
        (clientMove === 'Paper' && robotMove === 'Rock')
    ) {
        final = 'You win'
        rpsGameResults.rpsGameWins = rpsGameResults.rpsGameWins + 1;
    } else {
        final = 'You lose'
        rpsGameResults.rpsGameLosses = rpsGameResults.rpsGameLosses + 1;
    };

    
    localStorage.setItem('rpsGame', JSON.stringify(rpsGameResults));

    rpsGameResult();

    rpsGameMoves();

    updateScore();

};