function solution(arr) {
    var row = arr.length;
    var col = arr[0].length;
    var max = row > col ? row : col;
    console.log(row,col,max);
    var answer = Array.from({length:max},() => new Array(max).fill(0));
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            answer[i][j] = arr[i][j];
        }
    }

    return answer;
}