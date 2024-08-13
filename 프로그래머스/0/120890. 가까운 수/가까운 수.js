function solution(array, n) {
    array = array.sort ((a,b) => a-b);
    let arr = array.map((e) => Math.abs(n-e));
    let index = arr.indexOf(Math.min(...arr));
    return array[index];
}