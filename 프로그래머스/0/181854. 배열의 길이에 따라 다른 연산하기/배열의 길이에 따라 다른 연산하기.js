function solution(arr, n) {
    var answer = [];
    for(var i = 0; i<arr.length;i++) {
        
        if(arr.length%2==0) {
            if(i%2==0) {
                answer.push(arr[i]);
            }
            else {
                answer.push(arr[i]+n)
            }
        }
        else {
            if(i%2!=0) {
                answer.push(arr[i]);
            }
            else {
                answer.push(arr[i]+n)
            }
        }
    }
    return answer;
}