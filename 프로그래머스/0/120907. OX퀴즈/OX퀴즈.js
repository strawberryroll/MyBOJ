function solution(quiz) {
    let arr = [];
    
    quiz.map((exp) => {
        let tmp = exp.split(" ");
        
        if (tmp[1] === '+') {
            let sum = Number(tmp[0]) + Number(tmp[2]);
            (sum === Number(tmp[4])) ? arr.push("O") : arr.push("X");
        }
        
        if (tmp[1] === '-') {
            let sub = Number(tmp[0]) - Number(tmp[2]);
            (sub === Number(tmp[4])) ? arr.push("O") : arr.push("X");
        }
    });
    return arr;         
}