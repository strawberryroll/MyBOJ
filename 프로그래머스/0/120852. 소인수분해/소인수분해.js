function solution(n) {
    let arr = [];
    
    // 소수 판별
    const prime = (num) => {
        for (let i=2; i<num; i++) {
            if (num % i == 0) return false;
        }
        return true;
    };
    
    for (let i = 2; i < n+1; i++) {
        if (prime(i) === true && n % i == 0) arr.push(i);
    }
    
    return [...new Set(arr)].sort((a,b) => a-b);
}