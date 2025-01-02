const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = new Array(26).fill(0);
for (char of input[0]) {
    arr[char.charCodeAt() - 97]++;
}

console.log(arr.join(" "));
