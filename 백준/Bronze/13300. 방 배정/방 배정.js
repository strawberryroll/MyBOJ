const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

const [n, k] = input[0];
const girl = Array(7).fill(0);
const boy = Array(7).fill(0);

// 여학생, 남학생 구분
for (let i = 1; i < n + 1; i++) {
    if (input[i][0] === 1) boy[input[i][1]]++;
    else girl[input[i][1]]++;
}

let count = 0;
boy.forEach((e) => {
    if (e > 0) count += Math.ceil(e / k);
});

girl.forEach((e) => {
    if (e > 0) count += Math.ceil(e / k);
});

console.log(count);
