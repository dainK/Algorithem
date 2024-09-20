function solution(n, k) {
    var answer = [];
    var tempnum = k;
    while(tempnum<=n) {
        answer.push(tempnum);
        tempnum+=k;
    }
    return answer;
}