// task 1
const balance = 3382;
const price = 443;

if (balance >= price) {
    const newBalance = balance - price;
    if (newBalance >= 0 && newBalance < 1000) {
        console.log("not much money");
    }
    else if (newBalance => 1000 && newBalance < 5000) {
        console.log("a lot of money");
    }
    else {
        console.log("a lot a lot a lot money");
    }
}

// task 2
const lang = prompt("language: ").toLowerCase();

switch (lang) {
    case "ua":
        console.log("Январь");
        break;
    case "en":
        console.log("January");
        break;
    case "fr":
        console.log("Janvier");
        break;
    case "pol":
        console.log("Styczeń");
        break;
    default:
        console.log("Not a correct language");
}

// task 3
const drink = prompt("Ваш напиток: ").toLowerCase();
let drinkPrice = 0;

switch (drink) {
    case "сік":
        drinkPrice = 35;
        break;
    case "чай":
        drinkPrice = 27;
        break;
    case "кава":
        drinkPrice = 34;
        break;
}

drinkPrice != 0 ? alert(`Ціна вашого напитку ${drinkPrice}грн`) : alert("Неправильний напиток");

// task 4
const weekDay = prompt("Який день тижня сьогодні?").toLowerCase();

switch (weekDay) {
    case "понеділок":
        alert("Сьогодні робочий день");
        break;
    case "вівторок":
        alert("Сьогодні робочий день");
        break;
    case "середа":
        alert("Сьогодні робочий день");
        break;
    case "четвер":
        alert("Сьогодні робочий день");
        break;
    case "п'ятниця":
        alert("Сьогодні робочий день");
        break;
    case "субота":
        alert("Сьогодні вихідний день");
        break;
    case "неділя":
        alert("Сьогодні вихідний день");
        break;
    default:
        alert("Неправильний день тижня!");
}

// task 5
const yearMonth = prompt("Який номер поточного місяця(формат xx)? ").toLowerCase();

switch (yearMonth) {
    case "01":
        alert("Зима");
        break;
    case "02":
        alert("Зима");
        break;
    case "03":
        alert("Весна");
        break;
    case "04":
        alert("Весна");
        break;
    case "05":
        alert("Весна");
        break;
    case "06":
        alert("Літо");
        break;
    case "07":
        alert("Літо");
        break;
    case "08":
        alert("Літо");
        break;
    case "09":
        alert("Осінь");
        break;
    case "10":
        alert("Осінь");
        break;
    case "11":
        alert("Осінь");
        break;
    case "12":
        alert("Зима");
        break;
    default:
        alert("Неправильний номер місяця");
}

// task 6

const color = prompt("Колір світлофора?").toLowerCase();

switch (color) {
    case "червоний":
        alert("стоп");
        break;
    case "зелений":
        alert("йти");
        break;
    case "жовтий":
        alert("чекати");
        break;
    default:
        alert("не тот колір");
}

// task 7
const num1 = Number(prompt("Число 1?"));
const num2 = Number(prompt("Число 2?"));
const action = prompt("Дія?");

switch (action) {
    case '+':
        alert(`Сума: ${num1 + num2}`);
        break;
    case '-':
        alert(`Різниця: ${num1 - num2}`);
        break;
    case '/':
        alert(`Частка: ${num1 / num2}`);
        break;
    case '*':
        alert(`Добуток: ${num1 * num2}`);
        break;
    default:
        console.log("Не правильна дія");
}