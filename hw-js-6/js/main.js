const input = document.querySelector(".form__input");
const but = document.querySelector(".form__but");

but.addEventListener('click', () => { but.innerHTML = input.value; });

document.querySelector(".img").src = './img/cat2.jpg';

document.querySelector(".link").href = 'https://www.youtube.com/';
document.querySelector(".link").target = '_blank';
document.querySelector(".imgAlt").alt = 'Doge';

document.querySelectorAll(".item")[0].innerHTML = 'Not a text, AHHAHAHAHHAHAH';