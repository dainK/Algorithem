function solution(dice) {
    const n = dice.length;
    const half = n / 2;
    const diceIndices = Array.from({ length: n }, (_, i) => i);
    //console.log(dice);
    const combinations = getCombinations(diceIndices, half);
    //console.log(combinations);

    let bestWinRate = -1;
    let bestCombination = null;

    var bestWinCount = 0;
    var bestResult = [];
    
    for (const A_dice of combinations) {
        const B_dice = diceIndices.filter(index => !A_dice.includes(index));

       var winCount = 0;
        
        var aMap = changeMap(dice[A_dice[0]]);
        var bMap = changeMap(dice[B_dice[0]]);
        for(var i =1; i< half; i++) {
           aMap = addmap(aMap,changeMap(dice[A_dice[i]]));
           bMap = addmap(bMap,changeMap(dice[B_dice[i]]));
       }
    //console.log(aMap,bMap);
        aMap.forEach((v1,k1,m1)=>{
          bMap.forEach((v2,k2,m2)=>{
              if(k1>k2) {
                  winCount += v1*v2;
              }
            })
        })
    //console.log(A_dice,winCount);
        
        // var aarr = dice[A_dice[0]];
        // var barr = dice[B_dice[0]];
//        for(var i =1; i< half; i++) {
//            aarr = addarr(aarr,dice[A_dice[i]]);
//            barr = addarr(barr,dice[B_dice[i]]);
//        }
        
//         for(var a = 0; a< aarr.length; a++) {
//             var anum = aarr[a];
//             for(var b = 0; b< barr.length; b++) {
//             var bnum = barr[b];
//                 if(anum>bnum) {
//                     winCount++
//                 }
//             }
//         }
        
        if(bestWinCount < winCount) {
            bestWinCount = winCount;
            bestResult = [];
            for(var i = 0; i<A_dice.length;i++){
                bestResult.push(A_dice[i] +1);
            }
        }
    }
    return bestResult;
}

// nCr 조합 생성
function getCombinations(arr, r) {
    const results = [];
    if (r === 1) return arr.map(v => [v]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, r - 1);
        const attached = combinations.map(combination => [fixed, ...combination]);
        results.push(...attached);
    });

    return results;
}

function changeMap(arr) {
        var map = new Map();
        for (let num of arr) {
            if (map.has(num)) {
                map.set(num, map.get(num) + 1);
            } else {
                map.set(num, 1);
            }
        }
    return map;
}

function addarr(arr1, arr2) {
    
    var result = [];
    for(var i = 0; i < arr1.length; i++) {
         for(var j = 0; j < arr2.length; j++) {
            result.push(arr1[i] + arr2[j]);
        }
    }
    return result;
}

function addmap(map1, map2) {
    
    var map = new Map();
    
    map1.forEach((v1,k1,m1)=>{
        map2.forEach((v2,k2,m2)=>{
            var num = k1+k2;
            if (map.has(num)) {
                map.set(num, map.get(num) + v1*v2);
            } else {
                map.set(num, v1*v2);
            }
        })
    })
    return map;
}