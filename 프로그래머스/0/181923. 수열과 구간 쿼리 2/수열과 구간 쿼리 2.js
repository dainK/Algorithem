function solution(arr, queries) {
    var answer = [];
    for(var i =0; i<queries.length; i++) {
       var r = arr.slice(queries[i][0],queries[i][1]+1).filter(e=>e>queries[i][2]).sort((a,b)=>a-b)[0];
       answer.push(r?r:-1);
    }
    return answer;
}