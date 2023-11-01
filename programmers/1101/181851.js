function solution(rank, attendance) {
  // var answer = 0;
  let obj = {};
  let arr = [];
  let sum = 0;
  for(let i=0; i<attendance.length; i++) {
    let key = rank[i];
    let value = attendance[i];

    
    if(value !== false){
      arr.push(key);
      obj[key] = i;
    }
    // else if(value === true){
    //   obj[key] = value;
    // }
    // obj[key] = value;
    // console.log(obj);
    
  }
  arr.sort()
  
  const keys = Object.keys(obj); // 객체의 키를 배열로 변환
  const slicedKeys = keys.slice(0, 3); // 인덱스 0부터 3 전까지(3번째 자리까지) 자르기
  
  const result = slicedKeys.map(key => obj[key]); // 객체의 특정 키에 해당하는 값을 배열로 추

  for(let j=0; j < 3; j++) {
      if(j == 0){
        sum += result[j] * 10000; 
      }
      else if(j == 1){
        sum += result[j] * 100;
      }
      else if(j == 2){
        sum += result[j]
      }
  }

  console.log(sum);

  // for(let j=0; j<attendance.length; j++) {
  //   if(obj)

  // }
  // return obj;
}





const rank = [3, 7, 2, 5, 4, 6, 1];

const attendance = [false, true, true, true, true, false, false];


solution(rank, attendance);