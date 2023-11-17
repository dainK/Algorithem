function solution(n, m) {
    var answer = [];
    let gdc,lcm;
    console.log(Math.min(n,m));
    for(let i = 1; i<=Math.min(n,m); i++){
        if(n%i===0 && m%i===0){
            gdc = i;
        }
    }
    
    lcm =1;
    while(lcm<n*m){
        if((lcm%n===0)&&(lcm%m===0)){
           break;
           }
        lcm++;
    }
    return [gdc,lcm];
}