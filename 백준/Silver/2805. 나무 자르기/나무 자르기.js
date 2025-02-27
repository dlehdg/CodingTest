let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let as = input[0].split(' ').map(Number);
let n = as[0], m = as[1];

let arr = input[1].split(' ').map(Number);

let start = 0;
let end = Math.max(...arr); // 배열에서 가장 큰 값 찾기
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2); // parseInt 대신 Math.floor 사용

  let total = arr.reduce((sum, x) => sum + (x > mid ? x - mid : 0), 0); // 합을 더하는 로직 개선

  if (total < m) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
