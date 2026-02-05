const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.split(" ").map(Number));

const [[n], tower] = input;
const stack = [];
const result = [];

for (let i = 0; i < n; i++) {
    // 첫 번째 탑일 때
    if (stack.length == 0) {
        stack.push([i + 1, tower[i]]);
    }
    // 이전까지의 최댓값보다 현재값이 더 클 때
    else if (stack[stack.length - 1][1] < tower[i]) {
        while (stack.length > 0 && stack[stack.length - 1][1] < tower[i]) {
            stack.pop();
        }
        stack.push([i + 1, tower[i]]);
    }
    // 이전까지의 최댓값보다 현재값이 작거나 같을 때 
    else {
        stack.push([i + 1, tower[i]]);
    }

    // 첫 번째 탑일 때
    if (stack.length == 1) result.push(0);
    // 스택에 값이 2개 이상 있는 경우
    else result.push(stack[stack.length - 2][0]);
}

console.log(result.join(" "));
