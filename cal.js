

const display = document.querySelector('#display');

document.querySelector('#calculate').addEventListener('click', () => {
    try {
        let expression = display.value.split('\n').join('+');
        display.value = eval(expression.replace('x', '*'));
    } catch (error) {
        display.value = 'Error';
    }
});

document.querySelector('#clear').addEventListener('click', () => {
    display.value = '';
});

document.querySelector('#calculate').addEventListener('click', () => {
    display.value = eval(display.value.replace('x', '*'));
});

document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        document.querySelector('#calculate').click();
    };
    if(event.key === 'Control') {
        document.querySelector('#clear').click();
    };
    const button = document.querySelector(`[data-key="${event.key}"]`);
    if (button) {
        button.click();
    }
});