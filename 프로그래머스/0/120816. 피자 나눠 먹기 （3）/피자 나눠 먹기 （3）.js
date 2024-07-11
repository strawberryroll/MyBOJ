function solution(slice, n) {
    let result = 1;
    while (true) {
        if (slice*result / n >= 1) {
            return result;
        }
        else {
            result++;
        }
    }
}