function solution(my_string) {
    let str = "";
    let arr = [];
    for (let s of my_string) {
        arr.push(s);      
    }
    for (let i=arr.length-1; i>=0; i--) {
        str += arr[i];
    }
    return str;
}