function solution(str1, str2) {
    const regex = new RegExp(str2);
    return (str1.match(regex)) ? 1 : 2;
}