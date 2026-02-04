const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((e) => Number(e.trim()));

const k = input.shift();
const arr = [];

for (let i = 0; i < k; i++) {
    if (input[i] == 0) arr.pop();
    else arr.push(input[i]);
}

console.log(arr.reduce((acc, cur) => acc + cur, 0));
