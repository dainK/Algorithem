function solution(A, B) {
    if(A==B)
        return 0;
    var tA = A.split('');
    for (var i = 0; i<A.length; i++) {
        var t = tA.pop();
        tA.unshift(t);
        if(tA.join('') == B) 
            return i+1;
    }
    return -1;
}