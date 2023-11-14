function solution(numbers) {
    var answer = 0;
    let s = new Set(numbers);
    console.log(s);
    for(let i = 0; i<10; i++){
        if( !s.has(i) ){
            answer +=i;
        console.log(i);
        }
    }
    return answer;
}