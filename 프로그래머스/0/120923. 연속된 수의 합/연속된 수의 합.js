function solution(num, total) {
    var answer = [];
    if(num == 1) {
        return [total];
    }
    var i = 0;
    for(var i = -num; i<total; i++) {
        answer = [];
        var sum = 0;
        for(var j = 0; j<num; j++){
            sum += (i + j);
            if(sum > total)
            {
                break;
            }
            else {
                answer.push(i+j)
            }
        }
        if(sum == total) {
            break;
        }
    }
    return answer;
}