function solution(quiz) {
    let arr = [];
    let sum = 0;
    
    quiz.map((exp) => {
        let [X, sign, Y, , Z] = exp.split(" ");
        
        if (sign === "+") {
            sum = Number(X) + Number(Y);
        } else {
            sum = Number(X) - Number(Y);
        }
        
        (Number(Z) === sum) ? arr.push("O") : arr.push("X");
    });
    
    return arr;         
}