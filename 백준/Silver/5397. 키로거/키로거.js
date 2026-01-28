class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

function insert(node, value) {
    const newNode = new Node(value);
    newNode.prev = node;
    newNode.next = node.next;
    if (node.next != null) node.next.prev = newNode;
    node.next = newNode;
}

function erase(node) {
    node.prev.next = node.next;
    if (node.next != null) node.next.prev = node.prev;
}

const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.trim());

let [n, ...list] = input;
n = Number(n);

for (let i = 0; i < n; i++) {
    const head = new Node(null);
    let cursor = head;

    for (let j = 0; j < list[i].length; j++) {
        let el = list[i][j];
        if (el === "-") {
            if (cursor.prev) {
                erase(cursor);
                cursor = cursor.prev;
            }
        } else if (el === "<") {
            if (cursor.prev) cursor = cursor.prev;
        } else if (el === ">") {
            if (cursor.next) cursor = cursor.next;
        } else {
            insert(cursor, el);
            cursor = cursor.next;
        }
    }
    let cur = head.next;
    let str = "";
    while (cur != null) {
        str += cur.value;
        cur = cur.next;
    }
    console.log(str);
}
