// task 1
const user = {
    hobby: "skiing",
    premium: "true",
}

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const userKeys = Object.keys(user);

for (const key of userKeys) {
    console.log(user[key]);
}

// task 2
const countProps = (obj) => Object.keys(obj).length;

console.log(countProps(user));

// task 3
const employessTasks = {
    alex: 34,
    mish: 9,
    ivan: 1033,
    maria: 39,
    nina: 302,
};

const findBestEmployee = (employees) => {
    const countTasks = Object.values(employees);
    let maxCountTasks = 0
    countTasks.forEach(countTask => maxCountTasks = countTask >= maxCountTasks ? countTask : maxCountTasks);
    return maxCountTasks;
}

console.log(findBestEmployee(employessTasks));

// task 4

const employessSalary = {
    alex: 19943,
    mish: 2394,
    ivan: 593549,
    maria: 23934,
    nina: 13883,
};

const countTotalSalary = (employees) => {
    const countTasks = Object.values(employees);
    let totalSalary = 0
    countTasks.forEach(salary => totalSalary+=salary);
    return totalSalary;
}

console.log(countTotalSalary(employessSalary));

// task 5

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
]

const getAllPropValues = (arr, prop) => {
    const propValues = [];
    arr.forEach(obj => propValues.push(obj[prop]));
    return propValues;
}

console.log(getAllPropValues(arrExamp, 'age'));

// task 6

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
]

const calculateTotalPrice = (allProdcuts, productName) => {
    for (const product of allProdcuts){
        if (product.name.toLowerCase() === productName.toLowerCase()) {
            return product.price * product.count;
        }
    }
    return 0;
}

console.log(calculateTotalPrice(allProdcutsArr, "cucumber"));

// task 7
const bankAccount = {
    ownerName: "Hlib",
    accountNumber: 7328629341,
    balance: 0,
    history: [],
    deposit(money){
        this.balance += money;
        this.history.push({
            time: `${new Date}`,
            idTransaction: money * 4 + money,
            isDeposit: true,
            countMoney: money,
        });
    },
    withdraw(money){
        this.balance -= money;
        this.history.push({
            time: `${new Date}`,
            idTransaction: money * 4 - money,
            isDeposit: false,
            countMoney: money,
        });
    },
}

bankAccount.deposit(25381887890);
bankAccount.withdraw(25381887600);
bankAccount.deposit(4882);
bankAccount.withdraw(532);
console.log(bankAccount.history, bankAccount.balance);