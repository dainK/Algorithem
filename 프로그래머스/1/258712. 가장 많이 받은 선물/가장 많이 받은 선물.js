function solution(friends, gifts) {
    var answer = 0;
    
    var giftmap = new Map(); 
    for(var i = 0; i < gifts.length; i++) {
        if(!giftmap.has(gifts[i])) {
          giftmap.set(gifts[i], 1);
        }
        else  {
          var c = giftmap.get(gifts[i]) +1;
          giftmap.set(gifts[i], c);
        }
    }
    //console.log(giftmap);
    
    var sendmap = new Map();
    var givemap = new Map();
    
    for(var i = 0; i < friends.length; i++) {
          sendmap.set(friends[i], 0);
          givemap.set(friends[i], 0);
    }
    //console.log(sendmap,givemap);
    
    for(var i = 0; i < gifts.length; i++) {
       var g = gifts[i].split(' ');
        console.log(g[0],g[1]);
       var send = sendmap.get(g[0]);
        var sc = send+1;
        sendmap.set(g[0],sc);
        
        var give = givemap.get(g[1]);
        var gc = give + 1;
        givemap.set(g[1],gc);
    }
    //console.log(sendmap,givemap);
    
    for(var i = 0; i < friends.length; i++) {
          var isend = sendmap.get(friends[i]);
        var igive = givemap.get(friends[i]);
        var igift = 0;
        for(var j = 0; j < friends.length; j++) {
            if(friends[i] != friends[j]) {
                var jsend = sendmap.get(friends[j]);
        var jgive = givemap.get(friends[j]);
                //console.log(idata,jdata);
                var sij  = friends[i] + ' ' + friends[j];
                var ij = giftmap.has(sij) ? giftmap.get(sij) : 0;
                var sji  = friends[j] + ' ' + friends[i];
                var ji = giftmap.has(sji) ? giftmap.get(sji) : 0
                if( ij> ji) {
            //console.log(sji,ij, sji,ji);
                    igift++;
                }
                else if(ij == ji && isend - igive > jsend - jgive) {
                    igift++;
            //console.log(isend,igive, jsend,jgive);
                }
            }
        }
        if(igift > answer){
            answer = igift;
        }
    }
    
    
    return answer;
}