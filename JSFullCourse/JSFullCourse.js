// alert("amazon.com");

// for testing (add cart)
let variable1 = 0;
function addCart() {
    variable1 = variable1 + 1;
    console.log(`times: ${variable1}`);
};





// for project cartQuantity
let cartQuantity = JSON.parse(localStorage.getItem('quantity')) || 0;

function domtext() {
    document.querySelector('#cartQuantity').innerHTML = `Your Order: ${cartQuantity}`;
};
domtext();

function updateCart(amount) {

    if(cartQuantity + amount > 10) {
        console.log(`you can't order ${amount}, becouse maximum is 10`);
    } else if(cartQuantity + amount < 0) {
        console.log(`you can't decrease by ${Math.abs(amount)}, becouse minimum is 0`);
    } else if(cartQuantity += amount) {
        console.log(`order updated by ${cartQuantity}`);
    };
    localStorage.setItem('quantity', JSON.stringify(cartQuantity));

    domtext();
};

function resetCart () {
    cartQuantity = 0;
    console.log(`card reset. ${cartQuantity}`);
    localStorage.removeItem('quantity');
    if(cartQuantity === null) {
        cartQuantity = 0;
    };
    domtext();
};

function showCart() {
    console.log(`your cart quantity is: ${cartQuantity}`);
    domtext();
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


let scoreF1 = JSON.parse(localStorage.getItem('scoreF1')) || {wins: 0, losses: 0};


function gameScores() {
    document.querySelector('#gameScores').innerHTML = `Wins: ${scoreF1.wins}, Losses: ${scoreF1.losses}`;
};

gameScores();


function scoreReset() {
    scoreF1.wins = 0;
    scoreF1.losses = 0;
    localStorage.removeItem('scoreF1');
    gameScores();
    document.querySelector('#gameMoves').innerHTML = `---`;
    document.querySelector('#resultOfGame').innerHTML = `---`;
};
if(scoreReset === null) {
    scoreF1.wins = 0;
    scoreF1.losses = 0;
}


function hTLogic(userMove) {

    let randomMath = Math.random();
    let pcMove;
    let resultPro;

    function gameMoves() {
        document.querySelector('#gameMoves').innerHTML = `You: ${userMove}. PC: ${pcMove}`;
    };

    function resultOfGame() {
        document.querySelector('#resultOfGame').innerHTML = resultPro;
    };

    
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

    gameScores();

    gameMoves();

    resultOfGame();


//     alert(`You choose ${userMove}. computer choose ${pcMove}. ${resultPro}
// Wins: ${scoreF1.wins}, Losses: ${scoreF1.losses}`);


};




// practicing DOM

function subscribeF1() {

const subscribeElement = document.querySelector('#subscribe1');
if(subscribeElement.innerHTML === 'Subscribe') {
    subscribeElement.innerHTML = 'Subscribed!';
    subscribeElement.classList.add('subscribe-button-js');
} else {
    subscribeElement.innerHTML = 'Subscribe';
    subscribeElement.classList.remove('subscribe-button-js');
};

};





// DOM rpcGame


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
    document.querySelector('#gameResult').innerHTML = '---';
    document.querySelector('#moves').innerHTML = '---';
};
if(rpsGameReset === null) {
    rpsGameResults.rpsGameWins = 0;
    rpsGameResults.rpsGameLosses = 0;
    rpsGameResults.rpsGameTies = 0;
}

