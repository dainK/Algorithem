function solution(n_str) {
    var answer = n_str;
    for(var i=0; i<n_str.length;i++) {
        if(n_str[i] == '0'){
            answer=answer.substr(1);
        }
        else
            break;
    }
    return answer;
}