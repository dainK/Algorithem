function solution(myString) {
    var answer = myString.split('x').map(e=>e.length);
    return answer;
}