function solution(number) {
    var answer = number.split('').reduce((a,b)=>parseInt(a)+parseInt(b));
    console.log(answer);
    return answer%9;
}