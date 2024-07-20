function solution(my_string) {
    let str = my_string.replace(/[abcdefghijklmnopqrstuvwxyz]/g, '');
    let oArr = [...str];
    let nArr = oArr.map(Number);
    
    return nArr.sort((a,b) => a-b );
}