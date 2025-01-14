const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const length = Number(input.shift());
const answer = [];

function gcd(a, b) {
    let r = a % b;
    while (r !== 0) {
        a = b;
        b = r;
        r = a % b;
    }
    return b;
}

for (line of input) {
    const [num1, num2] = line.split(' ').map(Number);
    answer.push(num1 * num2 / gcd(num1, num2));
}

console.log(answer.join('\n'));