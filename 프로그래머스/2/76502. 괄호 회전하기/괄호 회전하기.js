function solution(s) {
    var answer = 0;
    let sarr =s.split('');
    console.log(sarr);
    let rarr = [];
    
    for(let i = 0; i< sarr.length; i++){
        // answer++;
        let first = sarr.shift();
        sarr.push(first);
        if( test(sarr) ){
            answer++;
        }
    }
    
    return answer;
}

function test(sarr){
    let rarr = [];
     for(let i = 0; i< sarr.length; i++){
        if(rarr.length > 0 && 
           ((rarr[rarr.length-1] === '[' && sarr[i] === ']') ||
           (rarr[rarr.length-1] === '{' && sarr[i] === '}') ||
           (rarr[rarr.length-1] === '(' && sarr[i] === ')') )
           ){
            rarr.pop();
        }
        else {
            rarr.push(sarr[i]);
        }
    }
    
    return rarr.length > 0 ? false : true;
}