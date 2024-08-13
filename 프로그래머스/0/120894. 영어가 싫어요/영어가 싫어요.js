function solution(numbers) {
    let numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven",
                  "eight", "nine"];
    
    for (let i = 0; i < 10; i++) {
        let regex = new RegExp(numArr[i], "g");
        numbers = numbers.replace(regex, i.toString());
    }
    
    return Number(numbers);
}