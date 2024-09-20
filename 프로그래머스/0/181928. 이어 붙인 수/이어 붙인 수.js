function solution(num_list) {
    var answer = 0;
    var odd ='';
    var even ='';
    for(var i =0; i<num_list.length; i++) {
        if(num_list[i]%2==0) {
            even+=num_list[i];
        }
        else {
            odd+=num_list[i];
        }
    }
    
    return parseInt(odd)+parseInt(even);
}