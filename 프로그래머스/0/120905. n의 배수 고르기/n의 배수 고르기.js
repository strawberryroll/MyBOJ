function solution(n, numlist) {
    let ans = numlist.filter((e) => e%n == 0);
    return ans;
}