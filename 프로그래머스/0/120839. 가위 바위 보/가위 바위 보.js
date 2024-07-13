function solution(rsp) {
    let ans = "";
    let win = {
        "2" : "0",
        "0" : "5",
        "5" : "2",
    }
    for (let i of rsp.split('')){
        ans += win[i];
    }
    return ans;                                                  
}