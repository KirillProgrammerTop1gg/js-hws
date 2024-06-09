// task 1
let i = 0;
const timerId = setInterval(() => (i++, document.querySelector('.msg').innerHTML = `Повідомлення ${i}`, i >= 5 ? clearInterval(timerId) : null), 1000);

// task 2
setInterval(() => document.querySelector('.box').style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`, 100);
let x = 10;
let flag = 1;
setInterval(() => (flag ? x-- : x++, document.querySelector('.ball').style.left = `${x}px`, x >= 610 || x < 10 ? flag = !flag : null), 10);

// task 3
let result = 0;
let isGame = 1;
const gameId = setInterval(() => document.querySelector('.point').getAttribute('isClick') === '1' ? (document.querySelector('.point').style.top = `${Math.round(Math.random() * (240) + 15)}px`, document.querySelector('.point').style.left = `${Math.round(Math.random() * (640   ) + 15)}px`, document.querySelector('.point').setAttribute('isClick', '0')) : (clearInterval(gameId), document.querySelector('.info').innerHTML = `GAME OVER<br>Result:${result}`, isGame = 0), 1000);
document.querySelector('.point').addEventListener('click', (e) => isGame ? (document.querySelector('.point').getAttribute('isClick') === '1' ? null : result++, e.target.setAttribute('isClick', '1'), document.querySelector('.info').innerHTML = `Result: ${result}`) : null);

// task 4
document.querySelector('.time__but').addEventListener('click', () => {
    let time = 0;
    const intervalId = setInterval(() => (time++, document.querySelector('.alert').innerHTML = `Залишилось ${(Number(parseFloat(document.querySelector('.time__time').value) * 1000) - time*100)/1000} секунд`), 100)
    setTimeout(() => (document.querySelector('.alert').innerHTML = document.querySelector('.time__msg').value, clearInterval(intervalId)), Number(parseFloat(document.querySelector('.time__time').value) * 1000));
});