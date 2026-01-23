const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .split(" ")
    .map(Number);

console.log(input.sort((a, b) => a - b).join(" "));
