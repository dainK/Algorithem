function solution(array) {
    var map = new Map();
    array.forEach(num => {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    });
    var sortMap = [...map].sort((a,b)=>b[1]-a[1]);
    if(sortMap.length > 1 && sortMap[0][1] == sortMap[1][1]) 
        return -1;
    return sortMap[0][0];
    
}