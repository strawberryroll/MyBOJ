const fs = require("fs");
const input = fs
    .readFileSync(process.platform == "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.trim().split(" ").map(Number));

let ans = "";
for (let i = 0; i < input[0][0]; i++) {
    ans += input[i + 1][0] + input[i + 1][1] + "\n";
}
console.log(ans);
