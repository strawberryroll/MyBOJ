const fs = require("fs");
const input = fs
    .readFileSync(process.platform == "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));
const [n, arr, v] = [input[0][0], input[1], input[2][0]];

let count = 0;
for (let i = 0; i < n; i++) {
    if (arr[i] === v) count++;
}
console.log(count);
