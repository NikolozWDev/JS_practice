

const display = document.querySelector('#display');

document.querySelectorAll('.b-selector').forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    });
});

document.querySelector('#calculate').addEventListener('click', () => {
    try {
        display.value = new Function(`return ${display.value.replaceAll('x', '*')}`)();
    } catch {
        display.value = 'Error';
    }
});

document.querySelector('#clear').addEventListener('click', () => {
    display.value = '';
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        document.querySelector('#calculate').click();
    } else if (event.key === 'Control') {
        document.querySelector('#clear').click();
    } else {
        const button = document.querySelector(`[data-key="${event.key}"]`);
        if (button) {
            button.click();
        }
    }
});
