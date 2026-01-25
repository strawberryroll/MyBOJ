const fs = require("fs");
const input = fs
    .readFileSync(process.platform == "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .split("\n")
    .map(Number);

let max = 0;
let idx = 0;

for (let i = 0; i < 10; i++) {
    if (max <= input[i]) {
        max = input[i];
        idx = i + 1;
    }
}
console.log(max + "\n" + idx);
