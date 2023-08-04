// Завдання 1 (JS)
const input = document.querySelector(".form__input");
const but = document.querySelector(".form__but");

function writeBut (){
    but.innerHTML = input.value;
}

but.addEventListener('click', writeBut);

// Завдання 2 (JS)
const imgTask2 = document.querySelector(".img");
imgTask2.src = './img/cat2.jpg';

// Завдання 3 (JS)
const linkElement = document.querySelector(".link");
linkElement.href = 'https://www.youtube.com/';
linkElement.target = '_blank';

const imgTask3 = document.querySelector(".imgAlt");
imgTask3.alt = 'Doge';

// Завдання 4 (JS)
const firstItemElement = document.querySelector("list").firstElementChild;
firstItemElement.textContent = 'Not a text, AHHAHAHAHHAHAH';