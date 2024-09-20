function solution(myString, pat) {
    var answer = 0;
    var c = myString.length - pat.length;
   for(var i =0; i<= c ; i++){
       if(myString.slice(0,pat.length) == pat)
           answer++;
       myString = myString.slice(1,myString.length);
   }
    return answer;
}