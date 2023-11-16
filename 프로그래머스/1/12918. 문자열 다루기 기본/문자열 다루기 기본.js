function solution(s) {
    let n =/[0-9]/;
    let e = /[a-zA-Z]/;
    var answer = true
    if(!e.test(s)&&n.test(s)&&(s.length===4||s.length===6))
        return true;
    else
        return false;
    return answer;
}