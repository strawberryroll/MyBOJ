function solution(my_str, n) {
    let arr = [];
    for (let i=0; i<my_str.length/n; i++) {
        arr.push(my_str.substring(i*n, n*(i+1)));
    }
    return arr;
}