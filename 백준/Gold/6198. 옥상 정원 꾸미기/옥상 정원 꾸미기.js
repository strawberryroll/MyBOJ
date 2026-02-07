const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((e) => Number(e.trim()));

const n = input.shift();
const stack = [[input[input.length - 1], 0]]; // [빌딩 높이, 볼 수 있는 다른 빌딩 정원 개수]
const answer = [0];

for (let i = n - 2; i > -1; i--) {
    const value = input[i];
    let count = 0;
    while (stack.length && stack[stack.length - 1][0] < value) {
        count += stack[stack.length - 1][1];
        count++;
        stack.pop();
    }
    answer.push(count);
    stack.push([value, count]);
}

console.log(answer.reduce((acc, cur) => acc + cur, 0));
