function solution(a, b) {
    var answer = 0;
    let s = a <b ?a:b;
    let e = a>b?a:b;
    for(let i = s; i<=e; i++){
        answer+=i;
    }
    return answer;
}