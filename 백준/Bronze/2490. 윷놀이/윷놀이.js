const fs = require("fs");
let input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.trim().split(" ").map(Number));

const arr = [];
for (let i = 0; i < 3; i++) {
    arr.push(input[i].filter((el) => el == 0).length);
}

for (let i = 0; i < 3; i++) {
    if (arr[i] == 0) arr[i] = "E";
    if (arr[i] == 1) arr[i] = "A";
    if (arr[i] == 2) arr[i] = "B";
    if (arr[i] == 3) arr[i] = "C";
    if (arr[i] == 4) arr[i] = "D";
}

console.log(arr.join("\n"));
