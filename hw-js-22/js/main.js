// task 1
const inputEl = document.querySelector('.slider__input');
const imgEl = document.querySelector('.slider__image');

const slideFunc = () => imgEl.style.marginLeft = `${inputEl.value}px`;

inputEl.addEventListener('input', _.debounce(slideFunc, 30));

// task 2
const boxEl = document.querySelector('#box');

const moveFunc = (e) => {
    boxEl.style.top = `${e.clientY-25}px`;
    boxEl.style.left = `${e.clientX-25}px`;
}

document.addEventListener('mousemove', _.debounce((e) => moveFunc(e), 100));