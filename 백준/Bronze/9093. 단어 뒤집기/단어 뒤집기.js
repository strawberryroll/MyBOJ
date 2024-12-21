const array = require('fs').readFileSync('/dev/stdin').toString().split('\n');

 const len = array.shift();
 let tmp = [];
 const result = [];

 for (let i = 0; i < len; i++) {
   let tmp2 = [];
   tmp = array[i].split(" ");

   for (let j = 0; j < tmp.length; j++) {
       tmp2.push(tmp[j].split("").reverse().join(""));
   }
   result.push(tmp2.join(" "));
 }

 console.log(result.join('\n'));