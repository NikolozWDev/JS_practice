console.log('Hello World');

console.log(5 + 5);

let MathOperation = 25 - 10 + 35;

console.log(MathOperation);
MathOperation = 20 - 10 + 10;

console.log(MathOperation);


let operation1 = 10 / 5 * 5 - 10 + 30;
let operation2 = 10 * 2;
let valueOperation = operation1 - operation2;

console.log(valueOperation);

const pi = 3.14;
// pi = 3.2;

console.log(pi);

let x = 1;
let y = 2;
x = x + y;
y += 1;

console.log(x);
console.log(y);


const barrier = 100;

let mathTest = 40;
let engTest = 45;
let geoTest = 35;

const result = mathTest + engTest + geoTest >= barrier;

console.log(result);




let president = true;
let premierMinister = true;
let generalOfArmy = false;

const bombResult = president && premierMinister && generalOfArmy;

console.log(bombResult);


let userLoggedIn = true;
let userPaid = true;

const showProducts = userLoggedIn && userPaid;

console.log(showProducts);



let userPaidIn = false;
let userIsAdmin = true;

const showProduct = userPaidIn || userIsAdmin;

console.log(showProduct);



let clientLoggedIn = true;
let clientPaid = false;
let clientIsAdmin = true;

const clientShowProducts = clientLoggedIn && (clientPaid || clientIsAdmin);
const showBuyButton = !(clientPaid || clientIsAdmin);


console.log(showBuyButton);

console.log(clientShowProducts);


console.log(10 && 0);
console.log(true || 20);



let userDistance = 80;
const viewProduct = userDistance <=100 ? 20 : 30;

console.log(viewProduct);

// es igivea rac     if  else

const userIsSupport = true;
let discount;

if(userIsSupport) {
    console.log("You are support!");
    discount = 5;
} else {
    console.log("You are user!");
    discount = 20;
};

console.log(discount);

let something;
console.log(typeof something);



let base = null;
console.log(base);

let array = [20, 19, 40, 39, 10];
console.log(array[array.length - 1]);

let array2 = [
    'Javascript',
    'Git / Github',
    'Tailwind',
    'CSS',
    'HTML',
];
console.log(array2);
console.log(array2[2]);
console.log(array2.length);

let primary = MathOperation + operation1 + operation2 + valueOperation
+ result + clientShowProducts + userIsSupport;

console.log(primary);
if(primary) {
    console.log('primary is true');
} else {
    console.log('primary is false');
};


primary = primary + x - y + x;
console.log(primary);



const jstext = 'Javascript is professional Programming language';
let variablepro = 0;
while(variablepro <= 6) {
    if (variablepro == 3) {
        console.log(`${variablepro} ----- ${jstext} -----`);
    } else {
        console.log(`${variablepro} ${jstext} +`);
    }
    variablepro = variablepro + 1;
};




const mentor = {
    firstName : 'Nikoloz',
    lastName : 'Gigiashvili',
    age : 15,
    who : 'Full Stack Web Developer',
};

console.log(mentor.lastName);

mentor['age'] = 16;
mentor['car'] = 'Ferrari';

console.log(mentor);



let array4 = ['saba', 'levani', 'gio', 'zuka', ['aleqsandre', 'zura', 'mate', 'nika'], 'sandro'];

console.log(array4[4][array4[4].length - 1]);





const mentor2 = {
    Name : 'Gio',
    lName : 'Gagadze',
    students : ['Zuka', 'Saba', 'Nika', 'Levani',],
};

console.log(mentor2.students[mentor2.students.length - 1]);




const array5 = [

    {
        firstName : 'Nikoloz',
        lastName : 'Gigiashvili',
        age : 15,
        who : 'Full Stack Web Developer',
    },


    {
        firstName : 'Gio',
        lastName : 'Matiashvili',
        age : 16,
        who : 'Back-end Web Developer',
    },

];

console.log(`${array5[0].firstName} ${array5[0].lastName}`);







const array6 = {
    firstName : 'Nikoloz',
    lastName : 'Gigiashvili',
    age : 15,
    who : 'Full Stack Web Developer',
    contacts : {
        phone : '577546007',
        email : 'gigiashvilinikoloz@gmail.com',
    },
};

console.log(array6.contacts.email);





function welcome() {
    console.log('Hello This Is Welcome String');
};

welcome();




function userWelcome(userFirstName,) {
    console.log(`Hello ${userFirstName}, how are you ?`);
};

userWelcome('Nikoloz');




