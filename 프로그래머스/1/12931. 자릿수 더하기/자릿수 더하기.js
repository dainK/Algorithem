function solution(n)
{
    var answer = 0;
    var arr = n.toString().split('');
    for( let i = 0; i<arr.length; i++){
        answer += parseInt(arr[i]);
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(arr)

    return answer;
}