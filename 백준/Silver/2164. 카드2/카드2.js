const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim();

const n = Number(input);
const data = [];

let head = 0,
    tail = 0;

function push(x) {
    data[tail] = x;
    tail++;
}

function pop() {
    if (head === tail) return -1;
    else {
        const tmp = data[head];
        head++;
        return tmp;
    }
}

function size() {
    return tail - head;
}

function empty() {
    return head === tail ? 1 : 0;
}

function front() {
    if (head === tail) return -1;
    else return data[head];
}

function back() {
    if (head === tail) return -1;
    else return data[tail - 1];
}

for (let i = 0; i < n; i++) {
    push(i + 1);
}

while (size() > 1) {
    pop();
    push(pop());
}

console.log(data[head]);
