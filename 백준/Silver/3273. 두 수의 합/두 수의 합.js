const fs = require("fs");
const input = fs
    .readFileSync(process.platform == "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));
const [n, arr, x] = [input[0][0], input[1].sort((a, b) => a - b), input[2][0]];

let count = 0;
let left = 0;
let right = n - 1;

while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === x) {
        count++;
        left++;
        right--;
    } else if (sum < x) {
        left++;
    } else {
        right--;
    }
}

console.log(count);
