const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.trim());

const [a, b] = input;
const arr = Array(27).fill(0);

for (const c of a) {
    arr[c.charCodeAt(0) - 97]++;
}
for (const c of b) {
    arr[c.charCodeAt(0) - 97]--;
}
let count = 0;
for (const n of arr) {
    if (n != 0) count += Math.abs(n);
}
console.log(count);
