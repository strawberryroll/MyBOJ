function solution(i, j, k) {
    let str = "";
    
    for (let a = i; a <= j; a++) {
        str += a.toString();
    }
    
    console.log(str.split(k));
    
    return str.split(k).length-1;
}