function solution(lines) {
    var map = new Map();
    lines.forEach(e=>{
        for(var i = e[0]; i<e[1]; i++) {
            if(map.has(i)) {
                map.set(i,map.get(i)+1);
            }
            else {
                map.set(i,1);
            }
        }
    })
    var answer = [...map].filter(e=>e[1]>1).length;
    return answer;
}