function solution(num_list, n) {
    var answer = num_list.find((element) => element == n);
    
    return typeof answer == 'number' ? 1:0;
}