const timerEl = document.querySelector('.timer');
const alertEl = document.querySelector('.alert');

const secAll = 3600*1000;
const secHalf = 0.5;

let time = 0;
let timerId = setInterval(() => (time++, timerEl.innerHTML = `Залишилось ${Math.floor((secAll-(time*1000))/1000)} секунд`, time*1000 === secAll*secHalf ? infoEl.innerHTML = `Пройшло ${secHalf} часу` : null), 1000);
setTimeout(() => (alertEl.innerHTML = 'Час закінчився', clearInterval(timerId)), secAll);

const infoEl = document.querySelector('.info');

let secs = 0;
let intervalId = setInterval(() => (secs+=10, infoEl.innerHTML = `Залишилось ${Math.floor((30000-secs)/1000)}.${(30000-secs)-(Math.floor((30000-secs)/1000)*1000)} секунд`, Math.floor((30000-secs)/1000) <= 10 ? document.querySelector('.box').classList.add('is-active') : null), 10);
setTimeout(() => (clearInterval(intervalId), document.querySelector('.but').style.display = 'block'), 30000);

document.querySelector('.but').addEventListener('click', () => {
    secs = 0;
    intervalId = setInterval(() => (secs+=10, infoEl.innerHTML = `Залишилось ${Math.floor((30000-secs)/1000)}.${(30000-secs)-(Math.floor((30000-secs)/1000)*1000)} секунд`, Math.floor((30000-secs)/1000) <= 10 ? document.querySelector('.box').classList.add('is-active') : null), 10);
    setTimeout(() => (clearInterval(intervalId), document.querySelector('.but').style.display = 'block'), 30000);
})