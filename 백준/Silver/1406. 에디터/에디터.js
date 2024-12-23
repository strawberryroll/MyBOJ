const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const leftStack = input[0].split(""); // 명령어 cmd에 저장
const rightStack = [];
const num = Number(input[1]); // 명령어의 개수

for (let i = 2; i < num + 2; i++) {
    let [cmd, value] = input[i].split(" ");

    if (cmd === "L" && leftStack.length) {
        rightStack.push(leftStack.pop());
    }
    else if (cmd === "D" && rightStack.length) {
        leftStack.push(rightStack.pop());
    }
    else if (cmd === "B" && leftStack.length) {
        leftStack.pop();
    }
    else if (cmd === "P") {
        leftStack.push(value);
    }

}

console.log(leftStack.join("") + rightStack.reverse().join(""));