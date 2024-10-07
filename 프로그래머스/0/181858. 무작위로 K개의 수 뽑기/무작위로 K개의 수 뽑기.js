function solution(arr, k) {
    var answer = new Array(k).fill(-1);
    var set = new Set();
    arr.forEach(e=>set.add(e));
    
    //console.log(set);
    //Array.from(mySet).sort((a, b) => b - a)
    Array.from(set).forEach((e,i)=>{if(answer[i])answer[i]=e});
    return answer;
}