// Завдання 1
const openForm = document.querySelector('.button[data-action=open-modal]');
const closeForm = document.querySelector('.button[data-action=close-modal]');
const body = document.querySelector('body');

openForm.addEventListener('click', () => {
    body.classList.add("show-modal");
});

closeForm.addEventListener('click', () => {
    body.classList.remove("show-modal");
});

// Завдання 2
const changeColorForm = document.querySelector('form');
body.style.backgroundColor = 'red';

document.querySelector('form').addEventListener('click', (event) => {
    body.style.backgroundColor = event.target.value;
});

//Завдання 4
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    nameOutput.textContent = nameInput.value;
});

const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', () => {
    console.log(validationInput.value.length);
    if(validationInput.value.length == validationInput.getAttribute("data-length")){
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    }
    else{
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
});

// Завдання 5
const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
const fontSizeCounter = document.querySelector('#font-size-counter');
text.style.fontSize = fontSizeControl.value+'px';
fontSizeCounter.textContent = 'Font size: '+fontSizeControl.value+'px';

fontSizeControl.addEventListener('input', () => {
    text.style.fontSize = fontSizeControl.value+'px';
    fontSizeCounter.textContent = 'Font size: '+fontSizeControl.value+'px';
});