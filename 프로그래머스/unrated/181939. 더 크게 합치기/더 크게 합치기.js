function solution(a, b) {
    let suma = String(a) + String(b);
    let sumb = String(b) + String(a);
    
    if(Number(suma) > Number(sumb) ) {
        sum = Number(suma);
    }
    
    else {
        sum = Number(sumb);
    }
    
    return sum;
}