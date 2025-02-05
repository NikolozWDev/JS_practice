// Todolist full project


let todoListArray = [];

let htmlShow = '';


function todoListpar() {

    i30 = 0;
    while(i30 < todoListArray.length) {

        let todopro = todoListArray[i30];

        let htmlparagraph = `<p>${todopro}</p>`


        htmlShow = htmlShow + htmlparagraph;

        i30 = i30 + 1;
    };

};

document.querySelector('#listparagraph').innerHTML = htmlShow;


function todoListF3() {

    let todoListValue = document.querySelector('#todoid').value;

    todoListArray.push(todoListValue);

    todoListValue = '';

    console.log(todoListArray);


    todoListpar();

};

function eventListener(event) {
    if(event.key === 'Enter') {
        todoListF3();
    };
};