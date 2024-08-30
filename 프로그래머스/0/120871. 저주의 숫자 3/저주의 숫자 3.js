function solution(n) {
    let answer = 0;
    let count = 0;
    
    for (let i = 1; count < n; i++) {
        if (i % 3 !== 0 && !i.toString().includes('3')) {
            count++;
            answer = i;
        }
    }
    return answer;
}