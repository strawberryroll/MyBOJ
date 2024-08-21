function solution(numbers) {
    numbers.sort((a, b) => a - b);

    let n = numbers.length;
    let option1 = numbers[0] * numbers[1];
    let option2 = numbers[n - 1] * numbers[n - 2]; 
    
    return Math.max(option1, option2);
}