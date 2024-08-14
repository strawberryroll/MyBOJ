function solution(s) {
    let arr = new Array('z'.charCodeAt() - 'a'.charCodeAt() + 1).fill(0);
    let ans = "";
    
    for (c of s) {
        arr[c.charCodeAt() - 'a'.charCodeAt()]++;
    }
    
    arr.map((e, i) => { 
        if (e === 1) 
            ans += String.fromCharCode('a'.charCodeAt() + i);
        }
    );
    
    return ans;
}