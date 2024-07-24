function solution(array) {
    let sortedArray = array.sort((a,b) => a-b);
    return sortedArray[Math.trunc(sortedArray.length/2)];
}