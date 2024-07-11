function solution(numbers) {
    let sum = 0;
    numbers.map((number) => {sum += number;});
    return sum / numbers.length;
}