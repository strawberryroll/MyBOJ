function solution(my_string) {
    let answer = "";
    for (let s of my_string) {
        if (s === s.toLowerCase()) {answer += s.toUpperCase()}
        else {answer += s.toLowerCase()}
    }
    return answer;
}