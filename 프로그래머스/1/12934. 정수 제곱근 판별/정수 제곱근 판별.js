function solution(n) {
    var answer = 0;
    var x = Math.sqrt(n);
    if(Number.isInteger(x) && x>0)
        return (x+1)*(x+1);
    else
        return -1;
    return answer;
}