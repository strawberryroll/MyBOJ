function solution(my_string, num1, num2) {
    let arr = [...my_string];
    
    [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
    
    // let temp = arr[num1];
    // arr[num1] = arr[num2];
    // arr[num2] = temp;
    
    return arr.join('');
}