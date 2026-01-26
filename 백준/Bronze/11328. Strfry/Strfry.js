const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.trim().split(" "));

const n = Number(input[0][0]);

for (let i = 0; i < n; i++) {
    const a = [...input[i + 1][0]].sort().join("");
    const b = [...input[i + 1][1]].sort().join("");

    if (a === b) console.log("Possible");
    else console.log("Impossible");
}
