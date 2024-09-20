function solution(num_list) {
    var answer = num_list.sort((a,b)=>b-a).slice(-5).reverse();
    return answer;
}