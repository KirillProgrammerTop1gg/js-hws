const k1 = "5px";
const k2 = "12djd334";
const k3 = "12.45asdwe12";
const k4 = "qwqweeewq";

console.log("Strings to int ");
console.log(Number.parseInt(k1));
console.log(Number.parseInt(k2));
console.log(Number.parseInt(k3));
console.log(Number.parseInt(k4));

console.log("Strings to float ");
console.log(Number.parseFloat(k1));
console.log(Number.parseFloat(k2));
console.log(Number.parseFloat(k3));
console.log(Number.parseFloat(k4));

console.log("Min num: ");
console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));

console.log("Max num: ");
console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));

console.log("Random number 3 to 19: ");
console.log(Math.round(Math.random() * (19 - 3) + 3));

const superNum = 81;
console.log("Square root of " + superNum + " = " + Math.sqrt(superNum));

const testStr = "183Ufj44)4d+3";
console.log("This string " + testStr + " to int = " + Number.parseInt(testStr));

const testNum = 4794.3;
console.log("This number "+testNum+" to string = "+testNum.toString());