function solution(a, b) {
    let gcdValue = gcd(a, b);
    b /= gcdValue;
     while (b % 2 === 0) {
        b /= 2;
    }
    
    while (b % 5 === 0) {
        b /= 5;
    }
    return b === 1 ? 1 : 2;;
}

  function gcd(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }
    