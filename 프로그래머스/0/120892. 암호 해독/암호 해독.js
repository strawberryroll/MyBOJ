function solution(cipher, code) {
    ans = "";
    for (let i=code-1; i<cipher.length; i+=code) {
        ans += cipher[i]
    }
    return ans;
}