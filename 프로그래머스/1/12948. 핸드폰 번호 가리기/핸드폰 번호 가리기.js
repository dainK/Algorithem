function solution(phone_number) {
    var answer = '';
    let r = phone_number.split('');
    let a = [];
    for(let i = 0; i<r.length; i++){
        if(r.length-i<=4){
            a.push(r[i]);
        }
        else {
            a.push('*');
        }
    }
    answer=a.join('');
    
    return answer;
}