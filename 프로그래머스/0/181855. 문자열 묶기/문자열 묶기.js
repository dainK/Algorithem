function solution(strArr) {
    var answer = 0;
    var map = new Map();
    strArr.forEach(e=>{
        if(map.has(e.length)) {
            map.set(e.length,map.get(e.length)+1);
        }
        else {
            map.set(e.length,1);
        }
    });
    console.log();
    return Math.max(...map.values());
}