function solution(my_string, overwrite_string, s) {
    var answer = my_string.split('');
    for(var i =0; i<overwrite_string.length; i++){
        answer[s+i] = overwrite_string[i];
    }
    return answer.join('');
}