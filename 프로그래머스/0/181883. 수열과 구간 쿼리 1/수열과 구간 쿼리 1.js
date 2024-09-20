function solution(arr, queries) {
    var answer = [...arr];
    queries.forEach(e=>{
        for(var i = e[0]; i<= e[1]; i++){
            answer[i]= answer[i]+1;
        }
    })
    return answer;
}