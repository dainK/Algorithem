function solution(a, b, flag) {
    var answer = a + (flag?b:-b);
    return answer;
}