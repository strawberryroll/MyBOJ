function solution(my_string, letter) {
    let arr = [...my_string.split('')].filter((str) => str !== letter);
    return arr.join("");
}