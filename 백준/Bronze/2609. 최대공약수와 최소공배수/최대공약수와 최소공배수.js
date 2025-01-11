const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
 
let [a, b] = input.map(Number);
const multi = a * b;
let r = a % b;

while (r !== 0) {
    a = b;
    b = r;
    r = a % b;
}
const gcd = b;
const lcm = multi / gcd;
const ans = [gcd, lcm]

console.log(ans.join('\n'));
 
 
 