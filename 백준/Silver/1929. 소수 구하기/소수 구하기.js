const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const [M, N] = input.map(Number); 
const answer = [];

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) {
            return false;
        } 
    }
    if (num > 1) return true;
    else return false;
}

for (let i = M; i <= N; i++){
    if (isPrime(i)) {
        answer.push(i);
    } 
}

console.log(answer.join('\n'));