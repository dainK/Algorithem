function solution(sizes) {
    var answer = 0;
    let minmax =0;
    let maxmax =0;
    sizes.forEach((e)=>{
        let max = e[0] > e[1] ? e[0] : e[1]; 
        let min = e[0] < e[1] ? e[0] : e[1];
        
        minmax = minmax > min ?  minmax:min;        
        maxmax = maxmax > max ?  maxmax:max;
    })
    return maxmax*minmax;
}