function userSettings(userName, messages) {
    console.log(`Hello ${userName}, you have ${messages} messages !`);
};
userSettings('Gio', 8);
userSettings('kako', 3);




function userPro1(namePro1, messages1 = 0) {
    console.log(`Hello ${namePro1}, you have ammm... ${messages1} messages#PRO !`);
};
userPro1('Sandro');
userPro1('Giorgi', 24);




function userPro2(age,) {
    return `you are ${age} years old !`;
};
// userPro2(20);
console.log(userPro2(15));

let variable3 = userPro2(20);
if(variable3 >= 18) {
    console.log(`Congrulation you are man !`);
} else {
    console.log(`oh, you are kid !`);
};









function userCalculateAge(userAgeBirth) {
    return 2025 - userAgeBirth;
};
function averageUserAge(personUser1, personUser2, personUser3, personUser4, personUser5) {
    const avgUserAge = ( userCalculateAge(personUser1) + userCalculateAge(personUser2) + userCalculateAge(personUser3) +
     userCalculateAge(personUser4) + userCalculateAge(personUser5) ) / 5;
     console.log(avgUserAge);
};
averageUserAge(2009, 1970, 2005, 1965, 2019);








function calculateFutureAge(userBIrthNumber, futureBirthNumber) {
    return futureBirthNumber - userBIrthNumber;
};
const calculateUserAge = `your age will be ${calculateFutureAge(2009, 2099)}`;  // Here you can control User ages
console.log(calculateUserAge);




// let i11 = 0;
// while (i11 <= 100000) {
//     if (i11 % 2 === 0) {
//         console.log(`This number: ${i11} is even`);
//     } else {
//         console.log(`This number: ${i11} is odd`);
//     }
//     i11 += 2;  // Increment by 2
// }




function sakg(x = `undefind, plese submit your coordinates`, y = `undefind, plese submit your coordinates`) {
    return `Vertical Coordinate: ${x} Horizon Coordinate: ${y}`;
};
console.log(sakg(10, 25)); // here you can change coordinates



let k = Number('1525')
console.log(typeof k);
let z = 2.2435643;
console.log(z.toFixed(6));
console.log(z.toPrecision(3));
console.log(typeof z.toString());



let k1 = Math.abs(-32);
console.log(k1);
let k2 = Math.round(5.341);
console.log(k2);
let k3 = Math.floor(9.71);
console.log(k3);
let k4 = Math.ceil(5.25);
console.log(k4);
let k5 = Math.pow(10, 5);
console.log(k5);
let k6 = Math.sqrt(25);
console.log(k6);

let k7 = Math.random();
let k7Operation = k7 * 100
const k7Result = Math.round(k7Operation);
console.log(k7Result);

let k8 = Math.max(10, 20, 32, 51, 61, 71, 73, 20);
let k9 = Math.min(10, 20, 32, 51, 61, 71, 73, 20);
console.log(k8, k9);



let message1 = 'Hello This Is Javascript Obiects';
let search1 = 'Javascript';
let found1 = message1.includes(search1);
console.log(found1);
console.log(message1.includes('TailwindCSS'));

let block1 = '!';
let blockResult = block1.repeat(10);
let message2 = `Hello This Is Javascript Obiects ${blockResult}`;
console.log(message2);


let message3 = 'This is practicing test string';
let message3Operation1 = message3.replace('test', 'operationCompleted____!');
console.log(message3Operation1);


let message4 = "Hello how are you guys?";
const message4Final = message4.split(' ');
console.log(message4Final);


let message5 = "oh, listen don't understand?";
let message5Result = message5.startsWith('oh');
console.log(message5Result);

let message6 = 'do you understand?!';
let message6Result = message6.endsWith('?!');
console.log(message6Result);


let message7 = 'Hello bro is this is ?';
console.log(message7.toUpperCase());
console.log(message7.toLowerCase());



let array7 = [51, 16, 73, 25, 72, 83];
array7.push(10, 15);
console.log(array7);

const array7Pop1 = array7.pop();
const array7Pop2 = array7.pop();
const array7Pop3 = array7.pop();
const array7Pop4 = array7.pop();
console.log(array7);

array7.shift();
console.log(array7);

array7.unshift(40);
console.log(array7);


let array8 = [20, 31, 61, 76, 41];
let array8Reverse = array8.reverse();
console.log(array8);

let array8Join = array8.join(' ');
console.log(array8Join);

let array9 = ['Hello', 'This', 'Is', 'Pro',];
let array9Join = array9.join(` `);
console.log(array9Join);