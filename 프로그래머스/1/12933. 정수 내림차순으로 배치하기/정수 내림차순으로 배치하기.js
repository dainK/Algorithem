function solution(n) {
    var answer = n.toString().split('').sort((a,b)=>b-a).join('');
    console.log(answer);
    return parseInt(answer);
}