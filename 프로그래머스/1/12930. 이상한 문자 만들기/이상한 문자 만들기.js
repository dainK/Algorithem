function solution(s) {
     var answer ='';
    let arr = s.split(' ');
    for( let i =0; i<arr.length; i++){
        let arr2 = arr[i].split('');
        for(let j =0; j<arr2.length; j++) {
            if(j%2===0) {
                answer+= arr2[j].toUpperCase();
            }
            else {
                answer+=  arr2[j].toLowerCase();
            }
        }
        if(i< arr.length-1) {   
            answer += ' ';
        }
    }
    // var answer = arr.join('');
    console.log(answer);
    return answer;
}