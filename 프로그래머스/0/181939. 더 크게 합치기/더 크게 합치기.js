function solution(a, b) {
    var r1 = parseInt(a.toString() + b.toString());
    var r2 = parseInt(b.toString() + a.toString());
    
    return r1>r2?r1:r2;
}