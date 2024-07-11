function solution(array) {
    let numArr = new Array(1000).fill(0);
    array.map((element) => {numArr[element]++});
 
    let max = 0;
    for (let i=0; i<numArr.length; i++) {
        if (max < numArr[i]) { max = numArr[i]; }
    }
    
    let count = 0;
    let index = 0;
     for (let i=0; i<numArr.length; i++) {
        if (numArr[i] === max) { count++; index = i; }
    }
   
    if ( count > 1 ) { return -1;} 
    else { return index; }

}