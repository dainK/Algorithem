function solution(num_list) {
    var answer = 0;
    return num_list.length>10?num_list.reduce((a,b)=>a+b):num_list.reduce((a,b)=>a*b);
}