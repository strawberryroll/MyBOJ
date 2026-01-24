const fs = require("fs");
const input = fs
    .readFileSync(process.platform == "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.trim().split(" ").map(Number));

let arr = new Array(20).fill().map((_, i) => i + 1);

for (const [a, b] of input) {
    arr = [
        ...arr.slice(0, a - 1),
        ...arr.slice(a - 1, b).reverse(),
        ...arr.slice(b),
    ];
}

console.log(arr.join(" "));
