function solution(my_string) {
    let arr = [...my_string.toLowerCase()];
    return arr.sort().join("");
}