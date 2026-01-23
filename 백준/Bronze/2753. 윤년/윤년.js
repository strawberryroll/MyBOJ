const fs = require("fs");
let input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
    .toString();
input = parseInt(input);
let result = 0;

if (input % 4 == 0 && input % 100 != 0) result = 1;
else if (input % 400 == 0) result = 1;
else result = 0;

console.log(result);
