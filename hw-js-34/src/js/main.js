const delayedPromise = (val, delay) => new Promise((resolve, reject) => setTimeout(() => resolve(`Promis done in ${delay} ms, value is ${val}`), delay));

const promises = [
    delayedPromise(1, 1000),
    delayedPromise(2, 500),
    delayedPromise(3, 100),
    delayedPromise(4, 1500),
    delayedPromise(5, 700),
]

Promise.all(promises).then(val => console.log(val));

const randomDelay = (val) => new Promise((resolve, reject) => {
    let ms = Math.round(Math.random() * (1500 - 100) + 100);
    setTimeout(() => resolve(`Value is ${val} time is ${ms} ms`), ms);
});

const promises2 = [randomDelay(1), randomDelay(2), randomDelay(3), randomDelay(4), randomDelay(5)];
console.log(promises2);

Promise.race(promises2).then(log => console.log(log));