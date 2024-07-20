function solution(numer1, denom1, numer2, denom2) {
    let numer = (numer1 * denom2) + (numer2 * denom1);
    let denom = denom1 * denom2;
   
    let min = (numer >= denom) ? denom : numer; 
    
    for (let i = min; i > 0; i--) {
        if (numer % i === 0 && denom % i === 0) {
            numer = numer / i; 
            denom = denom / i;
        }
    }
    
    return [numer, denom];
}