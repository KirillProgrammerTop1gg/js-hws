// task 1
console.log("task 1");

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

console.log("");

// task 2
console.log("task 2");

for (let i = 2; i <= 20; i++){
    if (i % 2 === 0) {
        console.log(i);
    } else {
        continue;
    }
}

console.log("");

// task 3
console.log("task 3");

for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

console.log("");

// task 4
console.log("task 4");

const arr = [1, 2, 3, 4, 5];
let j = 0;

while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

console.log("");

// task 5
console.log("task 5");

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr2.length; i++){
    if (arr2[i] === 7) {
        break;
    }
    console.log(arr2[i]);
}

console.log("");

// task 6
console.log("task 6");

const n = 27;

for (let i = 0; ; i++){
    console.log(i);
    if (n <= i) {
        break;
    }
}

console.log("");

// task 7
console.log("task 7");

let k = 1;

while (k <= 20) {
    if (k % 3 === 0) {
        k++;
        continue;
    }
    console.log(k);
    k++;
}