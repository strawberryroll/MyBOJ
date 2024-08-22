function solution(polynomial) {
    let arr = polynomial.split(" + ");
    let [x, y] = [0, 0];
    
    arr.map((e) => {
        if (e.includes("x")) {
            let coefficient = e.replace("x", "") || 1;
            x += Number(coefficient);
        } else {
            y += Number(e);
        }
    });
    
    let result = [];
    if (x > 0) result.push(x === 1 ? "x" : `${x}x`);  
    if (y > 0) result.push(`${y}`);
    
    return result.join(" + ");
}