function solution(myString) {
    var answer = myString.toLowerCase().split('').map(e=>e=='a'?'A':e).join('');
    return answer;
}