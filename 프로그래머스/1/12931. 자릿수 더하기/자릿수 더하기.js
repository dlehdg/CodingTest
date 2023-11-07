function solution(n)
{
    answer = 0;
    m = n.toString();
    console.log(m);
    for (let i =0; i < m.length; i++) {
        answer += Number(m[i]);
    }
    return answer;
}