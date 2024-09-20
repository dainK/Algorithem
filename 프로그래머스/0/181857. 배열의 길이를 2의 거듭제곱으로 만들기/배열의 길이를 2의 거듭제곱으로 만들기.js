function solution(arr) {
    var num = 1;
    while(num<arr.length) {
        num*=2;
    }
    return [...arr,...(new Array(num-arr.length).fill(0))];
}