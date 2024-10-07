function solution(numer1, denom1, numer2, denom2) {
    var answer = [numer1*denom2 + numer2*denom1,denom1*denom2];
  const getGcd = (a, b) => (a % b == 0 ? b : getGcd(b, a % b));
  const gcd = getGcd(...answer);
    return [answer[0]/gcd,answer[1]/gcd];
}