function solution(n) {
    var answer = [];
    for(var i = 0; i<n; i++ ){
        var a = [];
        for(var j = 0; j<n; j++) {
            if(i == j)
                a.push(1);
            else
                a.push(0);
        }
        answer.push(a);
    }
    return answer;
}