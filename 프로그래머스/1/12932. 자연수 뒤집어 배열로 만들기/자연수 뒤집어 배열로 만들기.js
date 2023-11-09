function solution(n) {
    a = String(n);
    let arr = [];
    
    for(let i = a.length-1; i >= 0; i--) {
        arr.push(Number(a[i]));
    }
    return arr;
}