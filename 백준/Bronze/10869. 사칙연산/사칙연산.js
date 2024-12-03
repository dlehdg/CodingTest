let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let number = input[0].split(' ');

let num1 = Number(number[0]);
let num2 = Number(number[1]);

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(parseInt(num1 / num2));
console.log(num1 % num2);
