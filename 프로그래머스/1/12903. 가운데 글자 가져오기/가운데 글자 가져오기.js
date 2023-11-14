function solution(s) {
    var answer = '';
    let arr = s.split('');
    let q = parseInt(arr.length/2);
    let r = arr.length%2;
    if(r===0){
        answer = arr[q-1] + arr[q];
    }
    else {
        answer += arr[q];
    }
    return answer;
}