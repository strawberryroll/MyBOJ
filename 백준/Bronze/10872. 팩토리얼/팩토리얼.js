const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const N = Number(input);
let answer = 1;

for (let i = 1; i < N + 1; i++) {
    answer *= i;
}

console.log(answer);
