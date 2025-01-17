const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


// 에라토스테네스의 체 이용해서 소수 계산
const MAX = 1000000;
const isPrime = Array(MAX+1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i <= MAX; i++) {
    if (isPrime[i]) {
        for (let j = i * i; j <= MAX; j += i) {
            isPrime[j] = false;
        }
    }
}

const inputArr = input.map(Number).filter(num => num !== 0);
const ans = [];

for (num of inputArr) {
    let found = false;

    for (let a = 3; a <= num / 2; a += 2) {
        let b = num - a;

        if (isPrime[a] && isPrime[b]) {
            ans.push(`${num} = ${a} + ${b}`);
            found = true;
            break;
        }
    }

    if (!found) {
        ans.push(`Goldbach's conjecture is wrong.`);
    }
}

console.log(ans.join('\n'));