function solution(a, b, c, d) {
    var answer = 0;
    var arr = [a,b,c,d]
    var map = new Map();
    for(var i =0; i<4; i++) {
        var num = arr[i];
        if(map.has(num)){
            map.set(num,map.get(num)+1);
        }
        else {
            map.set(num,1);
        }
    }
    console.log(map);
    console.log([...map]);
    var mapArr = [...map];
    
    if(map.size == 1) {
        return mapArr[0][0]*1111;
    }
    else if(map.size ==2){
        if(mapArr[0][1] == mapArr[1][1]) {
            var num1 = mapArr[0][0];
            var num2 = mapArr[1][0];
            return (num1+num2)*Math.abs(num1-num2);
            // return num1* num2;
        }
        else {
            var num1 = mapArr[0][1] == 3 ? mapArr[0][0] : mapArr[1][0];
            var num2 = mapArr[1][1] == 3 ? mapArr[0][0] : mapArr[1][0];
            //return (num1+num2)*Math.abs(num1-num2);
            return (10*num1 +num2)**2;
        }
    }
    else if(map.size == 3){
        var num = 1;
        for(var i =0; i<3; i++){
            if(mapArr[i][1]==1){
                num*=mapArr[i][0];
            }
        }
        return num;
    }
    else {
        return Math.min(...map.keys());
    }
    return answer;
}