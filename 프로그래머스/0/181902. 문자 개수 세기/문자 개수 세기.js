function solution(my_string) {
    var count = 'Z'.charCodeAt()-'A'.charCodeAt() +1;
            console.log(count);
    var answer = new Array(count*2).fill(0);
    my_string.split('').forEach(e=>{
        if(e.charCodeAt()>'Z'.charCodeAt()) {
            //console.log('소');
            //console.log(e.charCodeAt()-'a'.charCodeAt());
            answer[count+ e.charCodeAt()-'a'.charCodeAt()]++;
        }
        else {
            //console.log('대');
            //console.log(e.charCodeAt()-'A'.charCodeAt());
            answer[ e.charCodeAt()-'A'.charCodeAt()]++;
        }
    })
    return answer;
}