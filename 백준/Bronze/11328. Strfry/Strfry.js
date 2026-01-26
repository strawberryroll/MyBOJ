const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.trim().split(" "));

const n = Number(input[0][0]);

for (let i = 0; i < n; i++) {
    const arr = Array(27).fill(0);
    const a = input[i + 1][0];
    const b = input[i + 1][1];

    for (const c of a) {
        arr[c.charCodeAt(0) - 97]++;
    }
    for (const c of b) {
        arr[c.charCodeAt(0) - 97]--;
    }

    let isPossible = true;
    for (const n of arr) {
        if (n != 0) isPossible = false;
    }
    if (isPossible) console.log("Possible");
    else console.log("Impossible");
}
