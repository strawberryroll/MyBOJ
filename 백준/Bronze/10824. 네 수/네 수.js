const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const AB = input[0] + input[1];
const CD = input[2] + input[3];
const result = Number(AB) + Number(CD);

console.log(result);
