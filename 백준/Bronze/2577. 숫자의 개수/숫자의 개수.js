const fs = require("fs");
const input = fs
    .readFileSync(process.platform == "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .split("\n")
    .map(Number);

const [A, B, C] = input;
const str = (A * B * C).toString();

const arr = Array(10).fill(0);
for (const c of str) {
    arr[c]++;
}

for (let i = 0; i < 10; i++) {
    console.log(arr[i]);
}
