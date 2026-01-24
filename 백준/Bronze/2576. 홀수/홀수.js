const fs = require("fs");
const input = fs
    .readFileSync(process.platform == "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .split("\n")
    .map(Number);

const arr = [];
for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 != 0) arr.push(input[i]);
}
if (arr.length == 0) console.log(-1);
else {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const value = Math.min(...arr);
    console.log(sum + "\n" + value);
}
