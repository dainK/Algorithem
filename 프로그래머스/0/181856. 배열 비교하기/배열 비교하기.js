function solution(arr1, arr2) {
    var answer = 0;
    if(arr1.length>arr2.length)
        return 1;
    else if(arr1.length<arr2.length)
        return -1;
    else
        {
           var a= arr1.reduce((a,b)=>a+b);
           var b= arr2.reduce((a,b)=>a+b);
            if(a>b)
                return 1;
            else if(b>a)
                return -1;
            else 
                return 0;
        }
        
    return answer;
}