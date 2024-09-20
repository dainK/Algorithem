function solution(arr, intervals) {
    var answer = [];
    for(var i = 0; i<intervals.length;i++) {
        for(var j = intervals[i][0]; j<=intervals[i][1]; j++) {
            answer.push(arr[j]);
        }
    }
    return answer;
}