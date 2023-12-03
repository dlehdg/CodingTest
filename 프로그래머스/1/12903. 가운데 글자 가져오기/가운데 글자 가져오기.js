function solution(s) {
    
    s = s.split('');
    let num = s.length;
    // let num1 = num/2;
    // let num2 = s[num/2 + 1];
    // console.log(num2);
    let count = (num % 2 == 0) ? [s[num/2-1], s[(num/2)]].join('') : s[parseInt(num/2)];
    
    return count;
}