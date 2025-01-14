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









function calculateUserAge(userBirthAge,) {
    return 2025 - userBirthAge;
};

function averageAge(person1, person2, person3,) {
    function avgAge() {
        const calculateResult = (calculateUserAge(person1) + calculateUserAge(person2) + calculateUserAge(person3)) / 3;
        console.log(`3 persons average age is ${calculateResult}`);
    };
    avgAge();
};
averageAge(2009, 1990, 2015,);