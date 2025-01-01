const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const expression = input[0];
const stack = [];
const result = [];
  
// 연산자 우선순위를 정의
const precedence = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
};
  
for (const char of expression) {
  if (/[A-Z]/.test(char)) {
    // 피연산자는 결과에 바로 추가
    result.push(char);
  } else if (char === "(") {
    // 여는 괄호는 스택에 추가
    stack.push(char);
  } else if (char === ")") {
    // 닫는 괄호는 여는 괄호까지 모든 연산자 스택에서 제거
    while (stack.length && stack[stack.length - 1] !== "(") {
      result.push(stack.pop());
    }
    stack.pop(); // 여는 괄호 제거
  } else if (char in precedence) {
    // 연산자 처리
    while (
      stack.length &&
      stack[stack.length - 1] !== "(" &&
      precedence[stack[stack.length - 1]] >= precedence[char]
    ) {
      result.push(stack.pop());
    }
    stack.push(char);
  }
}
  
// 남은 연산자를 결과에 추가
while (stack.length) {
  result.push(stack.pop());
}
  
console.log(result.join(""));