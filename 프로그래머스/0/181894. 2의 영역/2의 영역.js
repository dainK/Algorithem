function solution(arr) {
    if(arr.indexOf(2) < 0)
        return [-1];
    if(arr.indexOf(2) == arr.lastIndexOf(2))
        return [2];
    
    return arr.slice(arr.indexOf(2),arr.lastIndexOf(2)+1);
}