function solution(keyinput, board) {
    let [x, y] = [0, 0];
    
    const xLimit = Math.floor(board[0] / 2);
    const yLimit = Math.floor(board[1] / 2);
    
    keyinput.map((input) => {
        if (input === "left") {
            if (x > -xLimit ) x--
        } else if (input === "right") {
            if (x < xLimit) x++
        } else if (input === "up") {
            if (y < yLimit) y++
        } else {
            if (y> -yLimit ) y--
        }
    });
    
    return [x, y];
    
}