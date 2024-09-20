function solution(order) {
    var answer = 0;
    order.forEach(e=>{
        if(e.includes('americano') || e.includes('anything')){
            answer+=4500;
        }
        if(e.includes('cafelatte')){
            answer+=5000;
        }
    })
    return answer;
}