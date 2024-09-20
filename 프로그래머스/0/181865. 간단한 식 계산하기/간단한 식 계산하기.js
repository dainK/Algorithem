function solution(binomial) {
    var answer = 0;
    var arr = binomial.split(' ');
    switch(arr[1]) {
        case '+' :
            return parseInt(arr[0]) + parseInt(arr[2]);
        case '*' :
            return parseInt(arr[0]) * parseInt(arr[2]);
        case '-' :
            return parseInt(arr[0]) - parseInt(arr[2]);
    }
    return answer;
}