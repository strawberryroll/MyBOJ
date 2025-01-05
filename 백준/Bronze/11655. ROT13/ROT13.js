const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const context = input[0].split("");
const answer = [];

for (const c of context) {
    const code = c.charCodeAt();
    if (code <= 122 && code >= 97) {
        answer.push(String.fromCharCode((code - 97 + 13) % 26 + 97));
    } else if (code <= 90 && code >= 65) {
        answer.push(String.fromCharCode((code - 65 + 13) % 26 + 65));
    } else {
        answer.push(c);
    }
}

console.log(answer.join(""));
