const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const formula = input[1];
const operandStack = []; // 피연산자 스택

const value = {};
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for (let i = 0; i < N; i++) {
    value[alphabet[i]] = Number(input[i + 2]);
}

function operation(a, b, oper) {
    if (oper === "+") return a + b;
    else if (oper === "-") return a - b;
    else if (oper === "*") return a * b;
    else if (oper === "/") return a / b;
}

for (const char of formula) {
    if (alphabet.includes(char)) {
        operandStack.push(value[char]);
    } else {
        let b = operandStack.pop();
        let a = operandStack.pop();
        let result = operation(a, b, char);
        operandStack.push(result);
    }
}
 
console.log(operandStack[0].toFixed(2));