function rpsGame(clientMove) {

    let randomrps = Math.random();
    let robotMove;
    let final;


    function rpsGameResult() {
        document.querySelector('#gameResult').innerHTML = final;
    };

    function rpsGameMoves() {
        document.querySelector('#moves').innerHTML = `You: (${clientMove}) | Robot: (${robotMove})`;
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


//     alert(`You: ${clientMove}. Robot: ${robotMove}. ${final}
// Wins: ${rpsGameResults.rpsGameWins}. Losses: ${rpsGameResults.rpsGameLosses}. Ties: ${rpsGameResults.rpsGameTies}.`);

};





// input and cost calculator project

function calculateCost() {
    const calculate1 = document.querySelector('#input');
    let costPro = Number(calculate1.value);

    if(costPro < 40) {
        costPro += 10;
    } else if(costPro === 10) {
        document.querySelector('#calculateDollar').innerHTML = `Plese read instructions`;
    };

    document.querySelector('#calculateDollar').innerHTML = `$${costPro}`;
};

function eventpro(event) {
    if(event.key === 'Enter') {
        calculateCost();
    };
};






// DOM excercies #1 (javascript button)

function jspro() {
    let buttonJsElement = document.querySelector('#javascriptpro');
    if(buttonJsElement.innerHTML === 'Javascript') {
        buttonJsElement.innerHTML = 'Is';
    } else if(buttonJsElement.innerHTML === 'Is') {
        buttonJsElement.innerHTML = 'Very';
    } else if(buttonJsElement.innerHTML === 'Very') {
        buttonJsElement.innerHTML = 'Hard!';
    } else {
        buttonJsElement.innerHTML = 'Javascript';
    };
};




// DOM excercies #2 (javascript button)

function jspro1() {
    document.querySelector('#showHiddenMessage1').innerHTML = `არასწორია. დააჭირეთ click here რომ ნახოთ სწორი პასუხი.`;
    const buttonAbout = document.querySelector('#showHiddenMessage2');
    buttonAbout.innerHTML = 'Click Here';
};
function jspro2() {
    document.querySelector('#showHiddenMessage3').innerHTML = `სწორი პასუხია: ძალიან რთულია`;
};



// DOM excercies #3 (javascript button)

function hiddenName() {
    const inputpro = document.querySelector('#input2');
    let inputpromax = String(inputpro.value);
    document.querySelector('#input2').value = inputpromax;
    document.querySelector('#hiddenName').innerHTML = `You are ${inputpromax}`;

    if(inputpromax === ``) {
        document.querySelector('#hiddenName').innerHTML = `plese submit your name`;
    };
};
function events(event) {
    if(event.key === 'Enter') {
        hiddenName();
    };
};





// DOM excercies #4 (javascript button)

function eventMaster() {
    const input3 = document.querySelector('#input3');
    document.querySelector('#input3Text').innerHTML = input3.value;
};






// Numbers + and - (logic)

numberMinus = 0;

function minus() {
    numberMinus -= 1;
    document.querySelector('#number').innerHTML = `${numberMinus}`;
    if(numberMinus < 0) {
        document.querySelector('#number').classList.add('numberminusstyle');
    } else {
        document.querySelector('#number').classList.remove('numberminusstyle');
    };
    
    if(numberMinus > 0) {
        document.querySelector('#number').classList.add('numberplusstyle');
    } else {
        document.querySelector('#number').classList.remove('numberplusstyle');
    };
};
function plus() {
    numberMinus += 1;
    document.querySelector('#number').innerHTML = `${numberMinus}`;
    if(numberMinus > 0) {
        document.querySelector('#number').classList.add('numberplusstyle');
    } else {
        document.querySelector('#number').classList.remove('numberplusstyle');
    };

    if(numberMinus < 0) {
        document.querySelector('#number').classList.add('numberminusstyle');
    } else {
        document.querySelector('#number').classList.remove('numberminusstyle');
    };
};





// buttons selector logic

function gammingbutton() {
    resetButton();
    document.querySelector('#buttonpapa1').classList.toggle('buttonprojs');
};
function musicbutton() {
    resetButton();
    document.querySelector('#buttonpapa2').classList.toggle('buttonprojs');
};
function techbutton() {
    resetButton();
    document.querySelector('#buttonpapa3').classList.toggle('buttonprojs');
};

function resetButton() {
    document.querySelector('#buttonpapa1').classList.remove('buttonprojs');
    document.querySelector('#buttonpapa2').classList.remove('buttonprojs');
    document.querySelector('#buttonpapa3').classList.remove('buttonprojs');
};







// calculate cost

let totalAmount = localStorage.getItem('totalAmount') ? Number(localStorage.getItem('totalAmount')) : 0;


let intervalIdpro = null;

function autoMoney() {
    if(!intervalIdpro) {
        intervalIdpro = setInterval(function() {

            
                let mathRandom = Math.random();

                const inputCostVariable = document.querySelector('#inputcost');
                inputCostVariable.value = Math.round(Math.random() * 100)

                if(mathRandom >= 0 && mathRandom < 1 / 2) {


                if(Number(inputCostVariable.value) >= 1 && Number(inputCostVariable.value) <= 100) {
                document.querySelector('#costjs').innerHTML = `<span class="green">+ ${inputCostVariable.value}</span><span class="dollar">$</span>`;
                totalAmount += Number(inputCostVariable.value);
            } else if(Number(inputCostVariable.value) > 100) {
                document.querySelector('#costjs').innerHTML = `<span class="costred">Limit is 100$</span>`;
            }
            else if(Number(inputCostVariable.value) === 0) {
                document.querySelector('#costjs').innerHTML = `<span class="costred">You can't choose 0</span>`;
            } else {
                document.querySelector('#costjs').innerHTML = `<span class="costred">You can write only numbers!</span>`
            };


            } else if (mathRandom >= 1 / 2 && mathRandom < 1) {


                if(Number(inputCostVariable.value) >= 1 && Number(inputCostVariable.value) <= 100) {
                    document.querySelector('#costjs').innerHTML = `<span class="nonumber">-</span> <span class="nonumber">${inputCostVariable.value}</span><span class="dollar-">$</span>`;
                    totalAmount -= Number(inputCostVariable.value);
                } else if(Number(inputCostVariable.value) > 100) {
                    document.querySelector('#costjs').innerHTML = `<span class="costred">Limit is 100$</span>`;
                }
                else if(Number(inputCostVariable.value) === 0) {
                    document.querySelector('#costjs').innerHTML = `<span class="costred">You can't choose 0</span>`;
                } else {
                    document.querySelector('#costjs').innerHTML = `<span class="costred">You can write only numbers!</span>`
                };


            };


            localStorage.setItem('totalAmount', totalAmount);


            document.querySelector('#total').innerHTML = `total: ${totalAmount}$`;
            if(totalAmount < 0) {
                document.querySelector('#total').innerHTML = `total: <span class="totalred">${totalAmount}$</span>`;
            } else if(totalAmount > 0) {
                document.querySelector('#total').innerHTML = `total: <span class="totalgreen">${totalAmount}$</span>`;
};


document.querySelector('#automoneybutton').innerHTML = 'Stop Auto';


        }, 500);
    } else {
        clearInterval(intervalIdpro)
        intervalIdpro = null;
        document.querySelector('#automoneybutton').innerHTML = 'Auto Play';
    }
};


function calculateMoney() {

    let mathRandom = Math.random();

    const inputCostVariable = document.querySelector('#inputcost');

    if(mathRandom >= 0 && mathRandom < 1 / 2) {


    if(Number(inputCostVariable.value) >= 1 && Number(inputCostVariable.value) <= 100) {
    document.querySelector('#costjs').innerHTML = `<span class="green">+ ${inputCostVariable.value}</span><span class="dollar">$</span>`;
    totalAmount += Number(inputCostVariable.value);
} else if(Number(inputCostVariable.value) > 100) {
    document.querySelector('#costjs').innerHTML = `<span class="costred">Limit is 100$</span>`;
}
 else if(Number(inputCostVariable.value) === 0) {
    document.querySelector('#costjs').innerHTML = `<span class="costred">You can't choose 0</span>`;
} else {
    document.querySelector('#costjs').innerHTML = `<span class="costred">You can write only numbers!</span>`
};


} else if (mathRandom >= 1 / 2 && mathRandom < 1) {


    if(Number(inputCostVariable.value) >= 1 && Number(inputCostVariable.value) <= 100) {
        document.querySelector('#costjs').innerHTML = `<span class="nonumber">-</span> <span class="nonumber">${inputCostVariable.value}</span><span class="dollar-">$</span>`;
        totalAmount -= Number(inputCostVariable.value);
    } else if(Number(inputCostVariable.value) > 100) {
        document.querySelector('#costjs').innerHTML = `<span class="costred">Limit is 100$</span>`;
    }
     else if(Number(inputCostVariable.value) === 0) {
        document.querySelector('#costjs').innerHTML = `<span class="costred">You can't choose 0</span>`;
    } else {
        document.querySelector('#costjs').innerHTML = `<span class="costred">You can write only numbers!</span>`
    };


};


localStorage.setItem('totalAmount', totalAmount);


document.querySelector('#total').innerHTML = `total: ${totalAmount}$`;
if(totalAmount < 0) {
    document.querySelector('#total').innerHTML = `total: <span class="totalred">${totalAmount}$</span>`;
} else if(totalAmount > 0) {
    document.querySelector('#total').innerHTML = `total: <span class="totalgreen">${totalAmount}$</span>`;
};


};
function keyboard(event) {
    if(event.key === 'Enter') {
        calculateMoney();
    };
};

function closebar() {
    document.querySelector('#casino').classList.add('casinojs');
    document.querySelector('#openbar').innerHTML = `O`;
}
function openprobar() {
    document.querySelector('#casino').classList.remove('casinojs');
    document.querySelector('#openbar').innerHTML = ` `;
};

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#total').innerHTML = `total: ${totalAmount}$`;
    if(totalAmount < 0) {
        document.querySelector('#total').innerHTML = `total: <span class="totalred">${totalAmount}$</span>`;
    } else if(totalAmount > 0) {
        document.querySelector('#total').innerHTML = `total: <span class="totalgreen">${totalAmount}$</span>`;
    };
});










