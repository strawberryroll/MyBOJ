function solution(my_string) {
    let arr = my_string.match(/[\d]/g).map(Number);
    return arr.reduce((acc, cur) => acc + cur);
}