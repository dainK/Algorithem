function solution(my_string, n) {
    var answer = '';
    my_string = my_string.split('').reverse().join('');
    for(var i =0; i<n; i++) {
        answer += my_string[i];
    }
    return answer.split('').reverse().join('');
}