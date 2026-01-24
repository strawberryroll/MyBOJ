const fs = require("fs");
const input = fs
    .readFileSync(process.platform == "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.trim().split(" "));

let calY, calM;
let sumY = 0,
    sumM = 0;

for (let i = 0; i < input[0]; i++) {
    calY = 10 + Math.floor(input[1][i] / 30) * 10;
    calM = 15 + Math.floor(input[1][i] / 60) * 15;
    sumY += calY;
    sumM += calM;
}

if (sumY > sumM) console.log(`M ${sumM}`);
else if (sumY == sumM) console.log(`Y M ${sumM}`);
else console.log(`Y ${sumY}`);
