function solution(num, k) {
    let arr = String(num).split("");
    if (arr.findIndex((n) => Number(n)===k) !== -1)
        return arr.findIndex((n) => Number(n)===k) + 1;
    return arr.findIndex((n) => Number(n)===k);
}