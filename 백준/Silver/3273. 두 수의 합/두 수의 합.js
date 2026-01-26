const fs = require("fs");
const input = fs
    .readFileSync(process.platform == "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));
const [n, arr, x] = input;

const occur = Array(x + 1).fill(false);
let count = 0;

for (let i = 0; i < n; i++) {
    if (x - arr[i] > 0 && occur[x - arr[i]]) count++;
    occur[arr[i]] = true;
}

console.log(count);
