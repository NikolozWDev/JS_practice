console.log('This is while JS file');

let javascript = 0;
while(javascript <= 100) {
    console.log(`${javascript}. ეს არის Javascript`);
    javascript = javascript + 1;
};


let work1 = 1;
while(work1 < 60000) {
    console.log(work1);
    work1 = work1 * 11 * work1;
};


let variable1 = 10
while(variable1 > 0) {
    if(variable1 > 5) {
        console.log(`5 < ${variable1}`);
    } else if (variable1 == 5) {
        console.log(`5 = ${variable1}`);
    } else {
        console.log(`5 > ${variable1}`);
    };
    variable1 = variable1 - 1;
};


const jstext = 'Javascript is professional Programming language';
let variablepro = 0;
while(variablepro <= 10) {
    if (variablepro == 5) {
        console.log(`----- ${jstext} -----`);
    } else {
        console.log(`${jstext} + pro`);
    }
    variablepro = variablepro + 1;
};



let variable2 = 60;
while(variable2 > 0) {
    if(variable2 > 30) {
        console.log(`${variable2} This is > than 30`);
    } else if (variable2 == 30) {
        console.log(`${variable2} This is == 30`);
    } else {
        console.log(`${variable2} This is < than 30`);
    };
    variable2 = variable2 - 2;
};



let testResults = ['BMW', 'Mersedes', 'Toyota', 'Mars', 'Apo', 'Jodo'];

let i = 0;
while(i < testResults.length) {
    console.log(testResults[i]);
    i = i + 1;
};

i = testResults.length - 1; 
while (i >= 0) {               
    console.log(testResults[i]); 
    i = i - 1;                
};





let string1 = 'Hello';

let i2 = 0;
while(i2 < string1.length) {
    console.log(string1[i2]);
    i2 = i2 + 1;
};


i2 = string1.length - 1;
while (i2 >= 0) {            
    console.log(string1[i2]); 
    i2 = i2 - 1;             
}





let message = 'Goodbye bro';

let angerLevel = 10;
let i3 = 0;
while(i3 <= angerLevel) {
    message = message + 'bro2';
    i3 = i3 + 1;
};
console.log(message);





let technologies = ['HTMl', 'CSS', 'TailwindCSS', 'Git', 'Github', 'Javascript'];

let i4 = 0;
let search = 'TailwindCSS';

while(i4 < technologies.length) {
    console.log(`Looking for ${technologies[i4]}`);
    if(search == technologies[i4]) {
        console.log(`${technologies[i4]} found !`);
     break; };
     i4 = i4 + 1;
};



let resultsTest = [10, 30, 23, 62, 25, 72, 21, 43, 95];

let goodResults = [];

let i5 = 0;
while(i5 < resultsTest.length) {
    if(resultsTest[i5] >= 30) {
        goodResults[goodResults.length] = resultsTest[i5];
    }
    i5 = i5 + 1;
}
console.log(goodResults);




let array3 = [10, 32, 62, 26, 54, 26, 28, 47, 62, 53];

let i6 = 0;
while(i6 < array3.length) {
    let j6 = i6 + 1;
    while(j6 < array3.length) {
        if(array3[i6] == array3[j6]) {
            console.log(`${array3[i6]} დუბლირებულია!`);
        };
        j6++;
    };
    i6 = i6 + 1;
};