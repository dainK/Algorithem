function solution(arr) {
    var answer = [];
    if(arr.length===1)
        return [-1];
    let min = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(min>arr[i]){
            min = arr[i];
        }
    }
    
    return arr.filter((e)=>e!==min);
}