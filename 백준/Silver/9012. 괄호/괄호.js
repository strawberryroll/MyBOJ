const array = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const len = array.shift();
const result = [];

for (let i = 0; i < len; i++) {
    let count = 0;
    line = array[i];

    for (const char of line) {
        char === "(" ? count++ : count--;
        if (count < 0) break;
    }
    result.push(count === 0 ? "YES" : "NO");
}

console.log(result.join('\n'));