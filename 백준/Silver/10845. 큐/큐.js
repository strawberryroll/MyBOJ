const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const queue = []; 
const result = [];
const iter = parseInt(input[0]);

for (let i = 1; i <= iter; i++) {
    
    let [cmd, val] = input[i].split(" ");

    if (cmd === "push") queue.push(val);
    else if (cmd === "pop") result.push(queue.length ? queue.shift() : -1);
    else if (cmd === "size") result.push(queue.length);
    else if (cmd === "empty") result.push(queue.length ? 0 : 1);
    else if (cmd === "front") result.push(queue.length ? queue[0] : -1);
    else if (cmd === "back") result.push(queue.length ? queue[queue.length - 1] : -1);
}

console.log(result.join('\n'));