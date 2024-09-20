function solution(my_strings, parts) {
    var answer = '';
    //console.log(my_strings.length,parts.length);
    for(var i =0; i< parts.length; i++) {
        //console.log(parts[i]);
        // if(parts[i][0] < parts[i][1]) {
            
            for(var j = parts[i][0]; j<=parts[i][1]; j++) {
                answer += my_strings[i][j];
            }
        // }
        // else {
        //     answer+=my_strings[i][parts[i][0]];
        // }
    }
    return answer;
}