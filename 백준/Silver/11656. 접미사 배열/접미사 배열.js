const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = [];
for (let i = 0; i < input[0].length; i++) {
    arr.push(input[0].slice(i));
}
arr.sort();

console.log(arr.join('\n'));