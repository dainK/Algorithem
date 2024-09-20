function solution(arr) {
    var answer = -1;
    var prev = [];
    var curr = [...arr];
    while(JSON.stringify(prev) != JSON.stringify(arr)) {
        answer++;
        prev = [...curr];
        curr = [];
        arr.forEach(e=>{
            if(e>=50 && e%2==0){
                curr.push(e/2);
            }
            else if(e<50 && e%2!=0){
                curr.push(e*2+1);
            } 
            else{
                curr.push(e);
            }
        });
        arr = [...curr];
    }
    return answer;
}