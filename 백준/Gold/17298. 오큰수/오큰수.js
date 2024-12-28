const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const iter = parseInt(input[0]);
const arr = input[1].split(' ').map((x) => parseInt(x));
const stack = [];

for (let i = 0; i < iter; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]){
        arr[stack.pop()] = arr[i];
    }
    stack.push(i);
}

while (stack.length) {
    arr[stack.pop()] = -1;
}

console.log(arr.join(" "));