function solution(n) {
    var answer = n.toString().split('');
    let result = [];
    for( let i =0;i<answer.length;i++){
        let r = answer[answer.length-1-i];
        let r2  = parseInt(answer[answer.length-1-i]);
        result.push(r2);
    }
    return result;
}