// Todolist practice #1

const todoList1 = [];

function todoListF() {
    const todoListvar = document.querySelector('#inputTodo');
    const productName = todoListvar.value;

    todoList1.push(productName);
    console.log(todoList1);

    todoListvar.value = '';
};




// practicing loops

const arraynum = [3, 13, 14];

let i20 = 0;
while(i20 < arraynum.length) {
    console.log(arraynum[i20]);
    i20 = i20 + 1;
};



// Todolist practice #2

let todoArray = [];


settingslogic();

function settingslogic() {

let todoListHTML = '';

let i21 = 0;
while(i21 < todoArray.length) {

    let todo = todoArray[i21];


    let htmlp = `<p>
    ${todo.namepro} ${todo.datepro} 
    <button onclick="
    todoArray.splice(${i21}, 1);
    settingslogic();
    ">Delete</button>
    </p>`

    todoListHTML += htmlp

    i21 = i21 + 1;
};

document.querySelector('#todolistcontainer').innerHTML = todoListHTML;

}

function todolistF2() {

    let todoArrayvalue = document.querySelector('#inputTodolist');
    let userTodo = todoArrayvalue.value;
    let datepro = document.querySelector('#inputdate');
    let dateValue = datepro.value;
    todoArray.push(
        {
            namepro: userTodo,
            datepro: dateValue,
        },
    );

    todoArrayvalue.value = '';

    settingslogic();

};
function addEvent(event) {
    if(event.key === 'Enter') {
        todolistF2();
    };
};










