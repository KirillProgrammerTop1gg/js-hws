const delay = ms => new Promise((resolve, reject) => setTimeout(() => resolve(ms), ms));

const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];


const toggleUserState = (allUsers, userName) => new Promise(resolve => resolve(updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
)));

const logger2 = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger2);
toggleUserState(users, 'Lux').then(logger2);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => new Promise((resolve, reject) => {
    const delay = randomIntegerFromInterval(200, 500);
    console.log(delay)

    setTimeout(() => {
        const canProcess = Math.random() > 0.3;

        if (canProcess) {
          resolve([transaction.id, delay]);
        } else {
          reject(transaction.id);
        }
    }, delay);
});

const logSuccess = (data) => {
  console.log(`Transaction ${data[0]} processed in ${data[1]}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);