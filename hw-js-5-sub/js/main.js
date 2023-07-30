const email = "1kvgxiaomi1711@gmail.com";
console.log("Email: "+email+"; Validation: "+email.includes("@")+"; Length: "+email.length+" symbols.");

const str1 = "My";
const str2 = "name";
const str3 = "is";
let fullName = str1 + ' ' + str2 + ' ' + str3;
fullName += ' Viktor';
console.log(fullName);

const userName = "Олександр";
const payment = 300;
console.log("Дякуємо, "+userName+"о! До сплати "+payment+" гривень");

const myName = "Kirill";
console.log(myName.replace(myName[0],'@'));

const myFullName = "Kirill Gorbunov";
console.log(myFullName.indexOf(' '));

const balanceString = "Ваш баланс поповнено на 1";
console.log(balanceString.padEnd(balanceString.length+4, "0"));

const result = 5 + 5 + '5';
console.log(result);

const productName = "Droid";
const pricePerItem = 3500;
console.log(`You picked ${productName}, price per item is ${pricePerItem} credits`);

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
console.log(`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`);

const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic.slice(-1);

const string = "I realy like cupcakes!";
const length = 12;
const substring = string.substring(0,length);