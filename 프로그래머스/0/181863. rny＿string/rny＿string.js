function solution(rny_string) {
    var answer = rny_string.split('').map(e=>e=='m'?'rn':e).join('');
    return answer;
}