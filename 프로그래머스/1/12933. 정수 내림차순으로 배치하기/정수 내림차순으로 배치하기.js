function solution(n) {
    let arr = [];
    let strN = String(n);
    
    for(let i =0; i < strN.length; i++) {
        arr.push(Number(strN[i]));
    }
    
    arr.sort((a, b) => b - a);
    
    
    let value = Number(arr.join(''));
    
    return value;
}