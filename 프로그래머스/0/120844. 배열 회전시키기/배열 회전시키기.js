function solution(numbers, direction) {
    let arr = [];
    if (direction === "right") {
         numbers.map((number, i) => {arr[i] = numbers.at((i-1)%numbers.length)});
        
        
    }
    else {    
        numbers.map((number, i) => {
                    arr[i] = numbers[(i+1)%numbers.length]});
        }
        
    
    return arr;
    
    
}