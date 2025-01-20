const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const N = input;

function factorial(N) {
    if (N <= 1) {
        return 1n;
    }
    return BigInt(N) * factorial(N-1);
}

const cal = factorial(N).toString().split("");

let count = 0;

while (true) {
    let popNum = cal.pop();
    if (popNum === '0') {
        count++;
        continue;
    }
    break;
}

console.log(count);