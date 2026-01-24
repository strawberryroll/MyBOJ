const fs = require("fs");
const input = fs
    .readFileSync(process.platform == "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

console.log(
    Math.floor(input.reduce((acc, num) => acc + num, 0) / input.length),
);
console.log(input.sort((a, b) => a - b)[2]);
