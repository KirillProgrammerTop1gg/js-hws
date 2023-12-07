// task 1
const bankAccount = {
    ownerName: "Alex",
    accountNumber: 1329547294,
    balance: 0,
    deposit(money){
        this.balance += money;
        alert(`Баланс на акаунті: ${this.balance} кредитів`);
    },
    withdraw(money){
        this.balance -= money;
        alert(`Баланс на акаунті: ${this.balance} кредитів`);
    },
}
const inputTask1 = document.querySelector('#inputTask1');
const deposit = document.querySelector('#deposit');
const withdraw = document.querySelector('#withdraw');

deposit.addEventListener('click', () => bankAccount.deposit(Number(inputTask1.value)));
withdraw.addEventListener('click', () => bankAccount.withdraw(Number(inputTask1.value)));

// task 2
const weather = {
    temperature: 10,
    humidity: 43,
    windSpeed: 20,
    checkTemp(){
        alert(this.temperature < 0 ? "температура нижче 0 градусів Цельсія" : "температура вище або дорівнює 0 градусів Цельсія");
        return this.temperature < 0 ? true : false;
    }
}

const inputTask2 = document.querySelector('#inputTask2');
const butTask2 = document.querySelector('#butTask2');
butTask2.addEventListener('click', () => {
    weather.temperature = inputTask2.value;
    weather.checkTemp();
})

// task 3
const user = {
    name: '',
    email: '',
    password: '',
    login(email, password) {
        return email === this.email && password === this.password ? true : false;   
    }
}

const inputName = document.querySelector('#inputName');
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const saveBut = document.querySelector('#saveBut');
const inputEmailCheck = document.querySelector('#inputEmailCheck');
const inputPasswordCheck = document.querySelector('#inputPasswordCheck');
const checkBut = document.querySelector('#checkBut');

saveBut.addEventListener('click', () => {
    user.name = inputName.value;
    user.email = inputEmail.value;
    user.password = inputPassword.value;
    alert('Дані збережені!');
});

checkBut.addEventListener('click', () => alert(user.login(inputEmailCheck.value, inputPasswordCheck.value) ? 'Логін та пароль введени правильно' : 'Логін та пароль введени не правильно'));

// task 4
const title = document.querySelector('#title');
const director = document.querySelector('#director');
const year = document.querySelector('#year');
const rating = document.querySelector('#rating');
const movie = {
    title: 'Барбі',
    director: 'Greta Celeste Gerwig',
    year: 2023,
    rating: 7,
    checkRating() {
        return this.rating > 8 ? true : false; 
    }
}

title.innerHTML += movie.title;
director.innerHTML += movie.director;
year.innerHTML += movie.year;
rating.innerHTML += movie.rating;

title.style.color = movie.checkRating() ? 'Green' : 'Red';