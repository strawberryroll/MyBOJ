function solution(num, total) {
    let arr = [];
    
    // 등차수열의 합 n * (2a + (n-1) * d) / 2
    let a = (( 2 / num * total ) - num + 1) / 2;
    for (let i = a; i < a+num; i++) arr.push(i);
    
    return arr;
    
}