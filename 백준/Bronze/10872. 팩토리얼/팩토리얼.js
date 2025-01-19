const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

function factorial(num) {
    if (num <= 1) { 
        return 1;
    }
    return num * factorial(num - 1);
}

console.log(factorial(N));
