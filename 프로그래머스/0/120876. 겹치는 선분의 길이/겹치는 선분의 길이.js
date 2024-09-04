function solution(lines) {
    let len = Math.max(...lines.flat()) - Math.min(...lines.flat());
    let arr = new Array(len).fill(0);
    
    for (let [a, b] of lines) {
        for (let i = a; i < b; i++) arr[i+Math.abs(Math.min(...lines.flat()))]++;
    }
    
    return arr.filter((e) => e >= 2).length;
}