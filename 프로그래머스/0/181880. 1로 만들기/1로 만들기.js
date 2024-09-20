function solution(num_list) {
    var answer = 0;
    num_list.forEach(e=>{
        while(e!=1){
            e = e%2==0 ? e/2 : (e-1)/2;
            answer++;
        }
    })
    return answer;
}