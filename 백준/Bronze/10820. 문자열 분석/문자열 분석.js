const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const answer = [];

for (let i = 0; i < input.length; i++) {
    if(input[i].length === 0) continue;

    let lower = 0;
    let upper = 0;
    let number = 0;
    let space = 0;

    for (const char of input[i]) {
        if (/[a-z]/.test(char)) {
            lower += 1;
        } else if (/[A-Z]/.test(char)) {
            upper += 1;
        } else if (/[0-9]/.test(char)) {
            number += 1;
        } else if (char === " ") {
            space += 1;
        }
    }
    answer.push(`${lower} ${upper} ${number} ${space}`);
}

console.log(answer.join('\n'));
