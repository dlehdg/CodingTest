let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]);
let b = input[1];

let x_1 = b[2];
let x_2 = b[1];
let x_3 = b[0];

console.log(a * Number(x_1));
console.log(a * Number(x_2));
console.log(a * Number(x_3));
console.log(a * Number(b));