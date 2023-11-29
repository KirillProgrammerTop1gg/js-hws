// task 1
const butTask1 = document.querySelector(".butTask1");

butTask1.addEventListener("click", () => alert("Hello World!"));
// task 2
let randNum = Math.round(Math.random() * (100 - 0) + 0);
const guessField = document.querySelector('#guessField');
const checkBut = document.querySelector('#checkBut');
const guessResult = document.querySelector('#guessResult');
let attempt = 0;

const checkGuess = () => Number(guessField.value) === randNum ? true : false;

checkBut.addEventListener("click", () => {
    if (checkGuess()) {
        guessResult.innerHTML = `Перемога, ви вгадали число! Ви вгадали за ${attempt} попиток`;
        attempt = 0;
        randNum = Math.round(Math.random() * (100 - 0) + 0);
    }
    else {
        guessResult.innerHTML = Number(guessField.value) > randNum ? `Число не вірне, ваше число більше ніж треба. Спробуйте ще!` : `Число не вірне, ваше число менше ніж треба. Спробуйте ще!`;
    }
    attempt++;
});

// task 3
const page = document.querySelector("html");
let clickCounter = 0;
page.addEventListener("click", () => {
    clickCounter++;
    console.log('Кількість кліків на сторінці:',clickCounter);
});

// task 4
const applyCallbackToEachElement = (arr, callback) => arr.map(callback);

const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => num**2;

const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);

// task 5
const calculateDiscountedPrice = (price, discount, callback) => `Ціна після знижки становить: ${callback(price, discount)} кредитів`;

const showDiscountedPrice = (price, discount) => price - (discount / 100) * price;

console.log(calculateDiscountedPrice(100, 10, showDiscountedPrice));