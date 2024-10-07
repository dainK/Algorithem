function solution(polynomial) {
    var arr = polynomial.split(' ');
    var num = 0;
    var x = 0;
    arr.forEach(e=> {
        if( e != '+') {
            if (e.includes('x')) {
                var xcount = e.replace(/x/g, "");
                x += xcount==''? 1 : Number(xcount); 
            }
            else {
                num += Number(e);
            }
        }
    })
    var answer = '';
    if(x>0)
        answer += x>1 ? x+'x' : 'x';
    if(x>0 && num>0)
        answer += ' + ';
    if(num>0)
        answer += num;
    return answer;
}