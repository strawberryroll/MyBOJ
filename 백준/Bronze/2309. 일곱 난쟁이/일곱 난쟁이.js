const fs = require("fs");
const input = fs
    .readFileSync(process.platform == "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const total = input.reduce((acc, num) => acc + num, 0);
let a, b, r1, r2;
let found = false;
for (let i = 0; i < 9; i++) {
    if (found) break;
    for (let j = i + 1; j < 9; j++) {
        if (input[i] + input[j] == total - 100) {
            a = input[i];
            b = input[j];
            r1 = i;
            r2 = j;
            found = true;
            break;
        }
    }
}

const arr = input.filter((_, i) => i !== r1 && i !== r2);
console.log(arr.sort((a, b) => a - b).join("\n"));
