function solution(my_string) {
    let arr = my_string.split(" ");
    let stack = [];
    
    for (let i = 0; i < arr.length; i++) {
        let e = arr[i];
        
        if (e === '+') {
            let tmp = Number(stack.pop()) + Number(arr[++i]);
            stack.push(tmp);
        } else if (e === '-') {
            let tmp = Number(stack.pop()) - Number(arr[++i]);
            stack.push(tmp);
        } else {
            stack.push(Number(e));
        }
    }
    
    return stack[0];
}