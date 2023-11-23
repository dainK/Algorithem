function solution(arr) {
    var answer = 0;
    let max = 1;
    for(let i = 0; i<arr.length; i++){
           max*=arr[i];
        }
        // console.log(max);
    let num = 1;
    while(num < max) {
        // console.log(num);
        let truecount = 0;
        for(let i = 0; i<arr.length; i++){
            if( num > arr[i] && num % arr[i] === 0 ){
                truecount++;
            }
            else{
                break;
            }
        }
        
        if(truecount === arr.length){
            break;
        }
        num++;
    }
    return num;
}