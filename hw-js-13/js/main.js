// task 1
const logItems = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i+1} - ${arr[i]}`);
    }
}

logItems(['was', 'were', 'good']);

// task 2
const calculateEngravingPrice = (message, pricePerWord) => message.split(' ').length * pricePerWord;

console.log(calculateEngravingPrice("25 october Sister", 100));

// task 3
const findLongestWord = (str) => {
    const wordArr = str.split(' ');
    let largestWord = '';
    wordArr.forEach(word => {
        largestWord = word.length >= largestWord.length ? word : largestWord;
    });
    return largestWord;
}

console.log(findLongestWord("meow car  glass is"));

// task 4
const formatString = (str) => {
    return str.length > 40 ? str.slice(0, 40).trim()+'...' : str;
}
console.log(formatString('Lorem ipsum dolor sit amet'));
console.log(formatString('Lorem ipsum dolor sit amet, consectetur adipiscing elit.'));

// task 404
const factorialCalc = (num) => {
    let result = 1;
    for (let i = 2; i <= num; i++){
        result *= i;
    }
    return result;
}

console.log(factorialCalc(9));

// task 5
const checkForSpam = (message) => message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale') ? true : false;

console.log(checkForSpam('spam'))
console.log(checkForSpam('not spаm'))

// task 6
const nums = [];
let total = 0;
const addNum = () => {
    const input = prompt('Введіть число');
    if (input === null) {
        return;
    }
    if (!(isNaN(input)) && (input === '0' || Number(input) !== 0)) {
        nums.push(Number(input));
        addNum();
    }
    else if (isNaN(input) || (Number(input) === 0 && input !== '0')) {
        alert('Ви ввели не число, попробуйте ще');
        addNum();
    }
}
addNum();
nums.forEach(num => {
    total += num;
});
console.log(total);

// task 7
const logins = ['meow', 'supercat23', 'ivan', 'alex'];
const isLoginValid = (login) => login.length >= 4 && login.length <= 16 ? true : false;
const isLoginUnique = (allLogins, login) => allLogins.includes(login) ? false : true;
const addLogin = (allLogins, login) => {
    if (!(isLoginValid(login))) {
        return 'Помилка! Логін повинен бути від 4 до 16 символів';
    }
    if (!(isLoginUnique(allLogins, login))) {
        return 'Такий логін уже використовується!';
    }
    logins.push(login);
    return 'Логін успішно доданий!';
}