function solution(order) {
    let str = order.toString();
    let count = 0;
    for (s of str) {
        if (s === '3' || s === '6' || s === '9') count++;
    } 
    return count;
}