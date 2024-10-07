function solution(rank, attendance) {
    var answer = 0;
    var arr = rank.filter((e,i)=>attendance[i]).sort((a,b)=>a-b);
    var a = rank.indexOf(arr[0]);
    var b = rank.indexOf(arr[1]);
    var c = rank.indexOf(arr[2]);
    return 10000*a+100*b+c;
}