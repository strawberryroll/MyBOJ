const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = new Array(26).fill(-1);
for (char of input[0]) {
    const num = input[0].indexOf(char);
    arr[char.charCodeAt() - 97] = num;
}

console.log(arr.join(" "));