function solution(s) {
    let arr = [];
    let suggest = s.split(' ');
    
    for (i of suggest) {
        if (i !== "Z") arr.push(Number(i));
        else arr.pop();
    }
    
    return arr.reduce((acc, cur) => acc + cur, 0);
}