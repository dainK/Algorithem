function solution(numlist, n) {
    var answer = numlist.sort((a,b)=>{
        if(Math.abs(a-n) == Math.abs(b-n)){
            return b-a;
        }
        else {
            return Math.abs(a-n) - Math.abs(b-n);
        }});
    return answer;
}