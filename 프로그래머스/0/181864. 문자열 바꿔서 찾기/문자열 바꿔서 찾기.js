function solution(myString, pat) {
    var answer = myString.split('').map(e=> e=='A'?'B':'A').join('').includes(pat);
    return answer?1:0;
}