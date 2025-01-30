let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

const answer = [];

for (let i = 2; i * i <= input; i++) {
    while (input % i === 0) {
        answer.push(i);
        input = input / i;
    }
}

if (input > 1) {
    answer.push(input);
}

console.log(answer.join("\n"));
