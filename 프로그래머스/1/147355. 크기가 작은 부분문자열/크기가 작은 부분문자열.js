function solution(t, p) {
    var answer = 0;
    
    let arr = t.split('');
    let tarr = [];
    for(let i = 0; i<arr.length - p.length + 1;i++){
        // if(arr[i] >0){
            let n = ''
            for(let j =0; j<p.length;j++){
                n += arr[i+j];
            }
            
                console.log(n,p);
        //num =parseInt(n);
            if(parseInt(n) <= p && n.length === p.split('').length ) {
                tarr.push(parseInt(n));
            }
        // }
    }
    // console.log(tarr);
    // answer = tarr.filter((e)=>e<=p).length;
    return tarr.length;
}