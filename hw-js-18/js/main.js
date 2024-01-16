const users = [
    {
        name: 'Rose',
        email: 'logax37045@ikuromi.com',
        age: 19,
        gender: 'female',
        eyeColor: 'black',
        isActive: true
    },
    {
        name: 'Alex',
        email: 'eroque@quatetaline.com',
        age: 23,
        gender: 'female',
        eyeColor: 'brown',
        isActive: false
    },
    {
        name: 'Petya',
        email: 'cq411po9sq@secretmail.net',
        age: 58,
        gender: 'male',
        eyeColor: 'green',
        isActive: true
    },
    {
        name: 'Maria',
        email: '245hu4470y@secretmail.net',
        age: 84,
        gender: 'female',
        eyeColor: 'blue',
        isActive: true
    },
    {
        name: 'Rendon',
        email: 'mbb4mc55dd@secretmail.net',
        age: 49,
        gender: 'male',
        eyeColor: 'brown',
        isActive: false
    },
    {
        name: 'Anya',
        email: 'glsx5ifh7y@secretmail.net',
        age: 7,
        gender: 'female',
        eyeColor: 'green',
        isActive: true
    },
];

const names = users.map((user) => user.name);
const brownEyeColorUsers = users.filter((user) => user.eyeColor === 'brown');
const femaleUsers = users.filter((user) => user.gender === 'female');
const notActiveUsers = users.filter((user) => !user.isActive);
const eroqueUser = users.find((user) => user.email === 'eroque@quatetaline.com');
const selectAgeUsers = users.filter((user) => 18 <= user.age && user.age <= 50);

console.log(names);
console.log(brownEyeColorUsers);
console.log(femaleUsers);
console.log(notActiveUsers);
console.log(eroqueUser);
console.log(selectAgeUsers);