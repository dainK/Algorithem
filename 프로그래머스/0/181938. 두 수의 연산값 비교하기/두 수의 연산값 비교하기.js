function solution(a, b) {
    var answer = parseInt(a.toString() + b.toString());
    var mul = parseInt(2*a*b);
    console.log(answer, mul, answer >= mul);
    if( answer >= mul)
        return answer;
    else 
        return mul
}