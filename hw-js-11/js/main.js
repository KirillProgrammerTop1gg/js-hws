// task 1
const arrNumbers = [49, 93, 53];
console.log(arrNumbers);
arrNumbers[1] = 10;
console.log(arrNumbers);

// task 2
const arrStrings = ["one", "two", "three"];
console.log(arrStrings);
arrStrings[arrStrings.length] = "four";
console.log(arrStrings);

// task 3
const arrSum = [24, 92, 492, 82, 23, 85, 48, 923, 73];
let sum = 0;
for (let i = 0; i < arrSum.length; i++){
    sum += arrSum[i];
}
console.log(sum);

// task 4
const allNums = [2, 12, 94, 28, 48];
for (let i = 0; i < allNums.length; i++){
    console.log(allNums[i]);
}

// task 5
const strings = ["C++", "Hello!", "JavaScript", "meow", "apple is a great food"];
for (let i = 0; i < strings.length; i++){
    if (strings[i].length>5) {
        console.log(strings[i]);
    }
}

// task 6
const arrMaxNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let biggerNum = arrMaxNum[0];
for (let i = 1; i < arrMaxNum.length; i++){
    if (arrMaxNum[i] >= biggerNum) {
        biggerNum = arrMaxNum[i];
    }
}
console.log(biggerNum);

// task 7
const arrEvenNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i < arrEvenNum.length; i++){
    if (arrEvenNum[i] % 2 === 0) {
        console.log(arrEvenNum[i]);
    }
}