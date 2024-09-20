function solution(names) {
    var answer = [];
    var n = 0;
    while(n<names.length) {
        answer.push(names[n]);
        n+=5;
    }
    return answer;
}