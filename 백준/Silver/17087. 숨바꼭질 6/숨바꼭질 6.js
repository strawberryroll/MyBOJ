const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function gcd(a, b) {
  let r = a % b;
  while (r !== 0) {
    a = b;
    b = r;
    r = a % b;
  }
  return b;
}

const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const differ = [];

for (i of arr) {
  differ.push(Math.abs(S - i));
}

let num = differ[0];
for (i of differ) {
  num = gcd(num, i);
}

console.log(num);
