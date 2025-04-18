"use strict";
// task 1
let age = 50;
let userName = 'Max';
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => { return 100 + a; };
// task 2
let anything = -20;
anything = 'Text';
anything = {};
// task 3
let some;
some = 'Text';
let str;
str = some;
// task 5
let person = ['Max', 21];
// task 6
var Status;
(function (Status) {
    Status["LOADING"] = "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0443\u0454\u0442\u044C\u0441\u044F";
    Status["READY"] = "\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u0430";
})(Status || (Status = {}));
let statusNow = Status.LOADING;
console.log(statusNow);
statusNow = Status.READY;
console.log(statusNow);
// task 7
let a = 12;
// task 8
let y = 'enable';
// task 9
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
const button = document.querySelector('button');
button.addEventListener('click', () => {
    showMessage('Hello, world!');
});
//# sourceMappingURL=app.js.map