let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = input[0].split(' ');

let h = Number(line[0]);
let m = Number(line[1]);


if(m < 45){
    h -= 1;
    m += 15;
    if (h < 0) h = 23;
}

else m -= 45;

console.log(h + " " + m);

