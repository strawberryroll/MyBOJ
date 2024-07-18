function factorial(n) {
    if (n === 1) {
        return 1;
    }
    else {
        return n * factorial(n-1);   
    }
}

function solution(n) {
    let i = 1;
    let v = 0;
    while (v <= n) {
        v = factorial(i);
        i++; 
    }
    return i-2;
    
}