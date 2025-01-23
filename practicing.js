let name = "Nikoloz Gigiashvili";
console.log(`my name is ${name}`);

const coffee = 5;
const bagels = 3;
const soup = 9;
cost = coffee + (bagels * 2) + soup;
cost2 = cost * 0.1;                      // company's 10% free order
costResult = cost - cost2;       

console.log(`you have to pay ${costResult}$`);


let operationSo1 = Math.random() * 100;
let ageF1 = Math.round(operationSo1);
console.log(ageF1);



function practicingF1 (nameF = 'Hi there') {
    console.log(`Hello ${nameF}`);
};
practicingF1('Nikoloz');
practicingF1('Nikoloz');
practicingF1('Nikoloz');



function celiusBy(celsius) {
    return (celsius * 9 / 5) + 32;
};
console.log(celiusBy(25));



let Km;
let Ft;
function calculateLength(Ml, Ft) {
    Km = (16 * Ml) / 10;
    Ft = 5280 * Ml;
};
console.log(calculateLength(30, 20));