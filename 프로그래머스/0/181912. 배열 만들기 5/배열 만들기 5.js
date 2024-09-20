function solution(intStrs, k, s, l) {
    var answer = [];
    for(var i = 0; i<intStrs.length; i++) {
        var num = parseInt(intStrs[i].slice(s,s+l));
        if(num>k)
            answer.push(num);
    }
    return answer;
}