function solution(num_list) {
    var answer = 0;
    var sum = 0;
    var mul = 1;
    for(var i = 0;i< num_list.length;i++) {
        sum+=num_list[i];
        mul*=num_list[i];
    }
    if(mul<sum*sum)
        return 1;
    else 
        return 0;
    return answer;
}