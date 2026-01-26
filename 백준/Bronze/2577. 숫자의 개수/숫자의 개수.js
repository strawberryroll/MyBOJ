const fs = require("fs");
const input = fs
    .readFileSync(process.platform == "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .split("\n")
    .map(Number);

const [A, B, C] = input;
let num = A * B * C;

const arr = Array(10).fill(0);
while (num > 0) {
    arr[num % 10]++;
    num = Math.floor(num / 10);
}

for (let i = 0; i < 10; i++) {
    console.log(arr[i]);
}
