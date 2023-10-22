// task 1
const arrStrs = ['1', '+', '3', '=', '4'];
let string = '';
for (let i = 0; i < arrStrs.length; i++){
    string+=(arrStrs[i]);
}
console.log(string);
console.log(arrStrs.join(''));

// task 2, 3, 4, 5
const cards = [
    'Task-1',
    'Task-2',
    'Task-3',
    'Task-4',
    'Task-5',
];
console.log(cards);

const cardToRemove = 'Task-3';
cards.splice(cards.indexOf(cardToRemove), 1);
console.log(cards);

const cardToInsert = 'Task-6';
cards.push(cardToInsert);
console.log(cards);

const cardOnUpdate = 'Task-4';
const cardOfUpdate = 'Task-8';

cards.splice(cards.indexOf(cardOnUpdate), 1, cardOfUpdate);
console.log(cards);