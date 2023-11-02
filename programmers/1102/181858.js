function solution(arr, k) {
  let arrSa = [];
  let arrSb = [];

  for(let j = 0; j < arr.length; j++) {
  if (!arrSa.includes(arr[j])){
    arrSa.push(arr[j]);
  }
  // console.log(arrSa);
}
  // console.log(arrSa);

  for(let i=0; i < k; i++){
    if ( typeof(arrSa[i]) == 'number'){
      arrSb.push(arrSa[i]);
    }

    else {
      arrSb.push(-1);
    }
  }
  
    console.log(arrSb);

  

  // if(arrSb.length < k) {
  //     let value = k - arrSb.length;
  //     console.log(value);
  //     for(let i=0; i < value; i++){
  //       arrSb.push(-1);
  //     }
  // }

  return arrSb;
  
}



let arr = [0, 1, 1, 1, 1];
let k = 4;

solution(arr, k);