const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.trim().split(" "));

const n = Number(input.shift());
const dat = [];
let head = 0,
    tail = 0;
const answer = [];

function push(x) {
    dat[tail++] = x;
}

function pop() {
    if (head === tail) return -1;
    else {
        const tmp = dat[head++];
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
    else return dat[head];
}

function back() {
    if (head === tail) return -1;
    else return dat[tail - 1];
}

for (let i = 0; i < n; i++) {
    const [com, num] = input[i];
    if (com === "push") {
        push(num);
    } else if (com === "pop") {
        answer.push(pop());
    } else if (com === "size") {
        answer.push(size());
    } else if (com === "empty") {
        answer.push(empty());
    } else if (com === "front") {
        answer.push(front());
    } else if (com === "back") {
        answer.push(back());
    }
}

console.log(answer.join("\n"));
