const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const deque = [];
const result = [];

for (let i = 1; i <= input[0]; i++) {
    let [cmd, val] = input[i].split(" ");
    
    if (cmd === "push_front") deque.unshift(val);
    else if (cmd === "push_back") deque.push(val);
    else if (cmd === "pop_front") result.push(deque.shift() || -1);
    else if (cmd === "pop_back") result.push(deque.pop() || -1);
    else if (cmd === "size") result.push(deque.length);
    else if (cmd === "empty") result.push(deque.length ? 0 : 1);
    else if (cmd === "front") result.push(deque[0] || -1);
    else if (cmd == "back") result.push(deque[deque.length - 1] || -1);
}

console.log(result.join("\n"));
