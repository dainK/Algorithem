function solution(numbers, n) {
    var answer = 0;
    for(var i = 0; i<numbers.length; i++) {
        answer+=numbers[i];
        if(answer>n) {
            return answer;
        }
    }
    return answer;
}