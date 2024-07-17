function solution(numbers, k) {
    let j=0;
    for (let i=0; i<k-1; i++) {
        j+=2;
    }
    return numbers[j%numbers.length];
    
}