function solution(my_string, is_prefix) {
    var answer = 0;
    for(var i = 0; i<is_prefix.length; i++) {
        if( is_prefix[i] == my_string[i]) {
            continue;
        }
        else {
            return 0;
        }
    }
    return 1;
}