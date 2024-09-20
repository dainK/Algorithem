function solution(arr, idx) {
    var answer = arr.splice(idx).indexOf(1);
    return answer < 0 ? answer : answer+idx;
}