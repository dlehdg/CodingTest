let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let a = 0;
for(let i = 1; i <= 9; i++){
    a = n * i;
    console.log(n + " * " + i + " = " + a);
}