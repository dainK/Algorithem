function solution(numbers) {
    var answer = [];
    let s = new Set();
    for(let i =0;i<numbers.length; i++){
         for(let j =0;j<numbers.length; j++){
             if(i!==j)
            s.add(numbers[i]+numbers[j])
        }
    }
    answer =[...s];
    answer.sort((a,b)=>a-b);
    return answer;
}