function solution(coin, cards) {
    var deck = cards.slice(cards.length/3, cards.length);
    var hand = cards.slice(0, cards.length/3); 
    var pairs = findCardPairs(cards);
    var sum = cards.length+1;
    //var qq = q(hand,pairs,cards.length+1);
    var tempdeck = [];
    
    var round = 1;
    
    while(deck.length > 0) {
        // if(deck.length == 0) {
        //     return round;
        // }
           var newCard1 = deck.shift();
           var newCard2 = deck.shift();

        var pair1 = checkPair(newCard1, pairs);
        var pair2 = checkPair(newCard2, pairs);
            //console.log('newCard',newCard[0],newCard[1]);
        
        if (pair1 == pair2) {
            var sendIndex = sendPair(hand, pairs);
            if (sendIndex == -1) {
                console.log('11',coin);
                if (coin >= 2) {
                    coin -= 2;
                    
                    //console.log('sendCard',newCard[0],newCard[1]);
                    // var cindex = qq.indexOf(newCard[0]);
                    // qq.splice(cindex, 1);
                    // cindex = qq.indexOf(newCard[1]);
                    // qq.splice(cindex, 1);
                    
                    pairs.splice(pair1, 1);
                    round++;
                    continue;
                    
                } 
            }
        }
        tempdeck.push(newCard1);
        tempdeck.push(newCard2);
        console.log('tempdeck',tempdeck);
        
        
        //var c1index = qq.indexOf(newCard[0])
        // if( c1index < coin) {
        //     coin--;
        //     hand.push(newCard[0]);
        //     //qq.splice(c1index, 1);
        // }
        // var c2index = qq.indexOf(newCard[1])
        // if( c2index < coin) {
        //     coin--;
        //     hand.push(newCard[1]);
        //     //qq.splice(c2index, 1);
        // }
            //console.log('coin',coin);
            //console.log('hand',hand);
        var pairindex = sendPair(hand, pairs);
        if (pairindex > -1) {
            var card1 = pairs[pairindex][0];
            var card2 = pairs[pairindex][1];
            //console.log('send',card1,card2);
            var cindex = hand.indexOf(card1);
            hand.splice(cindex, 1);
            cindex = hand.indexOf(card2);
            hand.splice(cindex, 1);
            
            pairs.splice(pairindex, 1);
        } else {
            
            var one = false;
            for(var i = 0; i< hand.length; i++) {
                if(tempdeck.indexOf(sum-hand[i])) {
                    var tindex = tempdeck.indexOf(sum-hand[i]);
                    if(tindex > -1) {
                        
                    tempdeck.splice(tindex, 1);
                    if(coin > 0) {
                        //console.log('send1',hand[i],sum-hand[i]);
                        hand.splice(i, 1);
                        coin--;
                        one = true;
                        break;
                    }
                    }
                }
            }
            
            if(!one){
                var pairindex1 = sendPair([...hand,...tempdeck],pairs);
            if (pairindex1 > -1) {
                var card1 = pairs[pairindex1][0];
                var card2 = pairs[pairindex1][1];
                //console.log('sendt2',card1,card2);
                var cindex = hand.indexOf(card1);
                if(cindex > -1) {
                    hand.splice(cindex, 1);
                }
                else {
                    var tindex = tempdeck.indexOf(card1);
                    tempdeck.splice(tindex, 1);
                    if(coin > 0) {
                        coin--;
                    }
                    else {
                        return round;
                    }
                }
                cindex = hand.indexOf(card2);
                 if(cindex > -1) {
                    hand.splice(cindex, 1);
                }
                else {
                    var tindex = tempdeck.indexOf(card2);
                    tempdeck.splice(tindex, 1);
                    if(coin > 0) {
                        coin--;
                    }
                    else {
                        return round;
                    }
                }
            
                pairs.splice(pairindex1, 1);
            }
            else {
                return round;
            }
            }
            
            
        }
        round++;
    }
    
    
    return round;
}

function findCardPairs(cards) {
    const requiredSum = cards.length + 1;  
    const result = [];
    const seen = new Set(); 

    for (let card of cards) {
        let complement = requiredSum - card; 

        if (seen.has(complement)) {
            result.push([card, complement]);
            seen.delete(complement); 
        } else {
            seen.add(card);  
        }
    }
    return result;
}

function checkPair(card,pairs) {
    for(var i =0; i<pairs.length; i++) {
        if( pairs[i][0] == card || pairs[i][1] == card )
            return i;
    }
    return -1;
}

function sendPair(hands, pairs) {
    for(var i =0; i<pairs.length; i++) {
        var index1 = hands.indexOf(pairs[i][0]);
        var index2 = hands.indexOf(pairs[i][1]);
        if( index1 > -1 && index2 > -1 ) {
            return i;
        }
    }
    return -1;
}

// function q(hand,pair,sum) {
//     var qq = [];
//     for(var i = 0; i < hand.length; i++) {
//         if( hand.indexOf(sum - hand[i]) == -1) {
//             qq.push(sum - hand[i]);
//         }
//     }
//     var flatpair = pair.flat();
//     var filteredArr = flatpair.filter(item => ![...hand,...qq].includes(item));
//     for(var i = 0; i < filteredArr.length; i++) {
//         qq.push(filteredArr[i]);
//     }
//     return qq;
// }