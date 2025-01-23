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

const t = Number(input.shift());
const answer = [];

for (let i = 0; i < t; i++) {
  const numbers = input[i].split(" ").map(Number);
  const n = Number(numbers.shift());

  let sum = 0;
  for (let j = 0; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      sum += gcd(numbers[j], numbers[k]);
    }
  }
  answer.push(sum);
}

console.log(answer.join("\n"));
