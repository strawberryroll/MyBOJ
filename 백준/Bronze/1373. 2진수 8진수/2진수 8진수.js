const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map((item) => Number(item));
const answer = [];

while (input.length) {
  let toOctal = 0;

  if (input.length >= 3) {
    toOctal = input.splice(input.length - 3, 3);
  } else {
    toOctal = input.splice(0, input.length);
  }

  let sum = 0;
  toOctal.reverse();

  for (let i = 0; i < toOctal.length; i++) {
    sum += toOctal[i] * 2 ** i;
  }

  answer.push(sum);
}

console.log(answer.reverse().join(""));
