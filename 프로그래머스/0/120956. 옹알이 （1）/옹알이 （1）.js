function solution(babbling) {
    var answer = 0;
    var can = ["aya", "ye", "woo", "ma"];
    for (let i in babbling) {
        var t = babbling[i];

        for (let j in can) {
            if (babbling[i].includes(can[j])) {
                t = t.replace(can[j], "X");
            }
        }

        t = t.replace(/X/gi, ""); 
        if (t.length === 0) { 
            answer += 1;
        }
    }
    return answer;
}