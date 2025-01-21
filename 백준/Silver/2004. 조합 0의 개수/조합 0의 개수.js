const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const [n, m] = input.map(Number);

function countFactor(num, p) {
    let count = 0;
    while (num >= p) {
        count += Math.floor(num / p);
        num = Math.floor(num / p);
    }
    return count;
}

const countTwo = countFactor(n, 2) - countFactor(m, 2) - countFactor(n - m, 2);
const countFive = countFactor(n, 5) - countFactor(m, 5) - countFactor(n - m, 5);

console.log(Math.min(countTwo, countFive));