function solution(arr, query) {
    var answer = arr;
    for(var i = 0; i<query.length;i++){
        var q = query[i];
        //var index = answer.indexOf(q);
        //console.log(index);
        if(i%2==0) {
            answer = answer.slice(0,q+1);
        }
        else {
            answer = answer.slice(q,answer.length);
        }
        console.log(answer);
    }
    return answer;
}