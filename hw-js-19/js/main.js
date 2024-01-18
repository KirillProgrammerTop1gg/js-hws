const users = [
    {
        name: 'Rose',
        email: 'logax37045@ikuromi.com',
        age: 19,
        gender: 'female',
        eyeColor: 'black',
        isActive: true,
        balance: 196,
        friend: 'alex',
        friendsCount: 4,
        skills: 'React',
    },
    {
        name: 'Alex',
        email: 'eroque@quatetaline.com',
        age: 23,
        gender: 'female',
        eyeColor: 'brown',
        isActive: false,
        balance: 38332,
        friend: 'maria',
        friendsCount: 0,
        skills: 'Python',
    },
    {
        name: 'Petya',
        email: 'cq411po9sq@secretmail.net',
        age: 58,
        gender: 'male',
        eyeColor: 'green',
        isActive: true,
        balance: 43,
        friend: 'alex',
        friendsCount: 2,
        skills: 'React',
    },
    {
        name: 'Maria',
        email: '245hu4470y@secretmail.net',
        age: 84,
        gender: 'female',
        eyeColor: 'blue',
        isActive: true,
        balance: 972,
        friend: 'alex',
        friendsCount: 5,
        skills: 'JavaScript',
    },
    {
        name: 'Rendon',
        email: 'mbb4mc55dd@secretmail.net',
        age: 49,
        gender: 'male',
        eyeColor: 'brown',
        isActive: false,
        balance: 3854,
        friend: 'yor',
        friendsCount: 10,
        skills: 'HTML',
    },
    {
        name: 'Anya',
        email: 'glsx5ifh7y@secretmail.net',
        age: 7,
        gender: 'female',
        eyeColor: 'green',
        isActive: true,
        balance: 4130,
        friend: 'alex',
        friendsCount: 7,
        skills: 'JavaScript',
    },
];

const totalBalances = users.reduce((acct, user) => acct + user.balance, 0);
const alexFriends = users.reduce((acct, user) => {
    user.friend === 'alex' ? acct.push(user) : null;
    return acct;
}, []);
const usersSort = [...users].sort((currentFriendsCount, nextFriendsCount) => currentFriendsCount.friendsCount - nextFriendsCount.friendsCount).map((users) => users.name);
const allSkills = users.map(user => user.skills).filter((skill, index, skillsArray) => skillsArray.indexOf(skill) === index).sort();

console.log(totalBalances);
console.log(alexFriends);
console.log(usersSort);
console.log(allSkills);