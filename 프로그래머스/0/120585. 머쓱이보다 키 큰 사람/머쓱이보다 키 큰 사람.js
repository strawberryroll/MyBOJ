function solution(array, height) {
    const answer = array.filter((e) => e > height);
    return answer.length;
}