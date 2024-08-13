function solution(order) {
    let str = order.toString();
    let ans = str.match(/[369]/g);
    return ans ? ans.length : 0;
 
    // let count = 0;
    // for (s of str) {
    //     if (s === '3' || s === '6' || s === '9') count++;
    // } 
    // return count;
}