// add button exercices #1

const addbuttonexer = () => {
    document.querySelector('#addbuttonpro').innerHTML = 'finished';
}

const addButton = () => {

    setTimeout(addbuttonexer, 1000);

};





// add button exercices #2 

const resultAdd = () => {


    if(document.querySelector('#addbuttonpro2').innerHTML === 'Finished') {
        document.querySelector('#pro123').innerHTML = '<span style="color: red;">You must added!</span>';
    } else {
        document.querySelector('#addbuttonpro2').innerHTML = 'Loading...'

        setTimeout(function() {
            document.querySelector('#addbuttonpro2').innerHTML = 'Finished'
        }, 2000)
    };

};






// add button exercices #3

let timeoutId;

function displayMessage() {
  const messageElement = document.querySelector('#pro1234');
  messageElement.innerHTML = 'Added';

  clearTimeout(timeoutId);

  timeoutId = setTimeout(function() {
    messageElement.innerHTML = '';
  }, 1000);
};








// triangle logic

const mainFun = (param) => {

    let resultsad = '';

    for(i40 = 0; i40 < param / 2; i40++) {
        resultsad += '|' + ' '.repeat(i40) + '\\' + '<br>';
    };
    for(i40 = param / 2 - 1; i40 >= 0; i40--) {
        resultsad += '|' + ' '.repeat(i40) + '/' + '<br>';
    };


    document.querySelector('#texthere').innerHTML = resultsad;


};



const eventproxar = (event) => {
    if(event.key === 'Enter') {
        let param = Number(document.querySelector('#triangle').value);
        mainFun(param);
    };
};





// burger menu

let openpro = document.querySelector('#burgerpro')
openpro.addEventListener('click', () => {
    document.querySelector('.main-container-open').classList.toggle('active');
});