function solution(sides) {
    let max = Math.max(...sides);
    let remain = sides.reduce((acc, cur) => acc+cur, 0) - max;
    if (remain > max) return 1;
    else return 2;
}