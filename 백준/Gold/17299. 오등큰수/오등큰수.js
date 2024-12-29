let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const iter = parseInt(input[0]);

input = input[1].split(" ").map((e) => parseInt(e));

let arr = new Array(iter).fill(-1);
const count = {};
input.forEach((x) => {
    count[x] = (count[x] || 0) + 1;
})

const stack = [];

for (let i = 0; i < iter; i++) {
    while (stack.length && count[input[i]] > count[input[stack[stack.length-1]]]) {
        arr[stack.pop()] =  input[i];
    }
    stack.push(i);
}

console.log(arr.join(" "));