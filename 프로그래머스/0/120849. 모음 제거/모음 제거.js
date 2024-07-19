function solution(my_string) {
    let arr = my_string.split('');
    let ans = [];
    for (let i of arr) {
        if (['a','e','i','o','u'].includes(i)) ans.push('');
        else ans.push(i);
    }
    return ans.join('')
}