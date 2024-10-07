function solution(n) {
    var answer = new Array(n);
    for (let i = 0; i < answer.length; i++) {
        answer[i] = new Array(n).fill(0); // 크기가 4이고, 1로 채워진 배열 생성
    } 
    var dir = 'l';
    var col = 0;
    var row = 0;
    for(var i = 1; i<n*n+1; i++){
        answer[row][col] =i;
    
        switch(dir) {
            case 'l':
                if(col+1<n && answer[row][col+1]==0){
                    col++;
                }
                else {
                    dir = 'd';
                    row++;
                }
                break;
            case 'd':
                if(row+1<n && answer[row+1][col]==0) {
                    row++;
                }
                else {
                    dir = 'r';
                    col--;
                }
                break;
            case 'r':
                if(col-1>-1 && answer[row][col-1]==0){
                    col--;
                }
                else {
                    dir = 'u';
                    row--;
                }
                break;
            case 'u':
                if(row-1>-1 && answer[row-1][col]==0) {
                    row--;
                }
                else {
                    dir = 'l';
                    col++;
                }
                break;
        }
    }
    return answer;
}