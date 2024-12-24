const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(" ").map(Number); 

const arr = [...Array(N)].map((_, i) => i + 1); 
const result = [];
let current = 0;

while (arr.length) {
    current = (current + K - 1) % arr.length;
    result.push(arr.splice(current, 1)[0]);
}

console.log(`<${result.join(", ")}>`);
