const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((item) => Number(item));

const iter = input.shift(); // 첫번째 입력 값 저장
let result = []; // 결과 담을 배열
let stack = []; 

let stackNum = 1; // 스택 처음 값

for (let i = 0; i < iter; i++) { 
    let num = input[i];

    while(stackNum <= num) { 
        stack.push(stackNum);
        stackNum++;
        result.push("+");
    }

    let stackPop = stack.pop();
    result.push("-");

    if (stackPop !== num) {
        result = ["NO"];
        break;
    }
} 

console.log(result.join('\n'));
