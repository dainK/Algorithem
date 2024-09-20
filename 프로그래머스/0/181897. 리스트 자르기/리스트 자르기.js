function solution(n, slicer, num_list) {
    switch(n){
        case 1: 
            return num_list.slice(0,slicer[1]+1);
        case 2:
            return num_list.slice(slicer[0],num_list.length);
        case 3:
            return  num_list.slice(slicer[0],slicer[1]+1);
        case 4:
            var answer = [];
            var arr = num_list.slice(slicer[0],slicer[1]+1);
            arr.forEach((e,i)=>{if(i%2==0)answer.push(e);})
            return answer;
    }
}