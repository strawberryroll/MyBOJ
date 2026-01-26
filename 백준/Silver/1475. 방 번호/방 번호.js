const fs = require("fs");
const input = fs
    .readFileSync(process.platform == "linux" ? "/dev/stdin" : "input.txt")
    .toString();

let n = Number(input);
// 크기가 10인 배열에 값 할당
const arr = Array(10).fill(0);
while (n > 0) {
    arr[n % 10]++;
    n = Math.floor(n / 10);
}

let max = 0;
for (let i = 0; i < 10; i++) {
    if (i == 6 || i == 9) continue;
    if (max < arr[i]) max = arr[i];
}
// 6,9는 서로 바꿔쓸 수 있으므로 합쳐서 2개당 1세트 필요. 나머지 숫자는 1개당 1세트 필요.
if (max < arr[6] + arr[9]) max = Math.ceil((arr[6] + arr[9]) / 2);
console.log(max);
