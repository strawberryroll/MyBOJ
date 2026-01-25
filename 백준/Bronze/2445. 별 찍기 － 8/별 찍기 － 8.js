const fs = require("fs");
let input = fs
    .readFileSync(process.platform == "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim();

input = parseInt(input);

for (let i = 1; i <= input; i++) {
    console.log("*".repeat(i) + " ".repeat(2 * (input - i)) + "*".repeat(i));
}
for (let i = input - 1; i >= 1; i--) {
    console.log("*".repeat(i) + " ".repeat(2 * (input - i)) + "*".repeat(i));
}
