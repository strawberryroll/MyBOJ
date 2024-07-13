function solution(age) {
    let str = age.toString();
    let result = "";
    for (let s of str) {
        result += String.fromCharCode('a'.charCodeAt()+Number(s)); 
    }
    return result;
}