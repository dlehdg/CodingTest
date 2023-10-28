// function solution(name, yearning, photo) {
//   var answer = [];
//   let abject = {
      
//   }
//   return answer;
// }

let arr = {};

let sum = 0;

let sumArr = [];

let name = ["may", "kein", "kain", "radi"];

let yearning = [5, 10, 1, 3];

let photo = [["may", "kein", "kain", "radi"]
,["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]];

for(let i = 0; i < name.length; i++) {
    let names = name[i];
    let years = yearning[i];

    arr[names] = years;

};

// console.log(photo.length);

for(let i = 0; i < photo.length; i++) {
    // console.log(photo[i]);
    for (let key in arr) {
      if(photo[i].includes(key) ) {
        sum += arr[key];
        // console.log(sum);
      }
    }

    sumArr.push(sum);
    sum = 0;
    
}


console.log(sumArr);


