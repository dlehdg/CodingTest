function solution(a, b) {
    
    let sum = 0;
    
    if(a > b) {
        for(let i = b; b <= a; b++) {
            sum += b;
        }
    }
    
    else {
        for(let i = a; a <= b; a++) {
            sum += a;
        }
    }
    
    return sum;
}