function solution(arr, queries) {
    queries.forEach(e=>{
        var t = arr[e[0]];
        arr[e[0]] = arr[e[1]];
        arr[e[1]] = t;
    })
    return arr;
}