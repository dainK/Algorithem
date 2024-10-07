function solution(my_string, queries) {
    var answer = my_string.split('');
    queries.forEach(e=>{
        var t = answer.slice(e[0],e[1]+1);
        answer.splice(e[0],e[1]-e[0]+1,...t.reverse());
    })
    return answer.join('');
}