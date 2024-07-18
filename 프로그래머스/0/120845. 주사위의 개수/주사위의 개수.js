function solution(box, n) {
    let arr = box.map((i) => Math.floor(i/n));
    let volume = 1;
    arr.map((i) => volume *= i);
    return volume;
}