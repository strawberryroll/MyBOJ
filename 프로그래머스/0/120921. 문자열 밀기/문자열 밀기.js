function solution(A, B) {
    let count = 0;
    let arrA = [...A];
    
    for (let i=0; i<A.length; i++) {
        if (arrA.join("") === B) {
            return count;
        }
        
        let temp = arrA.pop();
        arrA.unshift(temp);
        count++;
        
        if (arrA.join("") === B) return count;
    }
    if (arrA.join("") !== [...B]) return -1;   
}