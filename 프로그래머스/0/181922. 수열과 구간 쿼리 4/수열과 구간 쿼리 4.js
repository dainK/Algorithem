function solution(arr, queries) {
    var answer = [];
    queries.forEach(e=>{
        for(var i = e[0]; i<= e[1]; i++){
            if(i%e[2]==0)
                arr[i] = arr[i]+1;
        }
    })
    return arr;
}