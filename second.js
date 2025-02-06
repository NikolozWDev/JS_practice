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



function numbers(a, b) {
    return (a + b) / 2;
};
const numbersResult = numbers(10, 16);
console.log(numbersResult);




function operationF1(n) {
    let i11 = 0;
    while (i11 <= 50) {
        console.log(i11);
        i11 = i11 + 1;
        if (n == i11) {
            return 1;
        }
    }
    return n * (n - 1);
}

console.log(operationF1(5));





// function userCalculateAge(userAgeBirth) {
//     return 2025 - userAgeBirth;
// };
// function averageUserAge(personUser1, personUser2, personUser3, personUser4, personUser5) {
//     const avgUserAge = ( userCalculateAge(personUser1) + userCalculateAge(personUser2) + userCalculateAge(personUser3) +
//      userCalculateAge(personUser4) + userCalculateAge(personUser5) ) / 5;
//      console.log(avgUserAge);
// };
// averageUserAge(2015, 2010, 2000, 2009, 2011);





function calculateN(n) {
    return Math.floor(n / 2);
};
console.log(calculateN(7));
console.log(calculateN(15));




function nameShuffler(str){
    return str.split(' ').reverse().join(' ');
};
console.log(nameShuffler('john McClane'));





function centuryYear(year) {
    return Math.ceil(year / 100);
};
console.log(centuryYear(2025));




function shortDateTime(dateTime) {
    return dateTime.split(', ')[0];
};
let origin = "Friday May 2, 7pm";
const shortOrigin = shortDateTime(origin);
console.log(shortOrigin);



function calculate(number1, number2) {
    return number1 + number2;
  };

//   console.log(calculate(1)(1));




  function spEng(sentence){
    return sentence.toLowerCase().includes('english');
  };
  console.log(spEng('adawdsawsdEnagLishwdasd'));




  const arraynum = [3, 13, 14];

let i20 = 0;

while(i20 < arraynum.length) {
    console.log(arraynum[i20]);
    i20 = i20 + 1;
};




const arrayp1 = [1, 52, 72, 723, 5324, 53423, 43563,];

let i22 = 0;
while(i22 < arrayp1.length) {

    arrayp1[arrayp1.length - 1] = 99;
    console.log(arrayp1[i22]);

    i22 = i22 + 1;
};




const arrayp2 = ['Hello', 'whats up', 'good morning', 'you?'];
arrayp2.reverse();
console.log(arrayp2);



const arrayp3 = [];

i24 = 0;
while(i24 <= 10) {
    arrayp3.push(i24);
    i24 = i24 + 2;
};
console.log(arrayp3);



const arrayp4 = [];

i25 = 5;
while(i25 > 0) {
    arrayp4.push(i25);
    i25 = i25 - 1;
};
console.log(arrayp4);



let arrayp5 = [2, 4, 6];
let arrayp52 = [];

let i26 = 0;
while(i26 < arrayp5.length) {
    arrayp52.push(arrayp5[i26] * 2);
    i26 = i26 + 1;
};
console.log(arrayp52);



// function typeOfSum(a, b) {
//     return `Hello this is ${a} and good ${b}`;
//   };
//   if(Number(a) >= Number(b) || Number(a) <= Number(b)) {
//   console.log(typeOfSum(3, 8));
// } else {
//     console.log(typeOfSum('sum', 'luck'));
// };





function eventNumber() {

    i31 = 0;
    while(i31 < 100) {
        if(i31 % 2 === 0) {
        i31++;
        if(i31 > 50 && i31 < 70) {
            i31++;
            continue;
        };
        console.log(i31);
    }
    i31++;
    if(i31 === 80) {
        break;
    };
    };

};

eventNumber();








function arraypro() {

    let arrayStrings = 'Hello, Please Search Here To Answer The Question Search';

    if(arrayStrings.split(' ').includes('Search')) {
        console.log(true);
    } else {
        console.log(false);
    };



    let arrayVar = arrayStrings.split(' ');

    let i33 = 0;
    while (i33 < arrayVar.length) {
        let j33 = i33 + 1;
        while (j33 < arrayVar.length) {
            if (arrayVar[i33] == arrayVar[j33]) {
                console.log('REPEATED !');
            }
            j33++;
        }
        i33++;
    }

};

arraypro();





function findIndex(array, word) {

    i35 = 0;
    while(i35 < array.length) {
        if(array[i35] === word) {
            return true
        } else {
            return false;
        };
    };

};





      function removeEgg(foods) {
        const result = [];

        let eggcalculate = 0;

        for (let i = 0; i < foods.length; i++) {
          // If the string is 'egg', use continue to skip it.
          if (foods.reverse()[i] === 'egg' && eggcalculate < 2) {
            eggcalculate++;
            continue;
          }

          // We don't need to have an else here because
          // the only way to reach this code is if the 
          // if-statement above is false.
          result.push(foods[i]);
        }

        return result.reverse();
      }

      console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));






    let i40 = 1
    while(i40 <= 20) {
        if(i40 % 3 === 0) {
            console.log('Fizz')
        } else if(i40 % 5 === 0) {
            console.log('Buzz');
        } else if(i40 % 3 === 0 && i40 % 5 === 0) {
            console.log('FizzBuzz');
        } else {
            console.log(i40);
        };
        i40++;
    };