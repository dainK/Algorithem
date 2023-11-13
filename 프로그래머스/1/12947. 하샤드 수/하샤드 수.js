function solution(x) {
    let sum1 = parseInt(x);
    console.log("sum1",sum1);
    let arr = x.toString().split('');
    let sum2 =0;
    for(let i =0; i<arr.length;i++){
        sum2 +=parseInt(arr[i]);
    }
    console.log("sum2",sum2);
    if(sum1%sum2===0)
        return true;
    else
        return false;
    var answer = true;
    return answer;
}