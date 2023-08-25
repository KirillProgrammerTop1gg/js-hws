// custom modal
function customModal(title, text) {
    const body = document.querySelector("body");
    const buttonCloseModal = document.querySelector(".modal__close");
    const titleModal = document.querySelector(".modal__title");
    const textModal = document.querySelector(".modal__text");

    titleModal.textContent = title;
    textModal.textContent = text;
    body.classList.add("show-modal");

    buttonCloseModal.addEventListener('click', () => {
        body.classList.remove("show-modal");
    });
}

// task 1
const input1 = document.querySelector("#input-text-1");
const input2 = document.querySelector("#input-text-2");
const buttonCheck = document.querySelector("#button-check-text-inputs");

buttonCheck.addEventListener('click', () => {
    if (input1.value === input2.value) {
        customModal("Task 1", "Both fields are filled");
    }
    else {
        customModal("Task 1", "Not all fields are filled");
    }
});

// task 2
const inputNumber1 = document.querySelector("#input-number-1");
const inputNumber2 = document.querySelector("#input-number-2");
const buttonCheckSums = document.querySelector("#button-check-number-inputs");

buttonCheckSums.addEventListener('click', () => {
    if ((Number(inputNumber1.value)+Number(inputNumber2.value))>10) {
        customModal("Task 2", "Amount greater than 10");
    }
    else {
        customModal("Task 2", "The amount is less than or equal to 10");
    }
});

// task 3
const inputText = document.querySelector("#input-text");
const buttonCheckText = document.querySelector("#button-check-text-input");

buttonCheckText.addEventListener('click', () => {
    if (inputText.value.includes("JavaScript")) {
        customModal("Task 3", "The text contains the word JavaScript");
    }
    else {
        customModal("Task 3", "The text does not contain the word JavaScript");
    }
});

// task 4
const formInput = document.querySelector(".form__input");
const formButton = document.querySelector(".form__button");

formButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (10<Number(formInput.value) && Number(formInput.value)<20) {
        customModal("Task 4", "The number is in the range from 10 to 20");
    }
    else {
        customModal("Task 4", "The number is not in the range from 10 to 20");
    }
});

// task 5
const inputName = document.querySelector(".contactForm__input[data-input-name]");
const inputEmail = document.querySelector(".contactForm__input[data-input-email]");
const inputPassword = document.querySelector(".contactForm__input[data-input-password]");
const buttonSend = document.querySelector(".contactForm__button[data-button-send]");

buttonSend.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputName.value.length >= 3) {
        if (inputEmail.value.includes('@') && inputEmail.value.includes('.')) {
            if (inputPassword.value.length >= 6) {
                location = "../";
            }
            else {
                customModal("Task 5", "Password isn't correct");
            }
        }
        else {
            customModal("Task 5", "Email isn't correct");
        }
    }
    else {
        customModal("Task 5", "Name isn't correct");
    }
});