console.log('Hello This Is Second JS');

let text1 = 'This is text1';
let text2 = 'This is text2 and text2';
text2 = 'This is text2 but modified';
const textValue = text1 + text2;

console.log(textValue);


const barrier = 'This is barier';
let engTest = 'english test';
let mathTest = 'math test';
let geoTest = 'georgia test';

console.log(engTest - mathTest - geoTest >= barrier);



const diff = 100;
let exam1 = 10;
let exam2 = 30 + 10 - 20 / 5;
let exam3 = 50 - 100;
let exam4 = 100 - 20;

const examValue = exam1 + exam2 + exam3 + exam4;
const result = examValue >= diff;

console.log(result);



let login = true;
let admin = false;
let paid = true;

const showProductCase = login && (admin || paid);
const showButtonBuy = !(paid || admin);

console.log(showProductCase);
console.log(showButtonBuy);


let listnumbers = [10, 30, 40, 19, 43, 12];

console.log(listnumbers[listnumbers.length - 1]);


const jstext = 'Javascript is professional Programming language';
let variablepro = 0;





let practicingArray = ['HTML', 'Git', 'Javascript', 'CSS', 'TailwindCSS', 'Github'];
let emptyArray = [];

let searchT = 'TailwindCSS';
let i8 = 0;
while(i8 < practicingArray.length) {
    console.log(`Looking for ${practicingArray[i8]}`);
    if(searchT == practicingArray[i8]) {
        console.log(`${practicingArray[i8]} found!`);
        emptyArray = practicingArray[i8];
        console.log(emptyArray);
    break; };
    i8 = i8 + 1;
};




const project = {
    firstName : 'Nikoloz',
    lastName : 'Gigiashvili',
    age : 15,
    who : 'Full Stack Web Developer',
    students: [
        {
            firstName : 'Gio',
            lastName : 'Matiashvili',
        },
        {
            firstName : 'Saba',
            lastName : 'Lobjanidze',
        },
        {
            firstName : 'Saba',
            lastName : 'Lobjanidze',
        },
        {
            firstName : 'Saba',
            lastName : 'Lobjanidze',
        },
    ],
};


let i10 = 1;
while(i10 < project.students.length) {
    console.log(`${project.students[i10].firstName} ${project.students[i10].lastName}`);
    i10 = i10 + 2;
};


// let i10 = 0;
// while(i10 < project.students.length) {
//     console.log(project.students[i10].firstName);
//     i10 = i10 + 1;
// };




function calculateAge(birthAge) {
    console.log('calculating to who are you!');
    return 2025 - birthAge;
};
const age = calculateAge(2003);
if(age > 21) {
    console.log('Congrats, you are a man');
} else {
    console.log('oh, you are a kid');
};