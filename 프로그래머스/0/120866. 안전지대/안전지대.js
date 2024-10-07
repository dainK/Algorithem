function solution(board) {
    var dir = [[0,0],[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0]];
    var answer = 0;
    for(var x = 0; x<board.length; x++) {
         for(var y = 0; y<board.length; y++) {
            if(safe(x,y,dir,board)){
                answer++;
            }
        }
    }
    return answer;
}

function safe (x,y,dir,board) {
    for(var i = 0; i<dir.length;i++) {
        var col = x+dir[i][0];
        var row = y+dir[i][1];
        if(col < 0 || row < 0 || col>=board.length || row>=board.length ) {
            continue;
        }
        else {
            if(board[col][row] == 1) 
                return false;
        }
    }
    return true;
}