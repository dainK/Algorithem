function solution(str_list) {
    var answer = [];
    var li =str_list.indexOf('l');
    var ri =str_list.indexOf('r');
    if(li<0 && ri<0 ) {
        return [];
    }
    li = li < 0 ? str_list.length: li;
    ri = ri < 0 ? str_list.length: ri;
    if(li< ri) {
        return str_list.slice(0,li);
    }
    else {
        answer = str_list.slice(ri+1,str_list.length);
    }
    return answer;
}