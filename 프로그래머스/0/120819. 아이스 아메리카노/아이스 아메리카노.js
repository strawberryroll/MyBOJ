function solution(money) {
    const price = 5500;
    let arr = [];
    arr.push(Math.floor(money/price));
    arr.push(money%price);
    return arr;
}