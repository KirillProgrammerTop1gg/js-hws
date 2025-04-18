// task 1
let age: number = 50;
let userName:string = 'Max';
let toggle:boolean = true;
let empty:null = null;
let notInitialize:undefined = undefined;
let callback = (a:number):number => { return 100 + a };
// task 2
let anything:any = -20;
anything = 'Text';
anything = {};
// task 3
let some:string;
some = 'Text';

let str:string;

str = some;
// task 5
let person:[string,number] = ['Max', 21];
// task 6
enum Status{
    LOADING = 'Завантажується',
    READY = 'завантажена'
}
let statusNow: Status = Status.LOADING;
console.log(statusNow);
statusNow = Status.READY;
console.log(statusNow);
// task 7
let a: number | string = 12;
// task 8
let y: 'enable' | 'disable' = 'enable';
// task 9
function showMessage(message:string):void {
 console.log(message);
}

function calc(num1:number, num2:number):number {
 return num1 + num2;
}

function customError():never {
 throw new Error('Error');
}
// task 10
type Details = {
    createAt: Date;
    updateAt: Date;
}
type Page = {
    title: string;
    likes: number;
    accounts: string[];
    status: 'open' | 'close';
    details?: Details;
}
const page1: Page = {
 title: 'The awesome page',
 likes: 100,
 accounts: ['Max', 'Anton', 'Nikita'],
 status: 'open',
 details: {
   createAt: new Date('2021-01-01'),
   updateAt: new Date('2021-05-01'),
 }
}

const page2: Page = {
 title: 'Python or Js',
 likes: 5,
 accounts: ['Alex'],
 status: 'close',
}

const button = document.querySelector('button')! as HTMLButtonElement;
button.addEventListener('click', (): void => {
    showMessage('Hello, world!');
});