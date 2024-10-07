function solution(picture, k) {
    var answer = [];
    for(var row = 0; row < picture.length; row++){
        var line = picture[row].split('');
        var resultCol = '';
        for(var col = 0; col < line.length; col++){
            for(var i = 0; i<k; i++){
                resultCol += line[col];
            }
        }
        for(var i = 0; i<k; i++){
            answer.push(resultCol);
        }
    }
    return answer;
}