// task 1#hw-js-15
const bankAccountHwJs15 = {
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
const { ownerName, accountNumber, balance } = bankAccountHwJs15;
console.log(ownerName, accountNumber, balance);

// task 2#hw-js-15
const weather = {
    temperature: 10,
    humidity: 43,
    windSpeed: 20,
    checkTemp(){
        alert(this.temperature < 0 ? "температура нижче 0 градусів Цельсія" : "температура вище або дорівнює 0 градусів Цельсія");
        return this.temperature < 0 ? true : false;
    }
}

const { temperature, humidity, windSpeed, maxTemp = 32, minTemp = 3 } = weather;
console.log(temperature, humidity, windSpeed, maxTemp, minTemp);

// task 3#hw-js-15
const userHwJs15 = {
    name: 'KirillProg',
    email: '1kvgixiaomi1711@gmail.com',
    password: '12345678',
    login(email, password) {
        return email === this.email && password === this.password ? true : false;   
    }
}

const { name: userName, email: userEmail, password: userPassword } = userHwJs15;
console.log(userName, userEmail, userPassword);

// task 4#hw-js-15
const movie = {
    title: 'Барбі',
    director: 'Greta Celeste Gerwig',
    year: 2023,
    rating: 7,
    checkRating() {
        return this.rating > 8 ? true : false; 
    }
}
const { title, director, year, rating = 5 } = movie;
console.log(title, director, year, rating);

// task 1#hw-js-16
const userHwJs16 = {
    hobby: "skiing",
    premium: "true",
}

const { hobby: userHobby, premium: userPremiuim = "false" } = userHwJs16;
console.log(userHobby, userPremiuim);

// task 3#hw-js-16
const employessTasks = {
    alex: 34,
    mish: 9,
    ivan: 1033,
    maria: 39,
    nina: 302,
};

const { alex: alexEmployessTasks, ivan: ivanEmployessTasks, nina: ninaEmployessTasks, ...otherEmployessTasks } = employessTasks;
console.log(alexEmployessTasks, ivanEmployessTasks, ninaEmployessTasks, otherEmployessTasks);

// task 4#hw-js-16
const employessSalary = {
    alex: 19943,
    mish: 2394,
    ivan: 593549,
    maria: 23934,
    nina: 13883,
};

const { nina: ninaSallary, maria: mariaSallary, lanaSallary = 15493 } = employessSalary;
console.log(ninaSallary, mariaSallary, lanaSallary);

// task 5#hw-js-16
const arrExamp = [
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Alice',
        age: 25
    },
    {
        name: 'Bob',
        age: 35
    }
];

const [
    johnParams,
    aliceParams,
    bobParams,
] = arrExamp;

console.log(johnParams, aliceParams, bobParams);

// task 6#hw-js-16
const allProdcutsArr = [
    {
        name: 'Banana',
        price: 43,
        count: 5,
    },
    {
        name: 'Potato',
        price: 3,
        count: 14,
    },
    {
        name: 'Cucumber',
        price: 48,
        count: 528789325,
    }
];

const [
    {
        name: bananaName,
        price: bananaPrice,
        count: bananaCount,
    },
    {
        name: potatoName,
        price: potatoPrice,
        count: potatoCount,
    },
    {
        name: cucumberName,
        price: cucumberPrice,
        count: cucumberCount,
    }
] = allProdcutsArr;

console.log(bananaName, bananaPrice, bananaCount);
console.log(potatoName, potatoPrice, potatoCount);
console.log(cucumberName, cucumberPrice, cucumberCount);

// task 7#hw-js-16
const bankAccountHwJs16 = {
    ownerName: "Hlib",
    accountNumber: 7328629341,
    balance: 0,
    history: [],
    deposit(money) {
        this.balance += money;
        this.history.push({
            time: `${new Date}`,
            idTransaction: money * 4 + money,
            isDeposit: true,
            countMoney: money,
        });
    },
    withdraw(money) {
        this.balance -= money;
        this.history.push({
            time: `${new Date}`,
            idTransaction: money * 4 - money,
            isDeposit: false,
            countMoney: money,
        });
    },
};

const { ownerName: ownerNamePlus, accountNumber: accountNumberPlus, balance: balancePlus, history: historyPlus, cashbackPlus = 0.05 } = bankAccountHwJs16;

console.log(ownerNamePlus, accountNumberPlus, balancePlus, historyPlus, cashbackPlus);