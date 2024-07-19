function measure(n) {
    let count = 0;
    for (let i=1; i<n+1; i++) {
        if (n % i === 0) { count++; }
    }
    return count;
}

function synNum(n) {
    if (measure(n) >= 3) return true;
    else return false;
}

function solution(n) {
    let count = 0;
    for (let i=1; i<n+1; i++) {
        if (synNum(i)) { count++; }
    }
    return count;
}
    