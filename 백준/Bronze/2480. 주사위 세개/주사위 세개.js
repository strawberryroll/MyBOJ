const fs = require("fs");
let input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .split(" ")
    .map(Number);

let num = 0;
// 중복 숫자
for (let i = 0; i <= 2; i++) {
    for (let j = i + 1; j <= 2; j++) {
        if (input[i] == input[j]) num = input[i];
    }
}
// 중복 숫자 개수
const count = input.filter((element) => element == num).length;

let result = 0;
if (count == 2) result = 1000 + num * 100;
else if (count == 3) result = 10000 + num * 1000;
else result = Math.max(...input) * 100;

console.log(result);
