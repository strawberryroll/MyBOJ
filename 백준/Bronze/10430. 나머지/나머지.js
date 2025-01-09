const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const [A, B, C] = [...input].map(Number);

console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);
