function solution(my_string) {
    let answer = my_string.split(/\D/g);
    let sum = 0;
    answer.forEach((e) => sum += Number(e));
    return sum;
}