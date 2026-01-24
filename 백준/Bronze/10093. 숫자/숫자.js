const fs = require("fs");
const input = fs
    .readFileSync(process.platform == "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

const min = Math.min(...input);
const max = Math.max(...input);

const arr = [];
for (let i = min + 1; i < max; i++) arr.push(i);
console.log(arr.length + "\n" + arr.join(" "));
