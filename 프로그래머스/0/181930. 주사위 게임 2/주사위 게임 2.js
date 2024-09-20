function solution(a, b, c) {
    var answer = 0;
    var set = new Set([a,b,c]);
    console.log(set.size);
    switch(set.size) {
        case 3:
            return a+b+c;
        case 2:
            return (a+b+c)*(a*a+b*b+c*c);
        case 1:
            return (a+b+c)*(a*a+b*b+c*c)*(a*a*a+b*b*b+c*c*c);
    }
    return answer;
}