function solution(bin1, bin2) {
    let res='';
    
    let b1 = parseInt(bin1, 2)
    let b2 = parseInt(bin2, 2)
    let result = b1 + b2;
    
    return result.toString(2);
}