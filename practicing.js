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




let objectPractice1 = {
    basketball: 2095,
};
objectPractice1.basketball = 2095 + 500;
objectPractice1['delivery-time'] = '3 days';

console.log(objectPractice1.basketball);
console.log(objectPractice1);


function functionObjectPractice2() {
    const objectPractice3 = {
        name: 'product1',
        price: '300$',
    };
    console.log(objectPractice3);
};



function functionObjectPractice4() {
    const objectPractice5 = {
        name: 'sameProduct',
        value: '30$',
    };
    const objectPractice6 = {
        name: 'sameProduct',
        value: '40$'
    };
    if(objectPractice5.name === objectPractice6.name) {
        console.log(true);
    } else {
        console.log(false);
    };
    let practiceL1 = 'Hello This Is Morning';
    console.log(practiceL1.toLowerCase());

    let practiceL2 = 'Test1';
    console.log(practiceL2.repeat(5));
};
functionObjectPractice4();





function makeUpperCase(str) {
    return str.toUpperCase();
  };

  console.log(makeUpperCase('something'));











  function timeset1() {
    console.log('time out');
  };
  timeset1();
  
  setTimeout(timeset1, 2000);
//   setInterval(timeset1, 2000);