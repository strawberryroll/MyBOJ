const fs = require("fs");
let input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
    .toString();
input = parseInt(input);

let result = "";

if (input >= 90) result = "A";
else if (input >= 80) result = "B";
else if (input >= 70) result = "C";
else if (input >= 60) result = "D";
else result = "F";

console.log(result);
