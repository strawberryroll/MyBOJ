function solution(i, j, k) {
    let str = "";
    
    for (i; i <= j; i++) {
        str += i.toString();
    }
    
    console.log(str.split(k));
    
    return str.split(k).length-1;
}