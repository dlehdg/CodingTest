let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);

let Arr = input[1].split(' ').map(Number).sort((a,b) => a - b);

let M = Number(input[2]);

let start = 0;

let end = Arr[N - 1];

let result = 0;
while(start <= end) {
    let mid = parseInt((start + end) / 2);
    
    let total = 0;
    
    for(let x of Arr) {
        total += Math.min(mid, x);
    }
    
    if(total <= M){
        result = mid;
        start = mid + 1;
    }
    else {
        end = mid - 1;
    }
}

console.log(result)