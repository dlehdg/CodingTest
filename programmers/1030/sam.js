let a = 0

// 삼항 연산자
// 조건 ? 참일때 : 거짓일때

console.log(a < 2 ? "참" : "거짓");


// 전개 연산자
// ...arr -> arr 데이터를 쫙 펼쳐서 전개 -> arr의 배열데이터에서 대괄호 기호를 제거
// 후에 concat 메서드에 이용
const arr = [1,2,3];


console.log(arr); // [1,2,3]
console.log(...arr); // 1 2 3

// concat 메서드는 배열들을 병합 시켜주는 메서드

const arrB = [4,5,6];

const arrS = arr.concat(arrB); // [1,2,3,4,5,6]

console.log(...arrS);

const arrD = [arrA, arrB]; // 2차원 배열 [[1,2,3], [4,5,6]]

const arrF = [...arrA, ...arrB]; //[1,2,3,4,5,6]


// 객체로도 전개 연산자 사용가능

const A = {x:1, y:2}

const B = {y:3, z:4}

// assign 메서드 매개변수는 빈 객체, 병합할 객체1, 객체2

const C = Object.assign({}, A, B);
console.log(C); // {x:1, y:3, z:4}


const D = {...a, ...b} 


// 함수에서도 사용가능

function fn(x, y, z){
  console.log(x,y,z);
}

fn(...ex);

const ex = [1,2,3]

