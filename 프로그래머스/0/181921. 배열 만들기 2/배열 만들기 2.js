function solution(l, r) {
    var answer = make('', r).map(x=>parseInt(x)).filter(x => parseInt(x) >= l).sort((a,b)=>a-b);
    return answer.length > 0 ? answer : [-1];
}

function make(s, r) {
    if (s !== '' && parseInt(s) > r) {
        return [];
    }
    if (s === '') {
        return [...make('5', r)]; // '0'을 제외하고 처음 '5'부터 시작
    }
    return [s, ...make(s + '0', r), ...make(s + '5', r)];
}