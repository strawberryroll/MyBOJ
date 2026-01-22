const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" "));

const [N, X] = input[0].map(Number);
const arr = input[1].map(Number);
const ans = [];

for (let i = 0; i < N; i++) {
    if (arr[i] < X) {
        ans.push(arr[i]);
    }
}
console.log(ans.join(" "));
