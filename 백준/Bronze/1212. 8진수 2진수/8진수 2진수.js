const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map((item) => Number(item));

let answer = "";

function toBinary(num) {
  let i = num;
  let part = "";

  while (i >= 2) {
    let quota = Math.floor(i / 2);
    let remain = i % 2;

    i = quota;
    part += remain.toString();
  }
  part += i;
  part = part.split("").reverse().join("");

  return part;
}

if (input.length === 1 && input[0] === 0) {
  console.log("0");
} else {
  for (num of input) {
    let binary = toBinary(num);
    if (binary.length < 3) {
      binary = binary.padStart(3, "0");
    }
    answer += binary;
  }

  answer = answer.split("");
  while (answer[0] === "0") {
    answer.shift();
  }

  console.log(answer.join(""));
}
