function solution(code) {
  let arr = [];
  let mode = false;
  
  for(let i = 0; i < code.length; i++) {


    if(code[i] === "1"){
      mode = !mode;
      // console.log(mode);
    }

    if(mode == false){
      if(code[i] !== "1") {
          if(i % 2 === 0){
            // console.log(code[i]);
            arr.push(code[i]);
          }
      }
    }

    else if(mode == true){
      if(code[i] !== "1"){
        if(i%2 === 1){
          // console.log(code[i]);
          arr.push(code[i]);
        }
      }
    
    }
      
    


  }
    
if(arr.length < 1){
      return "EMPTY";
    }

  const a = arr.join('');
  
  // console.log(a);

  return a;

  

}


solution("abc1abc1abc");