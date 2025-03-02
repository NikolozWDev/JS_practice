// Todolist full project


let todoListArray = [];


function todoListpar() {

    let htmlShow = '';


    i30 = 0;
    while(i30 < todoListArray.length) {

        let todopro = todoListArray[i30];
        let htmlparagraph = `<div class="diviable">
        <div class="widthpro">${todopro.name}</div> 
        <div>${todopro.date}</div> 
        <button id="deletebuttonjs" class="deletebutton"
        >Delete</button>
        </div>`


        htmlShow = htmlShow + htmlparagraph;

        i30 = i30 + 1;
    };


    document.querySelector('#listparagraph').innerHTML = htmlShow;

    document.querySelectorAll('#deletebuttonjs').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoListArray.splice(index, 1);
            todoListpar();
        });
    });

};



document.querySelector('#addbuttonjs').addEventListener('click', () => {
    todoListF3();
});
document.querySelector('#todoid').addEventListener('keydown', (event) => {
    eventListener(event);
})

function todoListF3() {

    let todoArrayValuemini = document.querySelector('#todoid');
    let todoListValue = document.querySelector('#todoid').value;

    let dateValuemini = document.querySelector('#dateid');
    let dateValue = document.querySelector('#dateid').value;


    if(todoListValue === '' && dateValue === '') {
        document.querySelector("#hiddenwarn").innerHTML = `Please Submit TodoName`;
        document.querySelector("#hiddenwarn2").innerHTML = `Please Submit Date`;
    } else if(todoListValue === '') {
        document.querySelector("#hiddenwarn").innerHTML = `Please Submit TodoName`;
        document.querySelector("#hiddenwarn2").innerHTML = ``;
    } else if(dateValue === '') {
        document.querySelector("#hiddenwarn").innerHTML = ``;
        document.querySelector("#hiddenwarn2").innerHTML = `Please Submit Date`;
    }
     else {
        document.querySelector("#hiddenwarn").innerHTML = ``;
        document.querySelector("#hiddenwarn2").innerHTML = ``;
    todoListArray.push(
        {
            name: todoListValue,
            date: dateValue,
        },
    );
    setTimeout(function() {
        todoArrayValuemini.value = ''; dateValuemini.value = '';
    },
     500);
};


    setTimeout(todoListpar, 500);

};

function eventListener(event) {
    if(event.key === 'Enter') {
        todoListF3();
    };
};