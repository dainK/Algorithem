function solution(quiz) {
    var answer = [];
    quiz.forEach(q=>{
        var e = q.split(' ');
        switch( e[1]) {
            case '+':
                answer.push( Number(e[0])+Number(e[2]) == Number(e[4]) ? "O" : "X");
                break;
            case '-':
                answer.push( Number(e[0])-Number(e[2]) == Number(e[4]) ? "O" : "X");
                break;
            case '/':
                answer.push( Number(e[0])/Number(e[2]) == Number(e[4]) ? "O" : "X");
                break;
            case '*':
                answer.push( Number(e[0])*Number(e[2]) == Number(e[4]) ? "O" : "X");
                break;
        }
    })
    return answer;
}