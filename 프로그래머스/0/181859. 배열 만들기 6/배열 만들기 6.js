function solution(arr) {
    var answer = [];
    var i = 0;
    while(i<arr.length) {
        if(answer.length == 0){
            answer.push(arr[i++]);
        }
        else {
            if(answer[answer.length -1] == arr[i]) {
                answer.pop();
                i++;
            }
            else {
                answer.push(arr[i++]);
            }
        }
    }
    return answer.length > 0 ? answer : [-1];
}