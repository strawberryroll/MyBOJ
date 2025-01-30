let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

const answer = [];

for (let i = 2; i <= Math.sqrt(input); i++) {
    while (input % i === 0) {
        answer.push(i);
        input = input / i;
    }
}

if (input > 1) {
    answer.push(input);
}

console.log(answer.sort((a, b) => a - b).join("\n"));
