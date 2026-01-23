const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .split(" ")
    .map(Number);

const [a, b] = input;

console.log(a + b);
