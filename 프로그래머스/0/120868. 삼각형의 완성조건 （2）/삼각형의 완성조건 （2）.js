function solution(sides) {
    let [a, b] = sides;
    return (a+b-1) - (Math.abs(a-b)+1) + 1;
}