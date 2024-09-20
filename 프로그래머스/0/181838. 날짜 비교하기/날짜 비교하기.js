function solution(date1, date2) {
    var answer = parseInt(date1.join('')) - parseInt(date2.join('')) < 0 ? 1 : 0;
    return answer;
}