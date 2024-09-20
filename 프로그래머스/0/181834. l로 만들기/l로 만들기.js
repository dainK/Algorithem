function solution(myString) {
    var answer = myString.split('').map(e=>e.charCodeAt()<'l'.charCodeAt()?'l':e).join('');
    
    return answer;
}